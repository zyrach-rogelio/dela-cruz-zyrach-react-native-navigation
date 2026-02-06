import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, Alert, Platform, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useTheme, useCart } from '../context';
import { styles } from '../styles';
import { RootStackParamList } from '../types';
import { CustomHeader } from '../components/CustomHeader';
import { ProductImage } from '../components/ProductImage';

type CartScreenProps = NativeStackScreenProps<RootStackParamList, 'Cart'>;

export const CartScreen: React.FC<CartScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const { cart, increaseQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleClearCart = () => {
    if (cart.length === 0) return;

    const message = "Are you sure you want to remove all items from your cart?";

    if (Platform.OS === 'web') {
      const confirmWeb = window.confirm(message);
      if (confirmWeb) clearCart();
    } else {
      Alert.alert(
        "Clear Cart",
        message,
        [
          { text: "Cancel", style: "cancel" },
          { text: "Remove All", style: "destructive", onPress: () => clearCart() }
        ]
      );
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <CustomHeader title="My Cart" onBack={() => navigation.goBack()} />

      {cart.length > 0 && (
        <TouchableOpacity 
          onPress={handleClearCart} 
          style={styles.clearAllBtn}
        >
          <Text style={[styles.clearAllText, { color: theme.danger }]}>Empty Trash 🗑️</Text>
        </TouchableOpacity>
      )}

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingBottom: 120 }}
        ListEmptyComponent={
            <View style={styles.emptyContainer}>
                <Text style={{ fontSize: 50 }}>🛒</Text>
                <Text style={{ marginTop: 10, color: theme.subText }}>Your cart is empty.</Text>
            </View>
        }
        renderItem={({ item }) => (
          <Pressable 
            style={({ pressed }) => [
              styles.card, 
              { 
                backgroundColor: theme.surface, 
                shadowColor: theme.text,
                // Tactile feedback
                transform: [{ scale: pressed ? 0.98 : 1 }],
                opacity: pressed ? 0.9 : 1
              }
            ]}
          >
            <ProductImage image={item.image} color={item.color} />
            
            <View style={styles.cardDetails}>
              <Text style={[styles.productName, { color: theme.text }]}>{item.name}</Text>
              <Text style={{ color: theme.subText }}>${item.price.toFixed(2)}</Text>
              <Text style={{ color: theme.primary, fontWeight: 'bold', marginTop: 4 }}>
                  Total: ${(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
            
            <View style={styles.qtyContainer}>
              <TouchableOpacity 
                onPress={() => increaseQuantity(item.id)} 
                style={[styles.qtyBtn, { backgroundColor: theme.primary }]}
              >
                <Text style={[styles.qtyBtnText, { color: '#FFF' }]}>+</Text>
              </TouchableOpacity>

              <Text style={[styles.qtyValue, { color: theme.text }]}>{item.quantity}</Text>

              <TouchableOpacity 
                onPress={() => removeFromCart(item.id)} 
                style={[styles.qtyBtn, { backgroundColor: theme.border }]}
              >
                <Text style={[styles.qtyBtnText, { color: theme.text }]}>-</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        )}
      />
      
      <View style={[styles.footerContainer, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
        <View style={styles.footerRow}>
            <Text style={[styles.totalLabel, { color: theme.subText }]}>Total Price</Text>
            <Text style={[styles.totalValue, { color: theme.text }]}>${getTotalPrice().toFixed(2)}</Text>
        </View>
        <TouchableOpacity 
          style={[styles.checkoutBtn, { backgroundColor: theme.primary, opacity: cart.length === 0 ? 0.6 : 1 }]}
          disabled={cart.length === 0}
          onPress={() => navigation.navigate('Checkout')}
        >
          <Text style={styles.checkoutBtnText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};