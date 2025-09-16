const hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi')
module.exports = [
    server.route({
        method: 'GET',
        path: '/courses/{subject}',
        handler: function (request, h) {
        return `${request.params.subject}`;
        }

    });

]