import { useState } from "react";
import { X, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";

const SIGNUP_URL = "https://functions.poehali.dev/c6c02d49-5e01-4742-adcb-707fc041740c";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

const SignupModal = ({ open, onClose }: SignupModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "exists">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      if (res.ok) {
        setStatus("success");
      } else if (res.status === 409) {
        setStatus("exists");
      } else {
        const data = await res.json();
        setErrorMsg(data.error || "Что-то пошло не так");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Ошибка соединения. Попробуй ещё раз.");
      setStatus("error");
    }
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setStatus("idle");
    setErrorMsg("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60" onClick={handleClose} />
      <div className="relative bg-[#36393f] rounded-xl w-full max-w-md shadow-2xl border border-[#202225]">
        {/* Шапка */}
        <div className="bg-gradient-to-r from-[#5865f2] to-[#7c3aed] rounded-t-xl p-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <PenLine className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-white text-xl font-bold">Начни писать на БукЛайн</h2>
          <p className="text-[#c5c9f5] text-sm mt-1">Бесплатно. Без опыта. Прямо сейчас.</p>
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-white text-lg font-bold mb-2">Добро пожаловать!</h3>
              <p className="text-[#b9bbbe] text-sm mb-6">
                Ты в списке. Мы напишем на <span className="text-white">{email}</span>, когда откроем доступ.
              </p>
              <Button
                onClick={handleClose}
                className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-8 py-2 rounded-lg"
              >
                Отлично!
              </Button>
            </div>
          ) : status === "exists" ? (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">📬</div>
              <h3 className="text-white text-lg font-bold mb-2">Ты уже в списке!</h3>
              <p className="text-[#b9bbbe] text-sm mb-6">
                Этот email уже зарегистрирован. Ждём тебя совсем скоро!
              </p>
              <Button
                onClick={handleClose}
                className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-8 py-2 rounded-lg"
              >
                Понятно
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Твоё имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Как тебя зовут?"
                  className="w-full bg-[#202225] text-white placeholder-[#72767d] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5865f2] text-sm"
                />
              </div>
              <div>
                <label className="block text-[#b9bbbe] text-xs font-semibold uppercase tracking-wide mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="твой@email.ru"
                  required
                  className="w-full bg-[#202225] text-white placeholder-[#72767d] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#5865f2] text-sm"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMsg}</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white py-3 rounded-lg font-semibold text-sm"
              >
                {status === "loading" ? "Отправляем..." : "Начать писать бесплатно →"}
              </Button>

              <p className="text-[#72767d] text-xs text-center">
                Никакого спама. Только уведомление об открытии.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
