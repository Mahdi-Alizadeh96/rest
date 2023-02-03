const express = require("express");
const { body } = require('express-validator');

const feedController = require('../controllers/feedController');

const router = express.Router();

// >=>=> GET /feed/posts
router.get('/posts', feedController.getPosts);

// >=>=> POST /feed/posts
router.post('/post'
    ,
    [
        body("title").trim().isLength({min: 5}),
        body('content').trim().isLength({min: 5})
    ]
, feedController.createPost);

// >=>=> GET /feed/post
router.get('/post/:postId', feedController.getPost);

// >=>=> PUT /feed/post
router.put('/posts/:postId'
,   [
        body("title").trim().isLength({min: 5}),
        body('content').trim().isLength({min: 5})
    ]
,feedController.updatePost);

module.exports = router; 