const mongoose = require("mongoose");

const commonSymptomSchema = new mongoose.Schema({
    name: String,
    id: Number
});

module.exports = mongoose.model("CommonSymptom", commonSymptomSchema);
