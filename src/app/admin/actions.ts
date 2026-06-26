"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// --- DESTINATIONS ---

export async function createDestination(formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    loc: formData.get("loc") as string,
    dist: formData.get("dist") as string,
    rating: parseFloat(formData.get("rating") as string),
    img: formData.get("img") as string,
    details: formData.get("details") as string,
    price: formData.get("price") as string,
    isPromo: formData.get("isPromo") === "on",
  };

  await prisma.destination.create({ data });
  revalidatePath("/admin/destinations");
  redirect("/admin/destinations");
}

export async function updateDestination(id: string, formData: FormData) {
  const data = {
    name: formData.get("name") as string,
    loc: formData.get("loc") as string,
    dist: formData.get("dist") as string,
    rating: parseFloat(formData.get("rating") as string),
    img: formData.get("img") as string,
    details: formData.get("details") as string,
    price: formData.get("price") as string,
    isPromo: formData.get("isPromo") === "on",
  };

  await prisma.destination.update({ where: { id }, data });
  revalidatePath("/admin/destinations");
  redirect("/admin/destinations");
}

export async function deleteDestination(id: string) {
  await prisma.destination.delete({ where: { id } });
  revalidatePath("/admin/destinations");
}

// --- PROGRAMS ---

export async function createProgram(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    icon: formData.get("icon") as string,
    color: formData.get("color") as string,
    href: formData.get("href") as string || "#",
  };

  await prisma.program.create({ data });
  revalidatePath("/admin/programs");
  redirect("/admin/programs");
}

export async function updateProgram(id: string, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    icon: formData.get("icon") as string,
    color: formData.get("color") as string,
    href: formData.get("href") as string || "#",
  };

  await prisma.program.update({ where: { id }, data });
  revalidatePath("/admin/programs");
  redirect("/admin/programs");
}

export async function deleteProgram(id: string) {
  await prisma.program.delete({ where: { id } });
  revalidatePath("/admin/programs");
}

// --- GALLERY ---

export async function createGalleryItem(formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    location: formData.get("location") as string,
    aspectRatio: formData.get("aspectRatio") as string,
    img: formData.get("img") as string,
  };

  await prisma.galleryItem.create({ data });
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function updateGalleryItem(id: string, formData: FormData) {
  const data = {
    title: formData.get("title") as string,
    category: formData.get("category") as string,
    location: formData.get("location") as string,
    aspectRatio: formData.get("aspectRatio") as string,
    img: formData.get("img") as string,
  };

  await prisma.galleryItem.update({ where: { id }, data });
  revalidatePath("/admin/gallery");
  redirect("/admin/gallery");
}

export async function deleteGalleryItem(id: string) {
  await prisma.galleryItem.delete({ where: { id } });
  revalidatePath("/admin/gallery");
}
