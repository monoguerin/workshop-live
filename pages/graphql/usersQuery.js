import { gql } from 'apollo-boost';

const usersQuery = gql`
  {
    users {
      id
      name
      email
    }
  }
`;

export default usersQuery;
