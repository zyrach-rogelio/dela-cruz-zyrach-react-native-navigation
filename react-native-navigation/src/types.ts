export interface Product {
  id: string;
  name: string;
  price: number;
  color: string;
  image: any;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ThemeColors {
  background: string;
  surface: string;
  text: string;
  subText: string;
  primary: string;
  danger: string;
  border: string;
}

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Checkout: undefined;
};

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  theme: ThemeColors;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}