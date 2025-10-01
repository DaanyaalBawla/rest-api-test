const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')
const coursesController = require('/controllers/courses.js');
module.exports = [
    server.route({
        method: 'GET',
        path: '/courses/{subject}',
        handler: coursesController.getCoursesBySubject
    })

]