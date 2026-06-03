import axios from "axios";
import admin from "../../config/firebase";
import { db } from "../../config/firebase";
import { serverConfig } from "../../config";

/* ================= REGISTER ================= */
export const registerUserService = async (email: string, password: string) => {
  const user = await admin.auth().createUser({
    email,
    password,
  });

  await db.collection("users").doc(user.uid).set({
    email,
    createdAt: new Date(),
  });

  const token = await admin.auth().createCustomToken(user.uid);

  return { user, token };
};

/* ================= LOGIN ================= */
export const loginUserService = async (email: string, password: string) => {
  const res = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${serverConfig.FIREBASE_API_KEY}`,
    {
      email,
      password,
      returnSecureToken: true,
    },
  );

  return {
    accessToken: res.data.idToken,
    refreshToken: res.data.refreshToken,
    uid: res.data.localId,
  };
};

/* ================= CURRENT USER ================= */
export const getCurrentUserService = async (uid: string) => {
  const user = await admin.auth().getUser(uid);

  const profile = await db.collection("users").doc(uid).get();

  return {
    auth: user,
    profile: profile.data(),
  };
};

/* ================= FORGOT PASSWORD ================= */
export const forgotPasswordService = async (email: string) => {
  const resetLink = await admin.auth().generatePasswordResetLink(email);

  return {
    resetLink,
  };
};

/* ================= REFRESH TOKEN ================= */
export const refreshAccessTokenService = async (refreshToken: string) => {
  const res = await axios.post(
    `https://securetoken.googleapis.com/v1/token?key=${serverConfig.FIREBASE_API_KEY}`,
    new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
  );

  return {
    accessToken: res.data.id_token,
  };
};
