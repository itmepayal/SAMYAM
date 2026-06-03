import express from "express";
import {
  createEnquiry,
  deleteEnquiry,
  getAllEnquiries,
  getSingleEnquiry,
  updateEnquiry,
} from "./enquiry.controller";
import { protect } from "../../middlewares/auth.middlewate";

const enquiryRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Enquiry:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: pQkM5G8g3wYz2H7K
 *         name:
 *           type: string
 *           example: Rahul Sharma
 *         phoneNumber:
 *           type: string
 *           example: "9876543210"
 *         preferredYatra:
 *           type: string
 *           example: Kailash Mansarovar
 *         message:
 *           type: string
 *           example: I want details about upcoming yatra.
 *         status:
 *           type: string
 *           enum:
 *             - New
 *             - Contacted
 *             - Resolved
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *     CreateEnquiryRequest:
 *       type: object
 *       required:
 *         - name
 *         - phoneNumber
 *         - preferredYatra
 *         - message
 *       properties:
 *         name:
 *           type: string
 *         phoneNumber:
 *           type: string
 *         preferredYatra:
 *           type: string
 *         message:
 *           type: string
 *
 *     UpdateEnquiryRequest:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           enum:
 *             - New
 *             - Contacted
 *             - Resolved
 */

/**
 * @swagger
 * /enquiries:
 *   post:
 *     summary: Create a new enquiry
 *     tags:
 *       - Enquiries
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateEnquiryRequest'
 *     responses:
 *       201:
 *         description: Enquiry created successfully
 *       400:
 *         description: Bad request
 */
enquiryRouter.post("/", createEnquiry);

enquiryRouter.use(protect);

/**
 * @swagger
 * /enquiries:
 *   get:
 *     summary: Get all enquiries
 *     tags:
 *       - Enquiries
 *     responses:
 *       200:
 *         description: List of enquiries
 */
enquiryRouter.get("/", getAllEnquiries);

/**
 * @swagger
 * /enquiries/{id}:
 *   get:
 *     summary: Get single enquiry
 *     tags:
 *       - Enquiries
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enquiry found
 *       404:
 *         description: Enquiry not found
 */
enquiryRouter.get("/:id", getSingleEnquiry);

/**
 * @swagger
 * /enquiries/{id}:
 *   put:
 *     summary: Update enquiry status
 *     tags:
 *       - Enquiries
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
 *             $ref: '#/components/schemas/UpdateEnquiryRequest'
 *     responses:
 *       200:
 *         description: Enquiry updated successfully
 *       404:
 *         description: Enquiry not found
 */
enquiryRouter.put("/:id", updateEnquiry);

/**
 * @swagger
 * /enquiries/{id}:
 *   delete:
 *     summary: Delete enquiry
 *     tags:
 *       - Enquiries
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enquiry deleted successfully
 *       404:
 *         description: Enquiry not found
 */
enquiryRouter.delete("/:id", deleteEnquiry);

export default enquiryRouter;
