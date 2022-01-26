const{gql} = require('appolo-server-express');

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    email: String
  }
  type Drink{
      _id: ID!
  }


  ##########################
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }

`

module.exports = typeDefs;