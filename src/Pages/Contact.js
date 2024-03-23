import React from 'react';
import Scrollbutton from '../Components/Scrollbutton';

const Contact = () => {
  return (
    <div>
    <div className="contact">
      <div className="get-intouch">
        <h1>Get in <span>Touch</span> with Us</h1>
        <p>Feel free to reach out! We're here to assist you. Drop us a message, and let's start a conversation today.</p>
      </div>
      <div className="contact-division">
        <div className="c-div">
          <h3>Our Home Address</h3>
          <p>Mombasa, Tudor</p>
        </div>
        <div className="c-div">
          <h3>Our Email Address</h3>
          <p>amisifredy20@gmail.com</p>
        </div>
        <div className="c-div">
          <h3>Our Phone</h3>
          <p>+254  113918190</p>
          <p>+254  115030267</p>
        </div>
      </div>
      <div className="contact-b">
        <div className="form">
          <form action="" method="">
            <div>
              <input htmlFor="name" type="text" id="name" placeholder="Your Name" required />
              <input htmlFor="Email" type="text" id="Email" placeholder="Your Email" required />
            </div>
            <div>
              <input htmlFor="number" type="number" id="number" placeholder="Your Number" required />
            </div>
            <div>
              <textarea id="message" name="message" placeholder="Enter Your message"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="map"><h3>My Map Locaation</h3></div>
      </div>
    </div>
    <Scrollbutton/>
    </div>
  );
};

export default Contact;
