import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

import {
  createTestimonialVideoService,
  deleteTestimonialVideoService,
  getAllTestimonialVideosService,
  getFeaturedVideosService,
  getPublishedVideosService,
  getSingleTestimonialVideoService,
  incrementVideoViewsService,
  updateTestimonialVideoService,
} from "./testimonial.service";

/* =========================
   CREATE VIDEO
========================= */
export const createTestimonialVideo = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const video = await createTestimonialVideoService(req.body);

    res.status(201).json({
      success: true,
      message: "Video created successfully",
      data: video,
    });
  },
);

/* =========================
   GET ALL VIDEOS (ADMIN)
========================= */
export const getAllTestimonialVideos = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const videos = await getAllTestimonialVideosService();

    res.status(200).json({
      success: true,
      count: videos.length,
      data: videos,
    });
  },
);

/* =========================
   GET PUBLISHED VIDEOS
========================= */
export const getPublishedVideos = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const videos = await getPublishedVideosService();

    res.status(200).json({
      success: true,
      count: videos.length,
      data: videos,
    });
  },
);

/* =========================
   GET FEATURED VIDEOS
========================= */
export const getFeaturedVideos = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const videos = await getFeaturedVideosService();

    res.status(200).json({
      success: true,
      count: videos.length,
      data: videos,
    });
  },
);

/* =========================
   GET SINGLE VIDEO
========================= */
export const getSingleTestimonialVideo = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const video = await getSingleTestimonialVideoService(id);

    res.status(200).json({
      success: true,
      data: video,
    });
  },
);

/* =========================
   UPDATE VIDEO
========================= */
export const updateTestimonialVideo = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const video = await updateTestimonialVideoService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Video updated successfully",
      data: video,
    });
  },
);

/* =========================
   INCREMENT VIEWS
========================= */
export const incrementVideoViews = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    await incrementVideoViewsService(id);

    res.status(200).json({
      success: true,
      message: "View count updated successfully",
    });
  },
);

/* =========================
   DELETE VIDEO
========================= */
export const deleteTestimonialVideo = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    await deleteTestimonialVideoService(id);

    res.status(200).json({
      success: true,
      message: "Video deleted successfully",
    });
  },
);
