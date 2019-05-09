// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    
    if(error){
        return console.log("Unable to connect to databse!")
    }

    const db = client.db(databaseName)

    // C

    // db.collection('users').insertMany([
    //     {
    //         name: 'Vikram',
    //         age: 26
    //     },
    //     {
    //         name: 'Henry Lau',
    //         age: 23
    //     },
    //     {
    //         name: 'Pat',
    //         age: 32
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert user!")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the dishes',
    //         completed: true
    //     },
    //     {
    //         description: 'Tidy up the bed',
    //         completed: false
    //     },
    //     {
    //         description: 'Wash the clothes',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert tasks!")
    //     }
    //     console.log(result.ops)
    // })



    // R

    // db.collection('users').findOne({ _id: new ObjectID('5cd2e3584a676b3f77fa4a4a' )}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 32 }).toArray((error, users) => {
    //     console.log(users)
    // })


    // db.collection('users').find({ age: 32 }).count((error, count) => {
    //     console.log(count)
    // })


    // db.collection('tasks').findOne({ _id: new ObjectID('5cd2e64af355a64036604897') }, (error, task) => {
    //     if(error){
    //         return console.log("Unable to find task")
    //     }
    //     console.log(task)
    // })


    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     if(error){
    //         return console.log("Unable to find task")
    //     }
    //     console.log(tasks)
    // })




    // U
    // db.collection('users').updateOne({ 
    //     _id: new ObjectID('5cd27b4f1de67c76442e130e') 
    // }, { 
    //     $inc: { age: 1 }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // D

    db.collection('users').deleteMany({
        age: 27
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    db.collection('tasks').deleteOne({
        description: 'Dolore ex fugiat aliquip esse incididunt proident sunt excepteur id eu adipisicing dolor duis pariatur.'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})