import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/086c0f03-6c71-4aec-8d84-879347c40c62/files/2e03b96c-fca3-43a4-ac2c-83fb9edf3d6f.jpg";

const NAV_LINKS = [
  { label: "Расписание", href: "#schedule" },
  { label: "Правила", href: "#rules" },
  { label: "Регистрация", href: "#register" },
  { label: "Результаты", href: "#results" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

const SCHEDULE = [
  { date: "28 МАР", day: "ПЯТНИЦА", time: "20:00", venue: "Bar №1 «Брут»", spots: 8, total: 20, theme: "Кино и музыка 90-х" },
  { date: "4 АПР", day: "ПЯТНИЦА", time: "20:00", venue: "Bar №1 «Брут»", spots: 15, total: 20, theme: "Наука и технологии" },
  { date: "11 АПР", day: "ПЯТНИЦА", time: "20:00", venue: "Craft House", spots: 20, total: 30, theme: "Спорт и игры" },
  { date: "18 АПР", day: "ПЯТНИЦА", time: "20:00", venue: "Bar №1 «Брут»", spots: 3, total: 20, theme: "История России" },
  { date: "25 АПР", day: "ПЯТНИЦА", time: "20:00", venue: "Craft House", spots: 12, total: 30, theme: "Поп-культура" },
  { date: "2 МАЯ", day: "ЧЕТВЕРГ", time: "20:00", venue: "The Basement", spots: 25, total: 40, theme: "Мегатурнир — Гранд-финал" },
];

const RULES = [
  { icon: "Users", title: "Команда", text: "От 2 до 6 человек в команде. Чем больше — тем веселее, но умнее вдвоём!" },
  { icon: "Clock", title: "Формат", text: "6 раундов по 10 вопросов. Каждый раунд — отдельная тема. Всего 90 минут." },
  { icon: "Smartphone", title: "Гаджеты", text: "Телефоны — под стол. Только честная игра и живые мозги." },
  { icon: "Trophy", title: "Призы", text: "Топ-3 команды получают сертификаты на бар, брендированные подарки и вечную славу." },
  { icon: "BookOpen", title: "Регистрация", text: "Обязательна. Бронируйте места заранее — столы разлетаются быстро." },
  { icon: "Music", title: "Атмосфера", text: "Живая музыка до начала, ведущий-харизматик, напитки и закуски всю ночь." },
];

const RESULTS = [
  { place: 1, team: "Мозговой штурм", score: 54, members: "Анна, Дмитрий, Сергей, Маша" },
  { place: 2, team: "Квазары", score: 51, members: "Игорь, Лена, Паша" },
  { place: 3, team: "Пиво + IQ", score: 49, members: "Катя, Артём, Никита, Оля" },
  { place: 4, team: "Совы не то, чем кажутся", score: 46, members: "Влад, Таня, Рома" },
  { place: 5, team: "Думай или пей", score: 43, members: "Максим, Даша, Костя, Юля" },
];

const GALLERY_ITEMS = [
  { bg: "from-amber-900/60 to-stone-900", emoji: "🍺", label: "Вечер пятницы" },
  { bg: "from-purple-900/60 to-stone-900", emoji: "🏆", label: "Победители" },
  { bg: "from-red-900/60 to-stone-900", emoji: "🎯", label: "Финальный раунд" },
  { bg: "from-emerald-900/60 to-stone-900", emoji: "🎤", label: "Ведущий в деле" },
  { bg: "from-blue-900/60 to-stone-900", emoji: "🧠", label: "Мозговой штурм" },
  { bg: "from-amber-900/60 to-stone-900", emoji: "📝", label: "Записываем ответы" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerForm, setRegisterForm] = useState({ name: "", team: "", phone: "", email: "", date: "", notify: "email" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[hsl(45,30%,92%)]">
      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-sm border-b border-[hsl(0,0%,15%)]" : ""}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-2xl font-bold tracking-widest" style={{ color: "hsl(43,90%,55%)" }}>
            QUIZ<span className="text-[hsl(45,30%,92%)]">BAR</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-sm tracking-wider text-[hsl(0,0%,55%)] hover:text-[hsl(43,90%,55%)] transition-colors duration-200 uppercase">
                {l.label}
              </a>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" style={{ color: "hsl(43,90%,55%)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#111] border-t border-[hsl(0,0%,12%)] px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-body text-sm tracking-wider text-[hsl(0,0%,55%)] hover:text-[hsl(43,90%,55%)] transition-colors uppercase py-1">
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/50 via-[#0d0d0d]/70 to-[#0d0d0d]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-slide-up">
          <div className="inline-block border text-xs tracking-[0.3em] uppercase px-4 py-2 mb-8 font-body" style={{ borderColor: "hsl(43,90%,55%,0.4)", color: "hsl(43,90%,55%)" }}>
            Барные викторины
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 text-[hsl(45,30%,92%)]">
            ДУМАЙ.<br />
            <span style={{ color: "hsl(43,90%,55%)" }}>ПЕЙ.</span><br />
            ПОБЕЖДАЙ.
          </h1>
          <p className="font-body text-lg md:text-xl text-[hsl(0,0%,65%)] max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Каждую пятницу — интеллектуальная битва за звание умнейшей команды бара
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#register" className="font-display font-semibold tracking-widest uppercase px-10 py-4 text-sm transition-colors duration-200 pulse-glow" style={{ backgroundColor: "hsl(43,90%,55%)", color: "#0d0d0d" }}>
              Записаться
            </a>
            <a href="#schedule" className="border border-[hsl(0,0%,30%)] text-[hsl(45,30%,92%)] font-display font-medium tracking-widest uppercase px-10 py-4 text-sm hover:border-[hsl(43,90%,55%)] transition-colors duration-200" style={{ color: "hsl(45,30%,92%)" }}>
              Расписание
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[hsl(0,0%,35%)] animate-bounce">
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-6 px-6" style={{ backgroundColor: "hsl(43,90%,55%)" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-around gap-4">
          {[
            { num: "200+", label: "игр сыграно" },
            { num: "1500+", label: "участников" },
            { num: "5", label: "площадок" },
            { num: "3", label: "года на рынке" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-[#0d0d0d]">{s.num}</div>
              <div className="font-body text-xs uppercase tracking-wider mt-1" style={{ color: "rgba(13,13,13,0.65)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6 border-t border-[hsl(0,0%,12%)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,55%)" }}>Ближайшие игры</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">РАСПИСАНИЕ</h2>
          </div>

          <div className="grid gap-3">
            {SCHEDULE.map((event, i) => {
              const isFull = event.spots === 0;
              const isAlmost = event.spots > 0 && event.spots <= 5;
              return (
                <div key={i} className="group border border-[hsl(0,0%,15%)] hover:border-[hsl(43,90%,55%,0.5)] bg-[#111] hover:bg-[#141414] transition-all duration-300 p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="font-display text-2xl font-bold leading-none" style={{ color: "hsl(43,90%,55%)" }}>{event.date}</div>
                    <div className="font-body text-xs text-[hsl(0,0%,45%)] tracking-wider mt-1">{event.day}</div>
                  </div>
                  <div className="w-px h-12 bg-[hsl(0,0%,15%)] hidden md:block flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-lg font-semibold tracking-wide mb-1">{event.theme}</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-[hsl(0,0%,50%)] font-body text-sm">
                      <span className="flex items-center gap-1"><Icon name="MapPin" size={13} />{event.venue}</span>
                      <span className="flex items-center gap-1"><Icon name="Clock" size={13} />{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <div className={`font-body text-sm font-medium ${isFull ? "text-red-400" : isAlmost ? "text-amber-400" : "text-emerald-400"}`}>
                        {isFull ? "Мест нет" : `${event.spots} мест`}
                      </div>
                      <div className="text-[hsl(0,0%,35%)] text-xs font-body">из {event.total}</div>
                    </div>
                    <a href="#register" className={`font-display text-xs tracking-widest uppercase px-5 py-3 transition-colors duration-200 ${isFull ? "border border-[hsl(0,0%,20%)] text-[hsl(0,0%,35%)] cursor-not-allowed" : "border text-[hsl(43,90%,55%)] hover:bg-[hsl(43,90%,55%)] hover:text-[#0d0d0d]"}`} style={isFull ? {} : { borderColor: "hsl(43,90%,55%)" }}>
                      {isFull ? "Занято" : "Записаться"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* RULES */}
      <section id="rules" className="py-24 px-6 bg-[#0a0a0a] border-t border-[hsl(0,0%,12%)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,55%)" }}>Как мы играем</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">ПРАВИЛА</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(0,0%,12%)]">
            {RULES.map((rule, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 hover:bg-[#111] transition-colors duration-200 group">
                <div className="w-10 h-10 border border-[hsl(43,90%,55%,0.3)] flex items-center justify-center mb-5 group-hover:border-[hsl(43,90%,55%)] transition-colors">
                  <Icon name={rule.icon as any} size={18} style={{ color: "hsl(43,90%,55%)" }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{rule.title}</h3>
                <p className="font-body text-sm text-[hsl(0,0%,55%)] leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="py-24 px-6 border-t border-[hsl(0,0%,12%)]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-14 text-center">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,55%)" }}>Занять место</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">РЕГИСТРАЦИЯ</h2>
          </div>

          {submitted ? (
            <div className="text-center py-16 border border-[hsl(43,90%,55%,0.3)] bg-[#111]">
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="font-display text-3xl font-bold mb-3" style={{ color: "hsl(43,90%,55%)" }}>Вы записаны!</h3>
              <p className="font-body text-[hsl(0,0%,60%)] mb-6">Мы пришлём напоминание перед игрой на {registerForm.notify === "email" ? "почту" : "телефон"}</p>
              <button
                onClick={() => { setSubmitted(false); setRegisterForm({ name: "", team: "", phone: "", email: "", date: "", notify: "email" }); }}
                className="border font-display text-sm tracking-widest uppercase px-8 py-3 transition-colors"
                style={{ borderColor: "hsl(43,90%,55%)", color: "hsl(43,90%,55%)" }}
              >
                Записать ещё команду
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-[hsl(0,0%,15%)] bg-[#111] p-8 flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,50%)] block mb-2">Ваше имя</label>
                  <input required type="text" value={registerForm.name} onChange={e => setRegisterForm(p => ({ ...p, name: e.target.value }))} placeholder="Иван Петров"
                    className="w-full bg-[#0d0d0d] border border-[hsl(0,0%,18%)] outline-none px-4 py-3 font-body text-sm text-[hsl(45,30%,92%)] placeholder:text-[hsl(0,0%,30%)] transition-colors focus:border-[hsl(43,90%,55%)]" />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,50%)] block mb-2">Название команды</label>
                  <input required type="text" value={registerForm.team} onChange={e => setRegisterForm(p => ({ ...p, team: e.target.value }))} placeholder="Команда мечты"
                    className="w-full bg-[#0d0d0d] border border-[hsl(0,0%,18%)] outline-none px-4 py-3 font-body text-sm text-[hsl(45,30%,92%)] placeholder:text-[hsl(0,0%,30%)] transition-colors focus:border-[hsl(43,90%,55%)]" />
                </div>
              </div>

              <div>
                <label className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,50%)] block mb-2">Выберите игру</label>
                <select required value={registerForm.date} onChange={e => setRegisterForm(p => ({ ...p, date: e.target.value }))}
                  className="w-full bg-[#0d0d0d] border border-[hsl(0,0%,18%)] outline-none px-4 py-3 font-body text-sm text-[hsl(45,30%,92%)] transition-colors appearance-none cursor-pointer focus:border-[hsl(43,90%,55%)]">
                  <option value="" className="bg-[#111]">— Выберите дату —</option>
                  {SCHEDULE.filter(s => s.spots > 0).map(s => (
                    <option key={s.date} value={s.date} className="bg-[#111]">{s.date} · {s.venue} · {s.theme}</option>
                  ))}
                </select>
              </div>

              <div className="border-t border-[hsl(0,0%,13%)] pt-5">
                <label className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,50%)] block mb-3">Способ напоминания</label>
                <div className="flex gap-4">
                  {[{ val: "email", label: "📧 Email" }, { val: "sms", label: "📱 SMS" }].map(opt => (
                    <label key={opt.val} className="flex items-center gap-2 cursor-pointer border px-4 py-2 transition-colors text-sm font-body"
                      style={{ borderColor: registerForm.notify === opt.val ? "hsl(43,90%,55%)" : "hsl(0,0%,18%)", color: registerForm.notify === opt.val ? "hsl(43,90%,55%)" : "hsl(0,0%,50%)" }}>
                      <input type="radio" name="notify" value={opt.val} checked={registerForm.notify === opt.val} onChange={e => setRegisterForm(p => ({ ...p, notify: e.target.value }))} className="hidden" />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>

              {registerForm.notify === "email" ? (
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,50%)] block mb-2">Email</label>
                  <input required type="email" value={registerForm.email} onChange={e => setRegisterForm(p => ({ ...p, email: e.target.value }))} placeholder="ivan@example.com"
                    className="w-full bg-[#0d0d0d] border border-[hsl(0,0%,18%)] outline-none px-4 py-3 font-body text-sm text-[hsl(45,30%,92%)] placeholder:text-[hsl(0,0%,30%)] transition-colors focus:border-[hsl(43,90%,55%)]" />
                </div>
              ) : (
                <div>
                  <label className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,50%)] block mb-2">Телефон</label>
                  <input required type="tel" value={registerForm.phone} onChange={e => setRegisterForm(p => ({ ...p, phone: e.target.value }))} placeholder="+7 900 123 45 67"
                    className="w-full bg-[#0d0d0d] border border-[hsl(0,0%,18%)] outline-none px-4 py-3 font-body text-sm text-[hsl(45,30%,92%)] placeholder:text-[hsl(0,0%,30%)] transition-colors focus:border-[hsl(43,90%,55%)]" />
                </div>
              )}

              <button type="submit" className="mt-2 font-display font-bold tracking-[0.15em] uppercase py-4 text-sm transition-colors duration-200 pulse-glow" style={{ backgroundColor: "hsl(43,90%,55%)", color: "#0d0d0d" }}>
                Зарезервировать место →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 px-6 bg-[#0a0a0a] border-t border-[hsl(0,0%,12%)]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,55%)" }}>Прошедшая игра — 21 марта</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">РЕЗУЛЬТАТЫ</h2>
          </div>
          <div className="flex flex-col gap-2">
            {RESULTS.map((r, i) => (
              <div key={i} className={`flex items-center gap-5 p-5 border transition-all ${r.place === 1 ? "border-[hsl(43,90%,55%,0.5)] bg-[hsl(43,90%,55%,0.05)]" : r.place === 2 ? "border-[hsl(0,0%,45%,0.3)] bg-[hsl(0,0%,45%,0.05)]" : r.place === 3 ? "border-amber-700/30 bg-amber-900/5" : "border-[hsl(0,0%,12%)] bg-[#0d0d0d]"}`}>
                <div className="font-display text-3xl font-bold w-10 text-center flex-shrink-0">
                  {r.place === 1 ? "🥇" : r.place === 2 ? "🥈" : r.place === 3 ? "🥉" : <span className="text-[hsl(0,0%,35%)] text-xl">{r.place}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-lg font-semibold tracking-wide">{r.team}</div>
                  <div className="font-body text-xs text-[hsl(0,0%,45%)] mt-0.5 truncate">{r.members}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-display text-2xl font-bold" style={{ color: r.place === 1 ? "hsl(43,90%,55%)" : "hsl(45,30%,92%)" }}>{r.score}</div>
                  <div className="font-body text-xs text-[hsl(0,0%,40%)]">очков</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6 border-t border-[hsl(0,0%,12%)]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,55%)" }}>Атмосфера</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">ГАЛЕРЕЯ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className={`aspect-square bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center border border-[hsl(0,0%,15%)] hover:border-[hsl(43,90%,55%,0.5)] transition-colors duration-300 group cursor-pointer`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <span className="font-body text-xs text-[hsl(0,0%,55%)] mt-3 tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm text-[hsl(0,0%,40%)] mt-6">Фото из последних игр — скоро здесь</p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-[#0a0a0a] border-t border-[hsl(0,0%,12%)]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: "hsl(43,90%,55%)" }}>Связаться</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">КОНТАКТЫ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(0,0%,12%)]">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (900) 123-45-67", sub: "Звоните с 10:00 до 22:00" },
              { icon: "Mail", label: "Email", value: "hello@quizbar.ru", sub: "Ответим за 2 часа" },
              { icon: "Send", label: "Telegram", value: "@quizbar_bot", sub: "Быстрее всего здесь" },
            ].map((c, i) => (
              <div key={i} className="bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors group">
                <div className="w-10 h-10 border border-[hsl(0,0%,18%)] group-hover:border-[hsl(43,90%,55%)] flex items-center justify-center mb-5 transition-colors">
                  <Icon name={c.icon as any} size={16} style={{ color: "hsl(43,90%,55%)" }} />
                </div>
                <div className="font-body text-xs tracking-widest uppercase text-[hsl(0,0%,40%)] mb-2">{c.label}</div>
                <div className="font-display text-lg font-semibold mb-1">{c.value}</div>
                <div className="font-body text-xs text-[hsl(0,0%,45%)]">{c.sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 border border-[hsl(0,0%,13%)] p-8 bg-[#0d0d0d]">
            <div className="flex items-start gap-4">
              <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" style={{ color: "hsl(43,90%,55%)" }} />
              <div>
                <div className="font-display text-base font-semibold mb-1">Наши площадки</div>
                <div className="font-body text-sm text-[hsl(0,0%,55%)] leading-relaxed">
                  Bar №1 «Брут» — ул. Ленина, 42<br />
                  Craft House — пр. Мира, 17<br />
                  The Basement — ул. Садовая, 5
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[hsl(0,0%,12%)] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-xl font-bold tracking-widest" style={{ color: "hsl(43,90%,55%)" }}>
            QUIZ<span className="text-[hsl(45,30%,92%)]">BAR</span>
          </div>
          <div className="font-body text-xs text-[hsl(0,0%,35%)] tracking-wider text-center">
            © 2026 QuizBar · Барные викторины · Все права защищены
          </div>
          <div className="flex items-center gap-4">
            {["Instagram", "MessageCircle", "Send"].map((icon, i) => (
              <button key={i} className="text-[hsl(0,0%,35%)] hover:text-[hsl(43,90%,55%)] transition-colors">
                <Icon name={icon as any} size={16} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
