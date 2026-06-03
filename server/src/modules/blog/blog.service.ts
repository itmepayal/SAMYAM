import { db } from "../../config/firebase";
import { ConflictError, NotFoundError } from "../../utils/errors/app.error";

/* =========================
   TYPES
========================= */

export interface CreateBlogPayload {
  slug: string;
  title: string;
  excerpt: string;
  content: string;

  thumbnailImage: string;
  galleryImages?: string[];

  author: string;
  category: string;
  tags?: string[];

  readTime?: string;

  isFeatured?: boolean;
  isPublished?: boolean;
}

export interface UpdateBlogPayload {
  slug?: string;
  title?: string;
  excerpt?: string;
  content?: string;

  thumbnailImage?: string;
  galleryImages?: string[];

  author?: string;
  category?: string;
  tags?: string[];

  readTime?: string;

  isFeatured?: boolean;
  isPublished?: boolean;
}

/* =========================
   CREATE BLOG
========================= */

export const createBlogService = async (payload: CreateBlogPayload) => {
  const existingBlog = await db
    .collection("blogs")
    .where("slug", "==", payload.slug.toLowerCase())
    .limit(1)
    .get();

  if (!existingBlog.empty) {
    throw new ConflictError("Blog with this slug already exists");
  }

  const docRef = await db.collection("blogs").add({
    slug: payload.slug.toLowerCase(),
    title: payload.title,
    excerpt: payload.excerpt,
    content: payload.content,

    thumbnailImage: payload.thumbnailImage,
    galleryImages: payload.galleryImages || [],

    author: payload.author,
    category: payload.category,
    tags: payload.tags || [],

    readTime: payload.readTime || "5 min read",

    isFeatured: payload.isFeatured ?? false,
    isPublished: payload.isPublished ?? true,

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
   GET ALL BLOGS
========================= */

export const getAllBlogsService = async () => {
  const snapshot = await db
    .collection("blogs")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET PUBLISHED BLOGS
========================= */

export const getPublishedBlogsService = async () => {
  const snapshot = await db
    .collection("blogs")
    .where("isPublished", "==", true)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET FEATURED BLOGS
========================= */

export const getFeaturedBlogsService = async () => {
  const snapshot = await db
    .collection("blogs")
    .where("isFeatured", "==", true)
    .where("isPublished", "==", true)
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET SINGLE BLOG
========================= */

export const getSingleBlogService = async (slug: string) => {
  const snapshot = await db
    .collection("blogs")
    .where("slug", "==", slug.toLowerCase())
    .limit(1)
    .get();

  if (snapshot.empty) {
    throw new NotFoundError("Blog not found");
  }

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...doc.data(),
  };
};

/* =========================
   UPDATE BLOG
========================= */

export const updateBlogService = async (
  blogId: string,
  payload: UpdateBlogPayload,
) => {
  const ref = db.collection("blogs").doc(blogId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Blog not found");
  }

  const currentData = doc.data();

  if (payload.slug && payload.slug.toLowerCase() !== currentData?.slug) {
    const slugSnapshot = await db
      .collection("blogs")
      .where("slug", "==", payload.slug.toLowerCase())
      .limit(1)
      .get();

    if (!slugSnapshot.empty) {
      throw new ConflictError("Slug already exists");
    }
  }

  const updateData: Record<string, any> = {
    updatedAt: new Date(),
  };

  Object.entries(payload).forEach(([key, value]) => {
    if (value !== undefined) {
      updateData[key] = value;
    }
  });

  if (payload.slug) {
    updateData.slug = payload.slug.toLowerCase();
  }

  await ref.update(updateData);

  const updatedDoc = await ref.get();

  return {
    id: updatedDoc.id,
    ...updatedDoc.data(),
  };
};

/* =========================
   DELETE BLOG
========================= */

export const deleteBlogService = async (blogId: string) => {
  const ref = db.collection("blogs").doc(blogId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Blog not found");
  }

  await ref.delete();

  return true;
};
