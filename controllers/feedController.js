const { validationResult } = require("express-validator/check");

exports.getPosts = (req, res, next) => {
    res.status(200).json({  
                            posts : [
                                {
                                    _id: "1",
                                    title: "First Post", 
                                    content: "Dummy content",
                                    imageUrl: "/images/duck.jpg",
                                    creator: {
                                        name: "Haji"
                                    },
                                    createdAt: new Date()
                                }
                            ]
                        })
};

exports.createPost = (req, res, next) => {

    const errors = validationResult(req); 

    if(!errors.isEmpty()) {
        return res.status(422).json({message: 'Validation failed, entered data is incorrect.', errors: errors.array()});
    }

    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        mwssage: 'Post created successfully',
        post:   {
                    _id: Math.round(Math.random() * 100),
                    title,
                    content,
                    creator: {
                        name: 'Maximilian'
                    },
                    createdAt: new Date()
                }
    })
}