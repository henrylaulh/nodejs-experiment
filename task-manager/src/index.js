
const express = require('express')
require('./db/mongoose')

const User = require('./models/user')
const Task = require('./models/task')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




// Start server
app.listen(port, () => {
    console.log("Server is up on port " + port)
})

// const Task = require('./models/task')

const main = async () => {
    // const task = await Task.findById('5ceb9dc76035c14accf843a5')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5ceb9ce5534de47e84810eb8')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)

}

main()