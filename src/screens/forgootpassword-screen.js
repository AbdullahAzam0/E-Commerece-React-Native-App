import * as React from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from 'react-native-vector-icons';

export default function ForgotPassword({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('logIn')}>
                    <FontAwesome name="arrow-left" size={30} style={styles.backIcon} />
                </TouchableOpacity>

                <Text style={styles.title}>Forgot Password</Text>

                <Text style={styles.description}>
                    Please, enter your email address. You will receive a link to create a new password.
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="  E-mail"
                    placeholderTextColor="grey"
                />

                <TouchableOpacity style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>SEND</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backIcon: {
        marginTop: 50,
        marginLeft: 20,
        color: 'black',
    },
    title: {
        margin: 30,
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
    },
    description: {
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        width: 250,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'grey',
        marginTop: 30,
        borderWidth: 0.5,
        alignSelf: 'center',
    },
    sendButton: {
        width: 150,
        height: 40,
        marginTop: 30,
        borderWidth: 1,
        borderRadius: 9,
        alignSelf: "center",
        padding: 5,
        backgroundColor: "#DB3022",
    },
    sendButtonText: {
        alignSelf: 'center',
        margin: 5,
    },
});
