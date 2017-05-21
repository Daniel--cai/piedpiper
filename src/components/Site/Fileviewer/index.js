import React from 'react';
import styles from './Fileviewer.scss';
import Sidebar from 'site/Sidebar'
import Topbar from 'site/Topbar'
import Body from 'site/Body'
import Tab from 'site/Tab'
import Pane from 'site/Pane'
var FontAwesome = require('react-fontawesome');

export default class FileContent extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.fileviewer}>
                <table>
                    <tbody>
                        <tr>
                            <td>pop</td>
                            <td>Copy</td>
                            <td>Copy of abc</td>
                            <td><span className={styles.complete}>Complete</span></td>
                            <td>11:53PM</td>
                            <td>Lorem</td>
                            <td>$10.00</td>
                            <td><a href='#'><FontAwesome name="ellipsis-h" size="2x"/></a></td>
                        </tr> 
                        <tr>
                            <td>pop</td>
                            <td>Copy</td>
                            <td>Copy of abc Copy of abc Copy of abc Copy of abc</td>
                            <td><span className={styles.error}>Error</span></td>
                            <td>11:53PM</td>
                            <td>Lorem</td>
                            <td>$10.00</td>
                            <td>Details</td>
                        </tr> 
                    </tbody>
                </table>
            </div>

        )
    }
}