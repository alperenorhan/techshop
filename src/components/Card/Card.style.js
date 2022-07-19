import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card_container: {
    backgroundColor: '#ECEFF1',
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
    flex: 1,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 3,
  },
  card_product_name: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 5,
  },
  card_product_price: {
    color: '#838383',
    fontSize: 13,
  },
  card_image: {
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
  },
  card_instock: {
    fontWeight: 'bold',
    color: 'red',
  },
});
