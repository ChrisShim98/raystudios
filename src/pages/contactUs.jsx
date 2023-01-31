import React, {useLayoutEffect} from 'react'
import ContactForm from '../components/contactForm/index.jsx';

const ContactUs = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div>
        <ContactForm />
    </div>
  )
}

export default ContactUs