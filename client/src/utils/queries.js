import { gql } from '@apollo/client';

export const QUERY_USER = gql`{
    query user{
      user{
        id
        firstname
        lastnamne
        email
        password
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
      subcatname
    }
  }
  `

export const QUERY_DRINKS = gql`
query drink{
  drink{
    id
    drinkname
    size
    price
    category{
      id
      catname
      subcatname
    }
  }
  }`
;