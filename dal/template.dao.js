const mongoose = require ("mongoose");

const CorseSchema = new mongoose.Schema({
    courseName:{type:String,required:true},
    courseFee:{type:Number,required:true}
});

const course = mongoose.model("courses",CorseSchema);

module.exports=course;