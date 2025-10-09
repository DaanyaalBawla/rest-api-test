
class CourseServices {
   async getCoursesBySubject(subject) {
        return await subject
    }
    getCoursesByGenEdCategory(catagory) {
        return catagory
    }
}
module.exports = new CourseServices