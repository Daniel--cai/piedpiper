import React from 'react';
import styles from './Sidebar.scss'
import logo from 'images/site/white-logo.png'

var FontAwesome = require('react-fontawesome');
//https://s-media-cache-ak0.pinimg.com/originals/d2/8f/19/d28f19b998d42084ea56a56a46abf722.png
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

