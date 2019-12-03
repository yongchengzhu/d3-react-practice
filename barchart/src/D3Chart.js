import * as d3 from 'd3';

const data1 = [
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
];

const data2 = [
  {
    height: "248",
    name: "Trijntje Keever"
  },
  {
    height: "248",
    name: "Zeng Jinlian"
  },
  {
    height: "243",
    name: "Anna Bates"
  },
  {
    height: "241",
    name: "Jane Bunford"
  },
  {
    height: "234",
    name: "Yao Defen"
  },
  {
    height: "231.78",
    name: "Sandy Allen"
  }
];

const MARGIN = { TOP: 10, BOTTOM: 50, LEFT: 70, RIGHT: 10 };
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;

export default class D3Chart {
  constructor(element) {
    this.svg = d3.select(element)
      .append("svg")
      .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
      .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
      .append("g")
      .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`);
    
    this.svg.append("text")
      .attr("x", WIDTH / 2)
      .attr("y", HEIGHT + 45)
      .attr("text-anchor", "middle")
      .text("The World's Tallest Men");
    
    this.svg.append("text")
      .attr("x", -(HEIGHT / 2))
      .attr("y", -50)
      .attr("text-anchor", "middle")
      .text("Height (cm)")
      .attr("transform", "rotate(-90)");

    this.xAxisCall = this.svg.append("g")
      .attr("transform", `translate(${0}, ${HEIGHT})`);
    
    this.yAxisCall = this.svg.append("g");

    let flag = true;

    d3.interval(() => {
      this.data = flag? data1 : data2;
      this.update();
      flag = !flag;
    }, 1000);
  }

  update = () => {
    const y = d3.scaleLinear()
      .domain([d3.min(this.data, d => d.height * 0.95), d3.max(this.data, d => d.height)])
      .range([HEIGHT, 0]);

    const x = d3.scaleBand()
      .domain(this.data.map(d => d.name))
      .range([0, WIDTH])
      .paddingInner(0.2)
      .paddingOuter(0.2);
    
    // Data Join
    const rects = this.svg.selectAll("rect")
      .data(this.data);

    // Exit
    rects.exit()
      .transition().duration(500)
        .attr("height", 0)
        .attr("y", HEIGHT)
        .remove();

    // Update
    rects
      .transition().duration(500)
      .attr("x", (d, i) => x(d.name))
      .attr("y", d => y(d.height))
      .attr("width", x.bandwidth)
      .attr("height", (d, i) => HEIGHT - y(d.height));

    // Enter
    rects.enter().append("rect")
      .attr("x", (d, i) => x(d.name))
      .attr("fill", "grey")
      .attr("width", x.bandwidth)
      .attr("y", HEIGHT)
      .transition().duration(500)
      .attr("y", d => y(d.height))
      .attr("height", (d, i) => HEIGHT - y(d.height));

    
    this.xAxisCall.transition().duration(500).call(d3.axisBottom(x));
    this.yAxisCall.transition().duration(500).call(d3.axisLeft(y));
  }
}