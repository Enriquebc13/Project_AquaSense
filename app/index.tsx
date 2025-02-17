// import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { Text } from "react-native";

// // PANTALLAS
// import Login from "./(login)/login";
// import About from "./(about)/about";

// // Crea el Drawer Navigator
// const Drawer = createDrawerNavigator();

// export default function Navigation() {
//   return (
//     <Drawer.Navigator
//       screenOptions={{
//         headerStyle: { backgroundColor: "#1a1a2e" },
//         headerTintColor: "white",
//         headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
//         drawerStyle: { backgroundColor: "#1a1a2e", width: 280 },
//         drawerActiveTintColor: "#fff",
//         drawerInactiveTintColor: "#bbb",
//         drawerLabelStyle: { fontSize: 20, marginTop: 10, fontWeight: "bold" },
//       }}
//     >
//       <Drawer.Screen
//         name="Home"
//         component={Login}
//         options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text> }}
//       />
//       <Drawer.Screen
//         name="About"
//         component={About}
//         options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text> }}
//       />
//     </Drawer.Navigator>
//   );
// }
import React, { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import About from "./(about)/about";
import Home from "./(home)/home";
import Login from "./(login)/login";

const Drawer = createDrawerNavigator();

export default function App() {
  // Estado para controlar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
      {/* Si no está autenticado, solo muestra Login y About */}
      {!isAuthenticated ? (
        <>
          <Drawer.Screen
            name="Login"
            component={() => <Login setIsAuthenticated={setIsAuthenticated} />}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🔑</Text> }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text> }}
          />
        </>
      ) : (
        <>
          {/* Si está autenticado, muestra Home y About */}
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text> }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text> }}
          />
        </>
      )}
    </Drawer.Navigator>
  );
}

