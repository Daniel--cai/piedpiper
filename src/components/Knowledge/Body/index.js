import React from 'react';
import styles from './Body.scss';
import SidebarLink from 'containers/SidebarLink'
import FilecontentLink from 'containers/FilecontentLink'
import Fileviewer from 'site/Fileviewer'
import Modal from 'site/Modal'
import Topbar from 'site/Topbar'
export default class Body extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }
    render(){
        var showModal = this.props.showModal;
        return (
            <div className={styles.body}>
            </div>

        )
    }
}