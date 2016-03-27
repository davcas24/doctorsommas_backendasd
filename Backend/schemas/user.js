var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  nombre : {type: String, required: true},
  apellido : {type: String, required: true},
  identidad :{type: String, required : true},
  telefono : {type: String, required: true},
  correo : {type: String, required: true},
  ciudad: {type: String, required: true},
  ubicacion: {type: String},
  image : {type: String},
  password : {type: String, required : true},
  expediente : [],
  especialidades : [],
  scope : [String]
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
