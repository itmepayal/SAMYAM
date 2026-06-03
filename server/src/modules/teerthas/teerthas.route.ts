import express from "express";
import {
  createTeertha,
  deleteTeertha,
  getAllTeerthas,
  getSingleTeertha,
  updateTeertha,
} from "./teerthas.controller";
import { protect } from "../../middlewares/auth.middlewate";

const teerthaRouter = express.Router();

/**
 * @swagger
 * /teerthas:
 *   get:
 *     summary: Get all Teerthas
 *     tags: [Teerthas]
 *     responses:
 *       200:
 *         description: List of all Teerthas
 */
teerthaRouter.get("/", getAllTeerthas);

/**
 * @swagger
 * /teerthas/{slug}:
 *   get:
 *     summary: Get single Teertha by slug
 *     tags: [Teerthas]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: kedarnath
 *     responses:
 *       200:
 *         description: Teertha fetched successfully
 *       404:
 *         description: Teertha not found
 */
teerthaRouter.get("/:slug", getSingleTeertha);

teerthaRouter.use(protect);

/**
 * @swagger
 * /teerthas:
 *   post:
 *     summary: Create a new Teertha
 *     tags: [Teerthas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - slug
 *               - name
 *               - description
 *               - thumbnailImage
 *               - region
 *               - significance
 *               - duration
 *             properties:
 *               slug:
 *                 type: string
 *                 example: kedarnath-yatra
 *
 *               name:
 *                 type: string
 *                 example: Kedarnath Yatra
 *
 *               description:
 *                 type: string
 *                 example: Sacred pilgrimage to Kedarnath Temple
 *
 *               thumbnailImage:
 *                 type: string
 *                 example: https://example.com/thumb.jpg
 *
 *               img:
 *                 type: string
 *                 example: https://example.com/banner.jpg
 *
 *               galleryImages:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - https://example.com/img1.jpg
 *                   - https://example.com/img2.jpg
 *
 *               region:
 *                 type: string
 *                 example: Uttarakhand
 *
 *               significance:
 *                 type: string
 *                 example: One of the 12 Jyotirlingas
 *
 *               duration:
 *                 type: string
 *                 example: 5 Days
 *
 *               tagline:
 *                 type: string
 *                 example: A Journey of Faith
 *
 *               slogan:
 *                 type: string
 *                 example: Har Har Mahadev
 *
 *               date:
 *                 type: string
 *                 example: 15 Sept 2026
 *
 *               desc:
 *                 type: string
 *                 example: Complete pilgrimage package with accommodation and meals.
 *
 *               triplePrice:
 *                 type: string
 *                 example: "18999"
 *
 *               doublePrice:
 *                 type: string
 *                 example: "21999"
 *
 *               highlights:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - VIP Darshan
 *                   - Luxury Stay
 *                   - Meals Included
 *
 *               inclusions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Hotel Stay
 *                   - Meals
 *                   - Transportation
 *
 *               itinerary:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                       example: Day 1
 *                     points:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example:
 *                         - Arrival
 *                         - Check-in Hotel
 *
 *               staysHeading:
 *                 type: string
 *                 example: Comfortable Accommodation
 *
 *               staysDesc:
 *                 type: string
 *                 example: Premium hotels near temple area
 *
 *               darshans:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: Kedarnath Darshan
 *                     items:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example:
 *                         - Morning Aarti
 *                         - VIP Entry
 *
 *               isPublished:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Teertha created successfully
 */
teerthaRouter.post("/", createTeertha);

/**
 * @swagger
 * /teerthas/{id}:
 *   put:
 *     summary: Update Teertha
 *     tags: [Teerthas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: AbCdEfGh123
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               slug:
 *                 type: string
 *                 example: kedarnath-yatra
 *
 *               name:
 *                 type: string
 *                 example: Kedarnath Yatra
 *
 *               description:
 *                 type: string
 *                 example: Sacred pilgrimage to Kedarnath Temple
 *
 *               thumbnailImage:
 *                 type: string
 *                 example: https://example.com/thumb.jpg
 *
 *               img:
 *                 type: string
 *                 example: https://example.com/banner.jpg
 *
 *               galleryImages:
 *                 type: array
 *                 items:
 *                   type: string
 *
 *               region:
 *                 type: string
 *                 example: Uttarakhand
 *
 *               significance:
 *                 type: string
 *                 example: One of the 12 Jyotirlingas
 *
 *               duration:
 *                 type: string
 *                 example: 5 Days
 *
 *               tagline:
 *                 type: string
 *                 example: A Journey of Faith
 *
 *               slogan:
 *                 type: string
 *                 example: Har Har Mahadev
 *
 *               date:
 *                 type: string
 *                 example: 15 Sept 2026
 *
 *               desc:
 *                 type: string
 *                 example: Updated pilgrimage package description
 *
 *               triplePrice:
 *                 type: string
 *                 example: "18999"
 *
 *               doublePrice:
 *                 type: string
 *                 example: "21999"
 *
 *               highlights:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - VIP Darshan
 *                   - Luxury Stay
 *
 *               inclusions:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Hotel Stay
 *                   - Meals
 *
 *               itinerary:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     day:
 *                       type: string
 *                       example: Day 1
 *                     points:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example:
 *                         - Arrival
 *                         - Check-in Hotel
 *
 *               staysHeading:
 *                 type: string
 *                 example: Comfortable Accommodation
 *
 *               staysDesc:
 *                 type: string
 *                 example: Premium hotels near temple area
 *
 *               darshans:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                       example: Kedarnath Darshan
 *                     items:
 *                       type: array
 *                       items:
 *                         type: string
 *                       example:
 *                         - Morning Aarti
 *                         - VIP Entry
 *
 *               isPublished:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       200:
 *         description: Teertha updated successfully
 *       404:
 *         description: Teertha not found
 */
teerthaRouter.put("/:id", updateTeertha);

/**
 * @swagger
 * /teerthas/{id}:
 *   delete:
 *     summary: Delete Teertha
 *     tags: [Teerthas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: AbCdEfGh123
 *     responses:
 *       200:
 *         description: Teertha deleted successfully
 *       404:
 *         description: Teertha not found
 */
teerthaRouter.delete("/:id", deleteTeertha);

export default teerthaRouter;
