import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View
} from 'react-native';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';


const isIOS =  Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={ isIOS ? 'height' : undefined }
    >
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre Completo'
              autoCapitalize='words'
              autoCorrect={ true }
              onChangeText={ (text) => setForm({ ...form, name: text }) }
            />
            <ThemedTextInput
              placeholder='Correo Electrónico'
              keyboardType='email-address'
              onChangeText={ (text) => setForm({ ...form, name: text }) }
            />
            <ThemedTextInput
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={ (text) => setForm({ ...form, name: text }) }
            />
          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>
              { JSON.stringify( form, null, 2 ) }
            </ThemedText>
          </ThemedCard>

          <ThemedCard
            //style={{ marginBottom: isIOS ? 100 : 10 }}
          >
            <ThemedTextInput
              placeholder='Teléfono'
              keyboardType='phone-pad'
              onChangeText={ (text) => setForm({ ...form, name: text }) }
            />
          </ThemedCard>
        </ThemedView>

        { isIOS && <View style={{ marginBottom: 100 }} /> }
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
