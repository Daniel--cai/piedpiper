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
    this.drawArc()
  }

  componentDidUpdate(){
    this.redrawArc();
  }

  setBackground(context){
    return context.append('path')
      .datum({ endAngle: this.tau})
      .style('fill', '#dce6ec')
      .attr('d', this.arc());
  }

  drawArc(){
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  redrawArc(){
    const context = d3.select(`#${this.props.id}`)
    context.remove();
    this.drawArc();
  }

  setForeground(context){
    var { foregroundColor } = this.props
    return context.append('path')
        .datum({endAngle: 0})
        .style('fill', foregroundColor)
        .attr('d', this.arc())
  }

  updatePercent(context){
    return this.setForeground(context).transition()
      .duration(this.props.duration)
      .call(this.arcTween, this.tau * this.props.percentComplete, this.arc())
  }

  arcTween(transition, newAngle, arc){
    transition.attrTween('d', d =>{
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      const newArc =d ;
      return t => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      }
    })
  }

  arc() {
    return d3.arc()
      .innerRadius(70)
      .outerRadius(80)
      .cornerRadius(5)
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


