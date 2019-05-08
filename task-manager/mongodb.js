// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    
    if(error){
        return console.log("Unable to connect to databse!")
    }

    const db = client.db(databaseName)

    // Insertion

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




})