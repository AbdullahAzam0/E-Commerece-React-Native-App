import React, { useState } from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, StyleSheet,Alert } from "react-native";

export default function Login({ navigation }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const savedemail = 'eritheialab'; 
    const savedPassword = 'eritheia786'; 

    const handleLogin = () => {
        if (email === savedemail && password === savedPassword) {
            Alert.alert('Login successful');
            navigation.navigate('bottomNavigation'); 
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
                    <Image
                        source={require('/home/eritheia/E-Commerce/src/asset/back.png')}
                        style={styles.backButton}
                    />
                </TouchableOpacity>

                <Text style={styles.title}>Login</Text>

                <TextInput style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="grey"
                    onChangeText={text => setEmail(text)} 
                />

                <TextInput style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="grey"
                    onChangeText={text => setPassword(text)}
                />

                <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')}>
                    <Text style={styles.forgotPassword}>Forgot your password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <Text style={styles.socialText}>Or login with social account</Text>

                <View style={styles.socialButtons}>
                    <TouchableOpacity>
                        <Image
                            source={require('/home/eritheia/E-Commerce/src/asset/google.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            source={require('/home/eritheia/E-Commerce/src/asset/facebook.png')}
                            style={styles.socialIcon}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        marginTop: 50,
        width: 30,
        height: 30,
        marginLeft: 20,
    },
    title: {
        margin: 30,
        marginTop: 50,
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        width: 250,
        height: 40,
        borderRadius: 5,
        backgroundColor: 'white',
        borderColor: 'grey',
        marginTop: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
    },
    forgotPassword: {
        marginTop: 7,
        fontSize: 10,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        marginRight: 50,
        color: 'black',
        backgroundColor: 'white',
    },
    loginButton: {
        width: 250,
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 9,
        alignSelf: "center",
        padding: 5,
        backgroundColor: "#DB3022",
    },
    loginButtonText: {
        alignSelf: 'center',
        margin: 5,
    },
    socialText: {
        marginTop: 100,
        fontSize: 10,
        alignSelf: 'center',
        fontWeight: 'normal',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialIcon: {
        width: 50,
        backgroundColor:'white',
        height: 50,
        marginRight: 20,
    },
});
