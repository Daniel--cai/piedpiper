import React from 'react';
import styles from './Home.scss';
import Sidebar from 'site/Sidebar'
import Topbar from 'site/Topbar'
import Body from 'site/Body'
import Info from 'site/Info'

export default class Home extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.home}>
                <Topbar/>
                <Info/>
                <div className={styles.content}>     
                    <Body/>
                </div>
            </div>

        )
    }
}