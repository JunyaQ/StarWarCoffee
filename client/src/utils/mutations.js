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
      }
    }
  }
`;
export const ADD_DRINK = gql`
  mutation addDrink($drinkname: String!, $size: String!, $price: String!, $description: String) {
    addDrink(drinkname: $drinkname, size: $size, price: $price, description: $description) {
      id
      drinkname
      size
      price
      description
      category{
        id
        #catname
      }
    }
  }
`;