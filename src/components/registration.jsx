import React, { useState } from 'react';
import axios from 'axios';
import { useEffect,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsLoggedInContext } from '../App';
function Registration() {
  const [flatNo, setFlatNo] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages
  const[apiData,setAPIData]=useState([]);
  const callGetAPI=async() =>{
      const resp=await axios.get("https://662d0ff60547cdcde9dfd5c3.mockapi.io/login");
      setAPIData(resp.data);
  }
  useEffect(() => {
    callGetAPI();
},[]);
const { setIsLoggedIn } = useContext(IsLoggedInContext);
const navigate = useNavigate();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'flatNo':
        setFlatNo(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.error('Unexpected input name:', name);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
     
    // Add form validation logic here
    // e.g., check for empty fields, password strength, etc.
    if (!flatNo || !password) {
      setErrorMessage('Please enter your flat number and password.');
      return; // Exit if validation fails
    }
    if(flatNo==='admin'){
      const foundObject = apiData.find(obj => obj.flatno ===flatNo);
      if (password !== foundObject.password) {
        alert('Invalid password.'); // More generic error message for security
      } else {
        // Process the found object as needed (e.g., display details, perform actions)
        console.log('Login successful!'); // Optional success message for debugging
        
        setIsLoggedIn(true);
    // Redirect after successful login with dynamic flatno
    navigate(`/adminLogin`);
        // Handle successful login logic here (e.g., redirect to a different page, store user data)
        // ...
      }
    }
  else{
    const foundObject = apiData.find(obj => obj.flatno ===flatNo);
    if (!foundObject) {
        alert('No flats found with matching flat number.');
        // Optionally, display an error message to the user (explained later)
      }  else {
        if (password !== foundObject.password) {
          alert('Invalid password.'); // More generic error message for security
        } else {
          // Process the found object as needed (e.g., display details, perform actions)
          console.log('Login successful!'); // Optional success message for debugging
          const loginFlatNo = foundObject.flatno;
          setIsLoggedIn(true);
      // Redirect after successful login with dynamic flatno
      navigate(`/flatDetails/${loginFlatNo}`);
          // Handle successful login logic here (e.g., redirect to a different page, store user data)
          // ...
        }
    }
    // Assuming you have a validation/login logic (replace with your actual implementation)
    console.log('Submitting form with:', flatNo, password);
    // Perform form submission or API call here
    // ...

    setErrorMessage(null); // Clear any previous errors after successful submission
  }
};


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-main">
        <div className="usernameinput">
          <label htmlFor="user">Flat No</label><br />
          <input
            type="text"
            id="user"
            name="flatNo" // Use name attribute for state updates
            value={flatNo}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="passwordinput">
          <label htmlFor="pass">Password</label><br />
          <input
            type="password"
            id="pass"
            name="password" // Use name attribute for state updates
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <div className="submitbutton">
          <br />
          <input id='btn1' type="submit" value="Login" /> {/* Use "submit" type for form submission */}
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </form>
  );
}

export default Registration;
