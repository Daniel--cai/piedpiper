import React from 'react';
import styles from './Modal.scss'

var FontAwesome = require('react-fontawesome');

export default class Modal extends React.Component {
    render(){
        return(
            <div className={styles.modal}>
               
                <div className={styles.modalContent}> 
                    
                <h3>Compress a File</h3>
                <form action="">
                <table>
                    <tr>
                        <td colSpan={3}>
                        File type:
                        <label class="radio-inline">
                            <input type="radio" name="optradio"/>Video
                        </label>
                      
                        <label class="radio-inline">
                            <input type="radio" name="optradio"/>Audio
                        </label>
                                                <label class="radio-inline">
                            <input type="radio" name="optradio"/>Image
                        </label>
                         <label class="radio-inline">
                            <input type="radio" name="optradio"/>Data
                        </label>
                        
                        <input type="text" value="~/Desktop/loldongs.mov"/>
                        <input type="text"  value="~/Desktop/loldongs.webm"/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h4>General Settings</h4>
                            Encoding mode: 
                            <select name="encoding">
                                <option value="volvo">specific filesize/bitrate</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                            <br/>
                            Target Mode: 
                             <select name="target">
                                <option value="volvo">specific filesize/bitrate</option>
                                <option value="saab">Saab</option>
                                <option value="fiat">Fiat</option>
                                <option value="audi">Audi</option>
                            </select>
                                <br/>
                            <label class="radio-inline">
                            <input type="radio" name="optradio"/>Target size (MIB): 
                            <input type="text" value="700.0"/>
                            <br/>
                             <input type="radio" name="optradio"/>Bitrate (kbit/s): 
                            <input type="text" value="1500"/>
                            <br/>
                            Bitrate mode:                               
                            <select name="target">
                                <option value="volvo">VBR</option>
                                <option value="saab">VBR</option>
                            </select>
                            </label>                                                       
                        </td>
                        
                        <td>
                            <h4>Codec, Speed and Complexity</h4>
                            Codec: 
                             <select name="encoding">
                                <option value="volvo">VP9</option>
                                <option value="saab">Saab</option>
                            </select>
                            Profile: 
                             <select name="encoding">
                                <option value="volvo">low</option>
                                <option value="saab">medium</option>
                            </select>
                            <br/>
                            <label for="speed">Basic speed control</label>
                            <select name="speed" id="speed">
                                <option value="volvo">good</option>
                                <option value="saab">best</option>
                            </select>
                            <br/>
                            CPU utilization modifier:  <input type="text" value="1"/>
                            <br/>
                            Deadline per frame (ms):  <input type="text" value="1000000"/>
                            <br/>
                            Tile (columns/row):  <input type="text" value="2"/>/<input type="text" value="1"/>   
                        </td>
                        <td>
                            <h4>Format</h4>
                            <br/>
                            In-Output bit-depth:                              
                            <select name="encoding">
                                <option value="volvo">8-bit</option>
                                <option value="saab">32-bit</option>
                                <option value="saab">64-bit</option>
                            </select>
                            <br/>
                            Color space: 
                            <select name="encoding">
                                <option value="volvo">i420</option>
                                <option value="saab">i860</option>
                            </select>
                            <br/>
                            Frame rate:
                            <br/> 
                            <select name="encoding">
                                <option value="volvo">24</option>
                                <option value="saab">64</option>
                            </select>
                        </td>
                    </tr>     
                    <tr>
                        <td>
                            <h4>Pixel Aspect Ratio (PAR)</h4>
                            Input PAR:<input type="text"  value=""/> X <input type="text"/>
                            <br/>
                            <input type="radio" name="parradio"/>Force Input PAR type : 
                             <select name="encoding">
                                <option value="volvo">manual</option>
                                <option value="saab">automatic</option>                              
                            </select>
                            <br/>
                            Output PAR:<input type="text"  value=""/> X <input type="text"/>
                            <br/>
                            <input type="radio" name="parradio"/>Convert output to PAR: 
                             <select name="encoding">
                                <option value="volvo">custom</option>
                                <option value="saab">automatic</option>                              
                            </select>
                        </td> 
                        <td>
                            <h4>Rate Control</h4>
                            Rate conversion 
                             <select name="encoding">
                                <option value="volvo">fast</option>
                                <option value="saab">normal</option> 
                                <option value="saab">slow</option>                               
                            </select>
                            <br/>
                            Quantizer min/max: 
                             <input type="text" value="0"/>/<input type="text" value="63"/>
                            <br/>
                            CBR to VBR frame adjust (%):  
                             <input type="text" value="70"/>
                            Tile (columns/row):  <input type="text" value="15"/>/<input type="text" value="10000"/> 
                        </td>
                        <td>
                            <h4>Client Requirements</h4>
                            Initial buffer size (ms): 
                            <input type="text" value="4"/>
                            <br/>
                             Optimal buffer size (ms): 
                            <input type="text" value="5"/>
                            <br/>
                             Buffer size (ms): 
                            <input type="text" value="6"/>
                            <br/>
                             Undershooot Datarate (ms): 
                            <input type="text" value="0"/>
                        </td>
                    </tr>   
                    <tr>
                        <h4>Picture Resize</h4>
                        Resize method:
                        <select name="encoding">
                            <option value="volvo">10 - bicubic spline</option>
                            <option value="saab">normal</option> 
                            <option value="saab">slow</option>                               
                        </select>
                        <button >Let's Go!</button>
                    </tr>


                 </table>
                </form>                 
                </div>
            </div>
        )
    };
}

