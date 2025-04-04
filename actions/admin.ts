"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";

export async function getAdminData() {
  const { userId } = await auth();

  if (!userId) throw new Error("Unauthorized");

  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  if (!user || user.role !== "ADMIN") {
    return { authorised: false, reason: "Unauthorized" };
  }

  return { authorised: true, user };
}
