import * as React from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function MyProfile({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centered}>
                <Image
                    source={require('../asset/men.jpg')}
                    style={styles.profileImage}
                />
                <Text style={styles.profileText}>Abdullah Azam</Text>
                <Text style={styles.emailText}>abdullahazam.eritheia@gmail.com</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>My Orders</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.section}>
                    <Text style={styles.sectionText}>My Address</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => navigation.navigate('logIn')}>
                <Text style={styles.logoutButtonText}>LOG OUT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 20,
    },
    centered: {
        alignItems: "center",
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 10,
    },
    profileText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    emailText: {
        fontSize: 16,
        color: "gray",
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    logoutButton: {
        width: 250,
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 9,
        alignSelf: "center",
        padding: 5,
        backgroundColor: "#DB3022",
    },
    logoutButtonText: {
        alignSelf: 'center',
        margin: 5,
    },
});