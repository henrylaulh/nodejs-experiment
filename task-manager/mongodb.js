// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.id.length)
console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    
    if(error){
        return console.log("Unable to connect to databse!")
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert user!")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Pat',
    //         age: 32
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ],(error, result) => {
    //     if(error){
    //         return console.log("Unable to insert documents!")
    //     }
    //     console.log(result.ops)
    // })


    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Eu officia est proident occaecat aliqua minim exercitation ipsum exercitation minim eiusmod fugiat exercitation.',
    //         completed: true
    //     },
    //     {
    //         description: 'In voluptate cillum labore labore minim aliquip nulla id.',
    //         completed: false
    //     },
    //     {
    //         description: 'Dolore ex fugiat aliquip esse incididunt proident sunt excepteur id eu adipisicing dolor duis pariatur.',
    //         completed: true
    //     },
    // ], (error, result) => {
    //     if(error){
    //         return console.log("Unable to insert tasks!")
    //     }
    //     console.log(result.ops)
    // })



})