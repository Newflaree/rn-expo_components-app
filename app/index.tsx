// React Native
import { 
  View,
  Text
} from 'react-native';
import { Href, Link } from 'expo-router';
import { animationMenuRoutes } from '@/constants/Routes';
import { ThemedView } from '@/presentation/shared';


const HomeScreen = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map( ( route, index ) => (
          <Link href={ route.name.split('/')[0] as Href }>{ route.title }</Link>
        ))
      }
    </ThemedView>
  );
}

export default HomeScreen;
