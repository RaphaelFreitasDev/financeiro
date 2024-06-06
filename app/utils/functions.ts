"use server";

import { db } from "@/prisma/utils";
import { Decimal } from "@prisma/client/runtime/library";

export const createCategory = async (label: string) => {
  if (label == "") {
    return;
  }

  return await db.category.create({
    data: {
      label: label,
    },
  });
};

export const findCategory = async () => {
  return await db.category.findMany({});
};

export const createGasto = async (
  autor: string,
  categoria: string,
  desc: string,
  valor: number
) => {
  if (autor == "" || categoria == "" || desc == "" || valor == 0) {
    return;
  }

  return await db.entries.create({
    data: {
      amount: Number(valor),
      description: desc,
      why: false,
      authorId: Number(autor),
      categoryId: Number(categoria),
    },
  });
};

export const createDinheiro = async (
  autor: string,
  categoria: string,
  desc: string,
  valor: number
) => {
  if (autor == "" || categoria == "" || desc == "" || valor == 0) {
    return;
  }

  return await db.entries.create({
    data: {
      amount: Number(valor),
      description: desc,
      why: true,
      authorId: Number(autor),
      categoryId: Number(categoria),
    },
  });
};
