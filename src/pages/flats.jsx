import { API_URL } from '../Constants/URL';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import flatimg from '../images/house.png'

function Flat(){
    const { flatno } = useParams(); 
    const[apiData,setAPIData]=useState([]);
    const callGetAPI=async() =>{
        const resp=await axios.get(API_URL);
        setAPIData(resp.data);
    }
    useEffect(() => {
        callGetAPI();
    },[]);
    const foundObject = apiData.find(obj => obj.flatno === flatno);
    console.log(foundObject);
    return(
        
    <div className="flat-details">
        <div className="flat_main">
            
            <div className="iconflat">
                <h2>welcome</h2>
                <h3 id='flat-no'>{flatno}</h3>
                <img height='100px' src={flatimg} /></div>
            
        <table>
            
            <tr>
            <th >Owner name:</th>
            <td id='owner_name'>{foundObject?.Ownername}</td>
            </tr>
            <tr>
            <th>No of residents:</th>
            <td id='no_tenets'>{foundObject?.noofres}</td>
            </tr>
            <tr>
            <th>No of adults:</th>
            <td id='no_adults'>{foundObject?.noofad}</td>
            </tr>
            <tr>
            <th>No of children:</th>
            <td id='no_tenets'>{foundObject?.noofch}</td>
            </tr>
            <tr>
            <th>Need to pay:</th>
            <td id='no_tenets'>{foundObject?.pay}</td>
            </tr>
            <tr>
            <td colSpan='2'>
            <button id='btn1'>Pay now</button>
            </td>
            </tr>
        </table>
        </div>
    </div>
    );
}

 
export default Flat;