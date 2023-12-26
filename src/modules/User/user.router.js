import { Router } from "express";
import * as UserController from "./user.controller.js";
import { auth } from "../../middleware/Auth.js";
import { asyncHandler } from "../../services/errorHandling.js";

const router = Router();
router.get("/getDoctors", asyncHandler(UserController.getDoctors));
router.get(
  "/getSpecificDoctor/:id",
  asyncHandler(UserController.getSpecificDoctor)
);
router.get("/getPatients", asyncHandler(UserController.getPatients));
router.get(
  "/getSpecificPatient/:id",
  asyncHandler(UserController.getSpecificPatient)
);
router.patch("/softDelete/:id", UserController.softDelete);
router.delete("/hardDelete/:id", UserController.hardDelete);
router.patch("/restore/:id", UserController.restore);

export default router;
