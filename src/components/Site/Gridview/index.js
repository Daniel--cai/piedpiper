import React from 'react';
import styles from './Gridview.scss';
var FontAwesome = require('react-fontawesome');
export default class Gridview extends React.Component {
  render() {
    return (
      <div className={styles.gridview}>
      <table>
      <tr>
      <th colSpan="2">Description</th>
      </tr>
      <tr>
        <td>Henlo</td>
        <td>Lorem ipsum</td>
      </tr>
      <tr>
        <td>Henlo</td>
        <td>Lorem ipsum</td>
      </tr>
      <tr>
        <td>Henlo</td>
        <td>Lorem ipsum</td>
      </tr>
      <tr>
        <td>Henlo</td>
        <td>Lorem ipsum</td>
      </tr>  
      </table>
      </div>
    )
  }
}


