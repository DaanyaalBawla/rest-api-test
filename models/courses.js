const { readFile } = require('fs')
const fsProm = require('fs.promises')
const path = require('path')
class Courses {
    coursePath = path.join(__dirname,'courses.json')
    async find(criteria) {
       function criteria(c) = 
        const courseRead = await fsProm.readFile('coursePath');
        const parseCourse = JSON.parse(courseRead)
        const filteredArr = parseCourse.filter(criteria)
    }
    
} 
module.exports = new Courses