import swaggerJsdoc from "swagger-jsdoc";
import { serverConfig } from ".";

const isProduction = serverConfig.NODE_ENV === "production";

const options = {
  definition: {
    openapi: "3.0.0",

    info: {
      title: "SAMYAM BACKEND API",
      version: "1.0.0",
      description: "Samyam Backend API Documentation",
      contact: {
        name: "Samyam Team",
        email: "support@samyam.co",
      },
    },

    servers: [
      {
        url: isProduction
          ? "https://samyam.onrender.com/api/v1"
          : `http://localhost:${serverConfig.PORT}/api/v1`,
        description: isProduction ? "Production Server" : "Development Server",
      },
    ],
  },

  apis: ["./src/**/*.ts"],
};

export const swaggerSpec = swaggerJsdoc(options);
