import React, { useState } from "react";
import { View, SafeAreaView, Text, FlatList, Image, TouchableOpacity, StyleSheet,TextInput } from "react-native";

const subcategory = [
    { id: 1, name: "Men's T-Shirt", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/Tshirt.jpg') },
    { id: 2, name: "Men's Jeans", subcategoryId: 1, description: "Classic denim jeans for men" , image: require('/home/eritheia/E-Commerce/src/asset/Jeans.jpg')},
    { id: 3, name: "Men's Sneakers", subcategoryId: 1, description: "Stylish sneakers for men" , image: require('/home/eritheia/E-Commerce/src/asset/Sneakers.webp')},
    { id: 4, name: "Women's Dress", subcategoryId: 2, description: "Elegant dress for women", image: require('/home/eritheia/E-Commerce/src/asset/Dress.webp')  },
    { id: 5, name: "Women's Sandals", subcategoryId: 2, description: "Comfortable sandals for women" , image: require('/home/eritheia/E-Commerce/src/asset/sandals.jpeg') },
    { id: 6, name: "Women's Handbag", subcategoryId: 2, description: "Fashionable handbag for women", image: require('/home/eritheia/E-Commerce/src/asset/handbang.webp')  },
    { id: 7, name: "Kids' Toy Car", subcategoryId: 3, description: "Fun toy car for kids", image: require('/home/eritheia/E-Commerce/src/asset/toy.jpeg') },
    { id: 8, name: "Kids' Backpack", subcategoryId: 3, description: "Colorful backpack for kids", image: require('/home/eritheia/E-Commerce/src/asset/bagpack.jpg') },
    { id: 9, name: "Kids' Sneakers", subcategoryId: 3, description: "Cute sneakers for kids", image: require('/home/eritheia/E-Commerce/src/asset/kidssneaker.jpg') },
    { id: 10, name: "Dog Collar", subcategoryId: 4, description: "Stylish collar for dogs", image: require('/home/eritheia/E-Commerce/src/asset/dogcollar.jpeg') },
    { id: 11, name: "Cat Bed", subcategoryId: 4, description: "Cozy bed for cats", image: require('/home/eritheia/E-Commerce/src/asset/catbed.jpg') },
    { id: 12, name: "Fish Tank", subcategoryId: 4, description: "Aquarium tank for fish", image: require('/home/eritheia/E-Commerce/src/asset/fishtank.jpg') },
];

export default function Categorie({ route, navigation }) {
    const { categoryId } = route.params;
    const [searchItem, setSearchItem] = useState("");
    const filteredCategories = subcategory.filter((item) =>
      item.subcategoryId === categoryId &&
      item.name.toLowerCase().includes(searchItem.trim().toLowerCase())
    );
  
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          placeholder="Search Categories"
          style={styles.searchInput}
          value={searchItem}
          onChangeText={(text) => setSearchItem(text)}
        />
        <FlatList
          data={filteredCategories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("products", { categoryId: item.id })
                }
              >
                <Image source={item.image} style={styles.itemImage} />
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchInput: {
      height: 40,
      borderWidth: 1,
      borderColor: "lightgray",
      margin: 10,
      padding: 10,
      backgroundColor: "white",
      elevation: 10,
    },
    itemContainer: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: "lightgray",
      margin: 5,
      padding: 10,
      backgroundColor: "white",
      elevation: 10,
    },
    itemImage: {
      width: 100,
      height: 100,
      resizeMode: "cover",
      marginBottom: 10,
      borderRadius: 10,
      alignSelf: "center",
    },
    itemName: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
    },
    itemDescription: {
      fontSize: 14,
      color: "gray",
      textAlign: "center",
      marginTop: 5,
    },
  });

