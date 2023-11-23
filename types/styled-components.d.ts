import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primaryLight: string;
      primaryDark: string;
      background: string;
    };
    fonts: {
      primary: string;
      secondaryRegular: string;
      secondaryMedium: string;
    };
  }
}
