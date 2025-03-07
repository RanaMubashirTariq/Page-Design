import React from 'react'
import './Step3Section.css';

export default function Step3Section() {
  return (
    <div className='step-3-main-div'>
      
           <div className='head-part-1st-div'>
                        <button>👣  Step 3</button>
                        <h2>Account Setup & Trading Options</h2>
                    </div>  
            
            <div className='step-3-2ntd-part-div'>
                    <p> 
                    Once your client portal is set up, you will receive two emails:<br/>
                       📩 <span>Trading Account Details</span> – Your trading account number and password.<br/>📩 <span>Client Portal Access</span> – Your client portal login password.<br/>
                        If you prefer manual trading, log into your client portal, deposit funds into your trading account, and begin trading.
                    </p>
             </div>

             <div className='step-3-3rd-div'><img src="/Pictures/step-3-pic.svg"/></div>
    </div>
  )
}
