import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  registerUserService,
  loginUserService,
  getCurrentUserService,
  forgotPasswordService,
  refreshAccessTokenService,
} from "../auth/auth.service";

/* =========================
   REGISTER CONTROLLER
========================= */
export const registerUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    const result = await registerUserService(email, password);
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        uid: result.user.uid,
        email: result.user.email,
        token: result.token,
      },
    });
  },
);

/* =========================
   LOGIN CONTROLLER
========================= */
export const loginUser = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    const result = await loginUserService(email, password);
    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        uid: result.uid,
        accessToken: result.accessToken,
        refreshToken: result.refreshToken,
      },
    });
  },
);

/* =========================
   REFRESH TOKEN CONTROLLER
========================= */
export const refreshAccessToken = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { refreshToken } = req.body;
    const result = await refreshAccessTokenService(refreshToken);
    res.status(200).json({
      success: true,
      message: "Access token refreshed",
      data: {
        accessToken: result.accessToken,
      },
    });
  },
);

/* =========================
   CURRENT USER CONTROLLER
========================= */
export const getCurrentUser = asyncHandler(
  async (req: any, res: Response): Promise<void> => {
    const uid = req.user.uid;
    const user = await getCurrentUserService(uid);
    res.status(200).json({
      success: true,
      message: "Current user fetched successfully",
      data: user,
    });
  },
);

/* =========================
   FORGOT PASSWORD CONTROLLER
========================= */
export const forgotPassword = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email } = req.body;
    const result = await forgotPasswordService(email);
    res.status(200).json({
      success: true,
      message: "Password reset email sent",
      data: {
        resetLink: result.resetLink,
      },
    });
  },
);

/* =========================
   LOGOUT CONTROLLER
========================= */
export const logoutUser = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  },
);
