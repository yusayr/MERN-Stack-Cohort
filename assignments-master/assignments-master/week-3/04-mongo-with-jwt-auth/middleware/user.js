function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, secret)
    if (decodedValue.username) {
        next();
    }
    else {
        res.status(403).json({
            msg: "Authentication Failed"
        })
    }
}

module.exports = userMiddleware;