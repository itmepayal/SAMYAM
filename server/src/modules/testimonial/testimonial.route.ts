import express from "express";

import {
  createTestimonialVideo,
  deleteTestimonialVideo,
  getAllTestimonialVideos,
  getFeaturedVideos,
  getPublishedVideos,
  getSingleTestimonialVideo,
  incrementVideoViews,
  updateTestimonialVideo,
} from "./testimonial.controller";
import { protect } from "../../middlewares/auth.middlewate";

const testimonialRouter = express.Router();

/**
 * @swagger
 * /testimonials:
 *   get:
 *     summary: Get all videos (Admin)
 *     tags: [Testimonial Videos]
 *     responses:
 *       200:
 *         description: List of all videos
 */
testimonialRouter.get("/", getAllTestimonialVideos);

/**
 * @swagger
 * /testimonials/published:
 *   get:
 *     summary: Get all published videos
 *     tags: [Testimonial Videos]
 *     responses:
 *       200:
 *         description: Published videos fetched successfully
 */
testimonialRouter.get("/published", getPublishedVideos);

/**
 * @swagger
 * /testimonials/featured:
 *   get:
 *     summary: Get featured videos
 *     tags: [Testimonial Videos]
 *     responses:
 *       200:
 *         description: Featured videos fetched successfully
 */
testimonialRouter.get("/featured", getFeaturedVideos);

/**
 * @swagger
 * /testimonials/{id}:
 *   get:
 *     summary: Get single video
 *     tags: [Testimonial Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Video fetched successfully
 *       404:
 *         description: Video not found
 */
testimonialRouter.get("/:id", getSingleTestimonialVideo);

/**
 * @swagger
 * /testimonials/{id}/view:
 *   patch:
 *     summary: Increment video views
 *     tags: [Testimonial Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: View count updated
 */
testimonialRouter.patch("/:id/view", incrementVideoViews);

testimonialRouter.use(protect);

/**
 * @swagger
 * tags:
 *   name: Testimonial Videos
 *   description: Testimonial & Knowledge Portal Video APIs
 */

/**
 * @swagger
 * /testimonials:
 *   post:
 *     summary: Create a new video
 *     tags: [Testimonial Videos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - category
 *               - youtubeLink
 *               - thumbnailImage
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *                 enum:
 *                   - Kashi Knowledge Portal
 *                   - Kashi Knowledge Portal • Quick Bits
 *                   - Testimonials
 *               youtubeLink:
 *                 type: string
 *               thumbnailImage:
 *                 type: string
 *               featured:
 *                 type: boolean
 *               isPublished:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Video created successfully
 */
testimonialRouter.post("/", createTestimonialVideo);

/**
 * @swagger
 * /testimonials/{id}:
 *   put:
 *     summary: Update video
 *     tags: [Testimonial Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               youtubeLink:
 *                 type: string
 *               thumbnailImage:
 *                 type: string
 *               featured:
 *                 type: boolean
 *               isPublished:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Video updated successfully
 */
testimonialRouter.put("/:id", updateTestimonialVideo);

/**
 * @swagger
 * /testimonials/{id}:
 *   delete:
 *     summary: Delete video
 *     tags: [Testimonial Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Video deleted successfully
 *       404:
 *         description: Video not found
 */
testimonialRouter.delete("/:id", deleteTestimonialVideo);

export default testimonialRouter;
