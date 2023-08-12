import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

// Generate random crime data for 100 departments
const generateCrimeData = () => {
  const numDepartments = 5;
  const data = [];

  for (let i = 0; i < numDepartments; i++) {
    const row = [];
    for (let j = 0; j < numDepartments; j++) {
      if (i === j) {
        row.push(0);
      } else {
        row.push(Math.random() * 10000); // Random crime collaboration values
      }
    }
    data.push(row);
  }

  return data;
};

interface Props {
  data?: any
}

const ChordChart: React.FC = ({data = generateCrimeData()} : Props) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const updateChart = () => {
    const parentDiv = chartRef.current;
    if (!parentDiv) return;

    const paperWidth = parentDiv.parentElement?.clientWidth || 0;
    const width = paperWidth;
    const height = 800;

    const svg = d3.select(svgRef.current);

    svg.attr('width', paperWidth).attr('height', height);

    const chord = d3
      .chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending)
      .sortChords(d3.ascending);

    const chords = chord(data);

    const innerRadius = Math.min(width, height) * 0.4;
    const outerRadius = innerRadius * 1.1;

    const color = d3.scaleOrdinal<string>(d3.schemeCategory10);

    svg.selectAll('*').remove();

    const chart = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const chordGroups = chart
      .selectAll('.chord')
      .data(chords)
      .enter()
      .append('g')
      .attr('class', 'chord');

    chordGroups
      .append('path')
      .style('fill', (d) => color(d.source.index.toString()))
      .style('stroke', 'black')
      .attr('d', d3.ribbon().radius(innerRadius) as any);

    const groupLabels = chart
      .selectAll('.group-label')
      .data(chords.groups)
      .enter()
      .append('g')
      .attr('class', 'group-label');

    groupLabels
      .append('text')
      .attr('dy', -10)
      .text((d, i) => `Department ${i + 1}`)
      .attr('text-anchor', (d, i) => i === 0 ? 'start' : 'end')
      .attr('transform', (d, i) => {
        const angle = (d.startAngle + d.endAngle) / 2;
        const radius = outerRadius + 20;
        const x = radius * Math.sin(angle);
        const y = -radius * Math.cos(angle);
        return `translate(${x},${y}) rotate(${angle * (180 / Math.PI) - 90})`;
      });

    // Add central label or title
    const centralLabel = svg
      .append('text')
      .attr('class', 'central-label')
      .text('Crime Collaborations')
      .attr('x', width / 2)
      .attr('y', height / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '24px')
      .style('font-weight', 'bold');
  };

  useEffect(() => {
    updateChart();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateChart);
    return () => window.removeEventListener('resize', updateChart);
  }, []);

  return (
    <div ref={chartRef} style={{ width: '100%' }}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default ChordChart;
