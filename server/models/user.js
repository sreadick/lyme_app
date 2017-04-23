const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String,
  symptoms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSymptom'
  }]
});

// Compare the passed password with the value in the database
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

// Pre-save hook method
UserSchema.pre('save', function saveHook(next){
  const user = this;

  // proceed only if user is new or the password is modified
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }
      // replace password string with hash value
      user.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
