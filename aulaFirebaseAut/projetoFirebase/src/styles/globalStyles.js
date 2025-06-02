import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F4F6F8', // Fundo mais suave
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50', // Azul escuro elegante
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D0D3D4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  button: {
    backgroundColor: '#a2b7ff', // Verde água vibrante
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4, // Sombra no Android
  },
  buttonText: {
    color: '#00000',
    fontSize: 18,
    fontWeight: '600',
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#1ABC9C',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 12,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495E',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
});

export default globalStyles;
