import React, { createContext, useContext, useState } from 'react';

// Define el tipo para el contexto
interface MyContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

// Crea un contexto con el tipo definido
const AppContext = createContext<MyContextType | undefined>(undefined);

// Proveedor de contexto
const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [theme,setTheme] = useState(false);

  return (
    <AppContext.Provider value={{ theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useMyContext debe ser utilizado dentro de un MyProvider');
  }
  return context;
};

export { AppContext, AppContextProvider, useAppContext };