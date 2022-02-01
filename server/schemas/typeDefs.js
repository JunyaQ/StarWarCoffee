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
  price: Float
  category:Category
  #addin:[Addin]
}
## user
type User {
  id: ID!
  firstName: String
  lastName:String
  email: String
  password: String
 # cart:[Cart]
}

## cart
type Cart{
    id: ID
    drinks:[Drink]
}
##auth
type Auth{
    token: ID!
    user: User
}
## query   ## TESTED QUERY
type Query{
  me: User
  users: [User]
  user: User
  categories:[Category]
  drinks(category:ID, catname: String):[Drink]
  drink(id: ID!): Drink
  cart(drinks:[ID]! drinkname: String, price: Float):Cart
}
## Mutation  ##NOT TESTED
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(firstName: String!, lastName: String! email: String!, password: String!): Auth
  addCart(drinks:[ID!]):Cart
  updateDrink(id: ID!): Drink
  
}
`;

module.exports = typeDefs;