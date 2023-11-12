import React from "react";
import { View, SafeAreaView, Text, Image, ScrollView, TouchableOpacity,StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

import { useDispatch } from "react-redux";
import { addToCart,addToFavorites } from "../redux/actions";

export default function ProductDetail({ route, navigation }) {
  const dispatch = useDispatch();

  const additionalDetails = {
    1: { size: "XL", color: "White", price: "1500", brand: "outfitter" },
    2: { size: "M", color: "White", price: "3000", brand: "Uniworth" },
    3: { size: "L", color: "Blck", price: "1000", brand: "No brand" },
    4: { size: "M", color: "Blue", price: "1000", brand: "No Brand" },
    5: { size: "XL", color: "Blue", price: "5000", brand: "Bariza" },
    6: { size: "M", color: "Black", price: "4500", brand: "No Brand" },
    7: { size: "XL", color: "Blue", price: "5000", brand: "Mini Minors" },
    8: { size: "M", color: "Black", price: "4500", brand: "Breakout Kids" },
    9: { size: "XL", color: "Blue", price: "5000", brand: "No Brand" },
    10: { size: "M", color: "Black", price: "4500", brand: "Dog" },
    11: { size: "XL", color: "Blue", price: "5000", brand: "Lion" },
    12: { size: "M", color: "Black", price: "4500", brand: "cat" },
    13: { size: "XL", color: "Blue", price: "5000", brand: "outfitter" },
    14: { size: "M", color: "Black", price: "4500", brand: "Uniworth" },
    15: { size: "XL", color: "Blue", price: "5000", brand: "No brand" },
    16: { size: "M", color: "Black", price: "4500", brand: "AL Nashat" },
    17: { size: "XL", color: "Blue", price: "5000", brand: "Bariza" },
    18: { size: "M", color: "Black", price: "4500", brand: "No Brand" },
    19: { size: "XL", color: "Blue", price: "5000", brand: "Mini Minors" },
    20: { size: "M", color: "Black", price: "4500", brand: "Breakout Kids" },
    21: { size: "XL", color: "Blue", price: "5000", brand: "No Brand" },
    22: { size: "M", color: "Black", price: "4500", brand: "Dog" },
    23: { size: "XL", color: "Blue", price: "5000", brand: "Lion" },
    24: { size: "M", color: "Black", price: "4500", brand: "cat" },
    25: { size: "XL", color: "Blue", price: "5000", brand: "outfitter" },
    26: { size: "M", color: "Black", price: "4500", brand: "Uniworth" },
    27: { size: "XL", color: "Blue", price: "5000", brand: "No brand" },
    28: { size: "M", color: "Black", price: "4500", brand: "AL Nashat" },
    29: { size: "XL", color: "Blue", price: "5000", brand: "Bariza" },
    30: { size: "M", color: "Black", price: "4500", brand: "No Brand" },
    31: { size: "XL", color: "Blue", price: "5000", brand: "Mini Minors" },
    32: { size: "M", color: "Black", price: "4500", brand: "Breakout Kids" },
    33: { size: "XL", color: "Blue", price: "5000", brand: "No Brand" },
  };

  const { product } = route.params;
  const filterDetails = additionalDetails[product.id];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.productContainer}>
          <Image source={product.image} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productDescription}>{product.description}</Text>
          <Text style={styles.productInfo}>Size: {filterDetails.size}</Text>
          <Text style={styles.productInfo}>Color: {filterDetails.color}</Text>
          <Text style={styles.productInfo}>Price: {filterDetails.price}</Text>
          <Text style={styles.productInfo}>Brand: {filterDetails.brand}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.favoriteIcon}
            onPress={() => {
              dispatch(addToFavorites(product));
              navigation.navigate('favourite');
            }}
          >
            <Icon name="heart" size={40} color="red" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartIcon}
            onPress={() => {
              dispatch(addToCart(product));
              navigation.navigate('addtocart');
            }}
          >
            <Icon name="shopping-cart" size={40} color="blue" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 40,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  productDescription: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
  },
  productInfo: {
    fontSize: 16,
  },
  productInfoLabel: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  favoriteIcon: {
    marginRight: 10,
  },
  cartIcon: {
    marginLeft: 10,
  },
});