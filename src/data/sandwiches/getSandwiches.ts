"use server";
import { PrismaClient } from "@prisma/client";

export default async function getSandwiches() {
  const prisma = new PrismaClient();
  const sandwiches = await prisma.sandwich.findMany();
  const result = sandwiches.map((s) => {
    return {
      sandwichId: s.sandwich_id,
      sandwichName: s.sandwich_name,
      imageUrl: s.image_url,
      url: s.url,
      calories: s.calories,
      description: s.description,
    };
  });
  return result;
}
