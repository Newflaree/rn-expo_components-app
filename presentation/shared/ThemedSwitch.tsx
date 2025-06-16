// React Native
import { 
  Pressable,
  View,
  Platform,
  Text,
  Switch,
} from 'react-native';
import { ThemedText } from './';
import { useThemeColor } from '@/hooks/useThemeColor';


interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: ( value: boolean ) => void;
}

const isAndroid = Platform.OS === 'android';

const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange
}: Props) => {
  const switchActiveColor = useThemeColor({}, 'primary');

  return (
    <Pressable
      className={`
        flex
        flex-row
        items-center
        mx-2
        justify-between
        active-opacity-80
        ${ className }
      `}
      onPress={ () => onValueChange( !value ) }
    >
      {
        text
          ? <ThemedText className='h2 mx-2'>{ text }</ThemedText>
          : <View />
      }

      <Switch
        value={ value }
        onValueChange={ onValueChange }
        thumbColor={ isAndroid ? switchActiveColor : '' }
        //ios_backgroundColor={ value ? 'green' : 'red' }
        trackColor={{
          false: 'gray',
          true: switchActiveColor
        }}
      />
    </Pressable>
  );
}

export default ThemedSwitch;
