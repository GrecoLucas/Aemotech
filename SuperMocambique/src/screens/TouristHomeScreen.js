import { Pressable, SafeAreaView, Text } from 'react-native';
import touristStyles from '../styles/touristStyles';

export default function TouristHomeScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Turista';

  return (
    <SafeAreaView style={touristStyles.container}>
      <Text style={touristStyles.title}>Bem-vindo, {userName}</Text>
      <Text style={touristStyles.subtitle}>Esta e a pagina exclusiva para turistas.</Text>

      <Pressable style={touristStyles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Text style={touristStyles.logoutButtonText}>Sair</Text>
      </Pressable>
    </SafeAreaView>
  );
}
