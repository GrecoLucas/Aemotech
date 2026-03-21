import { StyleSheet } from 'react-native';

const touristStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAF7',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0A5C36',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#355E4B',
    textAlign: 'center',
    marginBottom: 28,
  },
  logoutButton: {
    backgroundColor: '#0A5C36',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 26,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default touristStyles;
