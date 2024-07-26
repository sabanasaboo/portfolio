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



import React, { useEffect } from 'react';
import './Contactform.css';

const Contactform = () => {
  useEffect(() => {
    // Ensure jQuery is available
    const $ = window.$;
    const validator = $("form").validate({
      rules: {
        firstname: {
          required: true,
          minlength: 2
        },
        lastname: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        message: {
          required: true,
          minlength: 10
        }
      },
      messages: {
        firstname: {
          required: "Please enter your first name",
          minlength: "Your first name must consist of at least 2 characters"
        },
        lastname: {
          required: "Please enter your last name",
          minlength: "Your last name must consist of at least 2 characters"
        },
        email: "Please enter a valid email address",
        message: {
          required: "Please enter a message",
          minlength: "Your message must consist of at least 10 characters"
        }
      },
      submitHandler: function(form) {
        // Handle form submission
        alert('Form submitted successfully!');
        form.submit();
      }
    });

    return () => {
      // Cleanup validator when component unmounts
      validator.destroy();
    };
  }, []);

  return (
    <div className="contact-form-content">
      <form className='form'>
        <div className="name-container">
          <input type="text" name="firstname" placeholder='First Name' />
          <input type="text" name="lastname" placeholder='Last Name' />
        </div>
        <input type="text" name="email" placeholder='Email' className='input-f' />
        <textarea type="text" name="message" placeholder='Message' className='input-f' rows={3} />
        <button type="submit">SEND</button>
      </form>
    </div>
  );
}

export default Contactform;
