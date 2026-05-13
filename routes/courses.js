const Joi = require('@hapi/joi')
const coursesController = require('../controllers/courses.js');
module.exports = [
    {
        method: 'GET',
        path: '/courses/{subject}',
        handler: coursesController.getCoursesBySubject
    }

]
