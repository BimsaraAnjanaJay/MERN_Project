const router = require('express').Router()
const {
    createCourse,
    deleteCourse,
    getOneCourse,
    getAllCourses,
    assignLecturerToCourse,
    enrollStudentInCourse,
} = require('../controllers/courseController')
const verifyJWT = require('../middleware/verifyJWT')

router.use(verifyJWT)

router.route('/course/:id').get(getOneCourse);
router.route('/course').get(getAllCourses);

router.route('/course/create').post(createCourse);
router.route('/course/delete/:id').delete(deleteCourse);

router.route('/course/assign').put(assignLecturerToCourse);
router.route('/enroll').put(enrollStudentInCourse);

module.exports = router