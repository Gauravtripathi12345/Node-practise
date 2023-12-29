// Please don't change the pre-written code
// Import the necessary modules here
import jwt from 'jsonwebtoken';

const jwtAuth = (req, res, next) => {
  // Write your code here
  // const token = req.headers["authorization"];
  const { jwtToken } = req.cookies;

  if (!jwtToken) {
    return res.status(401).send("Unauthorized");
  }
  try {
    const payload = jwt.verify(jwtToken, "DB2CD4F673F33141");
    next();
  }
  catch (err) {
    res.status(401).json({
      success: false, msg: err
    });
  }
};

export default jwtAuth;
