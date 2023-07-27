import { gql } from "@apollo/client";

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
}

export default queries;