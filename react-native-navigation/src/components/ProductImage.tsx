// src/components/ProductImage.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ProductImageProps {
    image: any;
    color: string;
}

export const ProductImage = ({ image, color }: ProductImageProps) => (
    <View style={[styles.imageContainer, { backgroundColor: color + '22' }]}> 
        {/* Note: I added '22' to the color to make it a light transparent background */}
        <Image 
            source={image} 
            style={styles.image} 
            resizeMode="contain" 
        />
    </View>
);

const styles = StyleSheet.create({
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    overflow: 'hidden',
  },
  image: {
    width: '90%',
    height: '90%',
  },
});