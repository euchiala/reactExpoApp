import React from 'react';
import { View } from 'react-native';  
import { ImageCard } from '../../../component/Image';

const ImageMeta = {
  title: 'Image  ',
  component: ImageCard,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {
    image: 'image.png',

  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

export default ImageMeta;

//export const Basic = {};

export const Horizontal = {
  args: {
    orientation:'Horizontal',
    image: 'image.png',
    
  },
};
export const Vertical = {
  args: {
    orientation:'Vertical',
    image: 'image.png',
    
  },
};
