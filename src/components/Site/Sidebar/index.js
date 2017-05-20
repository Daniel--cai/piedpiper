import React from 'react';
import styles from './Sidebar.scss'

var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    render(){
        var { onClick, spin } = this.props;
        return(
            <div className={styles.sidebar}>
                <div className={styles.links}>
                        <a href="#"><FontAwesome name='folder-open-o' size='3x' className={styles.bullet}/></a>                  

                        <a href="#"><FontAwesome name='star-o'  size='3x' className={styles.bullet}/></a>
                      
                    <a href='#a' onClick={()=>onClick()}><FontAwesome spin={spin}  size='3x' name={spin ? 'circle-o-notch' : 'file'}  className={styles.bullet}/></a>
  
            <a href="#"><FontAwesome name='camera'  size='3x' className={styles.bullet}/></a>
                </div>
            </div>
        )
    };
}

