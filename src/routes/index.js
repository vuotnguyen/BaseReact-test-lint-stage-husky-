import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@src/screens/Home';
import Screen4 from '@src/screens/AnimatedScrollWheelSample';
import Screen1 from '@src/screens/TypographyDemo';
import Screen2 from '@src/screens/FlexBoxDemo';
import Screen5 from '@src/screens/AnimatedButtonWithSvgIconSample';
import Screen6 from '@src/screens/ListDemo';
import Screen7 from '@src/screens/DetailDemo';
import Screen3 from '@src/screens/SkeletonDemo';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen
          name="Screen4"
          component={Screen4}
        />
        <Stack.Screen
          name="Screen5"
          component={Screen5}
        />
        <Stack.Screen name="Screen6" component={Screen6} />
        <Stack.Screen name="Screen7" component={Screen7} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
