import React, {useState} from 'react';
import './Styles/contactForm.css';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mnqwbrzk");

    if (state.succeeded) {
        return <p>Thanks for contacting me!</p>;
    }

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
            <input name='name' type="text" id="name" required />
          </div>
          <div className='form-item'>
            <label htmlFor="company">Company</label>
            <input name='company' type="text" id="company" />
          </div>
        </div>
        <div className='container-two'>
          <div className='form-item'>
            <label htmlFor="phone">Phone</label>
            <input name='phone' type="text" id="phone" />
          </div>
          <div className='form-item'>
            <label htmlFor="email">Email</label>
            <input name='email' type="email" id="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
          </div>
        </div>
        <div className='form-item textarea-container'>
          <label htmlFor="message">Message</label>
          <textarea name='message' id="message" required />
          <ValidationError prefix="Message" field="message" errors={state.errors}/>
          <button className='submit-button' type="submit" disabled={state.submitting}>Submit</button>
        </div>
      </form>
    </div>
  )
}
