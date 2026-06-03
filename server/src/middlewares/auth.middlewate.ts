import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import admin from "../config/firebase";
import { UnauthorizedError } from "../utils/errors/app.error";

export interface AuthRequest extends Request {
  user?: admin.auth.DecodedIdToken;
}

/* =========================
   FIREBASE PROTECT MIDDLEWARE
========================= */
export const protect = asyncHandler(
  async (
    req: Request & { user?: admin.auth.DecodedIdToken },
    _res: Response,
    next: NextFunction,
  ) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedError("Access denied. No token provided.");
    }

    const token = authHeader.split(" ")[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(token);

      req.user = decodedToken;

      next();
    } catch (error) {
      throw new UnauthorizedError("Invalid or expired Firebase token.");
    }
  },
);
