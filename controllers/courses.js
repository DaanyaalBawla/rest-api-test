const serviceCourses = require("../services/courses")
class CourseController {
     async getCoursesBySubject(request) {
       return JSON.stringify(await serviceCourses.getCoursesBySubject(request.params.subject)) 

    }
    async getGenEdCoursesByCategory(request) {
        return JSON.stringify(await serviceCourses.getCoursesByGenEdCategory(request.params.gened_category_code))

    }
}
module.exports = new CourseController