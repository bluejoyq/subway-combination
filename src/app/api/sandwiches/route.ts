import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Sandwich } from "@/models/Sandwich";
import getSandwiches from "@/data/sandwiches/getSandwiches";

async function GET(req: NextRequest): Promise<NextResponse<Sandwich[]>> {
  const result = await getSandwiches();
  return NextResponse.json(result);
}

export { GET };
