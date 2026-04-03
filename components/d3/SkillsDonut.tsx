'use client';

import { useEffect, useMemo, useRef } from 'react';
import * as d3 from 'd3';

export type DonutDatum = { label: string; value: number };

export function SkillsDonut({ data }: { data: DonutDatum[] }) {
  const ref = useRef<SVGSVGElement | null>(null);

  const total = useMemo(() => data.reduce((a, b) => a + b.value, 0), [data]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const svg = d3.select(el);
    svg.selectAll('*').remove();

    const { width, height } = el.getBoundingClientRect();
    const size = Math.min(width, height);
    const r = size / 2;

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3
      .scaleOrdinal<string>()
      .domain(data.map((d) => d.label))
      .range(['#60a5fa', '#a78bfa', '#22d3ee', '#f472b6', '#34d399']);

    const pie = d3.pie<DonutDatum>().value((d) => d.value).sort(null);
    const arc = d3.arc<d3.PieArcDatum<DonutDatum>>().innerRadius(r * 0.62).outerRadius(r * 0.90);

    const arcs = g
      .selectAll('path')
      .data(pie(data))
      .join('path')
      .attr('fill', (d) => color(d.data.label))
      .attr('d', arc)
      .attr('opacity', 0.95);

    arcs
      .on('mouseenter', function () {
        d3.select(this).transition().duration(150).attr('opacity', 1);
      })
      .on('mouseleave', function () {
        d3.select(this).transition().duration(150).attr('opacity', 0.95);
      });

    g.append('text')
      .text(`${total}%`)
      .attr('text-anchor', 'middle')
      .attr('dy', -2)
      .attr('fill', 'rgba(255,255,255,0.85)')
      .attr('font-size', 18)
      .attr('font-weight', 600);

    g.append('text')
      .text('total')
      .attr('text-anchor', 'middle')
      .attr('dy', 18)
      .attr('fill', 'rgba(255,255,255,0.55)')
      .attr('font-size', 12);
  }, [data, total]);

  return <svg ref={ref} className="h-full w-full" />;
}
