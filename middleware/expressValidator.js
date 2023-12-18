// Please don't change the pre-written code
// Import the necessary modules here
import { body, validationResult } from 'express-validator';

export const formValidation = async (req, res, next) => {
  // Write your code here
  // Step 1: Set up rules for validation
  const rules = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Enter a valid email'),
    body('image').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('Profile image is required');
      }
      return true;
    })
  ]

  // Step 2: Run the rules
  await Promise.all(rules.map((rule) => rule.run(req)))
  let validationErrors = validationResult(req);

  // Step 3:
  if (!validationErrors.isEmpty()) {
    res.send(validationErrors);
  } else {
    next()
  }
}
export default formValidation;
