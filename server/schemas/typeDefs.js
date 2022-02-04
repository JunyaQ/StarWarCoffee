const{gql} = require('apollo-server-express');

const typeDefs = gql`
## category
type Category{
  id: ID!
  catname: String
  #subcatname: String
}
## Add in
type Addin{
  honey: Int
  creamer: String
  cupoption: String
  coldForm: String
  drizzle:String
  topping: String
  whippedCream: String
  cinnamon: String
  espresso:Int
  addlongshot:String
  addDecaf: String
  sauce: String
  syrups: String
}
##drink
type Drink{
  id: ID!
  drinkname: String
  size: String
  price: String
  category:Category
  description: String
  #addin:[Addin]
}
## user
type User {
  id: ID!
  firstName: String
  lastName:String
  email: String
  password: String
}
##auth
type Auth{
    token: ID!
    user: User
}
input addedDrink{
  drinkname: String
  size: String
  price: Float
  category: String
  description: String
}
## query   ## TESTED QUERY
type Query{
  me: User
  users: [User]
  user: User
  categories:[Category]
  drinks(category:ID, catname: String):[Drink]
  drink(id: ID!): Drink
  addone(username: String): [Drink]
}
## Mutation  ##NOT TESTED
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(firstName: String!, lastName: String! email: String!, password: String!): Auth
  updateDrink(id: ID!): Drink
  addDrink(drinkname: String, size: String, price: String, description: String):Drink
  removeDrink(drinkid:ID!): Drink
}
`;

module.exports = typeDefs;