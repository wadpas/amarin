import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import '../global.css'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false, title: 'Shop' }}
        />
        <Stack.Screen
          name='categories'
          options={{ headerShown: false, title: 'Categories' }}
        />
        <Stack.Screen
          name='product'
          options={{ headerShown: true, title: 'Product' }}
        />
        <Stack.Screen
          name='cart'
          options={{ headerShown: true, presentation: 'modal', title: 'Cart' }}
        />
        <Stack.Screen
          name='auth'
          options={{ headerShown: true, title: 'Auth' }}
        />
        <Stack.Screen name='+not-found' />
      </Stack>
      <StatusBar style='auto' />
    </ThemeProvider>
  )
}
