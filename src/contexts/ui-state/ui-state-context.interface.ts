import { Dispatch } from 'react';

export interface IUIStateContext {
  showHeader: boolean;
  setShowHeader: Dispatch<boolean>;
}
