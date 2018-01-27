import React from 'react';
import styles from './Filecontent.scss';
import Sidebar from 'site/Sidebar'
import Topbar from 'site/Topbar'
import Body from 'site/Body'
import Tab from 'site/Tab'
import Pane from 'site/Pane'
import axios from 'axios'
import GraphLink from 'containers/GraphLink'
import Fileviewer from 'site/Fileviewer'
var FontAwesome = require('react-fontawesome');

export default class FileContent extends React.Component {
/*
        titleList:state.titleList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addRow: dispatch(addRow())
 */

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
    
    handleClickAddRow(event){
        event.preventDefault();
        this.props.addRow()
    }

    titleRow(props){
        return(<tr key={props.toString()}>
                <td></td>
                <td>
                    <input type="text" placeholder="Enter file name"></input>
                </td>
                <td><input type="text" placeholder="1863/10000001"></input>
                </td>
                <td>No</td>
                <td>PATRICK THE STAR</td>
                <td>15 DERP ST APPLETOWN NSW 2000</td>
                <td>BIKINI BOTTOM</td>
                <td>PACIFIC</td>
                <td>$10.00</td>
            </tr>)
    }


    titleList(props){
        const listItems = this.props.titleList.map((data,index) =>
            this.titleRow(index)           
        )

        return listItems
    }

    render(){

        var { addRow, titleList} = this.props;
        return (
            <div className={styles.tabbed}>
            <Tab>
                <Pane label="Title">                  
                    <div className={styles.form}>
                            <div>
                                <GraphLink 
                                    id={"d3-arc"} 
                                    foregroundColor={"#4dbec4"}
                                    percentComplete={0.21}/>
                                <GraphLink 
                                    id={"d3-arc1" } 
                                    foregroundColor={"#16a9fa"}
                                    percentComplete={0.67}/>
                                <GraphLink 
                                    id={"d3-arc2"} 
                                    foregroundColor={"#b270b4"}
                                    percentComplete={0.87}/>
                            </div>
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
								{this.titleList()}
                                <tr>
                                    <td>
                                        <a href="#" onClick={this.handleClickAddRow.bind(this)}><FontAwesome name="plus-square-o" size="2x" className={styles.add}/></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
							<button >Bulk</button>
							<button onClick={this.handleClick.bind(this)}>Verify</button>
							<button>Order</button>
                    
                    </div>
                </Pane>
                <Pane label="Street Address">
                     <Fileviewer/>
                </Pane>
                <Pane label="Owner Name">
                    <div>This is my tab 3 contents!</div>
                </Pane>
                <Pane label="Mansion">
                    <div>This is my tab 1 contents!</div>
                </Pane>
                <Pane label="Tab34sdffsdf">
                    <div>This is my tab 2 contents!</div>
                </Pane>
                <Pane label="sdfsdgsdg">
                    <div>This is my tab 3 contents!</div>
                </Pane>                
                <Pane label="L423423">
                    <div>This is my tab 1 contents!</div>
                </Pane>  
            </Tab>
            </div>

        )
    }
}