import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/* =========================
   SERVER CONFIG TYPE
========================= */

type ServerConfig = {
  PORT: number;
  NODE_ENV: string;

  JWT_SECRET: string;
  JWT_REFRESH_SECRET: string;

  JWT_EXPIRES_IN: jwt.SignOptions["expiresIn"];
  JWT_REFRESH_EXPIRES_IN: jwt.SignOptions["expiresIn"];

  CLIENT_URL: string;

  FIREBASE_PROJECT_ID: string;
  FIREBASE_CLIENT_EMAIL: string;
  FIREBASE_PRIVATE_KEY: string;

  FIREBASE_API_KEY: string;
};

/* =========================
   VALIDATE ENV VARIABLES
========================= */

const requiredEnvVariables = [
  "JWT_SECRET",
  "JWT_REFRESH_SECRET",
  "CLIENT_URL",
  "FIREBASE_PROJECT_ID",
  "FIREBASE_CLIENT_EMAIL",
  "FIREBASE_PRIVATE_KEY",
  "FIREBASE_API_KEY",
] as const;

requiredEnvVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
});

/* =========================
   SERVER CONFIG
========================= */

export const serverConfig: ServerConfig = {
  PORT: Number(process.env.PORT) || 5000,

  NODE_ENV: process.env.NODE_ENV || "development",

  JWT_SECRET: process.env.JWT_SECRET!,

  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,

  JWT_EXPIRES_IN:
    (process.env.JWT_EXPIRES_IN as jwt.SignOptions["expiresIn"]) || "7d",
  JWT_REFRESH_EXPIRES_IN:
    (process.env.JWT_REFRESH_EXPIRES_IN as jwt.SignOptions["expiresIn"]) ||
    "30d",
  CLIENT_URL: process.env.CLIENT_URL!,

  FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
  FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL!,
  FIREBASE_PRIVATE_KEY: process.env.FIREBASE_PRIVATE_KEY!,

  FIREBASE_API_KEY: process.env.FIREBASE_API_KEY!,
};
