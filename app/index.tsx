import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";

// PANTALLAS
import Login from "./(login)/login";
import About from "./(about)/about";

//DRAWER
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
