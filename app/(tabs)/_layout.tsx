import { icons } from '@/constants/icons';
import { iconss } from "@/constants/iconss";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

<Ionicons
  name={icons.home}
  size={24}
  
/>

const TabIcon = ({ icon, title, focused }: any) => {
    if(focused) {
        return (
            <ImageBackground
            //source={images.highlight}
            className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
        >
            <Image source={icon} className="size-5" 
            style={{ width: 24, height: 24, tintColor: 'red'}}/>
            <Text className="text-secondary text-base font-semibold ml-2">{title}</Text>
        </ImageBackground>
        )
    }

    return (
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source = {icon}
            style={{ width: 24, height: 24, tintColor: focused ? '#0632ba' : '#c6d2f7'}}
            className="size-5" />
        </View>
    )
}

const _layout = () => {
  return (
    <Tabs
        screenOptions={{
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
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <TabIcon focused={focused} icon={iconss.home} title="" />
                )
            }}
        />
        <Tabs.Screen
            name="calander"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.calander}
                        title=""
                    />
                )
            }}
        />
        <Tabs.Screen
            name="friends"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.friend}
                        title=""
                    />
                )
            }}
        />
        <Tabs.Screen
            name="maps"
            options={{
                title: "",
                headerShown: false,
                tabBarIcon: ({ focused}) => (
                    <TabIcon 
                        focused={focused}
                        icon={icons.maps}
                        title=""
                    />
                )
            }}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})