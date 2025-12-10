import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';

import '../global.css';
import {Text, View} from 'react-native';
import {useThemeColor} from '@/hooks/use-theme-color';
import {ThemedView} from '@/presentation/shared/ThemedView';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const backgroundColor = useThemeColor( {}, 'background' );
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <Text className='mt-10 text-3xl text-light-primary dark:text-dark-primary'> Hola Mundo</Text>
        </ThemedView>
        { /*
          <Stack>
        </Stack>
         */ }
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
