import { db } from "../../config/firebase";
import { ConflictError, NotFoundError } from "../../utils/errors/app.error";

/* =========================
   INTERFACES
========================= */
export interface CreateYatraRetreatPayload {
  slug: string;

  name: string;
  img: string;

  thumbnailImage: string;
  galleryImages?: string[];

  slogan: string;

  date: string;
  duration: string;
  desc: string;

  triplePrice: string;
  doublePrice: string;

  staysHeading: string;
  staysDesc: string;

  inclusions: string[];

  itinerary: {
    day: number;
    points: string[];
  }[];

  darshans: {
    title: string;
    items: string[];
  }[];

  isPublished?: boolean;
}

export interface UpdateYatraRetreatPayload {
  slug?: string;

  name?: string;
  img?: string;

  thumbnailImage?: string;
  galleryImages?: string[];

  slogan?: string;

  date?: string;
  duration?: string;
  desc?: string;

  triplePrice?: string;
  doublePrice?: string;

  staysHeading?: string;
  staysDesc?: string;

  inclusions?: string[];

  itinerary?: {
    day: number;
    points: string[];
  }[];

  darshans?: {
    title: string;
    items: string[];
  }[];

  isPublished?: boolean;
}

/* =========================
   CREATE YATRA RETREAT
========================= */

export const createYatraRetreatService = async (
  payload: CreateYatraRetreatPayload,
) => {
  const existingSnapshot = await db
    .collection("yatras")
    .where("slug", "==", payload.slug.toLowerCase())
    .limit(1)
    .get();

  if (!existingSnapshot.empty) {
    throw new ConflictError("Yatra retreat with this slug already exists");
  }

  const docRef = await db.collection("yatras").add({
    slug: payload.slug.toLowerCase(),

    name: payload.name,
    img: payload.img,

    thumbnailImage: payload.thumbnailImage,
    galleryImages: payload.galleryImages || [],

    slogan: payload.slogan,

    date: payload.date,
    duration: payload.duration,
    desc: payload.desc,

    triplePrice: payload.triplePrice,
    doublePrice: payload.doublePrice,

    staysHeading: payload.staysHeading,
    staysDesc: payload.staysDesc,

    inclusions: payload.inclusions || [],
    itinerary: payload.itinerary || [],
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
   GET ALL YATRA RETREATS
========================= */

export const getAllYatraRetreatsService = async () => {
  const snapshot = await db
    .collection("yatras")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET SINGLE YATRA RETREAT
========================= */

export const getSingleYatraRetreatService = async (slug: string) => {
  const snapshot = await db
    .collection("yatras")
    .where("slug", "==", slug.toLowerCase())
    .limit(1)
    .get();

  if (snapshot.empty) {
    throw new NotFoundError("Yatra retreat not found");
  }

  const doc = snapshot.docs[0];

  return {
    id: doc.id,
    ...doc.data(),
  };
};

/* =========================
   UPDATE YATRA RETREAT
========================= */

export const updateYatraRetreatService = async (
  yatraId: string,
  payload: UpdateYatraRetreatPayload = {},
) => {
  const ref = db.collection("yatras").doc(yatraId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Yatra retreat not found");
  }

  const currentData = doc.data();

  if (payload.slug && payload.slug.toLowerCase() !== currentData?.slug) {
    const slugSnapshot = await db
      .collection("yatras")
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
   DELETE YATRA RETREAT
========================= */

export const deleteYatraRetreatService = async (yatraId: string) => {
  const ref = db.collection("yatras").doc(yatraId);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Yatra retreat not found");
  }

  await ref.delete();

  return true;
};

/* =========================
   GET PUBLISHED YATRAS
========================= */

export const getPublishedYatrasService = async () => {
  const snapshot = await db
    .collection("yatras")
    .where("isPublished", "==", true)
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
