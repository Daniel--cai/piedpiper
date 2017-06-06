import React from 'react';
import styles from './Graph.scss';
import * as d3 from 'd3'
var FontAwesome = require('react-fontawesome');

export default class Graph extends React.Component {

  constructor(props){
    super(props)
    this.tau = Math.PI * 2;
  }

  componentDidMount() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
  }
  setBackground(context){
    return context.append('path')
      .datum({ endAngle: this.tau})
      .style('fill', '#e6e6e6')
      .attr('d', this.arc());
  }

  setForeground(context){
    return context.append('path')
        .datum({endAngle: this.tau*0.3})
        .style('fill', "#00ff00")
        .attr('d', this.arc())
  }

  arc() {
    return d3.arc()
      .innerRadius(100)
      .outerRadius(110)
      .startAngle(0);
  }

  setContext() {
    return d3.select(this.refs.arc).append('svg')
      .attr('height', '300px')
      .attr('width', '300px')
      .attr('id', 'd3-arc')
      .append('g')
      .attr('transform', `translate(150, 150)`)
  }
  render() {
    return (
      <div ref="arc"></div>
    )
  }
}


