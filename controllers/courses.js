import { getCoursesBySubject as serviceSubject} from "../services/courses"
import { getCoursesByGenEdCategory as serviceGened } from "../services/courses"
class CourseController {
    async getCoursesBySubject(request) {
       return JSON.stringify(await serviceSubject(request.params.subject)) 

    }
    async getGenEdCoursesByCategory(request) {
        return JSON.stringify(await serviceGened(request.params.gened_category_code))

    }
}
module.exports = new CourseController