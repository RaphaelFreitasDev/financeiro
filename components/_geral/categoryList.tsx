"use server";

import { findCategory } from "@/app/utils/functions";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const CategoryList = async () => {
  const categories = await findCategory();

  return <></>;
};

export default CategoryList;
