const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Henry"
data.age = 23

const _dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', _dataJSON)