import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import TopBar from './src/components/top-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <TopBar />
          <View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <StatusBar style='auto' />
          </View>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
