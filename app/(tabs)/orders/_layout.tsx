import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function OrdersLayout() {
  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{ headerShown: false, title: 'Shop' }}
      />
      <Stack.Screen
        name='categories'
        options={{ headerShown: true, title: 'Categories' }}
      />
      <Stack.Screen name='+not-found' />
    </Stack>
  )
}

const styles = StyleSheet.create({})
