const { gql } = require('apollo-server')

const typeDefs = gql`
    type Student {
        id: ID!
        email: String!
        fullName: String!
        dept: String
        enrolled: Boolean
        age: Int
        lessons: [Lesson!]
    }

    type Lesson {
        id: ID!
        name: String!
        student: Student
    }

    type Query {
        enrollment: [Student!]
        students: [Student!]!
        lessons: [Lesson!]!
        student(id: ID!): Student
    }

    type Mutation {
        createLesson(name: String!, studentId: ID): Lesson!
        registerStudent(email: String!, fullName: String!, dept: String): Student!
        enroll(id: ID!): Student
    }
`
module.exports = {
  typeDefs,
}