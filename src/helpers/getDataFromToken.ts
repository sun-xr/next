import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!);
    //KNOW - tokenData--->  id
    return decodedToken.id;
  } catch (error) {
    throw new Error("Error getting data from token");
  }
};
