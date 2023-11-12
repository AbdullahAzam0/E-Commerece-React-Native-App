import React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from "../redux/actions";

export default function Favorite() {
  const favoriteItems = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <View style={styles.itemsContainer}>
        {favoriteItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <TouchableOpacity
              onPress={() => dispatch(removeFromFavorites(item.id))}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove from Favorites</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    alignSelf:'center'
  },
  itemsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemContainer: {
    width: "48%",
    marginBottom: 16,
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 12,
    borderRadius: 8,
  },
  productName: {
    fontSize: 16,
    marginBottom: 8,
  },
  removeButton: {
    marginTop: 8,
    backgroundColor: "#e74c3c", 
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  removeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
