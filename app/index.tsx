// React Native
import { View } from 'react-native';

import {
  animationMenuRoutes,
  uiMenuRoutes,
  menuRoutes
} from '@/constants/Routes';
import { MenuItem } from '@/presentation/menu';
import { ThemedView } from '@/presentation/shared';


const HomeScreen = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map( ( route, index ) => (
          <MenuItem
            key={ route.title }
            title={ route.title }
            icon={ route.icon }
            name={ route.name }
            isFirst={ index === 0 }
            isLast={ index === animationMenuRoutes.length - 1 }
          />
        ))
      }

      <View className='my-3' />

      {
        uiMenuRoutes.map( ( route, index ) => (
          <MenuItem
            key={ route.title }
            title={ route.title }
            icon={ route.icon }
            name={ route.name }
            isFirst={ index === 0 }
            isLast={ index === animationMenuRoutes.length - 1 }
          />
        ))
      }

      <View className='my-3' />

      {
        menuRoutes.map( ( route, index ) => (
          <MenuItem
            key={ route.title }
            title={ route.title }
            icon={ route.icon }
            name={ route.name }
            isFirst={ index === 0 }
            isLast={ index === animationMenuRoutes.length - 1 }
          />
        ))
      }
    </ThemedView>
  );
}

export default HomeScreen;
