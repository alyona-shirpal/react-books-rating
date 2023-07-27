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
}

export default queries;