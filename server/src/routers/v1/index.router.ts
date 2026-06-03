import express from "express";

import authRouter from "../../modules/auth/auth.routes";
import yatraRouter from "../../modules/yatra/yatra.route";
import teerthaRouter from "../../modules/teerthas/teerthas.route";
import testimonialRouter from "../../modules/testimonial/testimonial.route";
import enquiryRouter from "../../modules/enquiry/enquiry.route";
import dashboardRouter from "../../modules/dashboard/dashboard.route";
import { protect } from "../../middlewares/auth.middlewate";
import blogRouter from "../../modules/blog/blog.route";

const v1Router = express.Router();

/* ======================================================
   AUTH ROUTES
====================================================== */

v1Router.use("/auth", authRouter);

/* ======================================================
   PROTECTED ROUTES
====================================================== */

/* =========================
   YATRA & RETREAT ROUTES
========================= */

v1Router.use("/yatras", yatraRouter);

/* =========================
   TEERTHA ROUTES
========================= */

v1Router.use("/teerthas", teerthaRouter);

/* =========================
   TESTIMONIAL ROUTES
========================= */

v1Router.use("/testimonials", testimonialRouter);

/* =========================
   ENQUIRY ROUTES
========================= */

v1Router.use("/enquiries", enquiryRouter);

/* =========================
   ENQUIRY ROUTES
========================= */

v1Router.use("/blogs", blogRouter);

/* =========================
   DASHBOARD ROUTES
========================= */

v1Router.use("/dashboard", protect, dashboardRouter);

export default v1Router;
