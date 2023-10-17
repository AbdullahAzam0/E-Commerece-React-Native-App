import * as React from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image,StyleSheet } from "react-native";

export default function AddToCart({route,navigation}) {
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

                <TouchableOpacity style={{
                width: 250, height: 40, marginTop: 20, borderwidth: 1,
                borderRadius: 9, alignSelf: "center", padding: 5, backgroundColor: "#DB3022",
            }} onPress={() => navigation.navigate('Profile')}>
                <Text style={{ alignSelf: 'center', margin: 5 }}>Buy</Text>
            </TouchableOpacity>

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