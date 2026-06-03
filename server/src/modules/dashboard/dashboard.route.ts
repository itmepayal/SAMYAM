import express from "express";
import { getDashboardStats } from "./dashboard.controller";

const dashboardRoute = express.Router();

/**
 * @swagger
 * /dashboard/stats:
 *   get:
 *     summary: Get dashboard statistics
 *     description: Returns total enquiries, yatras, videos and teerthas count.
 *     tags:
 *       - Dashboard
 *     responses:
 *       200:
 *         description: Dashboard statistics fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Dashboard statistics fetched successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     totalEnquiries:
 *                       type: integer
 *                       example: 25
 *                     totalRetreats:
 *                       type: integer
 *                       example: 12
 *                     totalVideos:
 *                       type: integer
 *                       example: 8
 *                     totalTeerthas:
 *                       type: integer
 *                       example: 30
 *       500:
 *         description: Internal server error
 */

/* ======================================================
   DASHBOARD ROUTES
====================================================== */
dashboardRoute.get("/stats", getDashboardStats);

export default dashboardRoute;
