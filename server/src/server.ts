import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { serverConfig } from "./config";
import logger from "./config/logger.config";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";
import v1Router from "./routers/v1/index.router";
import {
  appErrorHandler,
  genericErrorHandler,
} from "./middlewares/error.middleware";

/* =========================
   APP INIT
========================= */
const app = express();

/* =========================
   MIDDLEWARES
========================= */
app.use(
  cors({
    origin: [
      "https://samyam-frontend.pages.dev/",
      "http://localhost:3000",
      "http://localhost:5173",
      "https://samyam.co",
    ],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* =========================
   HEALTH CHECK
========================= */
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running successfully",
    environment: serverConfig.NODE_ENV,
  });
});

/* =========================
   SWAGGER DOCS
========================= */
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/* =========================
   API ROUTES
========================= */
app.use("/api/v1", v1Router);

/* =========================
   ERROR HANDLERS (MUST BE LAST)
========================= */
app.use(appErrorHandler);
app.use(genericErrorHandler);

/* =========================
   START SERVER
========================= */
app.listen(serverConfig.PORT, () => {
  logger.info(`Server running on http://localhost:${serverConfig.PORT}`);
  logger.info(`Environment: ${serverConfig.NODE_ENV}`);
});

export default app;
