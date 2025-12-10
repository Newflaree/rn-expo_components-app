import { 
  Text,
  TextProps
} from 'react-native';


type TextType = 'normal' | 'h1' | 'h2' | 'semi-bold' | 'link';

interface Props extends TextProps {
  className?: string;
  type?: TextType;
  label?: string;
}

export const ThemedText = ({
  className,
  type = 'normal',
  label,

  ...rest
}: Props) => {
  return <Text
    className={[
      'mt-10 text-3xl text-light-primary dark:text-dark-primary',
      type === 'normal' ? 'font-normal' : undefined,
      type === 'h1' ? 'text-3xl' : undefined,
      type === 'h2' ? 'text-xl' : undefined,
      type === 'semi-bold' ? 'font-bold' : undefined,
      type === 'link' ? 'font-normal underline' : undefined,
      className
    ].join(' ')}
    { ...rest }
  />
}
