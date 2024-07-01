const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config")

// Middleware for handling auth (only token verification)
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Authorization token is missing' });
    }

    try {
        const words = token.split(" ");
        const jwtToken = words[1];

        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (decodedValue.username) {
            req.username = decodedValue.username;
            next();
        } else {
            return res.status(401).json({ message: 'Invalid token' });
        }
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = adminMiddleware;