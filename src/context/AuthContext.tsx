import React, { createContext, useState, useEffect } from "react";

type AuthContextData = {
  token: string | null;
  setToken: (newToken: string | null) => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({
  token: null,
  setToken: () => {},
});

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    // Recupera o token do sessionStorage ou retorna null se não estiver presente
    const storedToken = sessionStorage.getItem("token");
    return storedToken ? storedToken : null;
  });

  const updateToken = (newToken: string | null) => {
    setToken(newToken);

    // Atualiza o sessionStorage com o novo valor do token
    if (newToken) {
      sessionStorage.setItem("token", newToken);
    } else {
      sessionStorage.removeItem("token");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken: updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
