const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

module.exports = (req, res, next) => {
  
  try {
    
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const userId = decodedToken.userId;
    console.log(userId);
    if (req.params.id && req.params.id !== userId) {
      res.status(401).json({
        status: "error",
        error: 'expired or invalid token'
      });
    } else {
      next();
    }
  } catch(error) {
    console.log(error)
    res.status(401).json({
      status: "error",
      error: 'please login'
    });
  }
  
};
