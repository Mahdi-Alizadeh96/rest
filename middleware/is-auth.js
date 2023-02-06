const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.get('Authorization').split(' ')[1];
    let decodeToken;
    try {
        decodeToken = jwt.verify(token, 'secretToken')
    } catch (error) {
        error.statusCode = 500;
        throw error;
    };
    if (!decodeToken) {
        const error = new Error('Not auth');
        error.statusCode = 401;
        throw error;
    } else {
        req.userId = decodeToken.userId;
        next();
    }
}