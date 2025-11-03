// app/_layout.tsx
import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "./globals.css";

export default function RootLayout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Top safe area (notch/status area) */}
      <SafeAreaView edges={['top']} style={{ backgroundColor: "#000" }}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>

      {/* Main app */}
      <View style={{ flex: 1, backgroundColor: "#0F0D23" }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="topBar" options={{ headerShown: false }} />
        </Stack>
      </View>
    </View>
  );
}
