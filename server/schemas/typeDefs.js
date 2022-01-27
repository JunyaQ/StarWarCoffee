const{gql} = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  username: String
  email: String
}
type Drink{
    _id: ID!
    drinkname: String
    size: String
    price: Float
    category: [Category]
    addin:[Addin]
}
type Category{
    _id:ID
    catname: String
    subcatename:String

}
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
##
type Cart{
    _id: ID
    drinks:[Drink]
}

##
type Auth{
    token: ID!
    user: User
}
##

##########################
type Query {
  me: User
  users: [User]
  user(firstName: String!, lastaName: String): User
  drink(category: ID, drinkname: String):Drink
  category:[Category]
  drinks(category:ID, drinkname: String):Drink
  cart(drinks:[ID]!):Cart
}
##################################
type Mutation {
  login(email: String!, password: String!): Auth
  addUser(firstName: String!, lastName: String! email: String!, password: String!): Auth
  addCart(drinks:[ID!]):Cart
  
}
`;

module.exports = typeDefs;