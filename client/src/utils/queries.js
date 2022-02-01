import { gql } from '@apollo/client';

export const QUERY_USER = gql`{
    query user{
      user{
        id
        firstname
        lastnamne
        email
        cart{
            drinks{
                id
                drinkname
                price
            }
          }
        }
    }
}
`
export const QUERY_CATEGORIES = gql`
  query categories{
    categories {
      id
      catname
      #subcatname
    }
  }
  `

export const QUERY_DRINKS = gql`
query getDrinks($category:ID){
  drinks (category: $category){
    id
    drinkname
    size
    price
    category{
      id
      #catname
      #subcatname
    }
  }
  }`
 


export const QUERY_ONE_DRINK = gql`
query getDrink($id:ID!){
  drinks (id:$id){
    id
    drinkname
    size
    price
    category{
      id
      #catname
      #subcatname
    }
  }
  }`
 

export const QUERY_ME = gql`
  {
    me {
      id
      firstName
      lastName
      email
  }
}
`;