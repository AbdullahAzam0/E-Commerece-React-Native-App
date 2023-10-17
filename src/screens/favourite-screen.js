import * as React from "react";
import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";

export default function Favorite({ route }) {
    const { product, additionalDetails } = route.params;
    const filterDetails = additionalDetails[product.id];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.productContainer}>
                <Image source={product.image} style={styles.productImage} />
                <Text style={styles.productInfo}>Size: {filterDetails.size}</Text>
                <Text style={styles.productInfo}>Color: {filterDetails.color}</Text>
                <Text style={styles.productInfo}>Price: {filterDetails.price}</Text>
                <Text style={styles.productInfo}>Brand: {filterDetails.brand}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
    productInfo: {
        fontSize: 16,
    },
});