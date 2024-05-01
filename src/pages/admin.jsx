import { useState, useEffect } from "react";
import axios from "axios";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import img from '../images/admin.png'


function Admin() {
    const [status, setStatus] = useState(undefined);
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_jkdajrc','template_zgjjn89', form.current, 'uA6A1g-CQnP-iOqK0')
     .then((result) => {
      console.log(result.text);
      console.log("check your mail");
      setStatus({ type: 'success' });
   
        
      alert("Mail has been send to Tenant") 
     
         // show the user a success message
     }, (error) => {
      console.log(error.text);
      console.log("invaild");
         // show the user an error
     });
 };

  const [flatNo, setFlatNo] = useState('A1');
  const [apiData, setAPIData] = useState([]);
  const [selectedFlat, setSelectedFlat] = useState(null); // State for the matching flat
  const [isChecked, setIsChecked] = useState(false);
  const callGetAPI = async () => {
    const resp = await axios.get("https://662d0ff60547cdcde9dfd5c3.mockapi.io/flats");
    setAPIData(resp.data);
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setFlatNo(value);
  };
  const Change = async () => {
    if (selectedFlat) {
      try {
        // Fetch specific flat data using flatNo
        const flatResponse = await axios.get(`https://662d0ff60547cdcde9dfd5c3.mockapi.io/flats/${flatNo}`);
        const updatedFlatData = flatResponse.data;

        // Update isChecked based on retrieved data
        setIsChecked(updatedFlatData.checked === "true");
        const checkedDiv = document.getElementById('myDiv'); // Replace 'myDiv' with the actual ID
        if (checkedDiv) {
          checkedDiv.style.backgroundColor = isChecked ? 'green' : 'red';
          console.log("change");
        } else {
          console.error('Div element with ID "myDiv" not found.');
        }
      } catch (error) {
        console.error('Error fetching checked state:', error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    }
  };
  useEffect(() => {
    const foundFlat = apiData.find(obj => obj.flatno === flatNo);
    setSelectedFlat(foundFlat);
  }, [flatNo, apiData]); // Re-run when flatNo or apiData changes

  return (
    <div className="ad-main">
     
       <div className="admin-img">
       <h1>αdmin [Ctrl] Pαnel</h1>
        <img width='500px' src={img} alt="" />
      </div>
    <div className="Admin-main">
     
      
      <table>
        <tr>
          
        <input type="text" name='flatno' placeholder="Enter the Flat no" value={flatNo} onChange={handleInputChange} />
      <button className="btn2" onClick={handleInputChange}>Search</button>
      
      
          {selectedFlat ? (

            <div >
            
            <form ref={form} onSubmit={sendEmail}>
            <input id='invi'type="text" name='flatno' placeholder="Enter the Flat no" value={flatNo} />
      <div className="Admin-flatdetails"><td>Ownername: {selectedFlat.Ownername}</td>
    <td>No of residents: {selectedFlat.noofres}</td>
    </div>
        <input name='useremail' value={selectedFlat?.mail}></input><br></br>
        <br></br>
        <input name='name' value={selectedFlat?.Ownername}></input> <br></br>
        <br></br>
        <input id="btn1" type='submit' value='Send Request'></input>
        </form>
      <br></br>
        <div id='myDiv' style={{ backgroundColor: isChecked ? 'green' : 'red', padding: '10px', color: 'white' }} onClick={Change}>
            Checked: {isChecked ? 'Yes' : 'No'}
          </div>
            </div>
          ) : (
            <div>No flat found.</div>
          )}
        </tr>
      </table>
    
    </div>
    </div>
  );
}

export default Admin;
