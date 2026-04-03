import React, { useRef, useCallback, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import ContactInfo from "./ContactInfo";
import "./contact.css";


const Submit = (props) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    //const recapchaToken = await executeRecaptcha('submit');
    //props.setToken(recapchaToken)
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
      <input
        className="submit"
        onClick={handleReCaptchaVerify}
        type="submit"
        value="Send"
      />
  );
};

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [msg, setMsg] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [msgError, setMsgError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
   
    if ((nameError && name === '') ||
        (emailError && email === '') ||
        (phoneNumberError && phoneNumber === '') ||
        (msgError && msg === '')) {
      return;
    }
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log("emailjs error : ", error.text);
        }
      );
  };

  const handleNameChange = (e) =>{
    const { value } = e.target;
    setName(value);
    if(value === ''){
      setNameError("Please enter your name");
      return;
    }

    if (!/^[A-Za-z ]*$/.test(value)) {
      setNameError("Please enter only English letters");
    }else{
      setNameError("")
    }

  }
  const handleEmailChange = (e) =>{
    const { value } = e.target;
    setEmail(value);

    if(value === ''){
      setEmailError("Please enter phone number");
      return;
    }
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      setEmailError("Please enter correct email format");
    }else{
      setEmailError("");
    }
  }

  const handlePhoneNumberChange = (e) =>{
    const { value } = e.target;
    setPhoneNumber(value);

    if(value === ''){
      setPhoneNumberError("Please enter phone number");
      return;
    }
    if (!/^[0-9]+$/.test(value)) {
      setPhoneNumberError("Please enter only numbers");
    } else {
      setPhoneNumberError("");
    }
  }

  const handleMsgChange = (e) =>{
    const { value } = e.target;
    setMsg(value);

    if(value === ''){
      setMsgError("Please enter some Message");
      return;
    }else{
      setMsgError("");
    }
  }


  return (
    <div id="Contact">
      <h3 className='title'>Contact</h3>
      <div className="contact-container">
        <ContactInfo />
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            required
          />
          {nameError && (
            <p className="error-message">{nameError}</p>
          )}
          <div>
            <label>
              <input type="email" 
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required  />
              {emailError && (
                <p className="error-message">{emailError}</p>
              )}
            </label>
            <label>
              <input type="tel" 
              maxLength="12" 
              placeholder="Phone Number" 
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required 
              />
              {phoneNumberError && (
                <p className="error-message">{phoneNumberError}</p>
              )}
            </label>
          </div>
          <textarea placeholder="Leave message" value={msg} onChange={handleMsgChange} required/>
          {
            msgError && (
              <p className="error-message">{msgError}</p>
          )}
          <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
            <Submit />
          </GoogleReCaptchaProvider>
        </form>
      </div>
    </div>
  );
};

export default Contact;
