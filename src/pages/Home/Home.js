import React from 'react';
import Book from '../../components/Book/Book';
import { Link } from 'react-router-dom';
import '../../AppRouter.css';
import { useQuery } from '@apollo/client';
import queries from '../../constants/graphql';

const Home = () => {
  const { loading, error, data } = useQuery(queries.getBooks);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const booksData = data.books;

  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <div className="right-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>

      <div className="book-grid">
        {booksData.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
