import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { IUIStateContext } from './ui-state-context.interface';

const UIStateContext = createContext<IUIStateContext | undefined>(undefined);

function UIStateProvider({ children }: { children: ReactNode }) {
  const [showHeader, setShowHeader] = useState<boolean>(true);

  const value: IUIStateContext = useMemo(() => {
    return {
      showHeader,
      setShowHeader,
    };
  }, [showHeader]);

  return (
    <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>
  );
}

function useUIState() {
  const context = useContext(UIStateContext);

  if (context === undefined)
    throw new Error('UIStateContext was used outside of the RecipesProvider');
  return context;
}

export { UIStateProvider, useUIState };
