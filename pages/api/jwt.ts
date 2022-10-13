// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function jwt(req: NextApiRequest, res: NextApiResponse) {
  const token = await getToken({ req })
  res.send(JSON.stringify(token, null, 2))
}