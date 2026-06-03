import { Request, Response } from "express";

import { yatras } from "../../data/yatra";
import { teerthas } from "../../data/teerthas";
import { blogs } from "../../data/blog";
import { enquiries } from "../../data/enquiry";
import { videos } from "../../data/video";

import { createYatraRetreatService } from "../yatra/yatra.service";
import { createTeerthaService } from "../teerthas/teerthas.service";
import { createBlogService } from "../blog/blog.service";
import { createEnquiryService } from "../enquiry/enquiry.service";
import { createTestimonialVideoService } from "../testimonial/testimonial.service";

export const seedDatabase = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const result = {
      yatras: 0,
      teerthas: 0,
      blogs: 0,
      enquiries: 0,
      videos: 0,
    };

    for (const yatra of yatras.slice(0, 12)) {
      try {
        await createYatraRetreatService(yatra);
        result.yatras++;
      } catch (error) {
        console.error("Yatra seed failed:", error);
      }
    }

    for (const teertha of teerthas.slice(0, 12)) {
      try {
        await createTeerthaService(teertha);
        result.teerthas++;
      } catch (error) {
        console.error("Teertha seed failed:", error);
      }
    }

    for (const blog of blogs.slice(0, 12)) {
      try {
        await createBlogService(blog);
        result.blogs++;
      } catch (error) {
        console.error("Blog seed failed:", error);
      }
    }

    for (const enquiry of enquiries.slice(0, 12)) {
      try {
        await createEnquiryService(enquiry);
        result.enquiries++;
      } catch (error) {
        console.error("Enquiry seed failed:", error);
      }
    }

    for (const video of videos.slice(0, 12)) {
      try {
        await createTestimonialVideoService(video);
        result.videos++;
      } catch (error) {
        console.error("Video seed failed:", error);
      }
    }

    res.status(200).json({
      success: true,
      message: "Database seeded successfully",
      data: result,
    });
  } catch (error) {
    console.error("Seed failed:", error);

    res.status(500).json({
      success: false,
      message: "Database seed failed",
      error: error instanceof Error ? error.message : "Internal Server Error",
    });
  }
};
