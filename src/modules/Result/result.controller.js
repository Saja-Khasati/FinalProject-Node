import resultModel from "../../../DB/models/result.model.js";
import userModel from "../../../DB/models/user.model.js";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../services/sendEmail.js";

export const addResult = async (req, res, next) => {
  const {
    patientId,
    doctorName,
    patientEmail,
    result,
    description,
    Notes,
    examinationTime,
    Date,
    Medicine,
  } = req.body;

  const checkDoctor = await userModel.findById(req.user._id);
  if (!checkDoctor) {
    return next(new Error("doctor not found", { cause: 404 }));
  }
  const checkPatient = await userModel.findById(patientId);
  if (!checkPatient) {
    return next(new Error("patient not found", { cause: 404 }));
  }
  const results = await resultModel.create({
    patientId,
    doctorName,
    patientEmail,
    result,
    description,
    Notes,
    examinationTime,
    Date,
    Medicine,
  });
  const tokenEmail = jwt.sign({ patientEmail }, process.env.CONFIRMEMAIL);
  const html = `<a href='${req.protocol}://${req.headers.host}/result/sendResult/${tokenEmail}'>YOUR RESULT</a>`;
  sendEmail(patientEmail, "check your result", html);

  return res.status(201).json({ message: "success", results });
};
//----------------------------------------------------------------------------
export const getResult = async (req, res, next) => {
  const ID = req.params.id;
  const results = await resultModel.findById(ID);
  if (!results) {
    return next(new Error("result not found", { cause: 404 }));
  }
  const getR = await resultModel.find();

  return res.status(201).json({ message: "success", getR });
};

//-----------------------------------------------------------------------------
export const sendResult = async (req, res, next) => {
  const tokenEmail = req.params.tokenEmail;
  const decoded = jwt.verify(tokenEmail, process.env.CONFIRMEMAIL);
  if (!decoded) {
    return next(new Error("Invalid token", { cause: 404 }));
  }
  const user = await resultModel.findOne({
    patientEmail: decoded.patientEmail,
  });
  if (!user) {
    return next(
      new Error("Invalid recieve your result", {
        cause: 400,
      })
    );
  }
  return res.status(200).json({ message: " your result is arrive", user });
};
