import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PenLine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await login(email, password);
      } else {
        await register(email, password, name);
      }
      navigate('/drafts');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ошибка');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#36393f] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Лого */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#5865f2] rounded-2xl flex items-center justify-center mx-auto mb-4">
            <PenLine className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-white text-2xl font-bold">БукЛайн</h1>
          <p className="text-[#b9bbbe] text-sm mt-1">Платформа для начинающих писателей</p>
        </div>

        <div className="bg-[#2f3136] rounded-xl p-6 shadow-xl border border-[#202225]">
          <h2 className="text-white text-xl font-bold mb-1">
            {mode === 'login' ? 'Добро пожаловать!' : 'Создать аккаунт'}
          </h2>
          <p className="text-[#b9bbbe] text-sm mb-6">
            {mode === 'login' ? 'Войди, чтобы продолжить писать' : 'Присоединяйся к сообществу авторов'}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <div>
                <label className="block text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Твоё имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Как тебя зовут?"
                  className="w-full bg-[#202225] text-white placeholder-[#72767d] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5865f2] text-sm"
                />
              </div>
            )}

            <div>
              <label className="block text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="твой@email.ru"
                required
                className="w-full bg-[#202225] text-white placeholder-[#72767d] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5865f2] text-sm"
              />
            </div>

            <div>
              <label className="block text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-1.5">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Минимум 6 символов"
                required
                className="w-full bg-[#202225] text-white placeholder-[#72767d] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5865f2] text-sm"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white py-3 rounded-lg font-semibold text-sm"
            >
              {loading ? 'Подождите...' : mode === 'login' ? 'Войти' : 'Зарегистрироваться'}
            </Button>
          </form>

          <div className="mt-5 text-center text-sm text-[#8e9297]">
            {mode === 'login' ? (
              <>Нет аккаунта?{' '}
                <button onClick={() => { setMode('register'); setError(''); }} className="text-[#5865f2] hover:underline font-medium">
                  Зарегистрироваться
                </button>
              </>
            ) : (
              <>Уже есть аккаунт?{' '}
                <button onClick={() => { setMode('login'); setError(''); }} className="text-[#5865f2] hover:underline font-medium">
                  Войти
                </button>
              </>
            )}
          </div>
        </div>

        <div className="text-center mt-4">
          <button onClick={() => navigate('/')} className="text-[#72767d] hover:text-[#b9bbbe] text-sm">
            ← Вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
