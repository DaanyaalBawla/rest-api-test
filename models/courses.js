const { readFile } = require('fs')
const fsProm = require('fs.promises')
const path = require('path')
class Courses {
    async find(criteria) {
        courseRead = await fsProm.readFile('coursePath');

    }
    coursePath = path.join(__dirname,'courses.json')
    
} 
module.exports = new Courses