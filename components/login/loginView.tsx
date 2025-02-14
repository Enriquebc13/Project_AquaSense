import { useState } from "react";
import { Image, ImageBackground, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function LoginView() {
    const [open, setOpen] = useState(false);  // Estado para abrir/cerrar el dropdown
    const [value, setValue] = useState(null); // Estado para almacenar el valor seleccionado
    const [items, setItems] = useState([
        { label: "Administrador", value: "admin" },
        { label: "Usuario", value: "user" },
        { label: "Invitado", value: "guest" },
    ]);

    return (
        <>
        <StatusBar  barStyle="light-content" backgroundColor='#1a1a2e'hidden={false} />
            <ImageBackground style={styles.fondo}
            source={require("../../assets/images/fondo.jpg")}>
                
            <Text style={styles.welcome}>Bienvenido {"\n"} a</Text>
            <Text style={styles.title}>A Q U A S E N C E</Text>
            <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
           
            <View style={styles.Containerdropdown}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Selecciona un usuario"
                style={styles.dropdown}
                textStyle={{fontSize:25, color: "white" }}
                dropDownContainerStyle={{ backgroundColor: "#333" }}
                labelStyle={{ color: "white" }}
            />
            

            <TouchableOpacity style={styles.botones}>
                <Text style={styles.btn1}>Iniciar Sesión</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        // backgroundColor: "#0f0e3b",
        backgroundColor:"#5fa8d3",
        flex: 1,
        paddingTop: 55,
    },
    fondo: {
        width:"100%",
        height:"100%",
        alignItems:"center",
    },
    welcome: {
        fontSize: 30,
        fontStyle: "italic",
        textAlign: "center",
        color: "white",
        fontWeight:"bold",
        marginTop:10,
    },
    title: {
        fontSize: 50,
        color: "white",
        fontWeight: "bold",
    },
    logo: {
        marginTop: 20,
        width: 290,
        height: 300,
    },
    botones: {
        marginTop: 10,
        borderColor: "white",
        borderWidth: 1,
        width: 300,
        height: 50,
        alignItems: "center",
        borderRadius: 12,
        justifyContent: "center",
        backgroundColor:"#1a1a2e",
        // backgroundColor:"#120934"
    },
    btn1: {
        color: "white",
        fontSize: 25,
    },
    Containerdropdown: {
        alignItems:"center", marginTop:20,
    },
    dropdown: {
        width: 300,
        height:50,
        marginTop: 10,
        borderRadius: 12,
        backgroundColor:"#1a1a2e",
        // backgroundColor: "#0f0e3b",
        borderColor: "white",
        borderWidth: 1,
    },
});
