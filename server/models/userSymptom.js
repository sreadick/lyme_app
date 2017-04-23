const mongoose = require('mongoose');

const userSymptomSchema = new mongoose.Schema({
  name: String,
  severity: Number,
  id: Number
});

module.exports = mongoose.model("UserSymptom", userSymptomSchema);
