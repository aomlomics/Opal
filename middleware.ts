import { authMiddleware } from "@clerk/nextjs";
import { getBaseUrl } from "@/helpers/utils";

export default authMiddleware({
	publicRoutes: (request) => {
		return !(request.nextUrl.pathname.startsWith("/admin") || request.nextUrl.pathname.startsWith("/api/admin"));
	},
});

export const config = {
  	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};