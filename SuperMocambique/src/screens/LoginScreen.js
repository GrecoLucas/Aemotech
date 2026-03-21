import { useMemo, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import loginStyles from '../styles/loginStyles';
import authData from '../../data.json';

export default function LoginScreen({ navigation }) {
  const users = useMemo(() => authData.users || [], []);
  const [role, setRole] = useState('tourist');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName || !cleanEmail || !password) {
      Alert.alert('Dados incompletos', 'Preencha nome, email e senha.');
      return;
    }

    const user = users.find(
      (item) =>
        item.role === role &&
        item.name.toLowerCase() === cleanName.toLowerCase() &&
        item.email.toLowerCase() === cleanEmail &&
        item.password === password
    );

    if (!user) {
      Alert.alert('Login invalido', 'Verifique tipo de usuario, nome, email e senha.');
      return;
    }

    if (role === 'merchant') {
      navigation.replace('MerchantHome', { userName: user.name });
      return;
    }

    navigation.replace('TouristHome', { userName: user.name });
  };

  return (
    <SafeAreaView style={loginStyles.container}>
      <KeyboardAvoidingView
        style={loginStyles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
      >
        <ScrollView
          contentContainerStyle={loginStyles.scrollContent}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}
        >
          <Text style={loginStyles.title}>Super Mocambique</Text>
          <Text style={loginStyles.subtitle}>Escolha o tipo de usuario e faca login</Text>

          <View style={loginStyles.roleRow}>
            <Pressable
              style={[
                loginStyles.roleButton,
                role === 'tourist' ? loginStyles.roleButtonActive : null,
              ]}
              onPress={() => setRole('tourist')}
            >
              <Text
                style={[
                  loginStyles.roleText,
                  role === 'tourist' ? loginStyles.roleTextActive : null,
                ]}
              >
                Turista
              </Text>
            </Pressable>

            <Pressable
              style={[
                loginStyles.roleButton,
                role === 'merchant' ? loginStyles.roleButtonActive : null,
              ]}
              onPress={() => setRole('merchant')}
            >
              <Text
                style={[
                  loginStyles.roleText,
                  role === 'merchant' ? loginStyles.roleTextActive : null,
                ]}
              >
                Comerciante
              </Text>
            </Pressable>
          </View>

          <View style={loginStyles.card}>
            <Text style={loginStyles.label}>Nome</Text>
            <TextInput
              style={loginStyles.input}
              value={name}
              onChangeText={setName}
              placeholder="Seu nome"
              returnKeyType="next"
            />

            <Text style={loginStyles.label}>Email</Text>
            <TextInput
              style={loginStyles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="email@exemplo.com"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
            />

            <Text style={loginStyles.label}>Senha</Text>
            <TextInput
              style={loginStyles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              secureTextEntry
              returnKeyType="done"
            />

            <Pressable style={loginStyles.loginButton} onPress={handleLogin}>
              <Text style={loginStyles.loginButtonText}>Entrar</Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
