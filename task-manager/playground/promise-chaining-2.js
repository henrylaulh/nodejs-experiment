require('../src/db/mongoose')

const Task = require('../src/models/task')

const _id = '5cd3f0dcd734894fd888d246'

// Task.findByIdAndDelete(_id).then((result) => {
//     console.log(result)
//     return Task.countDocuments({completed: false})
// }).then((counts) => {
//     console.log(counts)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}


deleteTaskAndCount(_id).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
