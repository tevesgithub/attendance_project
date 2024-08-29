const StudentRecord = require('../models/studentRecord');
const AttendanceManager = require('../models/attendanceManager.js');

exports.getHome = async (req, res) =>{
    try{
        const students = await StudentRecord.find({});

        const maxAttendanceCount = students.length;

        res.render('attendance.ejs', {students, maxAttendanceCount});

    }catch(error){
        res.status(500).send('Internal Server Error');
    }
}

exports.addStudent = async (req, res) => {
    try{
        const student = new StudentRecord({ name: req.body.name, email: req.body.email});
        await student.save();
        res.redirect('/home');
    }catch(error){
       console.log('Error Adding Student');
       res.status(500).send('Internal Server Error');
    }
};


exports.deleteStudent = async (req, res) => {
    try{
       const studentName = req.body.name;
       const result = await StudentRecord.deleteOne({ name: studentName });

       if(result.deletedCount === 0){
         res.status(404).send('Student not found');
       } else {
        res.redirect('/home');
       }

    }catch(error){
       console.log('Error Adding Student');
       res.status(500).send('Internal Server Error');
    }
};


exports.updateStudent = async (req, res) =>{

    const { attendanceDate } = req.body;
    const length = req.body.attendance ? req.body.attendance.length : 0;


   try{
      for(let i = 0; i < student.length; i++){
        const studentId = req.body.attendance[i];
        await StudentRecord.findByIdAndUpdate(
            studentId,
            {
                $inc:{AttendanceCount: 1},
                $push:{ attendance: {date: new Date(attendanceDate), status: 'present'}
            
            
            }
          
,
            },
            { new: true}

        )

      }
      res.redirect('/home');

    }catch(error){
       console.log('Error updating student records.');
       res.status(500).send('Internal Server Error');
    }

};