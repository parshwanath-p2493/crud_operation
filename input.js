const mongoosh = require('mongoose');
const Student = new mongoosh.Schema({
    name: {
        type: String,
        required: true,
        //timestamps: true
    },
    student_id: {
        type: String,
        required: true,
        //timestamps: true
    },
    school_name:{
        type:String,
        required:true,
        //timestamps: true
    },
    phone_number:
    {
        type:Number,
        required:true,
       // timestamps: true
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoosh.model("User",Student);