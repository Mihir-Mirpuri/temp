import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function TopBar() {
  const [selectedCity, setSelectedCity] = useState<string>("Austin");
  const CITIES = [
    "Austin",
    "Dallas",
    "Houston",
    "San Antonio",
    "Miami",
    "LA",
    "NYC",
    "Chicago",
  ];

  const activeColor = "#FAFAFA";
  const inactiveColor = "#7C7C7C";

  return (
    <View
      style={{
        backgroundColor: "#000000",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 12,
        paddingVertical: 10,
      }}
    >
      {/* Profile icon */}
      <Ionicons name="person-circle" size={24} color={activeColor} />
      <View style={{ width: 12 }} />

      {/* Search icon */}
      <Ionicons name="search" size={22} color={activeColor} />
      <View style={{ width: 12 }} />

      {/* Scrollable list of cities */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 1 }}
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {CITIES.map((city) => {
          const isActive = city === selectedCity;
          return (
            <Pressable
              key={city}
              onPress={() => setSelectedCity(city)}
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                borderRadius: 999,
                marginRight: 8,
                backgroundColor: isActive ? "#FAFAFA" : "#1F1F1F",
                borderWidth: 1,
                borderColor: isActive ? "#FAFAFA" : "#333333",
              }}
            >
              <Text
                style={{
                  color: isActive ? "#000000" : inactiveColor,
                  fontSize: 13,
                  fontWeight: isActive ? "600" : "500",
                }}
              >
                {city}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {/* Settings icon */}
      <Ionicons name="settings-outline" size={22} color={activeColor} />
    </View>
  );
}
