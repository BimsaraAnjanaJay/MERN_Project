const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    name: {
        type: String
    },
    files: {
        typr: String
    }
})

const submissionSchema = new mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Courses'
    },
    title: {
        type: String
    },         // Title for the submission link
    description: {
        type: String
    },   // Description of the submission link (optional)
    // files: {
    //     type: [{ String }]
    // }    // Store uploaded assignment files (PDFs)
    files: [fileSchema]
});

const submissionModel = mongoose.model('submissions', submissionSchema)

module.exports = { submissionModel }