import React from 'react';
import styles from './Graph.scss';
import * as d3 from 'd3'
var FontAwesome = require('react-fontawesome');

export default class Graph extends React.Component {

  constructor(props) {
    super(props)
    this.tau = Math.PI * 2;
  }
  componentDidMount() {
    this.drawArc()
  }

  componentDidUpdate() {
    this.redrawArc();
  }

  setBackground(context) {
    return context.append('path')
      .datum({ endAngle: this.tau })
      .style('fill', '#dce6ec')
      .attr('d', this.arc());
  }

  drawArc() {
    const context = this.setContext();
    this.setBackground(context);
    this.setForeground(context);
    this.updatePercent(context);
  }

  redrawArc() {
    var { id } = this.props;
    const context = d3.select(`#${id}`)
    context.remove();
    this.drawArc();
  }

  setForeground(context) {
    var { foregroundColor } = this.props
    return context.append('path')
      .datum({ endAngle: 0 })
      .style('fill', foregroundColor)
      .attr('d', this.arc())
  }

  updatePercent(context) {
    return this.setForeground(context).transition()
      .duration(this.props.duration)
      .call(this.arcTween, this.tau * this.props.percentComplete, this.arc())
  }

  arcTween(transition, newAngle, arc) {
    transition.attrTween('d', d => {
      const interpolate = d3.interpolate(d.endAngle, newAngle);
      const newArc = d;
      return t => {
        newArc.endAngle = interpolate(t);
        return arc(newArc);
      }
    })
  }

  arc() {
    return d3.arc()
      .innerRadius(60)
      .outerRadius(70)
      .cornerRadius(5)
      .startAngle(0);
  }

  setContext() {
    var { id } = this.props
    return d3.select(this.refs.arc).append('svg')
      .attr('height', '140px')
      .attr('width', '140px')
      .attr('id', id)
      .append('g')
      .attr('transform', `translate(70, 70)`)

    // var $container = $('.chart-container'),
    //   τ = 2 * Math.PI,
    //   width = $container.width(),
    //   height = $container.height(),
    //   outerRadius = Math.min(width, height) / 2,
    //   innerRadius = (outerRadius / 5) * 4,
    //   fontSize = (Math.min(width, height) / 4);

    // return d3.select(this.refs.arc).append('svg')
    //   .attr("width", '100%')
    //   .attr("height", '100%')
    //   .attr('viewBox', '0 0 ' + Math.min(width, height) + ' ' + Math.min(width, height))
    //   .attr('preserveAspectRatio', 'xMinYMin')
    //   .attr('id', id)
    //   .append('g')
    //   .attr('transform', "translate(" + Math.min(width, height) / 2 + "," + Math.min(width, height) / 2 + ")")
  }
  render() {
    return (  
        <span ref="arc" className={styles.arc}></span>
    )
  }
}


