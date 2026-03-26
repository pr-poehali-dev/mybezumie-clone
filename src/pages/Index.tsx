import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/086c0f03-6c71-4aec-8d84-879347c40c62/files/2e03b96c-fca3-43a4-ac2c-83fb9edf3d6f.jpg";
const LOGO_IMAGE = "https://cdn.poehali.dev/projects/086c0f03-6c71-4aec-8d84-879347c40c62/files/70c1b42f-45e0-4a2b-a80e-f5f61dc10bf8.jpg";

// Magenta accent
const M = "hsl(315,100%,55%)";
const M_DARK = "hsl(280,100%,45%)";

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
  { bg: "from-fuchsia-900/70 to-[#0a0010]", emoji: "🍺", label: "Вечер пятницы" },
  { bg: "from-purple-900/70 to-[#0a0010]", emoji: "🏆", label: "Победители" },
  { bg: "from-pink-900/70 to-[#0a0010]", emoji: "🎯", label: "Финальный раунд" },
  { bg: "from-violet-900/70 to-[#0a0010]", emoji: "🎤", label: "Ведущий в деле" },
  { bg: "from-fuchsia-900/70 to-[#0a0010]", emoji: "🧠", label: "Мозговой штурм" },
  { bg: "from-purple-900/70 to-[#0a0010]", emoji: "📝", label: "Записываем ответы" },
];

const INPUT_CLS = "w-full bg-[#0a0010] border border-[rgba(255,0,170,0.15)] outline-none px-4 py-3 font-body text-sm text-[hsl(300,20%,95%)] placeholder:text-[hsl(270,5%,35%)] transition-colors focus:border-[hsl(315,100%,55%)]";

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
    <div className="min-h-screen text-[hsl(300,20%,95%)]" style={{ background: "linear-gradient(160deg, #1a0a1e 0%, #0d0d12 50%, #0a0010 100%)" }}>

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-sm border-b" : ""}`}
        style={scrolled ? { background: "rgba(13,0,20,0.92)", borderColor: "rgba(255,0,170,0.15)" } : {}}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={LOGO_IMAGE} alt="Игра Разума" className="w-9 h-9 rounded object-cover" style={{ filter: "saturate(1.3) brightness(1.1)" }} />
            <span className="font-display text-xl font-bold tracking-widest">
              <span className="text-gradient">ИГРА</span>
              <span className="text-[hsl(300,20%,95%)]"> РАЗУМА</span>
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="font-body text-sm tracking-wider uppercase transition-colors duration-200"
                style={{ color: "hsl(270,5%,55%)" }}
                onMouseEnter={e => (e.currentTarget.style.color = M)}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(270,5%,55%)")}>
                {l.label}
              </a>
            ))}
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2" style={{ color: M }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ background: "rgba(13,0,20,0.97)", borderColor: "rgba(255,0,170,0.15)" }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="font-body text-sm tracking-wider uppercase py-1 transition-colors" style={{ color: "hsl(270,5%,55%)" }}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,0,20,0.55) 0%, rgba(13,0,20,0.75) 50%, #0d0010 100%)" }} />
        {/* Magenta ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(200,0,140,0.18) 0%, transparent 70%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-slide-up">
          <div className="inline-block border text-xs tracking-[0.3em] uppercase px-4 py-2 mb-8 font-body"
            style={{ borderColor: "rgba(255,0,170,0.35)", color: M }}>
            Барные викторины
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6">
            ДУМАЙ.<br />
            <span className="text-gradient">ПЕЙ.</span><br />
            ПОБЕЖДАЙ.
          </h1>
          <p className="font-body text-lg md:text-xl max-w-xl mx-auto mb-10 font-light leading-relaxed" style={{ color: "hsl(270,10%,65%)" }}>
            Каждую пятницу — интеллектуальная битва за звание умнейшей команды бара
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#register" className="font-display font-semibold tracking-widest uppercase px-10 py-4 text-sm transition-all duration-200 pulse-glow text-white"
              style={{ background: `linear-gradient(135deg, ${M} 0%, ${M_DARK} 100%)` }}>
              Записаться
            </a>
            <a href="#schedule" className="border font-display font-medium tracking-widest uppercase px-10 py-4 text-sm transition-colors duration-200"
              style={{ borderColor: "rgba(255,255,255,0.2)", color: "hsl(300,20%,90%)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = M; e.currentTarget.style.color = M; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "hsl(300,20%,90%)"; }}>
              Расписание
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" style={{ color: "hsl(270,5%,35%)" }}>
          <Icon name="ChevronDown" size={20} />
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-6 px-6" style={{ background: `linear-gradient(135deg, ${M} 0%, ${M_DARK} 100%)` }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-around gap-4">
          {[
            { num: "200+", label: "игр сыграно" },
            { num: "1500+", label: "участников" },
            { num: "5", label: "площадок" },
            { num: "3", label: "года на рынке" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-bold text-white">{s.num}</div>
              <div className="font-body text-xs uppercase tracking-wider mt-1 text-white/65">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,0,170,0.1)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: M }}>Ближайшие игры</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">РАСПИСАНИЕ</h2>
          </div>
          <div className="grid gap-3">
            {SCHEDULE.map((event, i) => {
              const isFull = event.spots === 0;
              const isAlmost = event.spots > 0 && event.spots <= 5;
              return (
                <div key={i} className="group transition-all duration-300 p-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                  style={{ background: "linear-gradient(135deg, rgba(45,10,46,0.4) 0%, rgba(13,0,20,0.7) 100%)", border: "1px solid rgba(255,0,170,0.1)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,0,170,0.35)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,0,170,0.1)")}>
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="font-display text-2xl font-bold leading-none text-gradient">{event.date}</div>
                    <div className="font-body text-xs tracking-wider mt-1" style={{ color: "hsl(270,5%,45%)" }}>{event.day}</div>
                  </div>
                  <div className="w-px h-12 hidden md:block flex-shrink-0" style={{ background: "rgba(255,0,170,0.15)" }} />
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-lg font-semibold tracking-wide mb-1">{event.theme}</div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 font-body text-sm" style={{ color: "hsl(270,5%,50%)" }}>
                      <span className="flex items-center gap-1"><Icon name="MapPin" size={13} />{event.venue}</span>
                      <span className="flex items-center gap-1"><Icon name="Clock" size={13} />{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <div className={`font-body text-sm font-medium ${isFull ? "text-red-400" : isAlmost ? "text-amber-400" : "text-emerald-400"}`}>
                        {isFull ? "Мест нет" : `${event.spots} мест`}
                      </div>
                      <div className="font-body text-xs" style={{ color: "hsl(270,5%,35%)" }}>из {event.total}</div>
                    </div>
                    <a href="#register"
                      className="font-display text-xs tracking-widest uppercase px-5 py-3 transition-all duration-200"
                      style={isFull
                        ? { border: "1px solid rgba(255,255,255,0.1)", color: "hsl(270,5%,35%)", cursor: "not-allowed" }
                        : { border: `1px solid ${M}`, color: M }}
                      onMouseEnter={e => { if (!isFull) { e.currentTarget.style.background = `linear-gradient(135deg, ${M} 0%, ${M_DARK} 100%)`; e.currentTarget.style.color = "white"; } }}
                      onMouseLeave={e => { if (!isFull) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = M; } }}>
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
      <section id="rules" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #0a0010 0%, #110816 100%)", borderTop: "1px solid rgba(255,0,170,0.1)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: M }}>Как мы играем</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">ПРАВИЛА</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,0,170,0.08)" }}>
            {RULES.map((rule, i) => (
              <div key={i} className="p-8 transition-colors duration-200 group"
                style={{ background: "linear-gradient(135deg, #0a0010 0%, #110816 100%)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #16001e 0%, #1a0820 100%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "linear-gradient(135deg, #0a0010 0%, #110816 100%)")}>
                <div className="w-10 h-10 flex items-center justify-center mb-5 transition-colors"
                  style={{ border: "1px solid rgba(255,0,170,0.25)", background: "rgba(255,0,170,0.05)" }}>
                  <Icon name={rule.icon as any} size={18} style={{ color: M }} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 tracking-wide">{rule.title}</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(270,5%,55%)" }}>{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,0,170,0.1)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="mb-14 text-center">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: M }}>Занять место</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">РЕГИСТРАЦИЯ</h2>
          </div>

          {submitted ? (
            <div className="text-center py-16" style={{ border: "1px solid rgba(255,0,170,0.3)", background: "linear-gradient(135deg, rgba(45,10,46,0.5) 0%, rgba(13,0,20,0.8) 100%)" }}>
              <div className="text-5xl mb-6">🎉</div>
              <h3 className="font-display text-3xl font-bold mb-3 text-gradient">Вы записаны!</h3>
              <p className="font-body mb-6" style={{ color: "hsl(270,5%,60%)" }}>Мы пришлём напоминание перед игрой на {registerForm.notify === "email" ? "почту" : "телефон"}</p>
              <button onClick={() => { setSubmitted(false); setRegisterForm({ name: "", team: "", phone: "", email: "", date: "", notify: "email" }); }}
                className="font-display text-sm tracking-widest uppercase px-8 py-3 transition-colors"
                style={{ border: `1px solid ${M}`, color: M }}>
                Записать ещё команду
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-5"
              style={{ border: "1px solid rgba(255,0,170,0.15)", background: "linear-gradient(135deg, rgba(35,5,40,0.6) 0%, rgba(13,0,20,0.9) 100%)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2" style={{ color: "hsl(270,5%,50%)" }}>Ваше имя</label>
                  <input required type="text" value={registerForm.name} onChange={e => setRegisterForm(p => ({ ...p, name: e.target.value }))} placeholder="Иван Петров" className={INPUT_CLS} />
                </div>
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2" style={{ color: "hsl(270,5%,50%)" }}>Название команды</label>
                  <input required type="text" value={registerForm.team} onChange={e => setRegisterForm(p => ({ ...p, team: e.target.value }))} placeholder="Команда мечты" className={INPUT_CLS} />
                </div>
              </div>
              <div>
                <label className="font-body text-xs tracking-widest uppercase block mb-2" style={{ color: "hsl(270,5%,50%)" }}>Выберите игру</label>
                <select required value={registerForm.date} onChange={e => setRegisterForm(p => ({ ...p, date: e.target.value }))} className={INPUT_CLS + " appearance-none cursor-pointer"}>
                  <option value="" style={{ background: "#0a0010" }}>— Выберите дату —</option>
                  {SCHEDULE.filter(s => s.spots > 0).map(s => (
                    <option key={s.date} value={s.date} style={{ background: "#0a0010" }}>{s.date} · {s.venue} · {s.theme}</option>
                  ))}
                </select>
              </div>
              <div className="pt-5" style={{ borderTop: "1px solid rgba(255,0,170,0.1)" }}>
                <label className="font-body text-xs tracking-widest uppercase block mb-3" style={{ color: "hsl(270,5%,50%)" }}>Способ напоминания</label>
                <div className="flex gap-4">
                  {[{ val: "email", label: "📧 Email" }, { val: "sms", label: "📱 SMS" }].map(opt => (
                    <label key={opt.val} className="flex items-center gap-2 cursor-pointer border px-4 py-2 transition-colors text-sm font-body"
                      style={{ borderColor: registerForm.notify === opt.val ? M : "rgba(255,0,170,0.2)", color: registerForm.notify === opt.val ? M : "hsl(270,5%,50%)", background: registerForm.notify === opt.val ? "rgba(255,0,170,0.08)" : "transparent" }}>
                      <input type="radio" name="notify" value={opt.val} checked={registerForm.notify === opt.val} onChange={e => setRegisterForm(p => ({ ...p, notify: e.target.value }))} className="hidden" />
                      {opt.label}
                    </label>
                  ))}
                </div>
              </div>
              {registerForm.notify === "email" ? (
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2" style={{ color: "hsl(270,5%,50%)" }}>Email</label>
                  <input required type="email" value={registerForm.email} onChange={e => setRegisterForm(p => ({ ...p, email: e.target.value }))} placeholder="ivan@example.com" className={INPUT_CLS} />
                </div>
              ) : (
                <div>
                  <label className="font-body text-xs tracking-widest uppercase block mb-2" style={{ color: "hsl(270,5%,50%)" }}>Телефон</label>
                  <input required type="tel" value={registerForm.phone} onChange={e => setRegisterForm(p => ({ ...p, phone: e.target.value }))} placeholder="+7 900 123 45 67" className={INPUT_CLS} />
                </div>
              )}
              <button type="submit" className="mt-2 font-display font-bold tracking-[0.15em] uppercase py-4 text-sm text-white transition-all duration-200 pulse-glow"
                style={{ background: `linear-gradient(135deg, ${M} 0%, ${M_DARK} 100%)` }}>
                Зарезервировать место →
              </button>
            </form>
          )}
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #0a0010 0%, #110816 100%)", borderTop: "1px solid rgba(255,0,170,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: M }}>Прошедшая игра — 21 марта</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">РЕЗУЛЬТАТЫ</h2>
          </div>
          <div className="flex flex-col gap-2">
            {RESULTS.map((r) => (
              <div key={r.place} className="flex items-center gap-5 p-5 transition-all"
                style={{
                  border: r.place === 1 ? `1px solid rgba(255,0,170,0.4)` : "1px solid rgba(255,0,170,0.1)",
                  background: r.place === 1 ? "linear-gradient(135deg, rgba(200,0,140,0.12) 0%, rgba(13,0,20,0.8) 100%)" : "linear-gradient(135deg, rgba(30,5,35,0.4) 0%, rgba(13,0,20,0.7) 100%)"
                }}>
                <div className="font-display text-3xl font-bold w-10 text-center flex-shrink-0">
                  {r.place === 1 ? "🥇" : r.place === 2 ? "🥈" : r.place === 3 ? "🥉" : <span style={{ color: "hsl(270,5%,35%)", fontSize: "1.2rem" }}>{r.place}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-lg font-semibold tracking-wide">{r.team}</div>
                  <div className="font-body text-xs mt-0.5 truncate" style={{ color: "hsl(270,5%,45%)" }}>{r.members}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="font-display text-2xl font-bold" style={{ color: r.place === 1 ? M : "hsl(300,20%,92%)" }}>{r.score}</div>
                  <div className="font-body text-xs" style={{ color: "hsl(270,5%,40%)" }}>очков</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6" style={{ borderTop: "1px solid rgba(255,0,170,0.1)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: M }}>Атмосфера</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">ГАЛЕРЕЯ</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {GALLERY_ITEMS.map((item, i) => (
              <div key={i} className={`aspect-square bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer`}
                style={{ border: "1px solid rgba(255,0,170,0.1)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,0,170,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,0,170,0.1)")}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                <span className="font-body text-xs mt-3 tracking-wider" style={{ color: "hsl(270,5%,55%)" }}>{item.label}</span>
              </div>
            ))}
          </div>
          <p className="text-center font-body text-sm mt-6" style={{ color: "hsl(270,5%,40%)" }}>Фото из последних игр — скоро здесь</p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6" style={{ background: "linear-gradient(180deg, #0a0010 0%, #110816 100%)", borderTop: "1px solid rgba(255,0,170,0.1)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <span className="font-body text-xs tracking-[0.3em] uppercase" style={{ color: M }}>Связаться</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-2">КОНТАКТЫ</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(255,0,170,0.08)" }}>
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (900) 123-45-67", sub: "Звоните с 10:00 до 22:00" },
              { icon: "Mail", label: "Email", value: "hello@igrarazuma.ru", sub: "Ответим за 2 часа" },
              { icon: "Send", label: "Telegram", value: "@igrarazuma_bot", sub: "Быстрее всего здесь" },
            ].map((c, i) => (
              <div key={i} className="p-8 transition-colors group"
                style={{ background: "linear-gradient(135deg, #0a0010 0%, #110816 100%)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "linear-gradient(135deg, #14001e 0%, #1a0820 100%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "linear-gradient(135deg, #0a0010 0%, #110816 100%)")}>
                <div className="w-10 h-10 flex items-center justify-center mb-5 transition-colors"
                  style={{ border: "1px solid rgba(255,0,170,0.2)", background: "rgba(255,0,170,0.05)" }}>
                  <Icon name={c.icon as any} size={16} style={{ color: M }} />
                </div>
                <div className="font-body text-xs tracking-widest uppercase mb-2" style={{ color: "hsl(270,5%,40%)" }}>{c.label}</div>
                <div className="font-display text-lg font-semibold mb-1">{c.value}</div>
                <div className="font-body text-xs" style={{ color: "hsl(270,5%,45%)" }}>{c.sub}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-8" style={{ border: "1px solid rgba(255,0,170,0.12)", background: "linear-gradient(135deg, rgba(35,5,40,0.5) 0%, rgba(13,0,20,0.8) 100%)" }}>
            <div className="flex items-start gap-4">
              <Icon name="MapPin" size={16} className="mt-1 flex-shrink-0" style={{ color: M }} />
              <div>
                <div className="font-display text-base font-semibold mb-1">Наши площадки</div>
                <div className="font-body text-sm leading-relaxed" style={{ color: "hsl(270,5%,55%)" }}>
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
      <footer className="py-10 px-6" style={{ borderTop: "1px solid rgba(255,0,170,0.12)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2">
            <img src={LOGO_IMAGE} alt="Игра Разума" className="w-8 h-8 rounded object-cover" style={{ filter: "saturate(1.3) brightness(1.1)" }} />
            <span className="font-display text-lg font-bold tracking-widest">
              <span className="text-gradient">ИГРА</span>
              <span className="text-[hsl(300,20%,95%)]"> РАЗУМА</span>
            </span>
          </a>
          <div className="font-body text-xs tracking-wider text-center" style={{ color: "hsl(270,5%,35%)" }}>
            © 2026 Игра Разума · Барные викторины · Все права защищены
          </div>
          <div className="flex items-center gap-4">
            {["Instagram", "MessageCircle", "Send"].map((icon, i) => (
              <button key={i} className="transition-colors" style={{ color: "hsl(270,5%,35%)" }}
                onMouseEnter={e => (e.currentTarget.style.color = M)}
                onMouseLeave={e => (e.currentTarget.style.color = "hsl(270,5%,35%)")}>
                <Icon name={icon as any} size={16} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}