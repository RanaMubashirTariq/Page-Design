import React from 'react'
import './Step4Section.css'


export default function Step4Section() {
  return (
    <div className='step-4-main-div'>
           <div className='head-part-1st-div'>
                        <button>👣  Step 4</button>
                        <h2>PAMM Investor Account Setup</h2>
                    </div>  

             <div className='step-4-2nd-div'>
                 <div className='step-4-2nd-inner-1st-div'><p>Once your PAMM Investor Account is ready, <span>you will get an email with login details of your MT5 PAMM Account</span></p></div>
                 <div className='step-4-2nd-inner-1st-div'>
                    <p>
                   <span> To fund your account, from your client portal you can:</span><br/>
                    💳 <span>Deposit funds</span> directly into your PAMM Investor Account.<br/> 🔄 <span>Transfer funds </span>internally from your existing trading account.
                    </p>
                 </div>
             </div>

    </div>
  )
}
