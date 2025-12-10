import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/use-color-scheme';

import {useThemeColor} from '@/hooks/use-theme-color';
import {ThemedView} from '@/presentation/shared/ThemedView';
import {ThemedText} from '@/presentation/shared/ThemedText';

import '../global.css';


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
          <ThemedText className='mt-20'>Hola Mundo</ThemedText>
        </ThemedView>
        { /*
          <Stack>
        </Stack>
         */ }
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
