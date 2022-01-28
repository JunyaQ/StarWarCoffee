const{gql} = require('apollo-server-express');

const typeDefs = gql`
## category
type Category{
  id: ID!
  catname: String
  subcatname: String
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
  #cart:[Cart]
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
## query
type Query{
  me: User
  users: [User]
  user(firstName: String!, lastName: String): User
  categories: [Category]
  drinks(category: ID, drinkname: String):[Drink]
  drink(id: ID!, drinkname:String, size:String, price: Float, category:String): Drink
  ##########cart(drinks:[ID]! drinkname: String, price: Float):Cart
}
`;

module.exports = typeDefs;