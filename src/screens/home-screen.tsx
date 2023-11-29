import { SvgXml } from 'react-native-svg';
import logo from '../../assets/logo';
import styled from 'styled-components/native';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native';

const Container = styled(View)`
  height: 400px;
`;

const LogoContainer = styled(View)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 0 0 30px 30px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Sub = styled(Text)`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 20px;
  margin-top: 50px;
`;

export function HomeScreen() {
  return (
    <SafeAreaView>
      <Container>
        <LogoContainer>
          <SvgXml xml={logo} width={210} height={210} />
          <Sub>Tap to take a photo!</Sub>
        </LogoContainer>
      </Container>
    </SafeAreaView>
  );
}
