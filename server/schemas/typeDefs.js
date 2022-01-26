const{gql} = require('appolo-server-express');

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
      price: Number
      category: [Category]
      addin:[Addin]
  }
  type Category{
      _id:ID
      catname: String
      subcatename:String

  }
  type Addin{
      honey: Number
      creamer: String
      cupoption: String
      coldForm: String
      drizzle:String
      topping: String
      whippedCream: String
      cinnamon: String
      espresso:Number
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
  }
##################################
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String! email: String!, password: String!): Auth
    addCart(drinks:[ID!]):Cart
    
  }

`

module.exports = typeDefs;