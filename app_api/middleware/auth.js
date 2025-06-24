const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1]; // Format: "Bearer <token>"

  try {
    const decoded = jwt.verify(token, 'cs465'); // Use same secret used in generateJwt()
    req.user = decoded;
    next(); // allow request to proceed
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};