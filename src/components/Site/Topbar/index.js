import React from 'react';
import styles from './Topbar.scss'
var logo = require('images/site/piedpiper.png')
var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    
    render(){
        return(
            <div className={styles.topbar}>

                <div className={styles.header}>
                    <img src={logo} className={styles.logo}/>

                      <span><FontAwesome name='upload'/>Upload</span>
                       <span><FontAwesome name='chain'/>Share Link</span>
                       <label className={styles.search}>
                        <span><FontAwesome name='search'/></span>
                        <input  placeholder="Search" type="text"></input>         
                       </label>   
                </div>
              
            </div>
        )
    };
}

