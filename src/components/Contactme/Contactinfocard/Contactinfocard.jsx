// import React from 'react'
// import './Contactinfocard.css'

// const Contactinfocard = ({ iconUrl, text }) => {
//   return (
// <div className="contatc-details-card">
//     <div className="icon">
//         <img src="{iconUrl}" alt="{text}" />
//     </div>

//     <p>{text}</p>
// </div>
//   )
// }

// export default Contactinfocard



import React from 'react';
import './Contactinfocard.css'

const Contactinfocard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <img src={iconUrl} alt="icon" className="contact-icon" />
      <p>{text}</p>
    </div>
  );
};

export default Contactinfocard;
