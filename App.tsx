import * as filler from 'react-native-url-polyfill';
//import 'react-native-url-polyfill/auto';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeWindStyleSheet } from 'nativewind';
import { BasketScreen, HomeScreen, RestaurantScreen, PreparingOrderScreen, DeliveryScreen } from './src/screens';
import { HomeStackNavigatorParamList } from './src/types';
import { store } from './store'
import { Provider } from 'react-redux'


//required for useSearchParam error (sanity)
const  { setupURLPolyfill } = filler;
setupURLPolyfill();



//required for tailwind to work on web mode styling
NativeWindStyleSheet.setOutput({
  default: "native"
})




const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen 
        name="Basket" 
        component={BasketScreen} 
        options={{presentation: "modal", headerShown: false}}
      />
        <Stack.Screen 
          name="PreparingOrder" 
          component={PreparingOrderScreen}
          options={{presentation: "fullScreenModal", headerShown: false }}
          />
          <Stack.Screen 
          name="Delivery" 
          component={DeliveryScreen}
          options={{presentation: "fullScreenModal", headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


