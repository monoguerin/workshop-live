import { gql } from 'apollo-boost';

const postsQuery = gql`
  {
    posts {
      title
      description
      favorite
    }
  }
`;

export default postsQuery;
