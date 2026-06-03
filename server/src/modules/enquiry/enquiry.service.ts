import { db } from "../../config/firebase";
import { NotFoundError } from "../../utils/errors/app.error";

/* =========================
   CREATE ENQUIRY
========================= */
export interface CreateEnquiryPayload {
  name: string;
  phoneNumber: string;
  preferredYatra: string;
  message: string;
}

export const createEnquiryService = async (payload: CreateEnquiryPayload) => {
  const docRef = await db.collection("enquiries").add({
    name: payload.name,
    phoneNumber: payload.phoneNumber,
    preferredYatra: payload.preferredYatra,
    message: payload.message,
    status: "New",
    createdAt: new Date(),
  });
  const enquiry = await docRef.get();
  return {
    id: enquiry.id,
    ...enquiry.data(),
  };
};

/* =========================
   GET ALL ENQUIRIES
========================= */

export const getAllEnquiriesService = async () => {
  const snapshot = await db
    .collection("enquiries")
    .orderBy("createdAt", "desc")
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

/* =========================
   GET SINGLE ENQUIRY
========================= */

export const getSingleEnquiryService = async (id: string) => {
  const doc = await db.collection("enquiries").doc(id).get();

  if (!doc.exists) {
    throw new NotFoundError("Enquiry not found");
  }

  return {
    id: doc.id,
    ...doc.data(),
  };
};

/* =========================
   UPDATE STATUS
========================= */

export interface UpdateEnquiryPayload {
  status?: "New" | "Contacted" | "Resolved";
}

export const updateEnquiryService = async (
  id: string,
  payload: UpdateEnquiryPayload,
) => {
  const ref = db.collection("enquiries").doc(id);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Enquiry not found");
  }

  await ref.update(
    payload as FirebaseFirestore.UpdateData<FirebaseFirestore.DocumentData>,
  );

  const updatedDoc = await ref.get();

  return {
    id: updatedDoc.id,
    ...updatedDoc.data(),
  };
};

/* =========================
   DELETE ENQUIRY
========================= */

export const deleteEnquiryService = async (id: string) => {
  const ref = db.collection("enquiries").doc(id);

  const doc = await ref.get();

  if (!doc.exists) {
    throw new NotFoundError("Enquiry not found");
  }

  await ref.delete();

  return true;
};
