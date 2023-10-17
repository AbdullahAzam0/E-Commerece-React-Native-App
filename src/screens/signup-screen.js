import * as React from "react";
import { View, Text, TextInput, SafeAreaView, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Signup({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>Sign up</Text>

        <TextInput style={styles.input}
          placeholder="Name"
          placeholderTextColor="grey"
        />

        <TextInput style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="grey"
        />

        <TextInput style={styles.input}
          placeholder="Password"
          placeholderTextColor="grey"
        />

        <TouchableOpacity onPress={() => navigation.navigate('logIn')}>
          <Text style={styles.linkText}>
            Already have an account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('logIn')} style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or sign up with social account</Text>

        <View style={styles.socialIcons}>
          <TouchableOpacity>
          <Image
            source={require('/home/eritheia/E-Commerce/src/asset/google.png')}
            style={styles.icon}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            source={require('/home/eritheia/E-Commerce/src/asset/facebook.png')}
            style={styles.icon}
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
  headerText: {
    margin: 30,
    marginTop: 100,
    fontSize: 30,
    fontWeight: 'bold',
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    borderColor: 'grey',
    backgroundColor: 'white',
    marginTop: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
  },
  linkText: {
    marginTop: 7,
    fontSize: 10,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginRight: 50,
    color: 'black',
    backgroundColor: 'white',
  },
  button: {
    width: 250,
    height: 40,
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 9,
    alignSelf: "center",
    padding: 5,
    backgroundColor: "#DB3022",
  },
  buttonText: {
    alignSelf: 'center',
    margin: 5,
  },
  orText: {
    marginTop: 100,
    fontSize: 10,
    alignSelf: 'center',
    fontWeight: 'normal',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: 50,
    backgroundColor:'white',
    height: 50,
    marginHorizontal: 20,
  },
});
