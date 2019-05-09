const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/task-manager-api'

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'Henry Lau',
//     age: 22
// })

// me.save().then((reuslt) => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })


const Task = mongoose.model('Task', {
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

const cleanHouse = new Task({
    description: 'Clean the house',
    completed: false
})

cleanHouse.save().then((result) => {
    console.log(cleanHouse)
}).catch((error) => {
    console.log('Error!', error)
})