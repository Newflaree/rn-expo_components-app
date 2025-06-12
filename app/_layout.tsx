import {
  Text,
  View
} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ThemedView, ThemedText } from '@/presentation/shared';
import '../global.css'

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <ThemedText className='mt-20' type='h1'>
            Hola Mundo
          </ThemedText>
        </ThemedView>
      </ThemeProvider>
      {/*
      <Stack>
      </Stack>
        */}
    </GestureHandlerRootView>
  );
}
