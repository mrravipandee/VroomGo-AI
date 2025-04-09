import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import type { User as PrismaUser } from "@prisma/client";

export const checkUser = async (): Promise<PrismaUser | null> => {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  try {
    const existingUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (existingUser) {
      return existingUser;
    }

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
        imageUrl: user.imageUrl ?? "",
        email: user.emailAddresses?.[0]?.emailAddress ?? "",
      },
    });

    return newUser;
  } catch (error: any) {
    console.error("Error creating user:", error.message ?? error);
    return null;
  }
};
