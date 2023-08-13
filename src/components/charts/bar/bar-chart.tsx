import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

// Sample data for the bar chart
const data = [
  { category: 'A', value: 10 },
  { category: 'B', value: 25 },
  { category: 'C', value: 15 },
  { category: 'D', value: 30 },
]

const BarChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)

  const updateChart = () => {

    const parentDiv = chartRef.current
    if (!parentDiv) return

    // Calculate the width based on the Paper component's width
    const paperWidth = parentDiv.parentElement?.clientWidth || 0
  
    const height = 500 

    const svg = d3.select(svgRef.current)

    svg.attr('width', paperWidth).attr('height', height)

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.category))
      .range([0, paperWidth])
      .padding(0.0)

    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)!]).nice().range([height, 0])

    const color = d3.scaleOrdinal<string>()
      .domain(data.map((d) => d.category))
      .range(['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3'])

    svg.selectAll('*').remove()

    const chart = svg
      .append('g')

    chart
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.category)!)
      .attr('y', height) // Initial y position for animation
      .attr('width', x.bandwidth())
      .attr('height', 0) // Initial height for animation
      .attr('fill', (d) => color(d.category))
      .transition() // Add transition for animation
      .duration(300) // Animation duration in milliseconds
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value))
  }

  useEffect(() => {
    updateChart()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', updateChart)
    return () => window.removeEventListener('resize', updateChart)
  }, [])

  return (
    <div ref={chartRef} style={{ width: '100%' }}>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default BarChart
