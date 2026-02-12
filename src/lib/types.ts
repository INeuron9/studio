export type Product = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  images: string[];
  category: 'Jackets' | 'Wallets' | 'Shoes' | 'Belts';
  sizes?: string[];
  materials: string;
  imageHints: string[];
};

export type CartItem = {
  id: string; // combination of productId and size
  product: Product;
  quantity: number;
  size?: string;
};
