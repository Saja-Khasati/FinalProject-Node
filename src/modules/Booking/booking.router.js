import { Router } from "express";
import * as bookingController from "./booking.controller.js";
import { auth } from "../../middleware/Auth.js";
import { asyncHandler } from "../../services/errorHandling.js";

const router = Router();
router.get("/paticularUser",auth(["Patient","Doctor"]),asyncHandler(bookingController.getParticulerUser));
router.post("/create",auth(["Patient"]),asyncHandler(bookingController.createBooking));
router.get("/confirmBooking/:tokenEmail",asyncHandler(bookingController.confirmBooking));
router.delete("/remove/:id",auth(["Patient"]),asyncHandler(bookingController.removeBooking))

export default router;
