import { Router } from "express";
import * as AuthController from "./auth.controller.js";
import { asyncHandler } from "../../services/errorHandling.js";

const router = Router();
router.post("/signup", asyncHandler(AuthController.signup));
router.post("/signin", asyncHandler(AuthController.signin));
router.get("/confirmEmail/:token", asyncHandler(AuthController.confirmEmail));
router.patch("/sendCode", asyncHandler(AuthController.sendCode));
router.patch("/forgetPassword", asyncHandler(AuthController.forgetPassword));
router.delete(
  "/deleteInvalidConfirm",
  asyncHandler(AuthController.deleteInvalidConfirmEmail)
);

export default router;
