import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function AboutView() {
    return (
        <ImageBackground  style={styles.fondo}
        source={require("../../assets/images/fondo.jpg")}>
            <Text style={styles.title}>Acerca de</Text>
            <View style={styles.container}>
                <Text style={styles.text}>
                Esta App Fue creada por estudiantes {"\n"}
                de la Universidad Tecnologica de Izucar de Matamoros {"\n"}
                </Text>
         
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    fondo: {
         height:"100%",
         width:"100%",
         alignItems:"center",
    },
    title: {
        fontSize: 40,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
    },
    container: {
        marginTop:40,
        width:350,
        height:400,
        borderRadius:10,
        borderWidth:3,
        borderColor:"black",
        backgroundColor:"rgba(0, 0, 0, 0.4)",
        padding:10,
    },
    text: {
        color:"white",
        fontSize:16,
        textAlign:"center",
    }
})