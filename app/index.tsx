<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text } from "react-native";
import { onAuthStateChanged } from "firebase/auth"; // Para escuchar cambios de sesión
import { auth } from "@/lib/firebaseConfig";// Asegúrate de importar bien tu configuración de Firebase
import { RootDrawerParamList } from "@/components/types"; // Asegúrate de importar el tipo correcto

//PANTLLAS
import Login from "./login/login";
import About from "./about/about";

import Profile from "./profile/profile";
import Home from "./home/home";
=======
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
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8

const Drawer = createDrawerNavigator();

export default function App() {
<<<<<<< HEAD
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const Drawer = createDrawerNavigator<RootDrawerParamList>();  // Usando el tipo de la lista de pantallas

  useEffect(() => {
    // Cambios en la autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user); // Si hay usuario, está autenticado
    });

    return () => unsubscribe(); // Limpiar el listener al desmontar
  }, []);

=======
  // Estado para controlar si el usuario está autenticado
  const [isAuthenticated, setIsAuthenticated] = useState(false);
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
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
<<<<<<< HEAD
=======
      {/* Si no está autenticado, solo muestra Login y About */}
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
      {!isAuthenticated ? (
        <>
          <Drawer.Screen
            name="Login"
<<<<<<< HEAD
            component={Login}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>📱</Text> }}
=======
            component={() => <Login setIsAuthenticated={setIsAuthenticated} />}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🔑</Text> }}
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
          />
          <Drawer.Screen
            name="About"
            component={About}
<<<<<<< HEAD
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🔎</Text> }}
=======
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text> }}
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
          />
        </>
      ) : (
        <>
<<<<<<< HEAD
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🏚️</Text> }}
          />
            <Drawer.Screen
            name="Perfil"
            component={Profile}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>⚙️</Text> }}
=======
          {/* Si está autenticado, muestra Home y About */}
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🏠</Text> }}
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
          />
          <Drawer.Screen
            name="About"
            component={About}
<<<<<<< HEAD
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>🔎</Text> }}
          />
        
=======
            options={{ drawerIcon: () => <Text style={{ fontSize: 20 }}>ℹ️</Text> }}
          />
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
        </>
      )}
    </Drawer.Navigator>
  );
}
<<<<<<< HEAD
=======

>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
