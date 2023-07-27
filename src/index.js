import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import AppRouter from './AppRouter';
import client from '../src/apollo';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
