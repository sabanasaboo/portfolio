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


// ..............Jquery validation ............
// import React, { useEffect } from 'react';
// import './Contactform.css';

// const Contactform = () => {
//   useEffect(() => {
//     // Ensure jQuery is available
//     const $ = window.$;
//     const validator = $("form").validate({
//       rules: {
//         firstname: {
//           required: true,
//           minlength: 2
//         },
//         lastname: {
//           required: true,
//           minlength: 2
//         },
//         email: {
//           required: true,
//           email: true
//         },
//         message: {
//           required: true,
//           minlength: 10
//         }
//       },
//       messages: {
//         firstname: {
//           required: "Please enter your first name",
//           minlength: "Your first name must consist of at least 2 characters"
//         },
//         lastname: {
//           required: "Please enter your last name",
//           minlength: "Your last name must consist of at least 2 characters"
//         },
//         email: "Please enter a valid email address",
//         message: {
//           required: "Please enter a message",
//           minlength: "Your message must consist of at least 10 characters"
//         }
//       },
//       submitHandler: function(form) {
//         // Handle form submission
//         alert('Form submitted successfully!');
//         form.submit();
//       }
//     });

//     return () => {
//       // Cleanup validator when component unmounts
//       validator.destroy();
//     };
//   }, []);

//   return (
//     <div className="contact-form-content">
//       <form className='form'>
//         <div className="name-container">
//           <input type="text" name="firstname" placeholder='First Name' />
//           <input type="text" name="lastname" placeholder='Last Name' />
//         </div>
//         <input type="text" name="email" placeholder='Email' className='input-f' />
//         <textarea type="text" name="message" placeholder='Message' className='input-f' rows={3} />
//         <button type="submit">SEND</button>
//       </form>
//     </div>
//   );
// }

// export default Contactform;



import React, { useEffect } from 'react';
import './Contactform.css';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meojawqj"); // Replace "meojawqj" with your Formspree form ID

  useEffect(() => {
    // Ensure jQuery is available
    const $ = window.$;

    // Form validation using jQuery Validation Plugin
    const validator = $("form").validate({
      rules: {
        firstname: {
          required: true,
          minlength: 2,
        },
        lastname: {
          required: true,
          minlength: 2,
        },
        email: {
          required: true,
          email: true,
        },
        message: {
          required: true,
          minlength: 10,
        },
      },
      messages: {
        firstname: {
          required: "Please enter your first name",
          minlength: "Your first name must consist of at least 2 characters",
        },
        lastname: {
          required: "Please enter your last name",
          minlength: "Your last name must consist of at least 2 characters",
        },
        email: "Please enter a valid email address",
        message: {
          required: "Please enter a message",
          minlength: "Your message must consist of at least 10 characters",
        },
      },
      submitHandler: function(form) {
        // Formspree submission
        handleSubmit(form);
      },
    });

    return () => {
      // Cleanup validator when component unmounts
      if (validator) {
        validator.destroy();
      }
    };
  }, [handleSubmit]);

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contact-form-content">
      <form  action='https://formspree.io/f/meojawqj' className='form' onSubmit={handleSubmit} noValidate>
        <div className="name-container">
          <input type="text" name="firstname" placeholder='First Name' required />
          <ValidationError prefix="First Name" field="firstname" errors={state.errors} />

          <input type="text" name="lastname" placeholder='Last Name' required />
          <ValidationError prefix="Last Name" field="lastname" errors={state.errors} />
        </div>

        <input type="email" name="email" placeholder='Email' className='input-f' required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea name="message" placeholder='Message' className='input-f' rows={3} required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <button type="submit" disabled={state.submitting}>SEND</button>
      </form>
    </div>
  );
}

export default ContactForm;
