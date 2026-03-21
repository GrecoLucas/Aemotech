import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A5C36',
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    paddingBottom: 28,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#A8D5B5',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 24,
  },
  roleRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  roleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CFE6D8',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  roleButtonActive: {
    backgroundColor: '#083D26',
    borderColor: '#083D26',
  },
  roleText: {
    color: '#0A5C36',
    fontWeight: '600',
  },
  roleTextActive: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
  },
  label: {
    color: '#0A5C36',
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D2DAD4',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 14,
    backgroundColor: '#F8FBF9',
  },
  loginButton: {
    marginTop: 6,
    backgroundColor: '#0A5C36',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default loginStyles;
