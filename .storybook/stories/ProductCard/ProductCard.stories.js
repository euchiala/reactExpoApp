import React from 'react';
import { View } from 'react-native'; 
import { ProductCard } from '../../../component/ProductCard';
const ProductCardMeta = {
  title: 'Product Card ',
  component: ProductCard,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    image: 'image.png',
    price: 1000,
    title: "Product 1",
    promotion: 50
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ProductCardMeta;

//export const Basic = {};

export const Horizontal = {
  args: {
    orientation:'Horizontal',
    image: 'image.png',
    price: 10002,
    title: "Product 1",
    promotion: 50
  },
};
export const Vertical = {
  args: {
    orientation:'Vertical',
    image: 'image.png',
    price: 10002,
    title: "Product 1",
    promotion: 50
  },
};
