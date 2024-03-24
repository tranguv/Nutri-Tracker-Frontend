// BadgeContainer.jsx
import React, { useState } from 'react';
import './Badge.modules.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { userBadge } from '../../utils/util';


const Badge = ({ title }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const maxBadge = 9;
  const badgeWidth = 70; // Adjust this value based on your badge width

  const showNextBadge = () => {
    setVisibleIndex((prevIndex) => {
      const newIndex = prevIndex + 1;

      // Prevent from going beyond the maximum badge index
      return newIndex > maxBadge ? prevIndex : newIndex;
    });
  };

  const showPreviousBadge = () => {
    setVisibleIndex((prevIndex) => {
      // Prevent from going below 0
      return prevIndex === 0 ? maxBadge : prevIndex - 1;
    });
  };

  const calculateTransform = () => {
    // Calculate the translateX based on the width of one badge
    return `translateX(-${visibleIndex * badgeWidth}px)`;
  };

  return (
    <div className="badge-container">
      <h2 className="container-heading text-2xl">{title}</h2>
      <div className="badge-wrapper" style={{ transform: calculateTransform() }}>
        {/* Badges */}
        {userBadge.map((badgeIndex) => (
          <img 
          key={badgeIndex}
          src={badgeIndex.src} 
          alt={badgeIndex.alt}
          className="badge rounded-full mr-8"
           />
          // <div key={badgeIndex} className="badgeIcon">
          //   <span>{badgeIndex + 1}</span>
          // </div>
        ))}
      </div>
      <div>
        {visibleIndex < maxBadge && (
          <button className="show-next-button" onClick={showNextBadge}>
            <FaArrowAltCircleRight style={{ fontSize: '3em' }}/>
          </button>
        )}
        {visibleIndex > 0 && (
          <button className="show-previous-button" onClick={showPreviousBadge}>
            <FaArrowAltCircleLeft style={{ fontSize: '3em' }}/>
          </button>
        )}
      </div>
    </div>
  );
};

export default Badge;
