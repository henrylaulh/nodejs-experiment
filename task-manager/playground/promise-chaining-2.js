require('../src/db/mongoose')

const Task = require('../src/models/task')

const _id = '5cd3e5cdf7fdc52250fd9f9d'

Task.findByIdAndDelete(_id).then((result) => {
    console.log(result)
    return Task.countDocuments({completed: false})
}).then((counts) => {
    console.log(counts)
}).catch((e) => {
    console.log(e)
})