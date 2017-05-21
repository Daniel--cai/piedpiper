import React from 'react';
import styles from './Topbar.scss'
import Menu from 'site/Menu'
var logo = require('images/site/white-logo.png')
var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    
    render(){
        return(
            <div className={styles.topbar}>

                <div className={styles.header}>
                       <span><FontAwesome name='search'/></span>
                       <label className={styles.search}>
                        <input  placeholder="Search file name" type="text"></input>         
                       </label>   
                       <a href="#"><FontAwesome name="cog" size="2x" className={styles.setting}/></a>
                       <a href="#"><FontAwesome name="bell" size="2x" className={styles.setting}/></a>
                        <a href="#"><FontAwesome name="phone" size="2x" className={styles.setting}/></a>
                </div>
           
              
            </div>
        )
    };
}

