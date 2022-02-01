import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        id
        firstName
        lastName
      }
    }
  }
`;
export const ADD_DRINKS = gql`
  mutation addDrink($drinkname: String!) {
    addDrink(drinkname: $drinkname) {
      id
      drinkname
      size
      price
      category{
        catname
      }
    }
  }
`;