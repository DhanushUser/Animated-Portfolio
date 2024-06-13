import React from 'react'
import './footer.css'

function Footer() {
  return (
    
    <footer className='footer mx-[5%] my-[50px]'>
      <hr />
      <div className='footer-details mt-[20px] lg:flex md:flex sm:block justify-between items-center'>
        <p>&copy; 2024 Dhanush. All rights reserved.</p>
        <p>Terms and Services</p>
        <p>Privacy policy</p>
        <p>Connect</p>
      </div>
    </footer>
  )
}

export default Footer