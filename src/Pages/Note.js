
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ImageOne from '../Photos/pep.jpg';
import ImageTwo from '../Photos/pick n pay.jpg';
import ImageThree from '../Photos/shoprite.jpg';
import ImageFour from '../Photos/spar.jpg';
// import { Link } from "react-router-dom";

function Note() {
    const [conTinue, setContinue] = useState(false);

    const handleContinue = () => {

        setContinue(true);
      };

    return(
        <div className='px-24'>
          <Navbar></Navbar>
            
            <div>
                <h1 className="bg-blue-500 text-1xl text-center text-white font-bold">Money Send</h1>
            </div>
            <br/>
            <p>Send money to close people to collect without charges to the following stores.</p>
            <div className='mt-6 grid sm:grid-cols-2 gap-10'>
                <div className='card'>
                    <img className='rounded sm:h-24 object-cover' src={ImageOne} alt='pep imag'/>
                </div>
                <div className='card'>
                    <img className='rounded sm:h-24 object-cover' src={ImageTwo} alt='pick imag'/>
                </div>
                <div className='card'>
                    <img className='rounded sm:h-24 object-cover' src={ImageThree} alt='shop imag'/>
                </div>
                <div className='card'>
                    <img className='rounded sm:w-34 sm:h-24 object-cover' src={ImageFour} alt='spar imag'/>
                </div>
            </div>
            <br/>
            <br/>
            <h2>Note:</h2>
            <p>You are allowed to send this per day.</p>
            <p>Maximum of transation is R6000.</p>
            <div className='p-11'>
                <button onClick={handleContinue} 
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' value={conTinue}
                    >
                        {/* Continue */}
                        {/* <li><Link to="cashSend">Continue</Link></li> */}
                        <li><a href='/cashSend'>Continue</a></li>
                    </button>
            </div>
        </div>
    );
}
export default Note