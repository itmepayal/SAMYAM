import admin from "firebase-admin";
import { serverConfig } from "./index";

const serviceAccount: admin.ServiceAccount = {
  projectId: serverConfig.FIREBASE_PROJECT_ID,
  clientEmail: serverConfig.FIREBASE_CLIENT_EMAIL,
  privateKey: serverConfig.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
};

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const auth = admin.auth();
export const db = admin.firestore();

export default admin;
