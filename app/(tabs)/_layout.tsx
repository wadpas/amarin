import { Tabs } from 'expo-router'
import React from 'react'

import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import { SafeAreaView, StyleSheet } from 'react-native'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaView style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarLabelStyle: {
            fontSize: 16,
          },
          tabBarStyle: {
            height: 60,
          },
        }}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'Shop',
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name='shopping-bag'
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name='orders'
          options={{
            title: 'Orders',
            tabBarIcon: ({ color }) => (
              <IconSymbol
                size={28}
                name='fact-check'
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})
