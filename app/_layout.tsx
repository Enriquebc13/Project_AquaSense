<<<<<<< HEAD
// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { StatusBar } from 'expo-status-bar';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';
// import VerifyConnection from '@/components/VerifyConnection';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//     //   <Stack>
//     //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//     //     <Stack.Screen name="+not-found" />
//     //   </Stack>
//     //   <StatusBar style="auto" />
//     // </ThemeProvider>
//     <VerifyConnection/>
//   );
// }
import Navigation from "./index";
import Login from "./login/login";

export default function Layout() {
  return <Navigation/>;
=======
import Navigation from "./index";

export default function Layout() {
  return <Navigation />;
>>>>>>> bfa72bf00db5702559a320e4c19181bba55025f8
}
