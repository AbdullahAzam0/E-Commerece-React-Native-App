import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from "../redux/actions";

export default function AddToCart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Items in Cart:</Text>
        {cartItems.map((item, index) => (
          <View style={styles.cartItemContainer} key={index}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <TouchableOpacity onPress={() => dispatch(removeFromCart(item.id))}>
                <Text style={styles.removeButton}>Remove from Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333", 
    alignSelf:'center'
  },
  cartItemContainer: {
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#444", 
  },
  removeButton: {
    color: "#ff4500", 
    marginTop: 8,
  },
});
