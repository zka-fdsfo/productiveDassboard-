import config from "../config/config.js";
import jwt from "jsonwebtoken";
import crypto from "crypto"

export function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex")
}

function sanitizePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return payload;
  }

  const sanitizedPayload = { ...payload };
  delete sanitizedPayload.exp;
  delete sanitizedPayload.iat;
  delete sanitizedPayload.nbf;
  delete sanitizedPayload.jti;
  delete sanitizedPayload.iss;
  delete sanitizedPayload.aud;
  delete sanitizedPayload.sub;

  return sanitizedPayload;
}

export function signRefreshToken(payload) {
  return jwt.sign(
    sanitizePayload(payload),
    config.REFRESH_SECRET,
    { expiresIn: config.REFRESH_EXPIRE || "7d" }, // Security ke liye expiry lagana zaroori hai
  )
}

export function verifyRefreshToken(token) {
   return jwt.verify(token, config.REFRESH_SECRET);
 }

export function signAccessToken(payload) {
  return jwt.sign(
    sanitizePayload(payload),
    config.JWT_SECRET,
    { expiresIn: config.JWT_EXPIRE || "15m" }, // Security ke liye expiry lagana zaroori hai
  );
}

export function verifyAccessToken(token) {
  return jwt.verify(token, config.JWT_SECRET);
}
