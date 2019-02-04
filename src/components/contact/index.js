import React from 'react';
import { ContactForm } from './index.css';
import Header from 'components/header';

const Contact = () => (
  <ContactForm>
    <Header subHeading="Start a Project" />
    <div className="form-row">
      <div className="form-input">
        <label htmlFor="firstname">First name</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label htmlFor="lastname">Last name</label>
        <input type="text" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-input">
        <label htmlFor="firstname">Email</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label htmlFor="lastname">Phone Number</label>
        <input type="text" />
      </div>
    </div>
    <div className="form-row">
      <div className="form-input">
        <label htmlFor="firstname">Company Name</label>
        <input type="text" />
      </div>
      <div className="form-input">
        <label htmlFor="lastname">Company Type</label>
        <input type="text" />
      </div>
    </div>
    <div className="form-row">
      <h3>SERVICES NEEDED</h3>
    </div>
    <div className="form-row">
      <div className="form-text-area">
        <label htmlFor="message">Message</label>
        <textarea name="" id="" className="" />
      </div>
    </div>
    <div className="form-button-container">
      <button type="submit">GET STARTED</button>
    </div>
  </ContactForm>
);

export default Contact;
