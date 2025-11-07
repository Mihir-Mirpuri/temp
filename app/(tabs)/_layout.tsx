import { iconss } from "@/constants/iconss";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';

type IoniconName = keyof typeof Ionicons.glyphMap;

function TopBar() {
    const [selectedCity, setSelectedCity] = useState<string>("Austin");
    const CITIES = ["Austin","Dallas","Houston","San Antonio","Miami","LA","NYC","Chicago"];
    const inactiveColor = "#c6d2f7";
  
    return (
      <View
        style={{
          backgroundColor: "#000000",
          paddingHorizontal: 12,
          paddingVertical: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* profile */}
          <Ionicons name="person-circle" size={24} color={inactiveColor} />
          <View style={{ width: 12 }} />
  
          {/* search */}
          <Ionicons name="search" size={22} color={inactiveColor} />
          <View style={{ width: 12 }} />
  
          {/* cities in the middle, scrollable */}
          <View style={{ flex: 1 }}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
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
          </View>
  
          {/* settings */}
          <Ionicons name="settings-outline" size={22} color={inactiveColor} />
        </View>
      </View>
    );
  }
  
  
const TabIcon = ({
    name,
    title = "",
    focused,
  }: {
    name: IoniconName;
    title?: string;
    focused: boolean;
  }) => {
    const activeColor = "#FAFAFA";
    const inactiveColor = "#c6d2f7";
  
    if (focused) {
      return (
        <ImageBackground
          // source={images.highlight} // keep commented if you don’t have it
          // NOTE: className works only if you’re using NativeWind; otherwise use style
          className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Ionicons name={name} size={24} color={activeColor} />
          {title ? (
            <Text className="text-secondary text-base font-semibold ml-2">
              {title}
            </Text>
          ) : null}
        </ImageBackground>
      );
    }
  
    return (
      <View className="size-full justify-center items-center mt-4 rounded-full">
        <Ionicons name={name} size={24} color={inactiveColor} />
      </View>
    );
  };

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
            header: () => <TopBar />,
            headerShown: true,
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#000000',
                height: 85,
                position: 'absolute',
                overflow: 'hidden',
                borderWidth: 1,
                borderColor: '0f0D23',
            }
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: "",
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} name={iconss.home as IoniconName} />
                )
            }}
        />
        <Tabs.Screen
            name="calander"
            options={{
                title: "",
                tabBarIcon: ({ focused}) => (
                    <TabIcon focused={focused} name={iconss.calendar as IoniconName} />
                )
            }}
        />
        <Tabs.Screen
            name="friends"
            options={{
                title: "",
                tabBarIcon: ({ focused}) => (
                    <TabIcon focused={focused} name={iconss.people as IoniconName} />
                )
            }}
        />
        <Tabs.Screen
            name="maps"
            options={{
                title: "",
                tabBarIcon: ({ focused}) => (
                    <TabIcon focused={focused} name={iconss.location as IoniconName} />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout