
export interface IProduct {
  name: string,
  price: number
}

export type Products= Map<string, IProduct>;

export const products: Map<string, IProduct> = new Map();
products.set("123", {name: "a tin of beans", price: 100 });
products.set("456", {name: "a bottle of beer", price: 249 });
products.set("789", {name: "a banana", price: 12 });


