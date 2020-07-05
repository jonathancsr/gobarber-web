import React, { createContext, useContext, useCallback } from 'react';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const toastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);
  return (
    <toastContext.Provider value={{ addToast, removeToast }}>
      {children}
    </toastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(toastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };