import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";

interface CardItemColor {
  color: string;
  title: string;
  valor: string;
}

const CardItem = ({ color, title, valor }: CardItemColor) => {
  return (
    <Card className={`m-5 bg-${color}-500 text-center w-[50%]`}>
      <CardHeader className="text-sm font-semibold">{title}</CardHeader>
      <CardContent className="text-xl font-semibold ">
        <span>R${valor}</span>
      </CardContent>
    </Card>
  );
};

export default CardItem;
