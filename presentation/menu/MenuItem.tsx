// React Native
import { 
  View,
  Pressable
} from 'react-native';
import { router, Href } from 'expo-router';
import { ThemedText } from '../shared';
import { Ionicons } from '@expo/vector-icons';

import { useThemeColor } from '@/hooks/useThemeColor';


interface Props {
  title: string;
  icon: keyof typeof Ionicons.glyphMap;
  name: string;

  isFirst?: boolean;
  isLast?: boolean;
}

const MenuItem = ({
  title,
  icon,
  name,
  isFirst = false,
  isLast = false
}: Props) => {
  const [ rootName ] = name.split('/');
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      onPress={ () => router.push( rootName as Href ) }
      className='bg-white dark:bg-black/15 px-5 py-2'
      style={{
        ...(isFirst && {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingTop: 10
        }),
        ...(isLast && {
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingBottom: 10
        }),
      }}
    >
      <View className='flex-row items-center'>
        <Ionicons
          name={ icon }
          size={ 30 }
          color={ primaryColor } 
          className='mr-5'
        />

        <ThemedText type='h2'>
          { title }
        </ThemedText>
      </View>
    </Pressable>
  );
}

export default MenuItem;
