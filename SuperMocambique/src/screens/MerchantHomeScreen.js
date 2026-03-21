import { Pressable, SafeAreaView, Text } from 'react-native';
import merchantStyles from '../styles/merchantStyles';

export default function MerchantHomeScreen({ navigation, route }) {
  const userName = route?.params?.userName || 'Comerciante';

  return (
    <SafeAreaView style={merchantStyles.container}>
      <Text style={merchantStyles.title}>Bem-vindo, {userName}</Text>
      <Text style={merchantStyles.subtitle}>Esta e a pagina exclusiva para comerciantes locais.</Text>

      <Pressable style={merchantStyles.logoutButton} onPress={() => navigation.replace('Login')}>
        <Text style={merchantStyles.logoutButtonText}>Sair</Text>
      </Pressable>
    </SafeAreaView>
  );
}
