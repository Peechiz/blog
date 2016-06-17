var express = require('express'),
  router = express.Router(),
  knex = require('../db/bookshelf');
  User = require('../models/user')

router.get('/', (req, res) => {
  // var users = [{name:'bob'},{name:'chuck'},{name:'ed'},{name:'jim'},{name:'lob'}];
  new User().fetchAll().then( users => {
    users = users.toJSON();
    console.log(users);
    res.render('users/index', {users:users})
  })
})

router.get('/:id', (req,res) => {
  var id = req.params.id;
  new User({'id':id}).fetch({withRelated: ['posts']}).then( user => {
    user = user.toJSON();
    console.log(user);
    res.render('users/view',{user:user})
  })
})

module.exports = router;
