import React from 'react';
import styles from './Info.scss';
import FontAwesome from 'react-fontawesome'
export default class Info extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.info}>
                <span className={styles.peers}>
                    <FontAwesome name="globe"/> Global Peers 2191
                </span>
                <span className={styles.util}>
                    <FontAwesome name="microchip"/> Utilization 13%
                </span>
                <span className={styles.total}>
                   <FontAwesome name="database"/> Total Stored 1.3TB
                </span>
            </div>

        )
    }
}