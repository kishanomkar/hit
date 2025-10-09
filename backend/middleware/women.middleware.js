import jwt from "jsonwebtoken";
import user from "../models/women.model.js";

const womenMiddleware = async (req, res, next) => {
  try {
    // Extract token from cookies or Authorization header
    const token =
      req.cookies?.token ||
      (req.headers.authorization &&
        req.headers.authorization.split(" ")[1]);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    // Verify and decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.id || !decoded.type) {
      return res.status(401).json({ message: "Unauthorized: Invalid token payload" });
    }

    // Ensure the token belongs to a "women" user type
    if (decoded.type !== "women") {
      return res.status(403).json({ message: "Forbidden: Not authorized as a women user" });
    }

    // Find the user in DB
    const existingUser = await user.findById(decoded.id);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Attach user to request for downstream handlers
    req.user = existingUser;
    next();
  } catch (error) {
    console.error("Error in womenMiddleware:", error.message);
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
};

export default womenMiddleware;
