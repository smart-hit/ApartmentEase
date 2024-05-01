import { API_URL } from '../Constants/URL';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import flatimg from '../images/house.png'
import emailjs from '@emailjs/browser';
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
    const sendEnquiryEmail = () => {
        const Params = {
          flatno: foundObject?.flatno, // Replace with specific data to send
          Ownername: foundObject?.Ownername, // Replace with specific data to send
          // Add other relevant details to the email content (e.g., user email, message)
          
        };
        console.log(Params);
    
        emailjs
          .sendForm('service_jkdajrc', 'template_txl7bkd', Params, 'uA6A1g-CQnP-iOqK0') // Replace with your template ID and user ID
          .then(
            (result) => {
              console.log(result.text);
              alert('Enquiry email sent successfully!');
            },
            (error) => {
              console.error(error.text);
              alert('An error occurred while sending the email. Please try again later.');
            }
          );
      };
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
            <tr>
            <td colSpan='2'>
            <button id='btn3' onClick={sendEnquiryEmail}>Raise an Enquiry</button>
            </td>
            </tr>
        </table>
        </div>
    </div>
    );
}

 
export default Flat;