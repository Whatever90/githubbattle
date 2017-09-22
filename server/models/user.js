var mongoose = require('mongoose');
// 

var userSchema = new mongoose.Schema({
    login:  { type: String, required: [true, 'Name is required'], minlength: [2, 'First name IS TOO SHORT']},
    score:  { type: Number, required: [true, 'Last name is required']},
    photo: 	{ type: String, required: [true, 'Name is required'], minlength: [2, 'First name IS TOO SHORT']}
}, {timestamps: true });

var User = mongoose.model('User', userSchema) 
