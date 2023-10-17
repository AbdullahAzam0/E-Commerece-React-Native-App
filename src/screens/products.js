import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, FlatList, StyleSheet,TextInput } from "react-native";

const products = [
    { id: 1, name: "Men's T-Shirt", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T1.jpeg') },
    { id: 2, name: "Men's Shirt", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T2.jpeg') },
    { id: 3, name: "Casual", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T3.jpeg') },
    { id: 4, name: "Men's T", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T4.jpeg') },
    { id: 5, name: "Men's cottom", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T5.jpeg') },
    { id: 6, name: "Men's TShirt", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T6.jpeg') },
    { id: 7, name: " T-Shirt", subcategoryId: 1, description: "Comfortable cotton T-shirt for men", image: require('/home/eritheia/E-Commerce/src/asset/T7.jpeg') },
    { id: 8, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J1.jpg') },
    { id: 9, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J2.webp') },
    { id: 10, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J3.webp') },
    { id: 11, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J4.jpeg') },
    { id: 12, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J5.webp') },
    { id: 13, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J6.webp') },
    { id: 14, name: "Men's Jeans", subcategoryId: 2, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/J7.jpeg') },
    { id: 15, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S1.jpg') },
    { id: 16, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S2.jpeg') },
    { id: 17, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S3.jpg') },
    { id: 18, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S4.jpeg') },
    { id: 19, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S5.jpeg') },
    { id: 20, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S6.jpeg') },
    { id: 21, name: "Men's Jeans", subcategoryId: 3, description: "Classic denim jeans for men", image: require('/home/eritheia/E-Commerce/src/asset/S7.webp') },
    { id: 22, name: "Women's Dress", subcategoryId: 4, description: "Elegant dress for women", image: require('/home/eritheia/E-Commerce/src/asset/D1.jpeg') },
    { id: 23, name: "Women's Dress", subcategoryId: 4, description: "Elegant dress for women", image: require('/home/eritheia/E-Commerce/src/asset/D2.jpg') },
    { id: 24, name: "Women's Dress", subcategoryId: 4, description: "Elegant dress for women", image: require('/home/eritheia/E-Commerce/src/asset/D1.jpeg') },
    { id: 25, name: "Women's Dress", subcategoryId: 4, description: "Elegant dress for women", image: require('/home/eritheia/E-Commerce/src/asset/D2.jpg') },
    { id: 26, name: "Women's Sandals", subcategoryId: 5, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/sandal1.jpeg') },
    { id: 27, name: "Women's Sandals", subcategoryId: 5, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/sandal1.jpeg') },
    { id: 28, name: "Women's Sandals", subcategoryId: 5, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/sandal1.jpeg') },
    { id: 29, name: "Women's Sandals", subcategoryId: 5, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/sandal1.jpeg') },
    { id: 30, name: "Women's Handbang", subcategoryId: 6, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/handbang.webp') },
    { id: 31, name: "Women's Handbang", subcategoryId: 6, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/handbang.webp') },
    { id: 32, name: "Women's Handbang", subcategoryId: 6, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/handbang.webp') },
    { id: 33, name: "Women's Handbang", subcategoryId: 6, description: "comfortable sandals for women", image: require('/home/eritheia/E-Commerce/src/asset/handbang.webp') },

];

export default function Products({ route, navigation }) {
    const { categoryId } = route.params;
    const [searchItem, setSearchItem] = useState("");
    const filteredproducts = products.filter((item) => item.subcategoryId === categoryId &&
    item.name.toLowerCase().includes(searchItem.trim().toLowerCase()));
    return (
        <SafeAreaView style={styles.container}>
             <TextInput
          placeholder="Search Categories"
          style={styles.searchInput}
          value={searchItem}
          onChangeText={(text) => setSearchItem(text)}
        />
            <FlatList
                data={filteredproducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (

                    <View style={styles.flatlistcontainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('productdetail', { product: item })}>
                            <Image source={item.image} style={styles.itemImage} />
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                        </TouchableOpacity>
                    </View>

                )}
            />
        </SafeAreaView>
    )
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

    flatlistcontainer: {
        flex:1,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "lightgray",
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
        elevation: 5
    },
    itemImage: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        marginBottom: 10,
        borderRadius: 10,
        alignSelf: 'center'
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
        marginTop: 5
    },
});