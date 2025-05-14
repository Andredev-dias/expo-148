import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <>
    <Header image={require("../../assets/images/react-logo.png")}/>
    <Tabs>
      <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>❤</Text>)}}></Tabs.Screen>
      <Tabs.Screen name='explore' options={{headerShown: false, tabBarIcon: () => (<Text>💕</Text>)}}></Tabs.Screen>
      <Tabs.Screen name='list' options={{headerShown: false, tabBarIcon: () => (<Text>💖</Text>)}}></Tabs.Screen>
    </Tabs>
    </>
  );
}
