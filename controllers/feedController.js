exports.getPosts = (req, res, next) => {
    res.status(200).json({name: "Mahdi", City: "Tehran"})
};

exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        mwssage: 'Post created successfully',
        post: {id: Math.round(Math.random() * 100), title, content}
    })
}