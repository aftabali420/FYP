// CartScreen.js
import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

const CartScreen = ({ cart }) => {
  const renderItem = ({ item }) => (
    <View style={{ margin: 10 }}>
      {/* <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} /> */}
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );

  return (
    <View>
      <Text>Cart Screen</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(CartScreen);
