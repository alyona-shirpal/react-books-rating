import React from 'react';
import '../Book/Book.css';
import Rating from '../Rating/Rating';
//import { getToken } from '../../utils/auth';
import { gql, useMutation } from '@apollo/client';

const Book = ({ book }) => {
  const { title, author, averageRating } = book;
  //const [rating, setRating] = useState(0);

  //const token = getToken();

  const ratingMutation = gql`
    mutation ratingMutation($bookId: number!, $value: number!) {
      addRating(bookId: $bookId, value: $value) {
        value
      }
    }
  `;
  const [rate] = useMutation(ratingMutation);

  return (
    <div className="book-card">
      <div className="book-image-placeholder"></div>
      <div className="book-info">
        <h4>{title}</h4>
        <div className="book-about">
          <p>Author: {author.name}</p>
          <p>Average Rating: {averageRating}</p>
        </div>
        <Rating initialRating={book.averageRating} />
      </div>
    </div>
  );
};
export default Book;
