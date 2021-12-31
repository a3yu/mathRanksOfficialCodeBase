import { NextResponse, NextRequest } from "next/server";
import { decodeProtectedHeader, importJWK, JWK, jwtVerify } from "jose";
export async function middleware(req, ev) {
  const { pathname } = req.nextUrl;
  if (pathname == "/login" || pathname == "/signup") {
    try {
      if (
        await verifyCognitoAuthenticatedUser(
          req,
          "us-east-2",
          "us-east-2_6a3CHuCqx"
        )
      ) {
        return NextResponse.redirect("/dashboard");
      } else {
      }
    } catch (err) {}
  }

  return NextResponse.next();
}
const verifyCognitoAuthenticatedUser = async (
  req: NextRequest,
  region: string,
  poolId: string,
  customHandler?: (payload: any) => boolean
): Promise<boolean> => {
  const token = Object.entries(req.cookies).find(([key]) =>
    /CognitoIdentityServiceProvider\..+\.idToken/.test(key)
  )?.[1];
  if (!token) return false;

  const { keys }: { keys: JWK[] } = await fetch(
    `https://cognito-idp.${region}.amazonaws.com/${poolId}/.well-known/jwks.json`
  ).then((res) => res.json());

  const { kid } = decodeProtectedHeader(token);
  const jwk = keys.find((key) => key.kid === kid);
  if (!jwk) return false;

  return jwtVerify(token, await importJWK(jwk))
    .then((res) => customHandler?.(res.payload) ?? true)
    .catch(() => false);
};
