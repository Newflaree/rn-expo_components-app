import { Alert } from 'react-native';
import {
  ThemedButton,
  ThemedView,
} from '@/presentation/shared';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  return (
    <ThemedView className='mx-4'>
      <ThemedButton onPress={ createTwoButtonAlert } className='my-5'>
        2-Button Alert
      </ThemedButton>

      <ThemedButton onPress={ createThreeButtonAlert } className='mb-5'>
        3-Button Alert
      </ThemedButton>
    </ThemedView>
  );
};
export default AlertsScreen;
