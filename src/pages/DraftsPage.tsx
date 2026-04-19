import { useNavigate } from 'react-router-dom';
import { PenLine, LogOut, Hash, Mic, ArrowRight, Settings, Bell, Search, Users, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useState } from 'react';

const DraftsPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <PenLine className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">БукЛайн</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Платформа для начинающих писателей</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[#b9bbbe] text-sm">
              <div className="w-7 h-7 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">{(user?.name || user?.email || '?')[0].toUpperCase()}</span>
              </div>
              <span>{user?.name || user?.email}</span>
            </div>
            <Button
              variant="ghost"
              onClick={handleLogout}
              className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] text-sm"
            >
              <LogOut className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Выйти</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex min-h-[calc(100vh-65px)]">
        {/* Сервер-иконки */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl flex items-center justify-center cursor-pointer">
            <PenLine className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {['📖', '✍️', '🏆', '💬'].map((icon, i) => (
            <div key={i} className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2]">
              <span className="text-base">{icon}</span>
            </div>
          ))}
        </div>

        {/* Боковая панель */}
        <div className={`${mobileSidebarOpen ? 'block' : 'hidden'} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}>
          <div className="p-4 border-b border-[#202225]">
            <h2 className="text-white font-semibold text-base">Сообщество БукЛайн</h2>
          </div>
          <div className="flex-1 p-2">
            <div className="mb-4">
              <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                <ArrowRight className="w-3 h-3" />
                <span>Разделы</span>
              </div>
              <div className="mt-1 space-y-0.5">
                {[
                  { name: 'черновики', active: true, onClick: () => navigate('/drafts') },
                  { name: 'публикации', active: false, onClick: () => navigate('/') },
                  { name: 'конкурсы', active: false, onClick: () => {} },
                  { name: 'помощь', active: false, onClick: () => {} },
                ].map((ch) => (
                  <div
                    key={ch.name}
                    onClick={ch.onClick}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded cursor-pointer ${ch.active ? 'bg-[#393c43] text-white' : 'text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43]'}`}
                  >
                    <Hash className="w-4 h-4" />
                    <span className="text-sm">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                <ArrowRight className="w-3 h-3" />
                <span>Голосовые</span>
              </div>
              <div className="mt-1 space-y-0.5">
                {['Читальный клуб', 'Разбор текстов'].map((ch) => (
                  <div key={ch} className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer">
                    <Mic className="w-4 h-4" />
                    <span className="text-sm">{ch}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Пользователь */}
          <div className="p-2 bg-[#292b2f] flex items-center gap-2">
            <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">{(user?.name || user?.email || '?')[0].toUpperCase()}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-sm font-medium truncate">{user?.name || 'Автор'}</div>
              <div className="text-[#b9bbbe] text-xs truncate">✍️ Пишет роман</div>
            </div>
            <div className="flex gap-1">
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                <Mic className="w-4 h-4 text-[#b9bbbe]" />
              </Button>
              <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                <Settings className="w-4 h-4 text-[#b9bbbe]" />
              </Button>
            </div>
          </div>
        </div>

        {/* Основная область */}
        <div className="flex-1 flex flex-col">
          {/* Заголовок */}
          <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
            <Button
              variant="ghost"
              className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Hash className="w-5 h-5 text-[#8e9297]" />
            <span className="text-white font-semibold">черновики</span>
            <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
            <span className="text-[#8e9297] text-sm hidden sm:block">Твои произведения и главы</span>
            <div className="ml-auto flex items-center gap-2 sm:gap-4">
              <Bell className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              <Users className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              <Search className="w-5 h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
            </div>
          </div>

          {/* Контент */}
          <div className="flex-1 p-4 sm:p-8 flex flex-col items-center justify-center">
            <div className="text-center max-w-md">
              <div className="text-6xl mb-6">📝</div>
              <h2 className="text-white text-2xl font-bold mb-3">Начни свою первую главу</h2>
              <p className="text-[#8e9297] text-sm mb-8 leading-relaxed">
                Здесь будут все твои черновики и главы. Нажми кнопку ниже, чтобы открыть редактор и написать первую главу.
              </p>
              <Button
                onClick={() => navigate('/drafts/new')}
                className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-8 py-3 rounded-lg font-semibold text-base"
              >
                ✍️ Создать главу
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftsPage;
