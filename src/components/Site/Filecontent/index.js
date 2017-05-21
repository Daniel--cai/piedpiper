import React from 'react';
import styles from './Filecontent.scss';
import Sidebar from 'site/Sidebar'
import Topbar from 'site/Topbar'
import Body from 'site/Body'
import Tab from 'site/Tab'
import Pane from 'site/Pane'
import axios from 'axios'
var FontAwesome = require('react-fontawesome');

export default class FileContent extends React.Component {

    constructor(props){
        super(props);

    }
    componentDidMount() {
      
    }

    handleClick(){
        console.log('calling')
        var body = {
            title: '1863/1000000'
        }
        axios.post('http://localhost:3000/Property/Title',body)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response.data);
            })
    
    }

    render(){
        console.log(this.props)
        return (
            <div className="Tabbed">
            <Tab>
                <Pane label="Title">                  
                    <div className={styles.form}>
                        <p>
                            <table >
                                <tbody>
                                <tr>
                                    <th></th>
									<th>Matter</th>
									<th>Title Reference</th>
									<th>CP</th>
									<th>Proprietor</th>
									<th>Address</th>
									<th>Parish</th>
									<th>County</th>
									<th>Fee</th>
                                </tr>
								<tr>
                                    <td></td>
									<td>
										<input type="text" placeholder="Enter file name"></input>
									</td>
									<td><input type="text" placeholder="1863/10000001"></input>
									</td>
                                    <td>No</td>
                                    <td>KAMIL TONI JANJ</td>
                                    <td>15 DERP ST APPLETOWN NSW 2000</td>
                                    <td>ST GEORGE</td>
                                    <td>CUMBERLAND</td>
                                    <td>$10.00</td>
								</tr>
                                <tr>
                                    <td>
                                        <a href="#"><FontAwesome name="plus-square-o" size="2x" className={styles.add}/></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
							<button >Bulk</button>
							<button onClick={this.handleClick.bind(this)}>Verify</button>
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
            </Tab>
            </div>

        )
    }
}