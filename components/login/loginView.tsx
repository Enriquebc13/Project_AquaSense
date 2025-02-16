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
  Keyboard
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
    }
  };

  return (
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
    </ImageBackground>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  fondo: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  scrollContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    marginTop: 10,
    alignItems: "center",
  },
  welcometext: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "center",
    width:200,
  },
  title: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    marginTop:80,
    width: 250,
    height: 260,
  },
  containerInput: {
    marginTop:40,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 12,
    width: 280,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom:20,
  },
  input: {
    flex: 1,
    height: 50,
    paddingLeft: 10,
    fontSize: 18,
    color: "white",
  },
  button: {
    marginTop:20,
    borderRadius: 20,
    alignItems: 'center',
    width: 200,
    height: 50,
    justifyContent: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
