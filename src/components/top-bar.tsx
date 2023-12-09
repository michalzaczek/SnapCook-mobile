import * as React from 'react';
import { Appbar } from 'react-native-paper';
import theme from '../theme/theme';
import { useUIState } from '../contexts/ui-state/ui-state.context';

const TopBar = () => {
  const { showHeader } = useUIState();

  if (!showHeader) {
    return null;
  }

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.primaryLight }}>
      <Appbar.BackAction onPress={() => {}} />
      <Appbar.Content
        titleStyle={{ fontFamily: theme.fonts.primary, fontSize: 28 }}
        title='SnapCook'
      />
      <Appbar.Action icon='account-settings' onPress={() => {}} />
    </Appbar.Header>
  );
};

export default TopBar;
