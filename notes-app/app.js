const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes();

console.log(msg)

console.log(validator.isEmail('henry@example.com'))
console.log(validator.isURL('https/mead.io'))