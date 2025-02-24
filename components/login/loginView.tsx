<<<<<<< HEAD
import React, { useState } from "react";
import {View,TextInput,TouchableOpacity,StyleSheet,Text,Alert,Image,ImageBackground,ScrollView,KeyboardAvoidingView,Platform,StatusBar,} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "../types";
import { login} from "@/lib/user/auth";
import { sendPasswordReset } from "@/lib/user/passwordReset";
import ModalResetPassword from "./modalResetpassword";
import Icon from "react-native-vector-icons/Feather";

const LoginView = () => {
  const navigation = useNavigation<NavigationProps>();
  const [password, setPassword] = useState("");
  const [email] = useState("aquasensekeicode@gmail.com");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {  //proceso de inicio de sesión.
    if (password === "") { //Verifica si el campo esta vacio
      Alert.alert("❌ Error", "Tienes que agregar tu contraseña");
      return;
    }
    setLoading(true);
    try {
      await login(email, password); //Llama a una función login y verificar las credenciales
      setLoading(false);
      navigation.navigate("Home"); //Redirige a la pantalla home
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "Credenciales incorrectas");
    }
  };

  const handleConfirmReset = async () => {
    try {
      await sendPasswordReset(email);
      setModalVisible(false);
      Alert.alert("Éxito", "Se ha enviado un correo para recuperar la contraseña.");
    } catch (error: any) {
      Alert.alert("Error", error.message);
=======
import React, { useState } from 'react';
import {
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
  StatusBar,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Íconos para mostrar/ocultar contraseña
import { validatePassword } from '@/lib/UserDataSource'; // Importa tu función de validación

const LoginView = ({ setIsAuthenticated }: { setIsAuthenticated: (value: boolean) => void }) => {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = async () => {
    setLoading(true);
    try {
      const result = await validatePassword(password);
      if (result === 'Contraseña correcta') {
        setIsAuthenticated(true);
        Alert.alert('¡Bienvenido!', 'Contraseña correcta');
      } else {
        Alert.alert('Error', 'Contraseña incorrecta');
      }
    } finally {
      setLoading(false);
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
    }
  };

  return (
<<<<<<< HEAD
    <ImageBackground style={styles.fondo} source={require("../../assets/images/fondo.jpg")}> 
      <View style={styles.fondo}> 
        <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" hidden={false} />

        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.welcome}>
              {/* <Text style={styles.welcometext}>Bienvenido a</Text> */}
              <Text style={styles.title}>A Q U A S E N S E</Text>
              <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
            </View>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.input}
                placeholder="Ingresa tu contraseña"
                placeholderTextColor={"white"}
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 10 }}>
                <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.login}>
              <TouchableOpacity
                onPress={handleLogin}
                disabled={loading}
                style={[styles.button, { backgroundColor: loading ? 'red' : '#007bff' }]}
              >
                <Text style={styles.buttonText}>{loading ? 'Cargando...' : 'Iniciar sesión'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Text style={styles.password}>Olvidé mi contraseña</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>

      <ModalResetPassword
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onConfirm={handleConfirmReset}
        email={email}
      />
=======
    <ImageBackground style={styles.fondo} source={require("../../assets/images/fondo.jpg")}>
      <StatusBar barStyle="light-content" backgroundColor='#1a1a2e' hidden={false} />

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} 
        style={{ flex: 1 }}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.welcome}>
            <Text style={styles.welcometext}>Bienvenido a</Text>
            <Text style={styles.title}>A Q U A S E N S E</Text>
            <Image style={styles.logo} source={require("../../assets/images/logo.png")} />
          </View>

          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              placeholder='Ingresa tu contraseña'
              placeholderTextColor={"white"}
              secureTextEntry={Platform.OS === 'web' ? false : !showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ padding: 10 }}>
              <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="black" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleLogin}
            disabled={loading}
            style={[styles.button, { backgroundColor: loading ? '#11212d' : '#1a1a2e' }]}
          >
            <Text style={styles.buttonText}>{loading ? 'Cargando...' : 'Iniciar sesión'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
    </ImageBackground>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  fondo: {
    width: "100%",
    height: "100%",
    alignItems: "center",
<<<<<<< HEAD
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
=======
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
<<<<<<< HEAD
    marginTop: 25,
=======
    marginTop: 10,
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
    alignItems: "center",
  },
  welcometext: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
<<<<<<< HEAD
    width: 200,
=======
    width:200,
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
<<<<<<< HEAD
    marginTop: 30,
    width: 300,
    height: 300,
  },
  containerInput: {
    marginTop: 40,
=======
    marginTop:80,
    width: 250,
    height: 260,
  },
  containerInput: {
    marginTop:40,
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 12,
    width: 280,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
<<<<<<< HEAD
    marginBottom: 20,
=======
    marginBottom:20,
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    fontSize: 18,
    color: "white",
  },
  button: {
<<<<<<< HEAD
    // marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 200,
    height: 50,
    borderWidth: 1,
    // borderColor: "blue",
=======
    marginTop:20,
    borderRadius: 20,
    alignItems: 'center',
    width: 200,
    height: 50,
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
    justifyContent: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
  login: {
    width: 390,
    height: 70,
    // flexDirection: "row",
    // gap: 10,
    alignItems: "center",
  },
  password: {
    textDecorationLine: "underline",
    color: "white",
    marginTop: 20,
    fontSize: 18,
  },
=======
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
});
