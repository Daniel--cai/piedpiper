import React from 'react';
import styles from './Call.scss';
import FontAwesome from 'react-fontawesome'
export default class Menu extends React.Component {
    render(){
        var { showMenu } = this.props
        return (  
            <div className={styles.call}>
                <ul>
                    <a href="#"><li>Feedback</li></a>
                    <a href="#"><li>Pending Files</li></a>
                    <a href="#"><li>Notifications</li></a>
                    <a href="#"><li>Remote</li></a>
                </ul>
            </div>

        )
    }
}