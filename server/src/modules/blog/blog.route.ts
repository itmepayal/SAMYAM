import express from "express";

import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getFeaturedBlogs,
  getPublishedBlogs,
  getSingleBlog,
  updateBlog,
} from "./blog.controller";

import { protect } from "../../middlewares/auth.middlewate";

const blogRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog Management APIs
 */

/**
 * @swagger
 * /blogs:
 *   get:
 *     summary: Get all blogs (Admin)
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: List of all blogs
 */
blogRouter.get("/", getAllBlogs);

/**
 * @swagger
 * /blogs/published:
 *   get:
 *     summary: Get published blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Published blogs fetched successfully
 */
blogRouter.get("/published", getPublishedBlogs);

/**
 * @swagger
 * /blogs/featured:
 *   get:
 *     summary: Get featured blogs
 *     tags: [Blogs]
 *     responses:
 *       200:
 *         description: Featured blogs fetched successfully
 */
blogRouter.get("/featured", getFeaturedBlogs);

/**
 * @swagger
 * /blogs/{slug}:
 *   get:
 *     summary: Get single blog by slug
 *     tags: [Blogs]
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog fetched successfully
 *       404:
 *         description: Blog not found
 */
blogRouter.get("/:slug", getSingleBlog);

/* Protected Routes */
blogRouter.use(protect);

/**
 * @swagger
 * /blogs:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - slug
 *               - title
 *               - excerpt
 *               - content
 *               - thumbnailImage
 *               - author
 *               - category
 *             properties:
 *               slug:
 *                 type: string
 *               title:
 *                 type: string
 *               excerpt:
 *                 type: string
 *               content:
 *                 type: string
 *               thumbnailImage:
 *                 type: string
 *               galleryImages:
 *                 type: array
 *                 items:
 *                   type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               readTime:
 *                 type: string
 *               isFeatured:
 *                 type: boolean
 *               isPublished:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Blog created successfully
 */
blogRouter.post("/", createBlog);

/**
 * @swagger
 * /blogs/{id}:
 *   put:
 *     summary: Update blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
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
 *               slug:
 *                 type: string
 *               title:
 *                 type: string
 *               excerpt:
 *                 type: string
 *               content:
 *                 type: string
 *               thumbnailImage:
 *                 type: string
 *               galleryImages:
 *                 type: array
 *                 items:
 *                   type: string
 *               author:
 *                 type: string
 *               category:
 *                 type: string
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *               readTime:
 *                 type: string
 *               isFeatured:
 *                 type: boolean
 *               isPublished:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Blog updated successfully
 */
blogRouter.put("/:id", updateBlog);

/**
 * @swagger
 * /blogs/{id}:
 *   delete:
 *     summary: Delete blog
 *     tags: [Blogs]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Blog deleted successfully
 *       404:
 *         description: Blog not found
 */
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
