import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../types/reduxState/ReduxState';
import ProductPromo from '../../component/productCard/ProductPromo';

const Promo = () => {
  const products = useSelector((state: RootState) => state.product.products);
  console.log(products)
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Recommended for you</Text>
        {products.map &&
            products.map((product, index: number) => (
              <View style={styles.fullImageCardWrapper} key={index}>
                <ProductPromo
                  orientation="Vertical"
                  title={product.title ?? ""}
                  image={product.image ?? ""}
                  price={product.price}
                  buttonLink={`/singleProduct/${product.id}`}
                />
              </View>
            ))}
    </View>
  )
}

export default Promo

const styles = StyleSheet.create({
    title:{
        color:"rgba(9, 17, 31, 1)",
        fontWeight:500,
        marginBottom:20
    },
    container:{
        marginLeft:20
    }
})