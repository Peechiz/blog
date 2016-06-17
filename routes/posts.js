var express = require('express'),
  router = express.Router({mergeParams: true}),
  knex = require('../db/bookshelf'),
  Post = require('../models/post'),
  User = require('../models/user')

router.get('/', (req, res) => {
  var id = req.params.id;
  //render all the posts
  new User({'id':id}).fetch({withRelated: ['posts']}).then(result => {
    result = result.toJSON();
    console.log('result',result);
    res.render('posts/view', {user:result,posts:result.posts})
  })

})

module.exports = router;
