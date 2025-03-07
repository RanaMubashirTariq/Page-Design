import React from 'react'
import './HeadPart.css';

export default function HeadPart() {
  return (
    <div className='head-part-div'>
          <div className='head-part-right-div'>
                    <div className='head-part-1st-div'>
                        <button>👣  Step 1</button>
                        <h2>Registration</h2>
                    </div>  
                    <div className='head-part-2nd-right'><p>Register a live account with PU Prime with your <span>referrers link:</span></p></div>
                    <div className='head-part-3rd-right'><img src="/Pictures/brokenLink.svg"/><p>example: https://www.puprime.partners/forex-trad...</p></div>
          </div>

         <div className='head-part-left-part'>
                <div className='head-part-1st-div'>
                        <button>👣  Step 2</button>
                        <h2>Get Verified</h2>
                    </div> 

                <div className='head-part-2nd-left'>
                    <ul>
                        <li><span>Personal Details </span>– Name, Email, Phone Number</li>
                        <li><span>Proof of ID</span>  – Passport, Driver’s License, or National ID</li>
                        <li><span>Proof of Address</span>  – Utility Bill or Bank Statement  </li>
                        <p>     ⏳ Verification can take up to 24 hours</p>
                    </ul> 
                </div>   
         </div>

    </div>
  )
}
