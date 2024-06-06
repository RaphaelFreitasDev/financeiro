"use client";

import CategoryList from "@/components/_geral/categoryList";
import Header from "@/components/_geral/header";
import SelectCategory from "@/components/_geral/selectcategory";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { createDinheiro, createGasto, findCategory } from "../utils/functions";
import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";

const InserirDinheiro = () => {
  const [autor, setAutor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [desc, setDesc] = useState("");
  const [valor, setValor] = useState(0);
  const [data, setData] = useState<Category[]>();

  const handleAutor = (e: any) => {
    setAutor(e);
  };

  const handleCategoria = (e: any) => {
    setCategoria(e);
  };

  const handleDesc = (e: any) => {
    setDesc(e.target.value);
  };

  const handleValor = (e: any) => {
    setValor(e.target.value);
  };

  const route = useRouter();
  const handleClickButton = () => {
    createDinheiro(autor, categoria, desc, valor);
    route.push("/");
  };

  useEffect(() => {
    async function fetchData() {
      const jsonData = await findCategory();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h2 className="mx-4 text-xl"> Lançamento de Dinheiro </h2>
      <div>
        <div className="m-5">
          <Label className="ml-2">Autor</Label>
          <Select onValueChange={handleAutor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o Autor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Raphael</SelectItem>
              <SelectItem value="2">Thaina</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="m-5">
          <Label>Categoria</Label>
          <Select onValueChange={handleCategoria}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecione o Autor" />
            </SelectTrigger>
            <SelectContent>
              {data?.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="m-5">
          <Label>Descriçao</Label>
          <Input placeholder="Descriçao" onChange={handleDesc} />
        </div>
        <div className="mx-5">
          <Label>Valor do gasto</Label>
          <Input
            type="number"
            placeholder="Digite o valor"
            onChange={handleValor}
          />
        </div>
        <Button className="m-5 w-[200px]" onClick={handleClickButton}>
          Lançar
        </Button>
      </div>
    </div>
  );
};

export default InserirDinheiro;
