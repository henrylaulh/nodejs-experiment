const mongoose = require('mongoose')
const validator = require('validator')

const url = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email:{
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid!')
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 7,
//         validate(value){
//             if(value.toLowerCase().includes("password")){
//                 throw new Error("Password cannot contain 'password'!")
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if(value < 0){
//                 throw new Error('Age must be a positive number!')
//             }
//         }
//     }
// })

// const me = new User({
//     name: '     Henry Lau',
//     email: 'myemail@henry.lau     ',
//     password: 'phone098!'
// })

// me.save().then((reuslt) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })


// const Task = mongoose.model('Task', {
//     description:{
//         type: String,
//         trim: true,
//         required: true,
//     },
//     completed:{
//         type: Boolean,
//         default: false,
//     }
// })

// const cleanHouse = new Task({
//     description: '          Tidy up the room          ',
// })

// cleanHouse.save().then((result) => {
//     console.log(cleanHouse)
// }).catch((error) => {
//     console.log('Error!', error)
// })