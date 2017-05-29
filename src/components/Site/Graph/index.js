import React from 'react';
import styles from './Graph.scss';
import d3 from 'd3'
var FontAwesome = require('react-fontawesome');
export default class Graph extends React.Component {

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

