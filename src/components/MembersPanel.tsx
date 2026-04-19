const MembersPanel = () => {
  return (
    <div className="hidden xl:flex w-60 bg-[#2f3136] flex-col p-4">
      <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">
        Авторы онлайн — 6
      </h3>
      <div className="space-y-2">
        {[
          { letter: "А", color: "bg-[#5865f2]", name: "Анна С.", status: "Пишет роман", dot: "bg-[#3ba55c]" },
          { letter: "М", color: "bg-gradient-to-r from-purple-500 to-pink-500", name: "Мария К.", status: "Редактирует главу", dot: "bg-[#3ba55c]" },
          { letter: "Д", color: "bg-gradient-to-r from-teal-500 to-blue-500", name: "Дмитрий П.", status: "Читает отзывы", dot: "bg-[#faa61a]" },
          { letter: "Е", color: "bg-gradient-to-r from-orange-400 to-red-500", name: "Елена В.", status: "Публикует рассказ", dot: "bg-[#3ba55c]" },
          { letter: "И", color: "bg-gradient-to-r from-green-400 to-cyan-500", name: "Иван Р.", status: "В конкурсе", dot: "bg-[#3ba55c]" },
          { letter: "О", color: "bg-gradient-to-r from-yellow-400 to-orange-500", name: "Ольга Н.", status: "Офлайн", dot: "bg-[#747f8d]" },
        ].map((user, i) => (
          <div key={i} className="flex items-center gap-2 p-1 rounded hover:bg-[#393c43] cursor-pointer">
            <div className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center flex-shrink-0 relative`}>
              <span className="text-white text-xs font-medium">{user.letter}</span>
              <div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 ${user.dot} border-2 border-[#2f3136] rounded-full`}></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[#dcddde] text-sm font-medium truncate">{user.name}</div>
              <div className="text-[#8e9297] text-xs truncate">{user.status}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">
          Топ недели
        </h3>
        <div className="space-y-2">
          {[
            { title: "«Осколки неба»", author: "Анна С.", reads: "1.2к" },
            { title: "«Последний рейс»", author: "Дмитрий П.", reads: "843" },
            { title: "«Зеркала»", author: "Мария К.", reads: "621" },
          ].map((book, i) => (
            <div key={i} className="p-2 bg-[#36393f] rounded-lg cursor-pointer hover:bg-[#393c43]">
              <div className="text-[#dcddde] text-xs font-medium truncate">{book.title}</div>
              <div className="flex justify-between text-[#8e9297] text-xs mt-0.5">
                <span>{book.author}</span>
                <span>👁 {book.reads}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembersPanel;
