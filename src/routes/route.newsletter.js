import express from "express";

import { validate } from "../middlewares/validate.js";
import { isAdministrator, protectRoute } from "../middlewares/auth.js";
import { createNewsLetter, deleteNewsLetter, getNewsLetter, getNewsLetterById, updateNewsLetter } from "../controllers/controller.newsletter.js";
import { createNewsLetterValidator, updateNewsLetterValidator } from "../validators/newsletterValidator.js";

const newsLetterRoutes = express.Router();


newsLetterRoutes.get("/", getNewsLetter);
newsLetterRoutes.get("/:id", isAdministrator, getNewsLetterById);
newsLetterRoutes.post(
  "/",
  validate(createNewsLetterValidator),
  createNewsLetter
);
newsLetterRoutes.put(
  "/:id",
  isAdministrator,
  validate(updateNewsLetterValidator),
  updateNewsLetter
);
newsLetterRoutes.delete("/:id", isAdministrator, deleteNewsLetter);

export default newsLetterRoutes;
