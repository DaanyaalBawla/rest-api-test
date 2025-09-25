const { readFile } = require('node:fs');
const fs = require('fs')
const path = require('path')
class Courses {
    coursePath = path.join(__dirname,'courses.json')
    async find(criteria) {
         (criteria) => {return true}
        
        const courseRead = await fsProm.readFile(coursePath);
        const parseCourse = JSON.parse(courseRead)
        const filteredArr = parseCourse.filter(criteria)
    }
    
} 
module.exports = new Courses