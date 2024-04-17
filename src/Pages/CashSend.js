
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Webcam from "react-webcam";
// import { Link } from "react-router-dom";
// import QrReader from 'react-qr-reader';

function CashSend() {
    const [amount, setAmount] = useState('');
    const [scanned, setScanned] = useState(false);
    const [pin, setPin] = useState('');
    // const [scanResultWebCam, setscanResultWebCam] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [savingsBalance, setSavingsBalance] = useState(5000);

    const handleScan = () => {
      // Simulate scanning process
      setScanned(true);
    };

    const handlePay = () => {
      
    
      alert(`Paying R${amount}...`);
    };
  
    const handleAmountChange = (event) => {
      const value = event.target.value;
      
      if (value >= 50 && value <= 5000) {
        setAmount(value);
        setErrorMessage('');
      } else {
        setErrorMessage('Amount must be between R50 and R5000');
      }
    };
  
    const handlePinChange = (event) => {
      setPin(event.target.value);
    };
  
    const handleSendMoney = () => {
      if (pin.length !== 4) {
        setErrorMessage('PIN must be 4 digits long');
        return;
      }

      // const handleErrorWebCam = (error) => {
      //   console.log(error);
      // }
    
      // const handleScanWebCam = (result) => {
      //   if (result) {
      //     setscanResultWebCam(result);
      //   }
      // }
      
      const newBalance = savingsBalance - parseFloat(amount);
      if (newBalance < 0) {
        setErrorMessage('Insufficient funds');
      } else {
        setSavingsBalance(newBalance);
        setAmount('');
        setPin('');
        setErrorMessage('');
        alert(`Sending R${amount}...`);
      }
    };
  
    return (
      <div className='px-24'>
        <Navbar></Navbar>
        <h1 className='bg-blue-500 text-1xl text-center text-white font-bold'>Cash Send</h1>
        <br></br>
        <p>Savings Balance: R{savingsBalance}</p>
        <label>
          Amount :
          <br/>
          <input className="border border-gray-400 rounded py-2 px-4 bg-gray-200" 
          type="number" 
          value={amount} 
          onChange={handleAmountChange} 
          placeholder='Enter (R50 - R5000)'
           />
        </label>
        <br />
        <br />
        <label>
          PIN :
          <br/>
          <input className="border border-gray-400 rounded py-2 px-4 bg-gray-200"
           type="password" 
           value={pin} 
           onChange={handlePinChange} 
           placeholder='Enter 4 digits' />
        </label>
        <br />
        <div className='p-11'>
      
            <button onClick={handleSendMoney} 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >
                    Send Money
                </button>
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        <h1 className="text-2xl font-semibold mb-4">Scan to Pay</h1>
      {!scanned ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleScan}
        >
          Scan QR Code
        </button>
      ) : (
        <div>
          
          <label className="block mb-2">
            {/* Enter Amount (R): */}
            <input
              className="border border-gray-400 rounded py-2 px-4 bg-gray-200"
              type="text"
              value={amount}
              onChange={handleAmountChange} placeholder='Enter Amount (R):'
            />
          </label>
          {/* <QrReader
            delay={300}
            style={{width: '100%'}}
            onError={handleErrorWebCam}
            onScan={handleScanWebCam}
          /> */}

          <div className='delay-300 w-80 text-2xl font-semibold mb-4' >
            Qr Code Scan by Web Cam
            <Webcam/>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handlePay}
          >
            Pay
          </button>
          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        </div>
      )}
      </div>
    );
  }

export default CashSend;
