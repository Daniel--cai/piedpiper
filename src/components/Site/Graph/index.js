import React from 'react';
import styles from './Graph.scss';
import d3 from 'd3'
var FontAwesome = require('react-fontawesome');
export default class Graph extends React.Component {
/**********************************************
var wrapper = document.getElementById('progress');
var start = 0;
var end = parseFloat(wrapper.dataset.percentage);

var colours = {
  fill: '#' + wrapper.dataset.fillColour,
  track: '#' + wrapper.dataset.trackColour,
  text: '#' + wrapper.dataset.textColour,
  stroke: '#' + wrapper.dataset.strokeColour,
}

var radius = 100;
var border = wrapper.dataset.trackWidth;
var strokeSpacing = wrapper.dataset.strokeSpacing;
var endAngle = Math.PI * 2;
var formatText = d3.format('.0%');
var boxSize = radius * 2;
var count = end;
var progress = start;
var step = end < start ? -0.01 : 0.01;

//Define the circle
var circle = d3.svg.arc()
  .startAngle(0)
  .innerRadius(radius)
  .outerRadius(radius - border);

//setup SVG wrapper
var svg = d3.select(wrapper)
  .append('svg')
  .attr('width', boxSize)
  .attr('height', boxSize);

// ADD Group container
var g = svg.append('g')
  .attr('transform', 'translate(' + boxSize / 2 + ',' + boxSize / 2 + ')');

//Setup track
var track = g.append('g').attr('class', 'radial-progress');
track.append('path')
  .attr('class', 'radial-progress__background')
  .attr('fill', colours.track)
  .attr('stroke', colours.stroke)
  .attr('stroke-width', strokeSpacing + 'px')
  .attr('d', circle.endAngle(endAngle));

//Add colour fill
var value = track.append('path')
  .attr('class', 'radial-progress__value')
  .attr('fill', colours.fill)
  .attr('stroke', colours.stroke)
  .attr('stroke-width', strokeSpacing + 'px');

//Add text value
var numberText = track.append('text')
  .attr('class', 'radial-progress__text')
  .attr('fill', colours.text)
  .attr('text-anchor', 'middle')
  .attr('dy', '.5rem');

function update(progress) {
  //update position of endAngle
  value.attr('d', circle.endAngle(endAngle * progress));
  //update text value
  numberText.text(formatText(progress));
} 

(function iterate() {
  //call update to begin animation
  update(progress);
  if (count > 0) {
    //reduce count till it reaches 0
    count--;
    //increase progress
    progress += step;
    //Control the speed of the fill
    setTimeout(iterate, 10);
  }
})();


#progress {
  padding: 20px;
}


.radial-progress { 
  &__text {
    font-family: Arial, sans-serif;
    font-size: 2rem;
    font-weight: bold;
  }  
}

<div id="progress" 
     data-percentage="99" 
     data-track-width="12" 
     data-track-colour="555555" 
     data-fill-colour="00C0FF" 
     data-text-colour="00C0FF" 
     data-stroke-colour="FFFFFF" 
     data-stroke-spacing="4"> 
</div> */


    componentDidMount(){
        var el = this.getDOMNode();
        d3.create(el, {
            width:'100%',
            height:'300px'
        }, this.getChartState());
    }

    render(){
        var { onClick, spin } = this.props;
        return(
            <svg width="100" height="100">

            </svg>
        )
    };
}

