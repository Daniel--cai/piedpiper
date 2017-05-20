import React from 'react';
import styles from './Filecontent.scss';
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
            <div className="Tabbed">
            <Tab>
                <Pane label="Title">                  
                    <div className={styles.form}>
                        <p>
                        	<b>Enter Title Reference (eg 1863/10000001)</b>
                            <table >
                                <tbody>
                                <tr>
									<td>Matter</td>
									<td>Title Reference</td>
									<td>CP</td>
									<td>Proprietor</td>
									<td>Address</td>
									<td>Parish</td>
									<td>County</td>
									<td>LGA</td>
									<td>Fee</td>
                                </tr>
								<tr>
									<td>
										<input type="text"></input>
									</td>
									<td><input type="text"></input>
									</td>
								</tr>
                                </tbody>
                            </table>
							<button>Bulk</button>
							<button>Verify</button>
							<button>Order</button>
                        </p>
                    </div>
                </Pane>
                <Pane label="Street Address">
                    <div>This is my tab 2 contents!</div>
                </Pane>
                <Pane label="Owner Name">
                    <div>This is my tab 3 contents!</div>
                </Pane>
                <Pane label="Sub Folio">
                    <div>This is my tab 1 contents!</div>
                </Pane>
                <Pane label="Historical">
                    <div>This is my tab 2 contents!</div>
                </Pane>
                <Pane label="CT Enquiry">
                    <div>This is my tab 3 contents!</div>
                </Pane>                
                <Pane label="Lots Created">
                    <div>This is my tab 1 contents!</div>
                </Pane>
                <Pane label="Prior Title">
                    <div>This is my tab 2 contents!</div>
                </Pane>
                <Pane label="CAC">
                    <div>This is my tab 3 contents!</div>
                </Pane>                
                <Pane label="Reverse Street Address">
                    <div>This is my tab 1 contents!</div>
                </Pane>
                <Pane label="Reverse Proprietor">
                    <div>This is my tab 2 contents!</div>
                </Pane>
                <Pane label="Cancelled Title">
                    <div>This is my tab 3 contents!</div>
                </Pane>     
            </Tab>
            </div>

        )
    }
}