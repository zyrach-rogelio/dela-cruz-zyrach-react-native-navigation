import React from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, StatusBar, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { PRODUCTS } from '../data';
import { useTheme, useCart } from '../context';
import { styles } from '../styles';
import { RootStackParamList } from '../types';
import { CustomHeader } from '../components/CustomHeader';
import { ProductImage } from '../components/ProductImage';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { theme } = useTheme();
  const { addToCart, getItemCount } = useCart();

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={theme.background === '#121212' ? 'light-content' : 'dark-content'} />
      
      <CustomHeader title="Discover Products" showThemeToggle={true} />
      
      <FlatList
        data={PRODUCTS}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable 
            style={({ pressed }) => [
              styles.card, 
              { 
                backgroundColor: theme.surface, 
                shadowColor: theme.text,
                transform: [{ scale: pressed ? 0.98 : 1 }],
                opacity: pressed ? 0.9 : 1
              }
            ]}
          >
            <ProductImage image={item.image} color={item.color} />
            
            <View style={styles.cardDetails}>
              <Text style={[styles.productName, { color: theme.text }]}>{item.name}</Text>
              <Text style={[styles.productPrice, { color: theme.subText }]}>${item.price.toFixed(2)}</Text>
            </View>

            <TouchableOpacity 
              style={[styles.addBtn, { backgroundColor: theme.primary }]}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.addBtnText}>Add +</Text>
            </TouchableOpacity>
          </Pressable>
        )}
      />
      
      <TouchableOpacity 
        style={[styles.floatingButton, { backgroundColor: theme.primary, shadowColor: theme.primary }]}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.floatingBtnText}>Go to Cart ({getItemCount()})</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};