const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authentication;
        const decode = jwt.verify(token, process.env.jwt_key);
        req.userData = decode;
        next();
    } catch (err) {
        return res.status(401).json({
            error: 'Authorisation Failed :('
        });
    }
};