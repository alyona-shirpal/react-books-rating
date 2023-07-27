import React, { useState } from 'react';
import '../Book/Book.css';

const Book  = ({book}) => {
  const { title, author, averageRating } = book;

  const [rating, setRating ] = useState(0);
  const handleRatingChange = (e) => {
    setRating(parseInt(e.target.value));
  };

  return(
    <div className="book-card">
      <div className="book-image-placeholder"></div>

      <div className="book-info">
        <h2>{title}</h2>
        <p>Author: {author.name}</p>
        <p>Average Rating: {averageRating}</p>
      </div>
    </div>
  )
}
export default Book;