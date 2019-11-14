import React, { Component } from "react";
import "./BarChart.css";
import * as d3 from "d3";

class BarChart extends Component {
  componentDidMount() {
    const data = [2, 3, 2, 6, 8];
    this.drawBarChart(data);
  }

  drawBarChart = data => {
    const canvasHeight = 400;
    const canvasWidth = 600;
    const scale = 20;
    const svgCanvas = d3 // svgCanvas is the black box the graph will be in
      .select(this.refs.canvas)
      .append("svg")
      .attr("width", canvasWidth)
      .attr("height", canvasHeight)
      .style("border", "1px solid black");

    svgCanvas
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("width", 40)
      .attr("height", datapoint => datapoint * scale)
      .attr("fill", "pink")
      .attr("x", (datapoint, iteration) => iteration * 45) // x-axis position
      .attr("y", datapoint => canvasHeight - datapoint * scale); // y-axis position

    svgCanvas
      .selectAll("text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "labels")
      .attr("x", (datapoint, i) => i * 45 + 15)
      .attr("y", (datapoint, i) => canvasHeight - datapoint * scale - 8)
      .text(datapoint => datapoint);
  };

  render() {
    return <div ref="canvas" className="chart"></div>;
  }
}

export default BarChart;
