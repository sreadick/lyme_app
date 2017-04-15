var mongoose = require("mongoose");

var treatmentSchema = new mongoose.Schema({
    medication: String,
    dose: String,
    daily: Number
});

module.exports = mongoose.model("Treatment", treatmentSchema);
