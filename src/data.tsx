import { StringLiteralLike } from "typescript";

interface ProductI {
  name: string;
  discription?: string;
  producent: string;
  prize: number;
  image?: string;
  title: string;
  subtitle?: string;
  composition: CompositionI[];
  capacity: number;
  directLink?: string;
  warning?: string;
  vitamins?: VitaminI[];

}
interface VitaminI{
    name: string;
    amount?: number
}
interface CompositionI{
name: string;
amount?: number;
}
// export const data: ProductI = [{}];
