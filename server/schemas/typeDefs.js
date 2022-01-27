const{gql} = require('apollo-server-express');

const typeDefs = gql`
type Category{
  id: ID!
  catname: String
  subcatname: String
}
type Query{
   categories: [Category]
  
}
`;

module.exports = typeDefs;