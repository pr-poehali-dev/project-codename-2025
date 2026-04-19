import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { URLS, SESSION_KEY, clearSession } from '@/lib/api';

interface User {
  id: number;
  email: string;
  name: string | null;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const sessionId = localStorage.getItem(SESSION_KEY);
    if (!sessionId) { setLoading(false); return; }

    fetch(URLS.me, { headers: { 'X-Session-Id': sessionId } })
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data?.user) setUser(data.user); else clearSession(); })
      .finally(() => setLoading(false));
  }, []);

  const authAction = async (action: string, email: string, password: string, name?: string) => {
    const res = await fetch(URLS.auth, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, email, password, name }),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || 'Ошибка');
    localStorage.setItem(SESSION_KEY, data.session_id);
    setUser(data.user);
  };

  const login = (email: string, password: string) => authAction('login', email, password);
  const register = (email: string, password: string, name: string) => authAction('register', email, password, name);
  const logout = () => { clearSession(); setUser(null); };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
