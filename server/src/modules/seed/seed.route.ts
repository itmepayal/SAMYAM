import express from "express";
import { seedDatabase } from "./seed.controller";
import { protect } from "../../middlewares/auth.middlewate";

const seedRouter = express.Router();

/**
 * @swagger
 * /seed:
 *   post:
 *     summary: Seed database with demo data
 *     tags:
 *       - Seed
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Database seeded successfully
 *       500:
 *         description: Seed failed
 */
seedRouter.post("/", protect, seedDatabase);

export default seedRouter;
