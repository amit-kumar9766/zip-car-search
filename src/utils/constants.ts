export type Vehicle = {
  id: number;
  make: string;
  model: string;
  trim: string;
  year: number;
  color: string;
  mileage: number;
  price: number;
  image: string;
  zipCode: string;
};
export type SortableField = "price" | "year" | "mileage";

export const SORTABLE_FIELDS: SortableField[] = ["price", "year", "mileage"];

