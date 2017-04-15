const express = require('express');
const validator = require('validator');
const passport = require('passport');

const router = new express.Router();

// Validate signup form
function validateSignUpForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 8) {
    isFormValid = false;
    errors.password = 'Password must have at least 8 characters.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name';
  }

  if (!isFormValid) {
    message = 'Check the form for errors';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

// Validate login form
function validateLoginForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
    isFormValid = false;
    errors.email = 'Please provide your email address.';
  }

  if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
    isFormValid = false;
    errors.password = 'Please provide your password.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

router.post('/register', (req, res, next ) => {
  const validationresult = validateSignUpForm(req.body);
  if (!validationresult.success) {
    return res.status(400).json({
      success: false,
      message: validationresult.message,
      errors: validationresult.errors
    });
  }

  return passport.authenticate('local-register', (err) => {
    if (err) {
      console.log(err)
      if (err.name === 'MongoError' && err.code === 11000) {
        // 11000 Mongo code is for a duplication email error
        // 409 HTTP code is used for conflict error
        return res.status(409).json({
          success: false,
          message: validationresult.message,
          errors: {
            email: "A user with this e-mail address already exists."
          }
        });
      }
      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }
    return res.status(200).json({
      success: true,
      message: "You have successfully signed up"
    });
  })(req, res, next);
});

router.post('/login', (req, res, next ) => {
  const validationresult = validateLoginForm(req.body)
  if (!validationresult.success) {
    return res.status(400).json({
      success: false,
      message: validationresult.message,
      errors: validationresult.errors
    });
  }

  return passport.authenticate('local-login', (err, token, userData) => {
    if (err) {
      console.log(err)
      if (err.name === 'IncorrectCredentialsError') {
        return res.status(400).json({
          success: false,
          message: err.message
        });
      }
      return res.status(400).json({
        success: false,
        message: 'Could not process the form.'
      });
    }
    return res.json({
      success: true,
      message: "You have successfully logged in.",
      token,
      user: userData
    });
  })(req, res, next);
});

module.exports = router;
