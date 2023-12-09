import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
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
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/app-navigator';
import { UIStateProvider } from './src/contexts/ui-state/ui-state.context';
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
          <UIStateProvider>
            <TopBar />
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
            <StatusBar style='auto' />
          </UIStateProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
