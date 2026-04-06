'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BUBBLES = [
  { label: 'React',       group: 1, value: 40 },
  { label: 'TypeScript',  group: 1, value: 34 },
  { label: 'Vue.js',      group: 1, value: 32 },
  { label: 'Next.js',     group: 1, value: 30 },
  { label: 'Tailwind',    group: 1, value: 26 },
  { label: 'JavaScript',  group: 1, value: 24 },
  { label: '.NET Core',   group: 2, value: 28 },
  { label: 'REST APIs',   group: 2, value: 24 },
  { label: 'PostgreSQL',  group: 2, value: 22 },
  { label: 'MongoDB',     group: 2, value: 20 },
  { label: 'Docker',      group: 2, value: 20 },
  { label: 'CI/CD',       group: 3, value: 26 },
  { label: 'Azure',       group: 3, value: 24 },
  { label: 'AWS',         group: 3, value: 22 },
  { label: 'Cypress',     group: 4, value: 22 },
  { label: 'Jest',        group: 4, value: 20 },
];

const COLORS_DARK  = ['#93c5fd', '#c4b5fd', '#67e8f9', '#f9a8d4'];
const COLORS_LIGHT = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899'];

type Node = {
  label: string; group: number; value: number;
  x: number; y: number; r: number;
  vx: number; vy: number;
  fx: number | null; fy: number | null;
  homeX: number; homeY: number;
};

export function SkillsBubble() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let sim: d3.Simulation<Node, undefined> | null = null;
    let wobbleId: ReturnType<typeof setInterval>;
    let rafId: number;

    function draw(): boolean {
      const rect = container!.getBoundingClientRect();
      const W = rect.width  || container!.clientWidth  || 500;
      const H = rect.height || container!.clientHeight || 340;
      if (W < 10 || H < 10) return false;

      const isDark   = document.documentElement.classList.contains('dark');
      const palette  = isDark ? COLORS_DARK : COLORS_LIGHT;
      const textFill = isDark ? 'rgba(5,5,20,0.82)' : 'rgba(255,255,255,0.95)';

      // Pack layout for non-overlapping initial positions
      const root = d3.hierarchy({ children: BUBBLES }).sum((d: any) => d.value ?? 0);
      d3.pack<{ label?: string; group?: number; value?: number }>()
        .size([W, H]).padding(6)(root);

      const nodes: Node[] = root.leaves().map((leaf: any) => ({
        label: leaf.data.label,
        group: leaf.data.group,
        value: leaf.data.value,
        x: leaf.x, y: leaf.y, r: leaf.r,
        vx: 0, vy: 0,
        fx: null, fy: null,
        homeX: leaf.x, homeY: leaf.y,
      }));

      // Build SVG
      const ns  = 'http://www.w3.org/2000/svg';
      const svg = document.createElementNS(ns, 'svg');
      svg.setAttribute('width',  String(W));
      svg.setAttribute('height', String(H));
      svg.style.display    = 'block';
      svg.style.userSelect = 'none';

      container!.innerHTML = '';
      container!.appendChild(svg);

      const circleEls: SVGCircleElement[] = [];
      const textEls:   SVGTextElement[]   = [];

      nodes.forEach((node, i) => {
        const circle = document.createElementNS(ns, 'circle') as SVGCircleElement;
        circle.setAttribute('cx',           String(node.x));
        circle.setAttribute('cy',           String(node.y));
        circle.setAttribute('r',            String(node.r));
        circle.setAttribute('fill',         palette[(node.group - 1) % palette.length]);
        circle.setAttribute('fill-opacity', '0.88');
        circle.style.cursor     = 'grab';
        circle.style.transition = 'fill-opacity 0.15s';
        circleEls.push(circle);

        const text = document.createElementNS(ns, 'text') as SVGTextElement;
        text.textContent = node.label;
        text.setAttribute('x',                 String(node.x));
        text.setAttribute('y',                 String(node.y));
        text.setAttribute('text-anchor',       'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('fill',              textFill);
        text.setAttribute('font-size',         String(Math.max(9, node.r * 0.37)));
        text.setAttribute('font-weight',       '600');
        text.setAttribute('pointer-events',    'none');
        textEls.push(text);

        svg.appendChild(circle);
        svg.appendChild(text);
      });

      // ── D3 force simulation ──
      sim = d3.forceSimulation<Node>(nodes)
        // Collision: keep bubbles separated
        .force('collide',
          d3.forceCollide<Node>().radius(d => d.r + 3).strength(0.85),
        )
        // Weak pull back toward packed home position (released drag snaps back gently)
        .force('home_x', d3.forceX<Node>(d => d.homeX).strength(0.04))
        .force('home_y', d3.forceY<Node>(d => d.homeY).strength(0.04))
        .alphaDecay(0.015)
        .velocityDecay(0.55)
        .on('tick', () => {
          nodes.forEach((node, i) => {
            // Clamp inside SVG bounds
            node.x = Math.max(node.r, Math.min(W - node.r, node.x));
            node.y = Math.max(node.r, Math.min(H - node.r, node.y));
            circleEls[i].setAttribute('cx', String(node.x));
            circleEls[i].setAttribute('cy', String(node.y));
            textEls[i].setAttribute('x',    String(node.x));
            textEls[i].setAttribute('y',    String(node.y));
          });
        });

      // Gentle floating wobble — periodically add tiny random impulses
      wobbleId = setInterval(() => {
        if (!sim) return;
        nodes.forEach(node => {
          if (node.fx === null) {
            node.vx += (Math.random() - 0.5) * 0.5;
            node.vy += (Math.random() - 0.5) * 0.35;
          }
        });
        sim.alpha(Math.max(sim.alpha(), 0.06)).restart();
      }, 1800);

      // ── D3 drag — drags raise bubble, forceCollide pushes the rest ──
      nodes.forEach((node, i) => {
        const drag = d3.drag<SVGCircleElement, unknown>()
          .on('start', () => {
            sim?.alphaTarget(0.4).restart();
            node.fx = node.x;
            node.fy = node.y;
            circleEls[i].style.cursor = 'grabbing';
            circleEls[i].setAttribute('fill-opacity', '1');
            // Raise to front visually
            svg.appendChild(circleEls[i]);
            svg.appendChild(textEls[i]);
          })
          .on('drag', (event) => {
            node.fx = Math.max(node.r, Math.min(W - node.r, event.x));
            node.fy = Math.max(node.r, Math.min(H - node.r, event.y));
          })
          .on('end', () => {
            sim?.alphaTarget(0);
            node.fx = null;
            node.fy = null;
            circleEls[i].style.cursor = 'grab';
            circleEls[i].setAttribute('fill-opacity', '0.88');
          });

        d3.select(circleEls[i]).call(drag as any);
      });

      return true;
    }

    if (!draw()) {
      rafId = requestAnimationFrame(() => draw());
    }

    return () => {
      cancelAnimationFrame(rafId);
      sim?.stop();
      clearInterval(wobbleId!);
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="h-full w-full" />;
}
