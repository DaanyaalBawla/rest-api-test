const { readFile } = require('node:fs');
const fs = require('fs')
const path = require('path')
class Geneds {
    genedPath = path.join(__dirname,'gened.json')
    async find(criteria) {
         (criteria) => {return true}
        
        const genedRead = await fsProm.readFile(this.genedPath);
        const parseGened = JSON.parse(genedRead)
        const filteredArr = parseGened.filter(criteria)
    }
    
} 
module.exports = new Geneds