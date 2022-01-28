import { gql } from '@apollo/client';

export const QUERY_USER = gql`{
    user{
        _id
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
`
export const QUERY_CATEGORIES = gql`
  {
    categories {
      id
      catname
      subcatname
    }
  }
  `

export const QUERY_DRINKS = gql `
{
  drinks{
    id
    drinkname
    size
    price
    category{
      catname
      subcatname
    }
  }
}`
;