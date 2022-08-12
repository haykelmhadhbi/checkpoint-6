import React, { Component } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import pic from './pic.jpg'

const welcome = props =>{

     return (
        <div>

    <table align='center' style={{width:'100%'}}>
        <tr>
            <td rowSpan="2"><img src={pic} alt="myPic" style={{width: "200px",
         height: "100px",
        'borderRadius':'50%',
        resizeMode: 'contain',
         alignSelf: 'center',}}/>
             </td>
        <td > <a href="/" onClick={()=>props.handleClick(props.fullName)}>{props.fullName} </a></td></tr> 
       </table>

       </div>
     )
    }
    welcome.propTypes={
         fullName: propTypes.string,
         bio: propTypes.string,
         profession: propTypes.string,
         handleClick: propTypes.func,
    }
export default welcome