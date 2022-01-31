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
query drinks{
  drinks{
    id
    drinkname
    size
    price
    category{
      id
      catname
      #subcatname
    }
  }
  }`
 
  export const QUERY_CATDRINK = gql`
  query getcatdrink($category: ID!) {
    category(category: $id) {
      id
      catname
      drinks {
        id
        drinkname
        size
        price
      }
    }
  }
`
 
;