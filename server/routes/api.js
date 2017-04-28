const express = require('express');
const router = new express.Router();
const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const CommonSymptom = require('mongoose').model('CommonSymptom');
const UserSymptom = require('../models/userSymptom');
const config = require('../../config');

router.get('/dashboard', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    const userId = decoded.sub;
    if (err) {
      console.log(err);
    }
    User.findById(userId).populate('symptoms').exec(function(err, user) {
      if (err) {
        console.log(err)
      }
      res.status(200).json({
        user: user
      })
    })
  })
});

router.get(`/CommonSymptoms`, (req, res) => {
  CommonSymptom.find({}, function(err, commonSymptoms) {
    if (err) {
      console.log(err);
    }
    res.status(200).json({
      symptoms: commonSymptoms
    });
  });
})

router.get('/UserSymptoms', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    const userId = decoded.sub;
    if (err) {
      console.log(err);
    }
    User.findById(userId).populate('symptoms').exec(function(err, user) {
      res.status(200).json({ symptoms: user.symptoms })
    });
  });
})

router.post('/UserSymptoms', (req, res) => {
  const userSymptom = {
    name: req.body.symptomName,
    severity: 0
  }
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    const userId = decoded.sub;
    if (err) {
      console.log(err);
    }
    User.findById(userId, function(err, user) {
      if (err) {
        console.log(err);
      }
      UserSymptom.create(userSymptom, function(err, createdUserSymptom) {
        if (err) {
          console.log(err);
        }
        user.symptoms.push(createdUserSymptom);
        user.save(function(err) {
          if (err) {
            console.log(err);
          }
          console.log("symptom saved: " + createdUserSymptom)
          res.status(200).json({ userSymptom: createdUserSymptom});
        })
      })
    });
  });
});

router.put('/UserSymptoms', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    UserSymptom.findByIdAndUpdate(req.body.symptom._id, req.body.symptom, function(err, updatedUserSymptom) {
      if (err) {
        console.log(err);
      } else {
        console.log("symptom updated: " + updatedUserSymptom)
        res.status(200).json({ userSymptom: req.body.symptom});
      }
    });
  });
});

router.delete('/UserSymptoms', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    UserSymptom.findByIdAndRemove(req.body.symptom._id, function(err, deletedSymptom) {
      if (err) {
        console.log(err);
      } else {
        console.log("symptom deleted: " + deletedSymptom);
        res.status(200).json({ deletedSymptom: deletedSymptom });
      }
    });
  });
});

module.exports = router;
