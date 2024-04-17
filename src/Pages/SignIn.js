
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
// import { Link } from "react-router-dom";
import imageURL from '../Photos/bank.jpg';

function SignIn() {
  const [signedIn, setSignedIn] = useState(false);
  const [pin, setPin] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = () => {
    
    setSignedIn(true);
  };

  const handlePinChange = (event) => {
    setPin(event.target.value);
  };

  const handleSubmit = () => {
    
    if (pin.length !== 5 || !(/^\d+$/.test(pin))) {
      setErrorMessage('PIN must be 5 digits long and contain only numbers');
      return;
    }
  alert(`Submitting PIN: ${pin}`);
  };

  return (
      <div className='bg-green-200 justify-center items-center w-screen h-screen bg-cover bg-center '
      style={{
        backgroundImage: `url(${imageURL})`,
      }} >
        <Navbar></Navbar>
          <div className='bg-blue-500 text-1xl text-center font-bold'>
            <h1 className='text-center font-bold text-white text-2xl'>Peer To Peer</h1>
          </div>
          <div className='p-11'>
            <h2 className='text-4xl text-center font-bold px-10 py-10'>welcome</h2>
            <h5 className='text-1xl text-center font-bold px-4 py-10'>To Peer To Peer Payment</h5>
          </div>
          
        {!signedIn ? (
          <div className='p-24'>


          <button onClick={handleSignIn} 
              className='bg-blue-500 text-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
              >
                  Sign In
              </button> 
            
            
          </div>
        ) : (
          <>
          <div id='handleContinues' className='px-24'>
            <h1>Enter 5-Digit PIN</h1> 
            <label>
              PIN:
              <br/>
              <input className="border border-gray-400 rounded py-2 px-4 bg-gray-200" 
              type="password" 
              value={pin} onChange={handlePinChange} 
              placeholder='Enter 5 digits' />
            </label>
            </div>
            <br />
            <div className='p-11'>
              <button id='handleContinues' onClick={handleSubmit} 
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                  >
                      {/* Submit */}
                      {/* <li><Link to="note">Submit</Link></li> */}
                      <li><a href='/note'>Submit</a></li>
                  </button>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </>
        )}
      </div>
    );

  }

export default SignIn;
