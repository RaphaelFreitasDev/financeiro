"use client";

import Header from "@/components/_geral/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { createCategory } from "../utils/functions";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AdicionarCategoria = () => {
  const [label, setLabel] = useState("");
  const route = useRouter();

  const handleAddCategory = (e: any) => {
    setLabel(e.target.value);
  };

  const handleAddCategoryClick = () => {
    createCategory(label);
    route.push("/");
  };

  return (
    <div>
      <Header />
      <h2 className="mx-4 text-xl"> Adicionar Categoria</h2>
      <div className="flex flex-col gap-3 m-5">
        <Label className="font-bold">Nome da Categoria</Label>
        <Input
          placeholder="Insira aqui o nome da categoria"
          onChange={handleAddCategory}
        />
      </div>
      <Button
        className="mx-5"
        variant={"default"}
        onClick={handleAddCategoryClick}
      >
        Adicionar Categoria
      </Button>
      <Button className="mx-5" variant={"destructive"} asChild>
        <Link href={"/categorias"}> Visualizar Categorias </Link>
      </Button>
    </div>
  );
};

export default AdicionarCategoria;
