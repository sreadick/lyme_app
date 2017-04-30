const mongoose = require("mongoose");

const commonSymptomSchema = new mongoose.Schema({
    name: String,
    category: String
});

module.exports = mongoose.model("CommonSymptom", commonSymptomSchema);
