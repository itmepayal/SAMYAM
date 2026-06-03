import express from "express";
import {
  createYatraRetreat,
  deleteYatraRetreat,
  getAllYatraRetreats,
  getSingleYatraRetreat,
  updateYatraRetreat,
} from "../yatra/yatra.controller";
import { protect } from "../../middlewares/auth.middlewate";

const yatraRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     YatraRetreat:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: "abc123xyz"
 *         slug:
 *           type: string
 *           example: "kashi-spiritual-retreat"
 *         title:
 *           type: string
 *           example: "Kashi Spiritual Retreat"
 *         date:
 *           type: string
 *           example: "15 December 2025"
 *         duration:
 *           type: string
 *           example: "5 Days / 4 Nights"
 *         description:
 *           type: string
 *           example: "Experience the divine journey of Kashi."
 *         thumbnailImage:
 *           type: string
 *           example: "https://example.com/thumbnail.jpg"
 *         galleryImages:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - "https://example.com/gallery1.jpg"
 *             - "https://example.com/gallery2.jpg"
 *         pricing:
 *           type: object
 *           properties:
 *             tripleOccupancy:
 *               type: string
 *               example: "₹25,000"
 *             doubleOccupancy:
 *               type: string
 *               example: "₹30,000"
 *         itinerary:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               dayTitle:
 *                 type: string
 *                 example: "Day 1 - Arrival"
 *               activities:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     activity:
 *                       type: string
 *                       example: "Ganga Aarti"
 *         darshans:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               categoryName:
 *                 type: string
 *                 example: "Jyotirlinga Darshan"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     itemName:
 *                       type: string
 *                       example: "Kashi Vishwanath Temple"
 *         inclusions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               item:
 *                 type: string
 *                 example: "Hotel Accommodation"
 *         isPublished:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * tags:
 *   name: Yatra Retreats
 *   description: Yatra Retreat Management APIs
 */

/**
 * @swagger
 * /yatras:
 *   get:
 *     summary: Get all Yatra Retreats
 *     tags: [Yatra Retreats]
 *     responses:
 *       200:
 *         description: List of all Yatra Retreats
 */
yatraRouter.get("/", getAllYatraRetreats);

/**
 * @swagger
 * /yatras/{slug}:
 *   get:
 *     summary: Get single Yatra Retreat by slug
 *     tags: [Yatra Retreats]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: kashi-spiritual-retreat
 *     responses:
 *       200:
 *         description: Yatra Retreat details
 *       404:
 *         description: Yatra Retreat not found
 */
yatraRouter.get("/:slug", getSingleYatraRetreat);

yatraRouter.use(protect);

/**
 * @swagger
 * components:
 *   schemas:
 *     YatraRetreat:
 *       type: object
 *       required:
 *         - slug
 *         - name
 *         - img
 *         - thumbnailImage
 *         - slogan
 *         - date
 *         - duration
 *         - desc
 *         - triplePrice
 *         - doublePrice
 *         - staysHeading
 *         - staysDesc
 *         - inclusions
 *         - itinerary
 *         - darshans
 *       properties:
 *         slug:
 *           type: string
 *           example: kedarnath-spiritual-retreat
 *         name:
 *           type: string
 *           example: Kedarnath Spiritual Retreat
 *         img:
 *           type: string
 *           example: https://example.com/images/kedarnath.jpg
 *         thumbnailImage:
 *           type: string
 *           example: https://example.com/images/kedarnath-thumb.jpg
 *         galleryImages:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - https://example.com/images/gallery1.jpg
 *             - https://example.com/images/gallery2.jpg
 *         slogan:
 *           type: string
 *           example: Experience Divine Serenity
 *         date:
 *           type: string
 *           example: 15 August 2026
 *         duration:
 *           type: string
 *           example: 5 Days / 4 Nights
 *         desc:
 *           type: string
 *           example: A spiritually enriching journey to Kedarnath with guided darshans and meditation sessions.
 *         triplePrice:
 *           type: string
 *           example: ₹15,000
 *         doublePrice:
 *           type: string
 *           example: ₹18,000
 *         staysHeading:
 *           type: string
 *           example: Comfortable Accommodation
 *         staysDesc:
 *           type: string
 *           example: Stay in premium hotels and guest houses throughout the journey.
 *         inclusions:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - Accommodation
 *             - Meals
 *             - Transportation
 *             - Guided Darshan
 *         itinerary:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - day
 *               - points
 *             properties:
 *               day:
 *                 type: integer
 *                 example: 1
 *               points:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Arrival and Check-in
 *                   - Evening Satsang
 *         darshans:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - title
 *               - items
 *             properties:
 *               title:
 *                 type: string
 *                 example: Temple Darshans
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Kedarnath Temple
 *                   - Bhairavnath Temple
 *         isPublished:
 *           type: boolean
 *           example: true
 */

/**
 * @swagger
 * /yatras:
 *   post:
 *     summary: Create a new Yatra Retreat
 *     tags: [Yatra Retreats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/YatraRetreat'
 *     responses:
 *       201:
 *         description: Yatra Retreat created successfully
 *       400:
 *         description: Bad request
 */
yatraRouter.post("/", createYatraRetreat);

/**
 * @swagger
 * components:
 *   schemas:
 *     UpdateYatraRetreat:
 *       type: object
 *       properties:
 *         slug:
 *           type: string
 *           example: kedarnath-spiritual-retreat
 *         name:
 *           type: string
 *           example: Kedarnath Spiritual Retreat
 *         img:
 *           type: string
 *           example: https://example.com/images/kedarnath.jpg
 *         thumbnailImage:
 *           type: string
 *           example: https://example.com/images/kedarnath-thumb.jpg
 *         galleryImages:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - https://example.com/images/gallery1.jpg
 *             - https://example.com/images/gallery2.jpg
 *         slogan:
 *           type: string
 *           example: Experience Divine Serenity
 *         date:
 *           type: string
 *           example: 15 August 2026
 *         duration:
 *           type: string
 *           example: 5 Days / 4 Nights
 *         desc:
 *           type: string
 *           example: Updated description for the yatra retreat.
 *         triplePrice:
 *           type: string
 *           example: "15000"
 *         doublePrice:
 *           type: string
 *           example: "18000"
 *         staysHeading:
 *           type: string
 *           example: Premium Accommodation
 *         staysDesc:
 *           type: string
 *           example: Updated accommodation details.
 *         inclusions:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - Accommodation
 *             - Meals
 *             - Transportation
 *         itinerary:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               day:
 *                 type: integer
 *                 example: 1
 *               points:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Arrival
 *                   - Check-in
 *                   - Evening Satsang
 *         darshans:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Temple Darshans
 *               items:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example:
 *                   - Kedarnath Temple
 *                   - Bhairavnath Temple
 *         isPublished:
 *           type: boolean
 *           example: true
 */

/**
 * @swagger
 * /yatras/{id}:
 *   put:
 *     summary: Update Yatra Retreat
 *     tags: [Yatra Retreats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: abc123xyz
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateYatraRetreat'
 *     responses:
 *       200:
 *         description: Yatra Retreat updated successfully
 *       404:
 *         description: Yatra Retreat not found
 */
yatraRouter.put("/:id", updateYatraRetreat);

/**
 * @swagger
 * /yatras/{id}:
 *   delete:
 *     summary: Delete Yatra Retreat
 *     tags: [Yatra Retreats]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: abc123xyz
 *     responses:
 *       200:
 *         description: Yatra Retreat deleted successfully
 *       404:
 *         description: Yatra Retreat not found
 */
yatraRouter.delete("/:id", deleteYatraRetreat);

export default yatraRouter;
