const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const CommonSymptom = require('mongoose').model('CommonSymptom');
const UserSymptom = require('../models/userSymptom');
const config = require('../../config');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

router.get('/dashboard', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    const userId = decoded.sub;
    if (err) {
      console.log(err);
    }
    User.findById(userId, function(err, user) {
      if (err) {
        console.log(err)
      }
      res.status(200).json({
        user: user
      })
    })
  })
});

router.get(`/commonSymptomList`, (req, res) => {
  CommonSymptom.find({}, function(err, commonSymptoms) {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      symptoms: commonSymptoms
    });
  });
})

router.post('/userSymptomList', (req, res) => {
  console.log(1)
  console.log("----------------------------------")
  console.log(req.body)
  console.log("----------------------------------")
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    const userId = decoded.sub;
    if (err) {
      console.log(err);
    }
    console.log(2)
    User.findById(userId, function(err, user) {
      console.log(3)
      if (err) {
        console.log(err);
      }
      req.body.symptoms.forEach(function(symptom) {
        console.log(4)
        UserSymptom.create(symptom, function(err, userSymptom) {
          if (err) {
            console.log(err);
          }
          user.symptoms.push(userSymptom);
          user.save(function(err) {
            if (err) {
              console.log(err);
            }
            console.log("symptom saved: " + userSymptom)
          })
        })
      })
      res.status(200).json({});
    });
  });
});


module.exports = router;
