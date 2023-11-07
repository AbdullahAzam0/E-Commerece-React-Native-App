import * as React from "react";
import { View, SafeAreaView, Image, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";

const categories = [
    { id: 1, name: "Men", image: require('../asset/men.jpg') },
    { id: 2, name: "Women", image: require('../asset/women.jpg') },
    { id: 3, name: "Kids", image: require('../asset/kid.jpg') },
    { id: 4, name: "Pets", image: require('../asset/pet.jpg') },
];

export default function Dashboard({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    source={require('../asset/dashboard.png')}
                    style={styles.backgroundImage}
                />

                <FlatList
                    style={styles.categoryContainer}
                    data={categories}
                    horizontal
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.categoryItem}
                            onPress={() => navigation.navigate('categories', { categoryId: item.id })}>
                            <Image
                                source={item.image}
                                style={styles.categoryImage}
                            />
                            <Text style={styles.categoryName}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        width: 376,
        height: 536,
        alignSelf: 'center',
        resizeMode: 'cover',
    },
    categoryContainer: {
        marginTop: 10,
        paddingLeft: 10,
    },
    categoryItem: {
        marginHorizontal: 10,
    },
    categoryImage: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    categoryName: {
        alignSelf: 'center',
    },
});
