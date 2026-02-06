import React, { createContext, useState, useContext, ReactNode } from 'react';
import { 
  ThemeContextType, 
  CartContextType, 
  ThemeColors, 
  CartItem, 
  Product 
} from './types';

// Create Contexts
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom Hooks
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a AppProvider');
  return context;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a AppProvider');
  return context;
};

// Main Provider
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // --- Theme Logic ---
  const [isDark, setIsDark] = useState<boolean>(false);

 // Inside src/context.tsx -> AppProvider
  const toggleTheme = () => {
    // We keep your requested delay
    setTimeout(() => {
      setIsDark((prev) => !prev);
    }, 110);
  };

  const theme: ThemeColors = {
    background: isDark ? '#121212' : '#F2F2F2',
    surface: isDark ? '#1E1E1E' : '#FFFFFF',
    text: isDark ? '#FFFFFF' : '#333333',
    subText: isDark ? '#AAAAAA' : '#666666',
    primary: '#007AFF',
    danger: '#FF3B30',
    border: isDark ? '#333333' : '#E5E5E5',
  };

  // --- Cart Logic ---
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      return prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as CartItem[]);
    });
  };

  const increaseQuantity = (productId: string) => {
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const clearCart = () => setCart([]);

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
      return cart.reduce((count, item) => count + item.quantity, 0);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, clearCart, getTotalPrice, getItemCount }}>
        {children}
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
};