var Symptom = require('../models/Symptom');

module.exports = {
  find: function(params, callback){
    Symptom.find(params, function(err, symptoms){
      if (err) {
        callback(err, null);
        return
      }
      callback(null, symptoms)
    })
  },

  findById: function(id, callback){
    Symptom.findById(id, function(err, symptom){
      if (err) {
        callback(err, null);
        return
      }
      callback(null, symptom);
    })
  },

  create: function(params, callback){
    Symptom.create(params, function(err, symptom){
      if (err){
        callback(err, null);
        return
      }
      callback(null, symptom);
    })
  },

  update: function(id, params, callback){
    Symptom.findByIdAndUpdate(id, params, {new:true}, function(err, symptom){
      if (err) {
        callback(err, null);
        return
      }
      callback(null, symptom);
    })
  },

  delete: function(id, callback){
    Symptom.findByIdAndRemove(id, function(err) {
      if (err) {
        callback(err, null);
        return
      }
      callback(null, null);
    })
  }

}
