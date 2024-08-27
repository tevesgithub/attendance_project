const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    date:{
        type: Date,
        required: true,
    },
    status:{
        type: String,
        enum:['present', 'absent', 'fake excuse'],
        required: true,
    }

});



const studentRecordSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    attendance:{
        type: [attendanceSchema],
        default:[],
    }

});






const studentRecord = mongoose.model('StudentRecord', studentRecordSchema);

module.exports = studentRecord;