// import React from 'react';
// import './SkillCard.css';

// const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
//   return (
//     <div
//       className={`skills-card ${isActive ? "active" : ""}`}
//       onClick={() => onClick()}
//     >
//       <div className="skill-icon">
//         <img src={iconUrl} alt={title} />
//       </div>
//       <span>{title}</span>
//     </div>
//   );
// };

// export default SkillCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import './SkillCard.css';

// const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
//   return (
//     <div
//       className={`skills-card ${isActive ? "active" : ""}`}
//       onClick={() =>onClick}
//     >
//       <div className="skill-icon">
//         <img src={iconUrl} alt={title} />
//       </div>
//       <span>{title}</span>
//     </div>
//   );
// };

// SkillCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   iconUrl: PropTypes.string.isRequired,
//   isActive: PropTypes.bool,
//   onClick: PropTypes.func,
// };

// SkillCard.defaultProps = {
//   isActive: false,
//   onClick: () => {},
// };

// export default SkillCard;

// SkillCard.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './SkillCard.css';

const SkillCard = ({
  title,
  iconUrl,
  isActive = false,  // Default parameter
  onClick = () => {}, // Default parameter
}) => {
  return (
    <div
      className={`skills-card ${isActive ? 'active' : ''}`}
      onClick={onClick} // Fixed the onClick handling
    >
      <div className="skill-icon">
        <img src={iconUrl} alt={title} />
      </div>
      <span>{title}</span>
    </div>
  );
};

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

// Removed defaultProps

export default SkillCard;

