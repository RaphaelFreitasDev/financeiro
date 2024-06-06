import Header from "@/components/_geral/header";
import { findCategory } from "../utils/functions";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableItem from "../adicionar-categoria/_components/tableItem";

const Categorias = async () => {
  const categories = await findCategory();

  return (
    <>
      <Header />
      <div className="mx-5">
        <h2 className="font-semibold">Listagem de categorias</h2>
        <Table className="w-full ">
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Titulo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((category) => (
              <TableItem key={category.id} category={category} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default Categorias;
