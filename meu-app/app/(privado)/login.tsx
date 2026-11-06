import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Login</Text>
      
      {/* Simula o login enviando o usuário para a Dashboard */}
      <Button title="Entrar (Ir para o App)" onPress={() => router.replace('./')} /> // "./" corresponde "./(private)/index". 
      
      <View style={{ height: 12 }} />
      <Button title="Criar uma conta" color="#666" onPress={() => router.push('./cadastro')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});
