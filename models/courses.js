const { readFile } = require('node:fs');
const fs = require('fs').promises
const path = require('path')
class Courses {
    coursePath = path.join(__dirname,'courses.json')
    async find(criteria) {
         (criteria) => {return true}
        
        const courseRead = await fs.readFile(this.coursePath);
        const parseCourse = JSON.parse(courseRead)
        const filteredArr = parseCourse.filter(criteria)
    }
    
} 
module.exports = new Courses
