// import React from 'react'
// import './Contactform.css'
// const Contactform = () => {
//   return (
//     <div className="contact-form-content">
//         <form className='form'>
//             <div className="name-container">
//                 <input type="text" name="firstname" placeholder='First Name' />
//                 <input type="text" name="lastname" placeholder='Last Name' />
//             </div>
//             <input type="text" name="email" placeholder='Email' className='input-f' />

//             <textarea type="text" name="message" placeholder='Message' className='input-f'  rows={3}/>

//             <button>SEND</button>
//         </form>
//     </div>
//   )
// }

// export default Contactform






import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Contactform.css'; // Ensure the CSS file exists and the path is correct

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meojawqj");
  const [submitted, setSubmitted] = useState(false);

  // Update the state on successful submission
  const onSubmit = (event) => {
    handleSubmit(event);
    if (state.succeeded) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-form-content">
      <form className="form" onSubmit={onSubmit} noValidate>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className='input-field'
            required
            minLength={2}
          />
          <input
            type="text"
            name="lastname"
            className='input-field'

            placeholder="Last Name"
            required
            minLength={2}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className='input-field'
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          name="message"
          placeholder="Message"
          className='input-field'
          rows={3}
          required
          minLength={10}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>SEND</button>
      </form>
      {submitted && (
        <p className="success-message">Form submitted successfully!</p>
      )}
    </div>
  );
};

export default ContactForm;
