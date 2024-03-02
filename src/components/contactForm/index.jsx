import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./index.css";
import WindowPopup from "../windowPopup";

const ContactHeader = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  const [emailSent, setEmailSent] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
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

    if (!question) {
      formIsValid = false;
      errors["question"] = "Please enter your question";
    }

    setErrors(errors);
    return formIsValid;
  }

  const handleSubmit = () => {
    if (validateForm()) {
      // Perform your submission logic here
      console.log("Form submitted successfully");
      setEmailSent(true);
    }
  }

  return (
    <div className="w-screen min-h-screen">
      <WindowPopup
        emailSent={emailSent}
        setEmailSent={setEmailSent}
        message={"Thank you or your feedback. We will get back to you within 2-3 business days"}
      />
      <motion.div style={{ y }} className="w-full h-[40vh] contact-form-header">
        <div className="w-full h-full px-4 from-[#9a43c4] bg-gradient-to-tr to-[#360050] absolute flex flex-col justify-center items-center">
          <h1 className="text-2xl font-medium text-white">Have a question?</h1>
          <p className="text-justify text-white">
            Thank you so much for an interest in our service. Please fill out
            the form below or email us at raystudios@gmail.com, and we will get
            back to you prompty regarding your request.
          </p>
        </div>
      </motion.div>
      <div className="bg-white w-full relative contact-form-foot">
        <form className="min-h-[40vh] py-[10vh] flex flex-col justify-center items-center gap-8 font-medium px-4">
          <div className="w-[80%] lg:w-[50%]">
            <input
              className="w-full border-2 py-1 px-2"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>
          <div className="w-[80%] lg:w-[50%]">
            <input
              className="w-full border-2 py-1 px-2"
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="w-[80%] lg:w-[50%]">
            <textarea
              className="border-2 w-full p-2"
              placeholder="Type your question here"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              cols="30"
              rows="10"
            ></textarea>
            {errors.question && <p className="text-red-500">{errors.question}</p>}
          </div>
          <button
            type="button"
            className="text-white hover:text-[#9a43c4] bg-black hover:bg-[#001d3d] text-sm px-4 py-2 font-bold"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactHeader;
