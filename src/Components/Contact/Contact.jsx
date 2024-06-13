import React from 'react'
import './contact.css'
import { useState } from 'react';


const Contact = () => {


    const [result, setResult] = useState("");

    

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a7233fbe-0577-4153-940f-5a0f1bb5f637");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact  my-[150px] mx-10' id='contact'>

        <div className="flex justify-center mb-20 ">
            <h1 className="text-3xl font-[600] mb-[50px]">Get in <span className="p-2 rounded ml-1">Touch</span></h1>
        </div>

        <div className='total-side lg:flex md:flex sm:block'>
            <div className="contact-left mx-5">
                <h1 className='text-5xl'>Let's Talk</h1>
                <p>I'm currently seeking for a opportunity to improve my skills!</p>
                <hr style={{width:'94%'}}/>

                <div className="icons mt-[30px]">
                    <div className='flex'>
                        <i className='bx bx-mail-send text-3xl mt-3'></i><p className='mx-2'>dhanushsamynathan07@gmail.com</p>
                    </div>
                    <div className='flex'>
                    <i className='bx bxs-phone-call text-3xl mt-3'></i><p className='mx-2'>6380367182</p>
                    </div>
                    <div className='flex'>
                    <i className='bx bxs-edit-location text-3xl mt-3'></i><p className='mx-2'>2/218, Murugan colony, Irumbarai, Mettupalayam taluk, Coimbatore-638459.</p>
                    </div>
                    
                    
                </div>
            </div>
            <div className="contact-right mx-5">
                <form onSubmit={onSubmit}>
                    <div>
                        <h4>Your Name</h4>
                        <input type="text" name="name" placeholder='Enter your Name' required/>
                    </div>
                    <div>
                        <h4>Your Email</h4>
                        <input type="email" name="email" placeholder='Enter your Email' required/>
                    </div>
                    <div>
                        <h4>Your Message</h4>
                        <textarea name="message" placeholder='Your Message' required></textarea>
                    </div>
                    <div className='btns'>
                        <button  className='btn'>Submit Now</button>
                        
                    </div>
                </form>
                <span className='send'>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contact