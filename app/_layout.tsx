import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

import '../global.css';
import {Text, View} from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <View className='flex-1 bg-light-background dark:bg-dark-background'>
        <Text className='mt-10 text-3xl text-light-primary dark:text-dark-primary'> Hola Mundo</Text>
      </View>
      { /*
        <Stack>
      </Stack>
       */ }
    </ThemeProvider>
  );
}
