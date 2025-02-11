import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>        
        {/* <ImageBackground style={styles.background} source={require("../imagenes/fondo.jpg")}> */}
        <Text style={styles.welcome}>Bienvenido {"\n"} a</Text>
        <Text style={styles.title}>A Q U A S E N C E</Text>
        <Image source={require("../../assets/images/Logo1 (1).png")} style={styles.logo} />
        {/* </ImageBackground> */}
          
         <TextInput
         style={styles.input}
         placeholderTextColor={"white"}
         placeholder="Selecciona un rol">
            
         </TextInput>

            <TouchableOpacity style={styles.botones}>
                <Text style={styles.btn1}>Iniciar Sesion</Text>
            </TouchableOpacity>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       alignItems:"center",
       backgroundColor:"#0f0e3b",
       flex:1,
    },
    background: {
        alignItems:"center",
        width:"100%",
        height: 740,
    },
    welcome: {
       fontSize:30,
       fontStyle:"italic",
       textAlign:"center",

    },
    title: {
        fontSize:50,
        color:"white",
        fontWeight:"bold",
    },
    logo: {
        marginTop:20,
        width:230,
        height:180,
    },
    button:{
        marginTop:120,
    },
    botones: {
      marginTop:120,
      borderColor:"grey",
      borderWidth:1,
      width:300,
      height:50,
      alignItems:"center",
      borderRadius:12,
      justifyContent:"center",
    },
    btn1: {
     color:"white",
     fontSize:25,
    },
    input: {
        width:300,
        height:50,
        borderRadius:12,
        borderWidth:1,
        borderColor:"grey",
    }
})