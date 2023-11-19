import * as React from 'react';
import { Appbar } from 'react-native-paper';

const TopBar = () => (
  <Appbar.Header>
    <Appbar.BackAction onPress={() => {}} />
    <Appbar.Content title='SnapCook' />
    <Appbar.Action icon='account-settings' onPress={() => {}} />
  </Appbar.Header>
);

export default TopBar;
