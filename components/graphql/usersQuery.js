import { gql } from 'apollo-boost';

export default gql`
{
  users {
    id
    name
    email
    projects {
      id
      name
    }
  }
}`;
