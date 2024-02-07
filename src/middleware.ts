import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;
}

// Yang ini untuk middleware yang memerlukan autentikasi
export default withAuth(mainMiddleware, ["/profile"]);
