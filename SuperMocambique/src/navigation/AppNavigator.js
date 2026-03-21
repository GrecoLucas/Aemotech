import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TouristHomeScreen from '../screens/TouristHomeScreen';
import MerchantHomeScreen from '../screens/MerchantHomeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#0A5C36' },
          headerTintColor: '#FFFFFF',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Entrar' }} />
        <Stack.Screen
          name="TouristHome"
          component={TouristHomeScreen}
          options={{ title: 'Area do Turista' }}
        />
        <Stack.Screen
          name="MerchantHome"
          component={MerchantHomeScreen}
          options={{ title: 'Area do Comerciante' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
