import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from 'stores';
import Initialize from '@packages/meta-success/Initialize/Initialize';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from 'navigations/Navigator';
import Screen from '@packages/meta-success/constants/screens';
import MainNavigation from '@packages/meta-success/navigations';
export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigation />
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
