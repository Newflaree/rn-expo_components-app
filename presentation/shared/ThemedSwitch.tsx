// React Native
import { 
  Pressable,
  View,
  Text,
  Switch,
} from 'react-native';
import { ThemedText } from './';


interface Props {
  text?: string;
  value: boolean;
  className?: string;

  onValueChange: ( value: boolean ) => void;
}

const ThemedSwitch = ({
  text,
  value,
  className,
  onValueChange
}: Props) => {
  return (
    <Pressable
      className={`
        flex
        flex-row
        items-center
        justify-between
        active-opacity-80
        ${ className }
      `}
    >
      {
        text && (<ThemedText className='h2 mx-2'>{ text }</ThemedText>)
      }

      <Switch
        value={ value }
        onValueChange={ onValueChange }
      />
    </Pressable>
  );
}

export default ThemedSwitch;
