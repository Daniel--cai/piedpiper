import React from 'react';
import styles from './Tab.scss'

var FontAwesome = require('react-fontawesome');

export default class Tab extends React.Component {
    constructor(props){
        super(props);
        this.state = { selected: 0 }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index,event){
        event.preventDefault();
        this.setState({
            selected: index
        })
    }


    showLabel() {
        function labels(child, index){
            let active = (this.state.selected === index ? styles.active:'')
            return (
                <a key={index} href='javascript:void(0)'
                    onClick={e => this.handleClick(index, e)}>                    
                        
                <li className={active}>
                    {child.props.label}                   
                </li>
                 </a>
            );
        }   
        return (
            <ul className ={styles.labels}>
                {this.props.children.map(labels.bind(this))}
            </ul>
        )
    }

    showContent (){
        return (
            <div className={styles.content}>
                {this.props.children[this.state.selected]}
            </div>   
        )
    }

    render(){
        return(
            <div className={styles.tab}>
                {this.showLabel()}
                {this.showContent()}
            </div>
        )
    };
}
