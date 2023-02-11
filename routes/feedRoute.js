const express = require("express");
const { body } = require('express-validator');

const feedController = require('../controllers/feedController');
const isAuth = require("../middleware/is-auth");

const router = express.Router();

// >=>=> GET /feed/posts
router.get('/posts',isAuth ,feedController.getPosts);

// >=>=> POST /feed/posts
router.post('/post',
    isAuth
    ,
    [
        body("title").trim().isLength({min: 5}),
        body('content').trim().isLength({min: 5})
    ]
, feedController.createPost);

// >=>=> GET /feed/post
router.get('/post/:postId',isAuth ,feedController.getPost);

// >=>=> PUT /feed/post
router.put('/post/:postId',
isAuth
,   [
        body("title").trim().isLength({min: 5}),
        body('content').trim().isLength({min: 5})
    ]
,feedController.updatePost);

// >=>=> DELETE feed/posts
router.delete('/post/:postId', isAuth,feedController.deletePost);

module.exports = router; 