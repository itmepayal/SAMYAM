import { db } from "../../config/firebase";

/* ======================================================
   GET DASHBOARD STATS SERVICE
====================================================== */
export const getDashboardStatsService = async () => {
  const [
    enquiriesSnapshot,
    yatrasSnapshot,
    videosSnapshot,
    teerthasSnapshot,
    blogsSnapshot,
  ] = await Promise.all([
    db.collection("enquiries").get(),
    db.collection("yatras").get(),
    db.collection("videos").get(),
    db.collection("teerthas").get(),
    db.collection("blogs").get(),
  ]);

  return {
    totalEnquiries: enquiriesSnapshot.size,
    totalRetreats: yatrasSnapshot.size,
    totalVideos: videosSnapshot.size,
    totalTeerthas: teerthasSnapshot.size,
    totalBlogs: blogsSnapshot.size,
  };
};
