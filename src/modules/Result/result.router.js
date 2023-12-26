import { Router } from "express";
import * as ResultController from "./result.controller.js";
import { auth } from "../../middleware/Auth.js";
import { asyncHandler } from "../../services/errorHandling.js";

const router = Router();
router.post("/addResult",auth(["Doctor"]),asyncHandler(ResultController.addResult));
router.get("/getResult/:id",auth(["Doctor"]),asyncHandler(ResultController.getResult))
router.get("/sendResult/:tokenEmail",asyncHandler(ResultController.sendResult))



export default router;
