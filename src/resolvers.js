const { prisma } = require("./database.js");

const resolvers = {
    Student: {
        id: (parent, args, context, info) => parent.id,
        email: (parent) => parent.email,
        fullName: (parent) => parent.fullName,
        dept: (parent) => parent.dept,
        enrolled: (parent) => parent.enrolled,
        age: (parent) => parent.age,
        lessons: (parent) => parent.lessons
    },

    Lesson: {
        id: parent => parent.id,
        name: parent => parent.name,
        student: parent => parent.student
    },

    Query: {
        students: (parent, args) => {
            return prisma.student.findMany({include: {lessons: true}});
        },
        lessons: (parent, args) => {
            return prisma.lesson.findMany({include: {student: true}});
        },
        enrollment: (parent, args) => {
            return prisma.student.findMany({
                where: { enrolled: true },
            });
        },
        student: (parent, args) => {
            return prisma.student.findFirst({
                where: { id: Number(args.id) },
            });
        },
    },

    Mutation: {
        registerStudent: (parent, args) => {
            return prisma.student.create({
                data: {
                    email: args.email,
                    fullName: args.fullName,
                    dept: args.dept,
                },
            });
        },
        createLesson: (parent, args) => {
            return prisma.lesson.create({
                data: {
                    name: args.name,
                    student: {connect: {id: Number(args.studentId)}}
                },
            });
        },
        enroll: (parent, args) => {
            return prisma.student.update({
                where: { id: Number(args.id) },
                data: {
                    enrolled: true,
                },
            });
        },
    },
}

module.exports = {
    resolvers,
}
