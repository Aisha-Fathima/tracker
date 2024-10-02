// middleware.js
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/public-page"], // Add public routes if any
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"], // This ensures middleware applies to all routes
};
