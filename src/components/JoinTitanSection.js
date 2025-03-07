import React from 'react'
import './JoinTitanSection.css'

export default function JoinTitanSection() {
  return (
    <div className='join-titan-main-div'>
           <div className='join-titan-1st-div'><h2>Join TitanX Copy Trading - Create PAMM Account</h2></div>
           
           <div className='join-titan-2nd-div'>
                 <p>
                 1) Log into your PU Prime client portal.<br/>
2) Accounts > + Open Account > Live Account<br/>
3) Choose An Account Type > PAMM | Choose An Account Currency > USD<br/>
4) Agree to Terms and Conditions and Submit! (May take upto 24 hours to process)
                 </p>
           </div>

           

           <div className='join-titan-3rd-div'><img src="/Pictures/join-titan-pic.svg"/></div>
           <div className='join-titan-4rd-div'><img src="/Pictures/join-titan-mobile-pic.svg"/></div>
    </div>
  )
}
