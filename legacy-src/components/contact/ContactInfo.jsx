import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import "./contact-info.css";

function ContactInfo() {
  return (
    <div className="contact-info">
      <div>
        <FaMapMarkerAlt size="2em" color="cornflowerblue" />
        <p>San Diego, CA</p>
      </div>
      <div>
        <FaRegEnvelope size="2em" color="cornflowerblue" />
        <a href="mailto:knight123g@gmail.com">knight123g@gmail.com</a>
      </div>
      <div>
        <FaPhoneAlt size="2em" color="cornflowerblue" />
        <a href="tel:7602977238">(+1) 760-297-7238</a>
      </div>
    </div>
  );
}

export default ContactInfo;
