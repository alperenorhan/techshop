import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './Card.style';

const Card = ({products}) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.card_image} source={{uri: products.imgURL}} />
      <Text style={styles.card_product_name}>{products.title}</Text>
      <Text style={styles.card_product_price}>{products.price}</Text>
      <Text style={styles.card_product_stock}>{products.inStock}</Text>
      {!products.inStock && <Text style={styles.card_instock}>STOKTA YOK</Text>}
    </View>
  );
};

export default Card;
