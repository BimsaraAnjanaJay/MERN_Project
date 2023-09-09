const mongoose = require('mongoose')

const courseMaterialsSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    filename: {
        type: String
    },    
    file: {
        type: String
    }
});

const courseMaterialsModel = mongoose.model('CourseMaterials', courseMaterialsSchema);

module.exports = { courseMaterialsModel };