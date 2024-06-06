import { CircleDollarSign, HandCoins, Menu, Plus } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center p-3 justify-between">
      <h1 className="text-xl font-semibold">App Financeiro</h1>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size={"icon"} variant={"ghost"}>
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Funçoes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <Link href={"/inserir-gasto"}>
              <HandCoins /> Inserir Gasto
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <Link href={"/inserir-dinheiro"}>
              <CircleDollarSign />
              Inserir Dinheiro
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-2" asChild>
            <Link href={"/adicionar-categoria"}>
              <Plus />
              Adicionar Catagoria
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Header;
