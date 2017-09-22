var mongoose = require('mongoose');
// 

var productSchema = new mongoose.Schema({
    name:  { type: String, required: [true, 'Name is required'], minlength: [2, 'Name IS TOO SHORT']},
    price:  { type: Number, required: [true, 'Price is required']},
}, {timestamps: true });

var Product = mongoose.model('Product', productSchema) 
