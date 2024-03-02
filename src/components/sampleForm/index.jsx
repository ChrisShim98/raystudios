import React, { useState } from 'react'

import './index.css'

const ContactForm = ({ emailSent, setEmailSent }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!fullName) {
      formIsValid = false;
      errors["fullName"] = "Please enter your full name";
    }

    if (!email) {
      formIsValid = false;
      errors["email"] = "Please enter your email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      errors["email"] = "Please enter a valid email address";
    }

    if (!message) {
      formIsValid = false;
      errors["message"] = "Please enter your message";
    }

    setErrors(errors);
    return formIsValid;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setEmailSent(true);
    }
  }

  return (
    <div className='bg-gray-100 w-screen min-h-screen pt-12 contact-container'>
      <div className='min-h-screen flex flex-col justify-center items-center gap-8 font-medium px-4 py-24 lg:py-2'>

        <h1 className='text-4xl md:text-5xl font-bold pb-4 text-center pointer-events-none'>Get a free digital sample of our music</h1>
        <div className='w-[80%] lg:w-[50%]'>
          <input className='w-full border-2 py-1 px-2' type="text" placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>
        <div className='w-[80%] lg:w-[50%]'>
          <input className='w-full border-2 py-1 px-2' type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className='w-[80%] lg:w-[50%]'>
          <textarea className='border-2 w-full p-2' placeholder='Type your message here' value={message} onChange={(e) => setMessage(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button className='text-white bg-black hover:bg-[#9a43c4] text-sm px-4 py-2 font-bold' onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}

export default ContactForm