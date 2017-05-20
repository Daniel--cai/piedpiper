import React from 'react';
import styles from './Topbar.scss'
var logo = require('images/site/white-logo.png')
var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    
    render(){
        return(
            <div className={styles.topbar}>

                <div className={styles.header}>
                    <img src={logo} className={styles.logo}/>
                    <span><FontAwesome name='upload'/>Home</span>
                      <span><FontAwesome name='upload'/>Searches</span>
                       <span><FontAwesome name='chain'/>Orders</span>
                         <span><FontAwesome name='chain'/>Reports</span>
                       <label className={styles.search}>
                        <span><FontAwesome name='search'/></span>
                        <input  placeholder="Search" type="text"></input>         
                       </label>   
                </div>
              
            </div>
        )
    };
}

