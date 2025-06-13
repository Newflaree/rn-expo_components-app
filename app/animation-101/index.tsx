import { View, Text } from 'react-native';
import { ThemedButton, ThemedView } from '@/presentation/shared';

const Animation101Screen = () => {
  return (
    <ThemedView margin>
      <ThemedButton className='mb-2' onPress={ () => console.log( 'fadeIn' ) }>
        FadeIn
      </ThemedButton>

      <ThemedButton className='mb-2' onPress={ () => console.log( 'fadeOut' ) }>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
