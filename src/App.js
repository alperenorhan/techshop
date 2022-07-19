import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import Card from './components/Card';
import product_data from './product_data.json';

const App = () => {
  const renderProducts = ({item}) => <Card products={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>TechShop</Text>
      <TextInput style={styles.searchbar} placeholder="Ara" />
      <FlatList
        numColumns={2}
        data={product_data}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header_text: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#a853a7',
    marginLeft: 10,
  },
  searchbar: {
    backgroundColor: '#eceff1',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  container: {
    flex: 1,
  },
});

export default App;
