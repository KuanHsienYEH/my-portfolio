'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type Node = { id: string; group: number };
type Link = { source: string; target: string };

const NODES: Node[] = [
  { id: 'Next.js', group: 1 },
  { id: 'TypeScript', group: 1 },
  { id: 'Tailwind', group: 1 },
  { id: 'D3', group: 2 },
  { id: 'UI', group: 2 },
  { id: 'DX', group: 3 },
  { id: 'Performance', group: 3 },
  { id: 'Design', group: 4 },
];

const LINKS: Link[] = [
  { source: 'Next.js', target: 'TypeScript' },
  { source: 'Next.js', target: 'Tailwind' },
  { source: 'D3', target: 'UI' },
  { source: 'UI', target: 'Design' },
  { source: 'DX', target: 'TypeScript' },
  { source: 'Performance', target: 'Next.js' },
  { source: 'D3', target: 'Next.js' },
];

export function ForceGraph() {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svgEl = ref.current;
    if (!svgEl) return;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    const { width, height } = svgEl.getBoundingClientRect();

    const nodes = NODES.map((d) => ({ ...d })) as (Node & d3.SimulationNodeDatum)[];
    const links = LINKS.map((d) => ({ ...d })) as (Link & d3.SimulationLinkDatum<Node & d3.SimulationNodeDatum>)[];

    const color = d3
      .scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4])
      .range(['#93c5fd', '#a5b4fc', '#67e8f9', '#f0abfc']);

    const link = svg
      .append('g')
      .attr('stroke', 'rgba(255,255,255,0.18)')
      .attr('stroke-width', 1)
      .selectAll('line')
      .data(links)
      .join('line');

    const node = svg
      .append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', 9)
      .attr('fill', (d) => color(d.group))
      .attr('stroke', 'rgba(0,0,0,0.35)')
      .attr('stroke-width', 1.5);

    const label = svg
      .append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text((d) => d.id)
      .attr('font-size', 11)
      .attr('fill', 'rgba(255,255,255,0.78)')
      .attr('text-anchor', 'middle')
      .attr('dy', 24);

    const sim = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(70)
          .strength(0.6)
      )
      .force('charge', d3.forceManyBody().strength(-240))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide(16));

    sim.on('tick', () => {
      link
        .attr('x1', (d: any) => (d.source as any).x)
        .attr('y1', (d: any) => (d.source as any).y)
        .attr('x2', (d: any) => (d.target as any).x)
        .attr('y2', (d: any) => (d.target as any).y);

      node.attr('cx', (d: any) => d.x).attr('cy', (d: any) => d.y);
      label.attr('x', (d: any) => d.x).attr('y', (d: any) => d.y);
    });

    // subtle auto-relax
    const t = setTimeout(() => sim.alphaTarget(0), 1200);

    return () => {
      clearTimeout(t);
      sim.stop();
    };
  }, []);

  return <svg ref={ref} className="h-full w-full" />;
}
