const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

// List command
yargs.command({
    command: 'list',
    describe: 'Listing something out',
    handler: function(){
        console.log('Listing something out!')
    }
})

// Read command
yargs.command({
    command: 'read',
    describe: 'Reading something',
    handler: function(){
        console.log('Reading something!')
    }
})

yargs.parse()

// console.log(yargs.argv)