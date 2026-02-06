import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useTheme, useCart } from '../context';
import { styles } from '../styles';
import { RootStackParamList } from '../types';
import { CustomHeader } from '../components/CustomHeader';

type CheckoutScreenProps = NativeStackScreenProps<RootStackParamList, 'Checkout'>;

export const CheckoutScreen: React.FC<CheckoutScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const { cart, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    Alert.alert("Success", "Checkout successful!", [
        { text: "OK", onPress: () => { clearCart(); navigation.navigate('Home'); } }
    ]);
  };

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <CustomHeader title="Checkout" onBack={() => navigation.goBack()} />
      
      <View style={{ flex: 1, padding: 20 }}>
          <View style={[styles.summaryCard, { backgroundColor: theme.surface }]}>
            <Text style={[styles.summaryTitle, { color: theme.text }]}>Order Summary</Text>
            <FlatList
                data={cart}
                keyExtractor={(item) => item.id}
                style={{ maxHeight: 300 }}
                renderItem={({ item }) => (
                <View style={styles.summaryRow}>
                    <Text style={{ flex: 1, color: theme.text }}>{item.quantity}x {item.name}</Text>
                    <Text style={{ color: theme.text, fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</Text>
                </View>
                )}
            />
            <View style={[styles.divider, { backgroundColor: theme.border }]} />
            <View style={styles.summaryRow}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.text }}>Grand Total</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: theme.primary }}>${getTotalPrice().toFixed(2)}</Text>
            </View>
          </View>
      </View>

      <View style={[styles.footerContainer, { backgroundColor: theme.surface, borderTopColor: theme.border }]}>
        <TouchableOpacity 
          style={[styles.checkoutBtn, { backgroundColor: '#28a745' }]}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutBtnText}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};