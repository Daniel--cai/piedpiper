import React from 'react';
import styles from './Sidebar.scss'
import logo from 'images/site/white-logo.png'

var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    render(){
        var { onClick, spin } = this.props;
        return(
            <div className={styles.sidebar}>
                  <img src={logo} className={styles.logo}/>
                  <div className={styles.circle}>
                    <FontAwesome name="user-circle-o" size="4x"/>
                    <p className={styles.user}><a href="#">Daniel</a></p>
                  </div>
                
                  <hr/>
                <div className={styles.links}>
                    <ul>
                    <a href="#"><li>Create</li></a>                  
                    <a href="#"><li>Files</li></a>
                    <a href='#a' onClick={()=>onClick()}><li>Report</li></a>
                    <a href='#a' onClick={()=>onClick()}><li>Account Settings</li></a>
                    </ul>
                </div>
            </div>
        )
    };
}

