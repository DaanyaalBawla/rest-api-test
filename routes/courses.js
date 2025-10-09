const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')
const coursesController = require('../controllers/courses.js');
const server = hapi.server({
            port: 3001,
            host: 'localhost'
        });
module.exports = [
    server.route({
        method: 'GET',
        path: '/courses/{subject}',
        handler: coursesController.getCoursesBySubject
    })

]
