import { db } from "../../config/firebase";
import { NotFoundError } from "../../utils/errors/app.error";

/* =========================
   TYPES
========================= */

export type VideoCategory =
  | "Kashi Knowledge Portal"
  | "Kashi Knowledge Portal • Quick Bits"
  | "Testimonials";

export interface CreateTestimonialVideoPayload {
  title: string;
  description: string;
  category: VideoCategory;
  youtubeLink: string;
  thumbnailImage: string;
  featured?: boolean;
  isPublished?: boolean;
}

export interface UpdateTestimonialVideoPayload {
  title?: string;
  description?: string;
  category?: VideoCategory;
  youtubeLink?: string;
  thumbnailImage?: string;
  featured?: boolean;
  isPublished?: boolean;
}

/* =========================
   HELPER
========================= */

const extractYoutubeVideoId = (url: string): string | null => {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;

  const match = url.match(regex);

  return match ? match[1] : null;
};

/* =========================
   CREATE VIDEO
========================= */

export const createTestimonialVideoService = async (
  payload: CreateTestimonialVideoPayload,
) => {
  const videoId = extractYoutubeVideoId(payload.youtubeLink);

  const docRef = await db.collection("videos").add({
    title: payload.title,
    description: payload.description,
    category: payload.category,
    youtubeLink: payload.youtubeLink,
    videoId,
    thumbnailImage: payload.thumbnailImage,
    featured: payload.featured ?? false,
    isPublished: payload.isPublished ?? true,
    views: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const doc = await docRef.get();

  return {
    id: doc.id,
    ...doc.data(),
  };
};

/* =========================
   GET ALL VIDEOS
========================= */

export const getAllTestimonialVideosService = async () => {
  const snapshot = await db
    .collection("videos")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET PUBLISHED VIDEOS
========================= */

export const getPublishedVideosService = async () => {
  const snapshot = await db.collection("videos").get();

  return snapshot.docs
    .map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    .filter((video) => (video as any).isPublished)
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
};

/* =========================
   GET FEATURED VIDEOS
========================= */

export const getFeaturedVideosService = async () => {
  const snapshot = await db
    .collection("videos")
    .where("featured", "==", true)
    .where("isPublished", "==", true)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET SINGLE VIDEO
========================= */

export const getSingleTestimonialVideoService = async (id: string) => {
  const doc = await db.collection("videos").doc(id).get();

  if (!doc.exists) {
    throw new NotFoundError("Video not found");
  }

  return {
    id: doc.id,
    ...doc.data(),
  };
};

/* =========================
   UPDATE VIDEO
========================= */

export const updateTestimonialVideoService = async (
  videoId: string,
  payload: UpdateTestimonialVideoPayload,
) => {
  const ref = db.collection("videos").doc(videoId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Video not found");
  }

  await ref.update({
    ...payload,

    ...(payload.youtubeLink && {
      videoId: extractYoutubeVideoId(payload.youtubeLink),
    }),

    updatedAt: new Date(),
  });

  const updatedDoc = await ref.get();

  return {
    id: updatedDoc.id,
    ...updatedDoc.data(),
  };
};

/* =========================
   INCREMENT VIDEO VIEWS
========================= */

export const incrementVideoViewsService = async (id: string) => {
  const ref = db.collection("videos").doc(id);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Video not found");
  }

  const currentViews = doc.data()?.views || 0;

  await ref.update({
    views: currentViews + 1,
  });

  return true;
};

/* =========================
   DELETE VIDEO
========================= */

export const deleteTestimonialVideoService = async (videoId: string) => {
  const ref = db.collection("videos").doc(videoId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Video not found");
  }

  await ref.delete();
};
