import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Gabriella from './components/Gabriella';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

//Páginas do app
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Atividade de coding-mobile</Text>
      <Button
        title="Next page"
        onPress={() => navigation.navigate('PageImage')}
      />
    </View>
  );
}

function PageImage() {
  return (
    <View style={styles.container}>
      <Card>
        <Gabriella />
      </Card>
    </View>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}  options={{ title: 'MY FIRST APP' }} />
        <Stack.Screen name="PageImage" component={PageImage} options={{ title: 'Page Image'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
