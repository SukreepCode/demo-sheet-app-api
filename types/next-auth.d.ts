// Ref: https://github.com/nextauthjs/next-auth-typescript-example/blob/main/types/next-auth.d.ts
import { Session, User } from "next-auth";
import { JWT } from "next-auth/jwt";

interface Auth {
  accessToken: string;
  error: any;
}

declare module "next-auth" {
  interface Session extends Auth {}
}

declare module "next-auth/jwt" {
  interface JWT extends Auth {
    accessTokenExpires: number;
    user: User;
  }
}
