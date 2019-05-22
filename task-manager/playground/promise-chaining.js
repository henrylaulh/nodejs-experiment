require('../src/db/mongoose')

const User = require('../src/models/user')

// 5ce507fc8f582133544af697

User.findByIdAndUpdate('5cd3f06d99581f50f4eba341', { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({age:1})
}).then((results) => {
    console.log(results)
}).catch((e) => {
    console.log(e)
})

