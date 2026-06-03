import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { getDashboardStatsService } from "./dashboard.service";

/* ======================================================
   GET DASHBOARD STATS
====================================================== */
export const getDashboardStats = asyncHandler(
  async (_req: Request, res: Response): Promise<void> => {
    const stats = await getDashboardStatsService();
    res.status(200).json({
      success: true,
      message: "Dashboard statistics fetched successfully",
      data: {
        totalEnquiries: stats.totalEnquiries,
        totalRetreats: stats.totalRetreats,
        totalVideos: stats.totalVideos,
        totalTeerthas: stats.totalTeerthas,
        totalBlogs: stats.totalBlogs,
      },
    });
  },
);
