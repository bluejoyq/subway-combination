import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Sandwich } from "@/models/Sandwich";

async function getSandwiches(
  req: NextRequest,
): Promise<NextResponse<Sandwich[]>> {
  const prisma = new PrismaClient();
  const sandwiches = await prisma.sandwich.findMany();
  const answer = sandwiches.map((s) => {
    return {
      sandwichId: s.sandwich_id,
      sandwichName: s.sandwich_name,
      imageUrl: s.image_url,
      url: s.url,
      calories: s.calories,
      description: s.description,
    };
  });
  return NextResponse.json(answer);
}

export { getSandwiches as GET };
