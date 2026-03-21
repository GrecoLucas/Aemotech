import { StyleSheet } from 'react-native';

const merchantStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0C3C78',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#2F4F75',
    textAlign: 'center',
    marginBottom: 28,
  },
  logoutButton: {
    backgroundColor: '#0C3C78',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 26,
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

export default merchantStyles;
