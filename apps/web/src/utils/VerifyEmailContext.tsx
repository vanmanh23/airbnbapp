import React, { createContext, useState, ReactNode } from 'react';

interface VerifyEmailContextType {
  email: string;
  handleSetEmail: (email: string) => void;
  isLogin: boolean;
  handleSetIsLogin:  (isLogin: boolean) => void;
}

// Create the context with a default value of `undefined`
export const VerifyEmailContext = createContext<VerifyEmailContextType | undefined>(undefined);

interface VerifyEmailProviderProps {
  children: ReactNode;
}

export const VerifyEmailProvider: React.FC<VerifyEmailProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const handleSetEmail = (emailVerified: string) => {
    setEmail(emailVerified);
  };

  const handleSetIsLogin = (isLogin: boolean) => {
    setIsLogin(isLogin);
  }
  return (
    <VerifyEmailContext.Provider value={{ email, handleSetEmail, isLogin, handleSetIsLogin }}>
      {children}
    </VerifyEmailContext.Provider>
  );
};
