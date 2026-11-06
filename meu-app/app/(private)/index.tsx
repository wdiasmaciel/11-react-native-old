/*
 * app/(private)/index.tsx (É a rota raiz: ./)
 */

import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function TelaInicial() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel Principal (Logado)</Text>
      
      <Button title="Ver Detalhes" onPress={() => router.push('./detalhes')} />
      
      <View style={{ height: 12 }} />
      {/* Simula o logout mandando de volta para a tela inicial de autenticação: */}
      <Button title="Sair do App" color="red" onPress={() => router.replace('./login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});
