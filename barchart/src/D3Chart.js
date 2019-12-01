import * as d3 from 'd3';

const data = [
  {
    height: "272",
    name: "Robert Widow"
  },
  {
    height: "267",
    name: "John Rogan"
  },
  {
    height: "263.5",
    name: "John Caroll"
  },
  {
    height: "257",
    name: "Leonid Staknik"
  },
  {
    height: "251.4",
    name: "Vaino Myllyrinne"
  },
]

export default class D3Chart {
  constructor(element) {
    const svg = d3.select(element)
      .append("svg")
      .attr("width", 800)
      .attr("height", 500);

    const rects = svg.selectAll("rect")
      .data(data);
    
    rects.enter().append("rect")
      .attr("x", (d, i) => i * 100)
      .attr("y", 0)
      .attr("width", 50)
      .attr("height", (d, i) => d.height)
      .attr("fill", "grey");
  }
}