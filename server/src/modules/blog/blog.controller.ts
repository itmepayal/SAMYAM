import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import {
  createBlogService,
  deleteBlogService,
  getAllBlogsService,
  getFeaturedBlogsService,
  getPublishedBlogsService,
  getSingleBlogService,
  updateBlogService,
} from "./blog.service";

/* =========================
   CREATE BLOG
========================= */
export const createBlog = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const blog = await createBlogService(req.body);

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  },
);

/* =========================
   GET ALL BLOGS (ADMIN)
========================= */
export const getAllBlogs = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const blogs = await getAllBlogsService();

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  },
);

/* =========================
   GET PUBLISHED BLOGS
========================= */
export const getPublishedBlogs = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const blogs = await getPublishedBlogsService();

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  },
);

/* =========================
   GET FEATURED BLOGS
========================= */
export const getFeaturedBlogs = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const blogs = await getFeaturedBlogsService();

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  },
);

/* =========================
   GET SINGLE BLOG
========================= */
export const getSingleBlog = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { slug } = req.params;

    const blog = await getSingleBlogService(slug);

    res.status(200).json({
      success: true,
      data: blog,
    });
  },
);

/* =========================
   UPDATE BLOG
========================= */
export const updateBlog = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const blog = await updateBlogService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: blog,
    });
  },
);

/* =========================
   DELETE BLOG
========================= */
export const deleteBlog = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    await deleteBlogService(id);

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  },
);
