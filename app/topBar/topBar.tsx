// app/topBar/TopBar.tsx
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../globals.css";

const SUGGESTED_CITIES = [
  "Austin","Dallas","Houston","San Antonio","NYC","SF","LA","Chicago","Miami"
];

export default function TopBar() {
  const [active, setActive] = useState<string | null>(null);

  const iconStyle = (name: string) => ({
    backgroundColor: active === name ? "#0066FF" : "transparent",
    borderRadius: 999,
    padding: 6,
  });

  const chipStyle = (city: string) => ({
    backgroundColor: active === city ? "#0066FF" : "transparent",
    borderRadius: 999,
    borderWidth: active === city ? 0 : 1,
    borderColor: "#2A2A2A",
    paddingHorizontal: 12,
    paddingVertical: 6,
  });

  return (
    <View style={{ backgroundColor: "#000" }}>
      <SafeAreaView edges={["top"]} style={{ backgroundColor: "#000" }}>
        <StatusBar barStyle="light-content" />
      </SafeAreaView>

      <View
        style={{
          height: 56,
          backgroundColor: "#000",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 12,
          gap: 12,
        }}
      >
        <Pressable
          onPress={() => {
            setActive("settings");
            router.push("/topBar/settings");
          }}
          hitSlop={8}
          style={iconStyle("settings")}
        >
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </Pressable>

        <Pressable
          onPress={() => {
            setActive("search");
            router.push("/topBar/search");
          }}
          hitSlop={8}
          style={iconStyle("search")}
        >
          <Ionicons name="search" size={22} color="#fff" />
        </Pressable>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 8, gap: 8 }}
          style={{ flex: 1 }}
        >
          {SUGGESTED_CITIES.map((city) => (
            <Pressable
              key={city}
              onPress={() => {
                setActive(city);
                //router.push({ pathname: "/(tabs)/index", params: { city } });
              }}
              style={chipStyle(city)}
            >
              <Text style={{ color: "#fff", fontSize: 14 }}>{city}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable
          onPress={() => {
            setActive("profile");
            router.push("/topBar/profile");
          }}
          hitSlop={8}
          style={iconStyle("profile")}
        >
          <Ionicons name="person-circle" size={24} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}
