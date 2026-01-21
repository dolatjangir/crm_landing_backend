import express from "express";

import { validate } from "../middlewares/validate.js";
import { isAdministrator, protectRoute } from "../middlewares/auth.js";
import { contactUs, deleteContactUs, getContactUs, getContactUsById } from "../controllers/controller.contactUs.js";

const contactUsRoutes = express.Router();


contactUsRoutes.get("/", getContactUs);
contactUsRoutes.get("/:id", isAdministrator, getContactUsById);
contactUsRoutes.post(
    "/",
    contactUs
);

contactUsRoutes.delete("/:id", isAdministrator, deleteContactUs);

export default contactUsRoutes;
