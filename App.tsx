import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from 'stores';
import { Hello } from '@overlay/index';
export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <Provider store={store}>
        <View style={styles.container}>

          <Text>{Hello}</Text>
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
