
import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function ScanToPay()  {
  const [amount, setAmount] = useState('');
  const [scanned, setScanned] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleScan = () => {
    // Simulate scanning process
    setScanned(true);
  };

  // const handleAmountChange = (event) => {
  //   setAmount(event.target.value);
  // };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    
    if (value >= 50 && value <= 5000) {
      setAmount(value);
      setErrorMessage('');
    } else {
      setErrorMessage('Amount must be between R50 and R5000');
    }
  };

  const handlePay = () => {
    
    alert(`Paying R${amount}...`);
  };

  return (
    <div className="container mx-auto p-24">
      <Navbar></Navbar>
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

export default ScanToPay;
