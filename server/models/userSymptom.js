const mongoose = require('mongoose');

const userSymptomSchema = new mongoose.Schema({
  name: String,
  severity: Number
});

module.exports = mongoose.model("UserSymptom", userSymptomSchema);
