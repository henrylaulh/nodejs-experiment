const fs = require('fs')
const chalk = require('chalk')



const addNote = (title, body) => {
    const notes = loadNotes()
    
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNote(notes)    
        console.log(chalk.bgGreen("New note added!"))
    } else {
        console.log(chalk.bgRed("Note title taken!"))
    }
}



const removeNote = (title) => {

    console.log("Title to be removed: " + title)

    const notes = loadNotes()

    const filteredNotes = notes.filter((note) => note.title !== title)

    if(notes.length == filteredNotes.length){
        console.log(chalk.bgRed("No notes with title '" + title + "' found. Nothing to be removed."))
    } else {
        saveNote(filteredNotes)
        console.log(chalk.bgGreen("Note with title '" + title + "' is removed."))
    }
}


const listNotes = () => {
    console.log(chalk.bgBlue("Listing out all notes' title below..."))
    const notes = loadNotes();
    return notes.forEach((note) => console.log(note.title))
}


const readNote = (title) => {
    const notes = loadNotes()

    const resultNote = notes.find((note) => note.title === title)

    if(resultNote){
        console.log(chalk.yellow(resultNote.title))
        console.log(resultNote.body)
    } else {
        console.log(chalk.red("Error! No notes with title '" + title + "' found."))
    }
}


const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}




module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}