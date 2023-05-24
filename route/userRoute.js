const userRoute = require('express').Router()
const { homeController, createController, updateController ,notFound, createUser, readUser , readSingle, updateUser, deleteUser} = require('../controller/userController')

// to hande front end view
userRoute.get(`/`, homeController) //index route
userRoute.get(`/create`, createController)
userRoute.get(`/update`, updateController)

//*****api route********* *//
// read all
userRoute.get(`/api/users`, readUser)

// read single
userRoute.get(`/api/users/:id`, readSingle)

//  create user
userRoute.post(`/api/newuser`, createUser)

// update user
userRoute.patch(`/api/update/:id`, updateUser)

// delete user
userRoute.delete(`/api/delete/:id`, deleteUser)

// path not found(default route)
userRoute.all(`/*`,notFound)

module.exports = userRoute