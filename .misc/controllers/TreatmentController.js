var Treatment = require('../models/Treatment');

module.exports = {
  find: function(params, callback){
    Treatment.find(params, function(err, treatment){
      if (err) {
        callback(err, null);
        return
      }
      callback(null, treatment)
    })
  },

  findById: function(id, callback){
    Treatment.findById(id, function(err, treatment){
      if (err) {
        callback(err, null);
        return
      }
      callback(null, treatment);
    })
  },

  create: function(params, callback){
    Treatment.create(params, function(err, treatment){
      if (err){
        callback(err, null);
        return
      }
      callback(null, treatment);
    })
  },

  update: function(id, params, callback){
    Treatment.findByIdAndUpdate(id, params, {new:true}, function(err, treatment){
      if (err) {
        callback(err, null);
        return
      }
      callback(null, treatment);
    })
  },

  delete: function(id, callback){
    Treatment.findByIdAndRemove(id, function(err) {
      if (err) {
        callback(err, null);
        return
      }
      callback(null, null);
    })
  }

}
