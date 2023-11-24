import React from 'react';
import RatingStars from 'react-rating-stars-component';

const Rating = ({ initialRating, onChange }) => {
  return (
    <RatingStars
      count={5}
      size={17}
      value={initialRating}
      onChange={onChange}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
