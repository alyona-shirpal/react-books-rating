import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import AppRouter from './AppRouter';
import client from '../src/apollo';
import 'bootstrap/dist/css/bootstrap.min.css';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </ApolloProvider>,
  // eslint-disable-next-line no-undef
  document.getElementById('root')
);
