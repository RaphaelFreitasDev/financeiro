import CardItem from "@/components/_geral/cardItem";
import Header from "@/components/_geral/header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/prisma/utils";

const Home = async () => {
  const entries = await db.entries.findMany({
    include: {
      category: true,
      author: true,
    },
  });

  const saldoAtual = async () => {
    const values = await db.entries.findMany({ where: { why: true } });
    let valor = 0;

    values.map((value) => {
      valor = valor + value.amount;
    });

    return valor;
  };
  const saidaAtual = async () => {
    const values = await db.entries.findMany({ where: { why: false } });
    let valor = 0;

    values.map((value) => {
      valor = valor + value.amount;
    });

    return valor;
  };

  const valorSaida = await saidaAtual();
  const valorAtual = (await saldoAtual()) - valorSaida;

  return (
    <div>
      <Header />

      <div className="flex">
        <CardItem
          color={"green"}
          title="Saldo Atual"
          valor={valorAtual.toString()}
        />
        <CardItem
          color={"red"}
          title="Gasto do Mês"
          valor={valorSaida.toString()}
        />
      </div>
      <h2 className="text-sm mx-4 font-semibold">Ultimos Lançamentos</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Autor</TableHead>
            <TableHead>Categoria</TableHead>
            <TableHead>Entrada/Saida</TableHead>
            <TableHead>Descriçao</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entries.map((entrie) => (
            <TableRow key={entrie.id}>
              <TableCell>{entrie.author.name}</TableCell>
              <TableCell>{entrie.category.label}</TableCell>
              <TableCell>{entrie.why ? "Entrada" : "Saida"}</TableCell>
              <TableCell>{entrie.description}</TableCell>
              <TableCell>R${entrie.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Home;
