import mongoose from 'mongoose'

let models = {}

console.log("connecting to mongodb")

//TODO: add your mongoDB connection string below, with database names userDemo
await mongoose.connect("mongodb://localhost:27017/userDemo")

console.log("successfully connected to mongodb")

// Add schemas and models for my database
const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    favorite_ice_cream: String
})

models.User = mongoose.model('User', userSchema)

console.log("mongoose models created")

export default models