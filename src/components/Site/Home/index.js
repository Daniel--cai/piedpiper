import React from 'react';
import styles from './Home.scss';
import SidebarLink from 'containers/SidebarLink'
import Topbar from 'site/Topbar'
import BodyLink from 'containers/BodyLink'
import Info from 'site/Info'
import Modal from 'site/Modal'
export default class Home extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
           
           
            <div className={styles.home}>
                    <SidebarLink/>
                 <BodyLink/>
            
            </div>
            

        )
    }
}