import { db } from "../../config/firebase";
import { ConflictError, NotFoundError } from "../../utils/errors/app.error";

/* =========================
   TYPES
========================= */
export interface CreateTeerthaPayload {
  slug: string;
  name: string;
  description: string;
  thumbnailImage: string;
  img?: string;
  galleryImages?: string[];
  region: string;
  significance: string;
  duration: string;
  tagline?: string;
  slogan?: string;
  date?: string;
  desc?: string;
  highlights?: string[];
  triplePrice?: string;
  doublePrice?: string;
  inclusions?: string[];
  itinerary?: {
    day: string;
    points: string[];
  }[];
  staysHeading?: string;
  staysDesc?: string;
  darshans?: {
    title: string;
    items: string[];
  }[];

  isPublished?: boolean;
}

export interface UpdateTeerthaPayload {
  slug?: string;
  name?: string;
  description?: string;
  thumbnailImage?: string;
  img?: string;
  galleryImages?: string[];
  region?: string;
  significance?: string;
  duration?: string;
  tagline?: string;
  slogan?: string;
  date?: string;
  desc?: string;
  triplePrice?: string;
  doublePrice?: string;
  highlights?: string[];
  inclusions?: string[];
  itinerary?: {
    day: string;
    points: string[];
  }[];
  staysHeading?: string;
  staysDesc?: string;
  darshans?: {
    title: string;
    items: string[];
  }[];
  isPublished?: boolean;
}

/* =========================
   CREATE TEERTHA
========================= */

export const createTeerthaService = async (payload: CreateTeerthaPayload) => {
  const existingSnapshot = await db
    .collection("teerthas")
    .where("slug", "==", payload.slug.toLowerCase())
    .limit(1)
    .get();

  if (!existingSnapshot.empty) {
    throw new ConflictError("Teertha with this slug already exists");
  }

  const docRef = await db.collection("teerthas").add({
    slug: payload.slug.toLowerCase(),
    name: payload.name,
    description: payload.description,
    thumbnailImage: payload.thumbnailImage,
    img: payload.img || payload.thumbnailImage,
    galleryImages: payload.galleryImages || [],
    region: payload.region,
    significance: payload.significance,
    duration: payload.duration,
    tagline: payload.tagline || "",
    slogan: payload.slogan || "",
    date: payload.date || "",
    desc: payload.desc || "",
    triplePrice: payload.triplePrice || "",
    doublePrice: payload.doublePrice || "",
    highlights: payload.highlights || [],
    inclusions: payload.inclusions || [],
    itinerary: payload.itinerary || [],
    staysHeading: payload.staysHeading || "",
    staysDesc: payload.staysDesc || "",
    darshans: payload.darshans || [],
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
   GET ALL TEERTHAS
========================= */

export const getAllTeerthasService = async () => {
  const snapshot = await db
    .collection("teerthas")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET SINGLE TEERTHA
========================= */

export const getSingleTeerthaService = async (slug: string) => {
  const snapshot = await db
    .collection("teerthas")
    .where("slug", "==", slug.toLowerCase())
    .limit(1)
    .get();

  if (snapshot.empty) {
    throw new NotFoundError("Teertha not found");
  }

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...doc.data(),
  };
};

/* =========================
   UPDATE TEERTHA
========================= */

export const updateTeerthaService = async (
  teerthaId: string,
  payload: UpdateTeerthaPayload,
) => {
  const ref = db.collection("teerthas").doc(teerthaId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Teertha not found");
  }

  const currentData = doc.data();

  if (payload.slug && payload.slug.toLowerCase() !== currentData?.slug) {
    const slugSnapshot = await db
      .collection("teerthas")
      .where("slug", "==", payload.slug.toLowerCase())
      .limit(1)
      .get();

    if (!slugSnapshot.empty) {
      throw new ConflictError("Slug already exists");
    }
  }

  await ref.update({
    ...payload,

    ...(payload.slug && {
      slug: payload.slug.toLowerCase(),
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
   DELETE TEERTHA
========================= */

export const deleteTeerthaService = async (teerthaId: string) => {
  const ref = db.collection("teerthas").doc(teerthaId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Teertha not found");
  }

  await ref.delete();

  return true;
};
