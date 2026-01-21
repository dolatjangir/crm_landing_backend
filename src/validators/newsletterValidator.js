import { body } from "express-validator";

// ✅ Validator for creating a new newsletter
export const createNewsLetterValidator = [
    body("email").notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),
];

// ✅ Validator for updating an existing newsletter
export const updateNewsLetterValidator = [
    body("email").notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Please provide a valid email address")
        .normalizeEmail(),
];
