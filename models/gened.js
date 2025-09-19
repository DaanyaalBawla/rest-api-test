const { readFile } = require('fs')
const fsProm = require('fs.promises')
const path = require('path')
class Geneds {
    async find(criteria) {
        genedRead = await fsProm.readFile('genedPath');
        parseCourse = JSON.parse(genedRead)

    }
    genedPath = path.join(__dirname,'gened.json')
    
} 
module.exports = new Courses