import { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import {
  ThemedView,
  ThemedCard,
  ThemedSwitch
} from '@/presentation/shared';

const Switches = () => {
  const [ state, setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  });

  return (
    <ThemedView
      margin
      className='mt-2'
    >
      <ThemedCard>
        {/*
        <Switch
          trackColor={{ false: '#767577', true: '#81B0FF' }}
          thumbColor={ state.isActive ? '#F5DD4D' : '#F4F3F4' }
          ios_backgroundColor='#3E3E3E'
          onValueChange={ ( value ) => setState({ ...state, isActive: value }) }
          value={ state.isActive }
        />
          */}
        <ThemedSwitch
          text='Activo'
          value={ state.isActive }
          onValueChange={ (value) => setState({ ...state, isActive: value }) }
          className='mb-4'
        />

        <ThemedSwitch
          text='Hambriento'
          value={ state.isHungry }
          onValueChange={ (value) => setState({ ...state, isHungry: value }) }
          className='mb-4'
        />

        <ThemedSwitch
          text='Contento'
          value={ state.isHappy }
          onValueChange={ (value) => setState({ ...state, isHappy: value }) }
          className='mb-4'
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default Switches;
