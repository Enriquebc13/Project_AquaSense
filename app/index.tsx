import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";

<<<<<<< HEAD
// PANTALLAS
import Login from "./(login)/login";
import About from "./(about)/about";

//DRAWER
=======
// Importa las pantallas
import Login from "./(login)/login";
import About from "./(about)/about";

// Crea el Drawer Navigator
>>>>>>> cab9cb604f31c88bf4a7d7cf0b1505b44e566d6f
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#1a1a2e" },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
        drawerStyle: { backgroundColor: "#1a1a2e", width: 280 },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#bbb",
        drawerLabelStyle: { fontSize: 20, marginTop: 10, fontWeight: "bold" },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Login}
        options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text> }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text> }}
      />
    </Drawer.Navigator>
  );
}
