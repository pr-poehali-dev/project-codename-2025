import {
  BookOpen,
  Shield,
  Zap,
  Eye,
  Users,
  Bell,
  Search,
  Menu,
  Hash,
  Settings,
  PenLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatAreaProps {
  setMobileSidebarOpen: (open: boolean) => void;
}

const ChatArea = ({ setMobileSidebarOpen }: ChatAreaProps) => {
  return (
    <div className="flex-1 flex flex-col">
      {/* Заголовок чата */}
      <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
        <Button
          variant="ghost"
          className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
          onClick={() => setMobileSidebarOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <Hash className="w-5 h-5 text-[#8e9297]" />
        <span className="text-white font-semibold">публикации</span>
        <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
        <span className="text-[#8e9297] text-sm hidden sm:block">Делись своими историями с читателями</span>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
        </div>
      </div>

      {/* Сообщения чата */}
      <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
        {/* Приветственное сообщение */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
            <PenLine className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium text-sm sm:text-base">Литера</span>
              <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:00</span>
              <span className="bg-[#5865f2] text-white text-xs px-1.5 py-0.5 rounded font-medium">Бот</span>
            </div>
            <div className="text-[#dcddde] text-sm sm:text-base">
              <p className="mb-3 sm:mb-4">
                <strong>Добро пожаловать в Литеру!</strong> Здесь начинающие писатели пишут, публикуют и находят своих первых читателей.
              </p>
              <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет Литера:</h3>
                <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                  <li>📝 Удобный редактор для написания книг и рассказов</li>
                  <li>📚 Публикация и продвижение произведений</li>
                  <li>💬 Живые отзывы от реальных читателей</li>
                  <li>🏆 Конкурсы и рейтинги авторов</li>
                  <li>🤝 Сообщество поддерживающих писателей</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Сообщение пользователя с профилем */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs sm:text-sm font-medium">А</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium text-sm sm:text-base">Анна Соколова</span>
              <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:15</span>
            </div>
            <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
              Только что опубликовала первую главу своего романа! Очень волнуюсь 😊
            </div>

            {/* Демо карточка активности */}
            <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
              <div className="h-16 sm:h-20 bg-gradient-to-r from-[#5865f2] to-[#7c3aed] relative">
                <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#36393f] overflow-hidden relative">
                    <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex items-center justify-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#2f3136] rounded-full flex items-center justify-center">
                        <span className="text-lg sm:text-2xl">А</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                  </div>
                </div>
                <Button
                  size="sm"
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#4f545c] hover:bg-[#5d6269] text-white text-xs px-2 sm:px-3 py-1 rounded"
                >
                  <Settings className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">Профиль</span>
                </Button>
              </div>

              <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-white text-lg sm:text-xl font-bold mb-1">Анна</h3>
                  <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                    <span>anna_sokolova</span>
                    <span>-</span>
                    <span>Начинающий автор</span>
                  </div>
                </div>

                <div className="mb-3 sm:mb-4">
                  <div className="bg-[#36393f] rounded-lg p-2 sm:p-3 relative">
                    <div className="absolute -top-2 left-3 sm:left-4 w-4 h-4 bg-[#36393f] rotate-45"></div>
                    <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#5865f2] rounded-full flex items-center justify-center">
                        <span className="text-xs">✍</span>
                      </div>
                      <span>Пишу фэнтезийный роман...</span>
                    </div>
                  </div>
                </div>

                <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                  <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                    Обо мне
                  </button>
                  <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                    Активность
                  </button>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                    <span>Пишет прямо сейчас</span>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#5865f2] to-[#7c3aed] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-white font-semibold text-xs sm:text-sm mb-1">Литера</div>
                      <div className="text-[#dcddde] text-xs sm:text-sm mb-1">«Осколки неба» — Глава 3</div>
                      <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Фэнтези • 12 340 слов</div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                        <span className="text-[#3ba55c] text-xs font-medium">Редактирует 23 мин</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ещё одно сообщение */}
        <div className="flex gap-2 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs sm:text-sm font-medium">М</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-white font-medium text-sm sm:text-base">Михаил Читатель</span>
              <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 10:22</span>
            </div>
            <div className="text-[#dcddde] mb-2 text-sm sm:text-base">
              Аня, прочитал первую главу — зацепило с первых строк! Жду продолжения 🔥
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="flex items-center gap-1 bg-[#2f3136] hover:bg-[#393c43] rounded px-2 py-1 cursor-pointer">
                <span className="text-base">❤️</span>
                <span className="text-[#dcddde] text-xs">47</span>
              </div>
              <div className="flex items-center gap-1 bg-[#2f3136] hover:bg-[#393c43] rounded px-2 py-1 cursor-pointer">
                <span className="text-base">🔥</span>
                <span className="text-[#dcddde] text-xs">23</span>
              </div>
              <div className="flex items-center gap-1 bg-[#2f3136] hover:bg-[#393c43] rounded px-2 py-1 cursor-pointer">
                <span className="text-base">📚</span>
                <span className="text-[#dcddde] text-xs">18</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA блок */}
        <div className="bg-gradient-to-r from-[#5865f2] to-[#7c3aed] rounded-xl p-4 sm:p-8 text-center">
          <div className="text-3xl sm:text-5xl mb-3 sm:mb-4">✍️</div>
          <h2 className="text-xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
            Твоя история ждёт читателей
          </h2>
          <p className="text-[#c5c9f5] text-sm sm:text-lg mb-4 sm:mb-6 max-w-lg mx-auto">
            Присоединяйся к тысячам начинающих авторов. Пиши, публикуй и находи своих первых поклонников.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-white text-[#5865f2] hover:bg-[#f2f3f5] px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base">
              Начать писать бесплатно
            </Button>
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base border border-white/30"
            >
              Читать истории
            </Button>
          </div>
        </div>

        {/* Фичи */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {[
            {
              icon: <PenLine className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />,
              title: "Удобный редактор",
              desc: "Пиши без отвлечений. Главы, черновики, заметки — всё в одном месте.",
            },
            {
              icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />,
              title: "Реальные читатели",
              desc: "Публикуй и сразу получай отклики от живой аудитории.",
            },
            {
              icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#5865f2]" />,
              title: "Сообщество авторов",
              desc: "Обменивайся опытом, участвуй в конкурсах, расти как писатель.",
            },
          ].map((feature, i) => (
            <div key={i} className="bg-[#2f3136] rounded-xl p-4 sm:p-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2]/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-[#8e9297] text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Статистика */}
        <div className="bg-[#2f3136] rounded-xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6 text-center">
            Литера в цифрах
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {[
              { value: "12 000+", label: "авторов" },
              { value: "85 000+", label: "читателей" },
              { value: "320 000+", label: "опубликованных глав" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-3xl font-bold text-[#5865f2] mb-1">{stat.value}</div>
                <div className="text-[#8e9297] text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Отзывы */}
        <div className="space-y-3">
          <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide px-1">Что говорят авторы</h3>
          {[
            {
              color: "from-orange-400 to-red-500",
              letter: "К",
              name: "Катерина В.",
              time: "Сегодня в 09:14",
              text: "Никогда не думала, что смогу опубликовать свой рассказ. На Литере это оказалось так просто! Уже 200 читателей 🎉",
            },
            {
              color: "from-teal-400 to-blue-500",
              letter: "Д",
              name: "Дмитрий П.",
              time: "Вчера в 21:47",
              text: "Редактор топ, сообщество помогает с ошибками, читатели оставляют крутые комментарии. Пишу уже третий месяц подряд!",
            },
          ].map((review, i) => (
            <div key={i} className="flex gap-2 sm:gap-4">
              <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${review.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-xs sm:text-sm font-medium">{review.letter}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-white font-medium text-sm sm:text-base">{review.name}</span>
                  <span className="text-[#72767d] text-xs hidden sm:inline">{review.time}</span>
                </div>
                <div className="text-[#dcddde] text-sm sm:text-base">{review.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Планы */}
        <div className="bg-[#2f3136] rounded-xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">Выбери свой план</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              {
                name: "Бесплатно",
                price: "0 ₽",
                period: "навсегда",
                features: ["До 5 произведений", "Базовый редактор", "Публикация историй", "Комментарии читателей"],
                cta: "Начать бесплатно",
                highlight: false,
              },
              {
                name: "Про",
                price: "299 ₽",
                period: "в месяц",
                features: ["Неограниченно произведений", "Расширенный редактор", "Аналитика читателей", "Приоритет в поиске", "Без рекламы"],
                cta: "Попробовать 7 дней бесплатно",
                highlight: true,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 sm:p-6 ${plan.highlight ? "bg-[#5865f2] border-2 border-[#4752c4]" : "bg-[#36393f] border border-[#40444b]"}`}
              >
                <div className="mb-4">
                  <h4 className="text-white font-bold text-base sm:text-lg mb-1">{plan.name}</h4>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-[#b9bbbe] text-sm">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 sm:mb-6">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                      <div className="w-4 h-4 bg-[#3ba55c] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-2 rounded font-medium text-sm ${plan.highlight ? "bg-white text-[#5865f2] hover:bg-[#f2f3f5]" : "bg-[#5865f2] hover:bg-[#4752c4] text-white"}`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-[#2f3136] rounded-xl p-4 sm:p-6">
          <h3 className="text-white font-semibold text-base sm:text-lg mb-4">Частые вопросы</h3>
          <div className="space-y-4">
            {[
              {
                q: "Нужен ли опыт для публикации?",
                a: "Нет, Литера создана специально для начинающих авторов. Публикуй смело — сообщество поддержит.",
              },
              {
                q: "Мои тексты защищены авторским правом?",
                a: "Да, все права на тексты остаются за вами. Мы только помогаем найти читателей.",
              },
              {
                q: "Можно ли удалить произведение?",
                a: "Да, вы можете удалить или снять с публикации любое произведение в любой момент.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-[#40444b] pb-4 last:border-0 last:pb-0">
                <h4 className="text-white text-sm sm:text-base font-medium mb-1">{item.q}</h4>
                <p className="text-[#8e9297] text-xs sm:text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Футер */}
        <div className="text-center py-6 sm:py-8 text-[#72767d] text-xs sm:text-sm border-t border-[#40444b]">
          <div className="flex items-center justify-center gap-2 mb-2">
            <PenLine className="w-4 h-4 text-[#5865f2]" />
            <span className="text-white font-medium">Литера</span>
          </div>
          <p>© 2024 Литера. Платформа для начинающих писателей.</p>
          <div className="flex justify-center gap-4 mt-3">
            <span className="hover:text-[#dcddde] cursor-pointer">Условия</span>
            <span className="hover:text-[#dcddde] cursor-pointer">Конфиденциальность</span>
            <span className="hover:text-[#dcddde] cursor-pointer">Поддержка</span>
          </div>
        </div>
      </div>

      {/* Поле ввода */}
      <div className="p-2 sm:p-4 bg-[#36393f]">
        <div className="bg-[#40444b] rounded-lg flex items-center px-3 sm:px-4 py-2 sm:py-3 gap-2 sm:gap-3">
          <input
            className="flex-1 bg-transparent text-[#dcddde] placeholder-[#72767d] outline-none text-sm sm:text-base"
            placeholder="Напиши сообщение в #публикации"
          />
          <div className="flex gap-2 sm:gap-3">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
