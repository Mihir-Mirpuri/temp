import React from 'react';
import { View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1">
      <View className="absolute w-full h-[1px] bg-black top-[45%]" />
      <View className="absolute h-full w-[1px] bg-black left-1/2" />
    </View>
  );

}
