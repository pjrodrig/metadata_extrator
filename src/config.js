const fs = require('fs')
const path = './config.json'
const config = JSON.parse(fs.readFileSync(path, 'UTF-8'))
module.exports = config