import React, {useState} from 'react';
import './Styles/contactForm.css';

export default function ContactForm() {
    const [status, setStatus] = useState("Submit");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, company, phone, email, message } = e.target.elements;
        let details = {
        name: name.value,
        company: company.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
        };
        let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

  return (
    <div className='form-container' id='contact'>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>Don't be a stranger!</h1>
          <h3>Feel free to reach out.</h3>
          <h3 className='form-title-subtext'>I am currently most interested in full-time employment.</h3>
        </div>
        <div className='container-one'>
          <div className='form-item'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className='form-item'>
            <label htmlFor="company">Company</label>
            <input type="text" id="company" />
          </div>
        </div>
        <div className='container-two'>
          <div className='form-item'>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
          </div>
          <div className='form-item'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
        </div>
        <div className='form-item textarea-container'>
          <label htmlFor="message">Message</label>
          <textarea id="message" required />
        </div>
        <button className='submit-button' type="submit">{status}</button>
      </form>
    </div>
  )
}
