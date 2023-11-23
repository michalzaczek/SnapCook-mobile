import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import TopBar from './src/components/top-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts as useLobster,
  Lobster_400Regular,
} from '@expo-google-fonts/lobster';
import {
  useFonts as useRoboto,
  Roboto_400Regular,
  Roboto_500Medium,
} from '@expo-google-fonts/roboto';

export default function App() {
  const [fontLobsterLoaded, fontLobsterError] = useLobster({
    Lobster_400Regular,
  });

  const [fontRobotoLoaded, fontRobotoError] = useRoboto({
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (
    (!fontLobsterLoaded && !fontLobsterError) ||
    (!fontRobotoLoaded && !fontRobotoError)
  ) {
    return null;
  }

  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <TopBar />
          <View></View>
          <StatusBar style='auto' />
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
