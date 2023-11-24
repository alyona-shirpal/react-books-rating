import { gql } from '@apollo/client';

const queries = {
  getBooks: gql`
    query {
      books {
        id
        isPublished
        title
        author {
          id
          name
        }
        ratings {
          value
        }
        users {
          id
        }
        averageRating
      }
    }
  `,
  loginMutation: gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `,
  registerMutation: gql`
    mutation registerMutation($username: String!, $email: String!, $password: String!) {
      createUser(data: { username: $username, email: $email, password: $password }) {
        id
        username
        email
      }
    }
  `
};

export default queries;
