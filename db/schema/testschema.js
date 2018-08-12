const mongoose = require('../common/connection');

var Schema = mongoose.Schema;
var testschema = new Schema({
    name: String,
    rollno: Number
});
var testmodel = mongoose.model('crudmodels',testschema);

module.exports= testmodel;