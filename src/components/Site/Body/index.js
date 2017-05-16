import React from 'react';
import styles from './Body.scss';
import SidebarLink from 'containers/SidebarLink'
import Fileviewer from 'site/Fileviewer'
export default class Body extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        return (
            <div className={styles.body}>
                <SidebarLink/>
                <Fileviewer/>
            </div>

        )
    }
}