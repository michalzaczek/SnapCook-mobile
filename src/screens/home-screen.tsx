import { SvgXml } from 'react-native-svg';
import logo from '../../assets/logo';
import styled from 'styled-components/native';
import { Surface, Text } from 'react-native-paper';
import { View } from 'react-native';

const LogoContainer = styled(Surface)`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  border-radius: 0 0 10px 10px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Container = styled(View)`
  height: 400px;
`;

const Sub = styled(Text)`
  color: ${({ theme }) => theme.colors.primaryLight};
  font-size: 20px;
  margin-top: 50px;
`;

export function HomeScreen() {
  return (
    <>
      <Container>
        <LogoContainer elevation={2}>
          <SvgXml xml={logo} width={210} height={210} />
          <Sub>Tap to take a photo!</Sub>
        </LogoContainer>
      </Container>
    </>
  );
}
