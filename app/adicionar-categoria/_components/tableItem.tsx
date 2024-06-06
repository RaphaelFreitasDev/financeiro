import { TableCell, TableRow } from "@/components/ui/table";
import { Category } from "@prisma/client";

interface TableItemProps {
  category: Category;
}

const TableItem = ({ category }: TableItemProps) => {
  return (
    <>
      <TableRow>
        <TableCell>{category.id}</TableCell>
        <TableCell>{category.label}</TableCell>
      </TableRow>
    </>
  );
};

export default TableItem;
