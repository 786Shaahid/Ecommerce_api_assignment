import { body, validationResult } from "express-validator";
import { ErrorHandle } from "../utility/errorResponse.utility.js";

export const validateProduct = async (req, res, next) => {
  /**1. SETUP THE RULES FOR VALIDATION */
  const rules = [
    body("name")
      .notEmpty()
      .withMessage("Product Name Required !")
      .isString()
      .withMessage("Username must be string !")
      .isLength({ min: 4 })
      .withMessage("User Name Must Be At Least 3 Charector Long !"),
    body("description")
      .notEmpty()
      .withMessage("Product Description Required !")
      .isString()
      .withMessage("Description must be in string !"),
    body("price").notEmpty().withMessage("Product Price Must Required !"),
  ];

  /** 2. RUN ALL THE RULES */
  await Promise.all(rules.map(async (rule) => await rule.run(rule)));

  /** 3. CATCH ERROR  */
  const errors = validationResult(req).array();
  if (errors.length > 0) {
    return res.status(400).json(new ErrorHandle(false,"Something went wrong !" ,errors[0].msg));
  }
  
  /** 4. CALL THE NEXT  */
  next(); 
};
