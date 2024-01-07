import React from 'react';
import { View } from 'react-native';
import ProductPromotion from '../../../components/productpromotion/ProductPromotion';
const ProductPromoMeta = {
  title: 'Product Card ',
  component: ProductPromotion,
  argTypes: {
    onClick: { action: 'pressed the button' },
  },
  args: {
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 1000,
    title: "Product 1",
    promotion: 50
  },
  decorators: [
    (Story) => (
      <View style={{ backgroundColor : "white" ,  alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ProductPromoMeta;

export const Promotion = {
  args : {
    image: 'https://dummyimage.com/144x144/000/fff.jpg',
    price: 10002,
    title: "Product 1",
    promotion: 50,
    ratings:4.5,
    onClick : () => console.log("test")
  }
 
};
