"use server";

import {
  CreateCategorySchema,
  CreateCategorySchemaType,
<<<<<<< HEAD
  DeleteCategorySchema,
  DeleteCategorySchemaType,
=======
>>>>>>> 24a1670e529fbaa51a145972fe1ec79e25c8f41f
} from "@/lib/categories";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function CreateCategory(form: CreateCategorySchemaType) {
  const parsedBody = CreateCategorySchema.safeParse(form);
  if (!parsedBody.success) {
    throw new Error("bad request");
  }

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  const { name, icon, type } = parsedBody.data;

  return await prisma.category.create({
    data: {
      userId: user.id,
      name,
      icon,
      type,
    },
  });
}
<<<<<<< HEAD

export async function DeleteCategory(form: DeleteCategorySchemaType) {
  const parsedBody = DeleteCategorySchema.safeParse(form);
  if (!parsedBody.success) {
    throw new Error("bad request");
  }
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return await prisma.category.delete({
    where: {
      name_userId_type: {
        userId: user.id,
        name: parsedBody.data.name,
        type: parsedBody.data.type,
      },
    },
  });
}
=======
>>>>>>> 24a1670e529fbaa51a145972fe1ec79e25c8f41f
