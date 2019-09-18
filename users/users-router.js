const router = require('express').Router()

const Users = require('./users-model.js')
const restricted = require('./../config/restricted-middleare.js')

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json( users )
    })
    .catch(error => res.send(error))
});

module.exports = router