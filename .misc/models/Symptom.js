var mongoose = require("mongoose");

var symptomSchema = new mongoose.Schema({
    name: String,
    severity: Number,
});

module.exports = mongoose.model("Symptom", symptomSchema);
