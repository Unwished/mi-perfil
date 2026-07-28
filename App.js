import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 360, height: 260, backgroundColor: '#fff', borderRadius: 40, marginBottom: 20 , alignItems: 'center'}}>
        
        <Image source={require('./assets/Foto.png')} style={{ width: 100, height: 100, borderRadius: 50, marginTop: 20 }} />
        
        <Text>Nombre: Santiago Álvarez Maffiold </Text>
        <Text>Edad: 19 años</Text>
        <Text>Rol: Estudiante</Text>
        <Text>Habilidades: {"\n"} - Responsable {"\n"} - Liderazgo {"\n"} - Trabajo en equipo</Text>
     
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060018',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
