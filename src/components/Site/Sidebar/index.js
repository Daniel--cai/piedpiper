import React from 'react';
import styles from './Sidebar.scss'

var FontAwesome = require('react-fontawesome');

export default class Sidebar extends React.Component {
    render(){
        var { onClick, spin } = this.props;
        return(
            <div className={styles.sidebar}>
               
                <div className={styles.links}> 
                <table>
                    <tbody>
                    <tr><td colSpan={2}>MY PIED PIPER</td></tr>
                    <tr>
                        <td><FontAwesome name='folder-open-o'className={styles.bullet}/></td>
                        <td><a href="#">Recent</a></td>
                    </tr>
                    <tr>
                        <td><FontAwesome name='star-o'className={styles.bullet}/></td>
                        <td><a href="#">Starred</a></td>
                        </tr>
                    <tr>
                        <td><FontAwesome spin={spin} name={spin ? 'spinner' : 'file'}  className={styles.bullet}/></td>
                        <td><a href='#a' onClick={()=>onClick()}> Files</a></td>
                        </tr>
                    <tr>
                        <td><FontAwesome name='camera'className={styles.bullet}/></td>
                        <td><a href="#">Photos</a></td>
                        </tr>    
                    </tbody>                  
                 </table>
                </div>
            </div>
        )
    };
}

