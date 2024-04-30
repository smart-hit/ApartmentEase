import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function FlatDetails() {
  const { flatNo } = useParams(); // Get flatNo from route parameter
  const [flatData, setFlatData] = useState(null);
  const [isChecked, setIsChecked] = useState(false); // Local state for checked value
  const [isSimulating, setIsSimulating] = useState(false); // Flag for simulation progress

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get(`https://662d0ff60547cdcde9dfd5c3.mockapi.io/flats/${flatNo}`);
      console.log(resp);
      setFlatData(resp.data);
      setIsChecked(resp.data.checked === 'true'); // Set initial state based on data
    };

    fetchData();
  }, [flatNo]);

  const handleCheckChange = async () => {
    try {
      const updatedFlat = { ...flatData, checked: 'true' }; // Update checked locally
      setFlatData(updatedFlat); // Update state for UI

      // Simulate updating backend instantly (replace with actual API call)
      const resp = await axios.put(`https://662d0ff60547cdcde9dfd5c3.mockapi.io/flats/${flatNo}`, updatedFlat);
      console.log(resp);
      setFlatData(resp.data); // Update state with response data (assuming server sends updated data)
      const updatedFlat1 = { ...flatData, checked: 'false' }; 
      setTimeout(async () => {
        await axios.put(`https://662d0ff60547cdcde9dfd5c3.mockapi.io/flats/${flatNo}`,updatedFlat1);
      }, 1 * 60 * 1000); // 5 minutes in milliseconds
    
    } catch (error) {
      console.error('Error updating checked status:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  return (
    <div className='Auth-main'>
      {flatData ? (
        <>
          <h2>Flat No: {flatData.flatno}</h2>
          <p>Allowed: {isChecked ? 'Yes' : 'No'}</p>
          <button id='btn1' onClick={handleCheckChange} disabled={isSimulating}>
            {isSimulating ? 'Simulating...' : 'Allow'}
          </button>
        </>
      ) : (
        <p>Loading flat details...</p>
      )}
    </div>
  );
}

export default FlatDetails;