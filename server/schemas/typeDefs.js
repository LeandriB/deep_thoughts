//import the gql tagged template functions
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type Query {
        helloWorld: String
    }
`;

//export the typeDefs
module.exports = typeDefs;