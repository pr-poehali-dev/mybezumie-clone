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
  { date: "28 МАР", day: "ПТ", time: "20:00", venue: "Bar №1 «Брут»", spots: 8, total: 20, theme: "Кино и музыка 90-х" },
  { date: "4 АПР", day: "ПТ", time: "20:00", venue: "Bar №1 «Брут»", spots: 15, total: 20, theme: "Наука и технологии" },
  { date: "11 АПР", day: "ПТ", time: "20:00", venue: "Craft House", spots: 20, total: 30, theme: "Спорт и игры" },
  { date: "18 АПР", day: "ПТ", time: "20:00", venue: "Bar №1 «Брут»", spots: 3, total: 20, theme: "История России" },
  { date: "25 АПР", day: "ПТ", time: "20:00", venue: "Craft House", spots: 12, total: 30, theme: "Поп-культура" },
  { date: "2 МАЯ", day: "ЧТ", time: "20:00", venue: "The Basement", spots: 25, total: 40, theme: "Гранд-финал" },
];

const RULES = [
  { num: "01", title: "Команда", text: "От 2 до 6 человек. Чем больше — тем веселее, но умнее вдвоём." },
  { num: "02", title: "Формат", text: "6 раундов, 10 вопросов каждый. Отдельная тема на раунд. 90 минут." },
  { num: "03", title: "Гаджеты", text: "Телефоны убираем. Только честная игра и живые мозги." },
  { num: "04", title: "Призы", text: "Топ-3 команды получают сертификаты на бар и брендированные подарки." },
  { num: "05", title: "Регистрация", text: "Обязательна. Бронируйте заранее — места разбирают быстро." },
  { num: "06", title: "Атмосфера", text: "Ведущий, живая музыка до начала, напитки и закуски всю ночь." },
];

const RESULTS = [
  { place: 1, team: "Мозговой штурм", score: 54, members: "Анна, Дмитрий, Сергей, Маша" },
  { place: 2, team: "Квазары", score: 51, members: "Игорь, Лена, Паша" },
  { place: 3, team: "Пиво + IQ", score: 49, members: "Катя, Артём, Никита, Оля" },
  { place: 4, team: "Совы не то, чем кажутся", score: 46, members: "Влад, Таня, Рома" },
  { place: 5, team: "Думай или пей", score: 43, members: "Максим, Даша, Костя, Юля" },
];

const INPUT_CLS = "w-full bg-white border border-[#e0e0dc] outline-none px-4 py-3 font-body text-sm text-[#0f0f0f] placeholder:text-[#aaa] transition-colors focus:border-[#0f0f0f]";

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [registerForm, setRegisterForm] = useState({ name: "", team: "", phone: "", email: "", date: "", notify: "email" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f9f9f7] text-[#0f0f0f]">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#f9f9f7]/95 backdrop-blur-sm border-b border-[#e8e8e4]" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="font-display text-lg font-bold tracking-[0.12em] uppercase text-[#0f0f0f]">
            Игра Разума
          </a>
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="font-body text-xs tracking-[0.15em] uppercase text-[#888] hover:text-[#0f0f0f] transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#register" className="hidden md:block font-body text-xs tracking-[0.15em] uppercase bg-[#0f0f0f] text-white px-5 py-2.5 hover:bg-[#333] transition-colors">
            Записаться
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-[#0f0f0f]">
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#f9f9f7] border-t border-[#e8e8e4] px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className="font-body text-sm tracking-[0.12em] uppercase text-[#888] hover:text-[#0f0f0f] transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#register" onClick={() => setMenuOpen(false)} className="font-body text-xs tracking-[0.15em] uppercase bg-[#0f0f0f] text-white px-5 py-3 text-center">
              Записаться
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col">
        {/* Image block — top 60% */}
        <div className="relative flex-1 min-h-[60vh] overflow-hidden">
          <img src={HERO_IMAGE} alt="" className="absolute inset-0 w-full h-full object-cover grayscale" />
          <div className="absolute inset-0 bg-[#f9f9f7]/20" />
        </div>

        {/* Text block */}
        <div className="bg-[#f9f9f7] px-6 pt-14 pb-20 max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div className="animate-slide-up stagger-1">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[#888] mb-5">
                Барные викторины — каждую пятницу
              </p>
              <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-tight text-[#0f0f0f] uppercase">
                Игра<br />Разума
              </h1>
            </div>
            <div className="animate-slide-up stagger-2 flex flex-col justify-end gap-6">
              <p className="font-body text-base text-[#555] leading-relaxed max-w-xs">
                Интеллектуальная битва команд в лучших барах города. Вопросы, напитки и честная игра.
              </p>
              <div className="flex gap-3">
                <a href="#register" className="font-body text-xs tracking-[0.15em] uppercase bg-[#0f0f0f] text-white px-8 py-3.5 hover:bg-[#333] transition-colors">
                  Записаться
                </a>
                <a href="#schedule" className="font-body text-xs tracking-[0.15em] uppercase border border-[#ccc] text-[#0f0f0f] px-8 py-3.5 hover:border-[#0f0f0f] transition-colors">
                  Расписание
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-[#e8e8e4] bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8e8e4]">
          {[
            { num: "200+", label: "игр сыграно" },
            { num: "1500+", label: "участников" },
            { num: "5", label: "площадок" },
            { num: "3 года", label: "на рынке" },
          ].map((s) => (
            <div key={s.label} className="text-center px-6 py-2">
              <div className="font-display text-3xl font-bold text-[#0f0f0f]">{s.num}</div>
              <div className="font-body text-xs uppercase tracking-[0.15em] text-[#888] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-14 border-b border-[#e8e8e4] pb-6">
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Ближайшие игры</p>
              <h2 className="font-display text-5xl font-bold uppercase">Расписание</h2>
            </div>
            <span className="font-body text-xs text-[#aaa] hidden md:block">Апрель — Май 2026</span>
          </div>

          <div className="divide-y divide-[#e8e8e4]">
            {SCHEDULE.map((event, i) => {
              const isFull = event.spots === 0;
              const isAlmost = !isFull && event.spots <= 5;
              return (
                <div key={i} className="group py-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-0 hover:bg-[#f3f3f0] -mx-4 px-4 transition-colors duration-150">
                  <div className="md:w-28 flex-shrink-0">
                    <span className="font-display text-xl font-bold">{event.date}</span>
                    <span className="font-body text-xs text-[#aaa] ml-2">{event.day}</span>
                  </div>
                  <div className="flex-1 md:px-6">
                    <div className="font-display text-lg font-semibold">{event.theme}</div>
                    <div className="font-body text-xs text-[#888] mt-0.5 flex gap-3">
                      <span className="flex items-center gap-1"><Icon name="MapPin" size={11} />{event.venue}</span>
                      <span className="flex items-center gap-1"><Icon name="Clock" size={11} />{event.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 flex-shrink-0">
                    <span className={`font-body text-xs ${isFull ? "text-red-400" : isAlmost ? "text-amber-500" : "text-emerald-600"}`}>
                      {isFull ? "Мест нет" : `${event.spots} из ${event.total}`}
                    </span>
                    <a href="#register"
                      className={`font-body text-xs tracking-[0.12em] uppercase px-5 py-2.5 transition-colors ${isFull ? "border border-[#ddd] text-[#ccc] cursor-not-allowed" : "bg-[#0f0f0f] text-white hover:bg-[#333]"}`}>
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
      <section id="rules" className="py-24 px-6 bg-[#0f0f0f] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-white/10 pb-6 mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Как мы играем</p>
            <h2 className="font-display text-5xl font-bold uppercase">Правила</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {RULES.map((rule) => (
              <div key={rule.num}>
                <div className="font-body text-xs text-white/25 mb-4 tracking-widest">{rule.num}</div>
                <h3 className="font-display text-2xl font-semibold mb-3 uppercase">{rule.title}</h3>
                <p className="font-body text-sm text-white/55 leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTER */}
      <section id="register" className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Занять место</p>
            <h2 className="font-display text-5xl font-bold uppercase mb-6">Регистрация</h2>
            <p className="font-body text-sm text-[#666] leading-relaxed mb-8 max-w-xs">
              Заполните форму и мы пришлём напоминание перед игрой. Места ограничены.
            </p>
            <div className="space-y-4 text-sm font-body text-[#555]">
              <div className="flex items-center gap-3"><Icon name="CheckCircle" size={14} className="text-[#0f0f0f]" />Подтверждение сразу после регистрации</div>
              <div className="flex items-center gap-3"><Icon name="CheckCircle" size={14} className="text-[#0f0f0f]" />Напоминание за день до игры</div>
              <div className="flex items-center gap-3"><Icon name="CheckCircle" size={14} className="text-[#0f0f0f]" />Бесплатная отмена за 24 часа</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-[#e8e8e4] p-10 text-center">
                <div className="text-4xl mb-5">✓</div>
                <h3 className="font-display text-2xl font-bold uppercase mb-2">Вы записаны</h3>
                <p className="font-body text-sm text-[#666] mb-6">Пришлём напоминание на {registerForm.notify === "email" ? "почту" : "телефон"}</p>
                <button
                  onClick={() => { setSubmitted(false); setRegisterForm({ name: "", team: "", phone: "", email: "", date: "", notify: "email" }); }}
                  className="font-body text-xs tracking-[0.15em] uppercase border border-[#0f0f0f] px-8 py-3 hover:bg-[#0f0f0f] hover:text-white transition-colors">
                  Записать ещё команду
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs tracking-[0.12em] uppercase text-[#888] block mb-1.5">Имя</label>
                    <input required type="text" value={registerForm.name} onChange={e => setRegisterForm(p => ({ ...p, name: e.target.value }))} placeholder="Иван" className={INPUT_CLS} />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-[0.12em] uppercase text-[#888] block mb-1.5">Команда</label>
                    <input required type="text" value={registerForm.team} onChange={e => setRegisterForm(p => ({ ...p, team: e.target.value }))} placeholder="Название" className={INPUT_CLS} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.12em] uppercase text-[#888] block mb-1.5">Игра</label>
                  <select required value={registerForm.date} onChange={e => setRegisterForm(p => ({ ...p, date: e.target.value }))} className={INPUT_CLS + " cursor-pointer appearance-none bg-white"}>
                    <option value="">— Выберите дату —</option>
                    {SCHEDULE.filter(s => s.spots > 0).map(s => (
                      <option key={s.date} value={s.date}>{s.date} · {s.venue} · {s.theme}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.12em] uppercase text-[#888] block mb-2">Напоминание</label>
                  <div className="flex gap-3">
                    {[{ val: "email", label: "Email" }, { val: "sms", label: "SMS" }].map(opt => (
                      <label key={opt.val} className="flex items-center gap-2 cursor-pointer font-body text-sm"
                        style={{ color: registerForm.notify === opt.val ? "#0f0f0f" : "#888" }}>
                        <input type="radio" name="notify" value={opt.val} checked={registerForm.notify === opt.val}
                          onChange={e => setRegisterForm(p => ({ ...p, notify: e.target.value }))}
                          className="accent-[#0f0f0f]" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                {registerForm.notify === "email" ? (
                  <div>
                    <label className="font-body text-xs tracking-[0.12em] uppercase text-[#888] block mb-1.5">Email</label>
                    <input required type="email" value={registerForm.email} onChange={e => setRegisterForm(p => ({ ...p, email: e.target.value }))} placeholder="ivan@example.com" className={INPUT_CLS} />
                  </div>
                ) : (
                  <div>
                    <label className="font-body text-xs tracking-[0.12em] uppercase text-[#888] block mb-1.5">Телефон</label>
                    <input required type="tel" value={registerForm.phone} onChange={e => setRegisterForm(p => ({ ...p, phone: e.target.value }))} placeholder="+7 900 123 45 67" className={INPUT_CLS} />
                  </div>
                )}
                <button type="submit" className="mt-2 font-body text-xs tracking-[0.15em] uppercase bg-[#0f0f0f] text-white py-4 hover:bg-[#333] transition-colors">
                  Зарезервировать место
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section id="results" className="py-24 px-6 bg-white border-y border-[#e8e8e4]">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-[#e8e8e4] pb-6 mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-2">21 марта 2026</p>
            <h2 className="font-display text-5xl font-bold uppercase">Результаты</h2>
          </div>
          <div className="divide-y divide-[#e8e8e4]">
            {RESULTS.map((r) => (
              <div key={r.place} className="py-5 flex items-center gap-6">
                <div className="w-8 font-display text-2xl font-bold text-[#ccc] flex-shrink-0 text-center">
                  {r.place <= 3 ? ["🥇", "🥈", "🥉"][r.place - 1] : r.place}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display text-xl font-semibold">{r.team}</div>
                  <div className="font-body text-xs text-[#aaa] mt-0.5">{r.members}</div>
                </div>
                <div className="font-display text-3xl font-bold text-[#0f0f0f] flex-shrink-0">{r.score}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-[#e8e8e4] pb-6 mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-[#888] mb-2">Атмосфера</p>
            <h2 className="font-display text-5xl font-bold uppercase">Галерея</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { emoji: "🍺", label: "Вечер пятницы", bg: "#1a1a1a" },
              { emoji: "🏆", label: "Победители", bg: "#111" },
              { emoji: "🎯", label: "Финальный раунд", bg: "#0f0f0f" },
              { emoji: "🎤", label: "Ведущий", bg: "#141414" },
              { emoji: "🧠", label: "Мозговой штурм", bg: "#0d0d0d" },
              { emoji: "📝", label: "Записываем ответы", bg: "#181818" },
            ].map((item, i) => (
              <div key={i} className="aspect-[4/3] flex flex-col items-center justify-center group cursor-pointer hover:opacity-90 transition-opacity"
                style={{ background: item.bg }}>
                <span className="text-4xl group-hover:scale-105 transition-transform duration-300">{item.emoji}</span>
                <span className="font-body text-xs text-white/40 mt-3 tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="font-body text-xs text-[#aaa] mt-5">Фотографии из последних игр — скоро здесь</p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6 bg-[#0f0f0f] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-white/10 pb-6 mb-14">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Связаться</p>
            <h2 className="font-display text-5xl font-bold uppercase">Контакты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (900) 123-45-67", sub: "с 10:00 до 22:00" },
                { icon: "Mail", label: "Email", value: "hello@igrarazuma.ru", sub: "ответим за 2 часа" },
                { icon: "Send", label: "Telegram", value: "@igrarazuma_bot", sub: "быстрее всего" },
              ].map((c) => (
                <div key={c.label} className="flex gap-5 items-start">
                  <Icon name={c.icon as any} size={16} className="mt-0.5 flex-shrink-0 text-white/40" />
                  <div>
                    <div className="font-body text-xs tracking-[0.12em] uppercase text-white/30 mb-1">{c.label}</div>
                    <div className="font-display text-lg font-semibold">{c.value}</div>
                    <div className="font-body text-xs text-white/35 mt-0.5">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="font-body text-xs tracking-[0.12em] uppercase text-white/30 mb-4">Площадки</div>
              <div className="space-y-4">
                {[
                  { name: "Bar №1 «Брут»", addr: "ул. Ленина, 42" },
                  { name: "Craft House", addr: "пр. Мира, 17" },
                  { name: "The Basement", addr: "ул. Садовая, 5" },
                ].map((v) => (
                  <div key={v.name} className="border-b border-white/8 pb-4">
                    <div className="font-display text-base font-semibold">{v.name}</div>
                    <div className="font-body text-xs text-white/40 mt-0.5">{v.addr}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e8e8e4] bg-[#f9f9f7] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-base font-bold uppercase tracking-[0.1em]">Игра Разума</span>
          <span className="font-body text-xs text-[#aaa]">© 2026 · Барные викторины · Все права защищены</span>
          <div className="flex gap-4">
            {["Instagram", "MessageCircle", "Send"].map((icon) => (
              <button key={icon} className="text-[#bbb] hover:text-[#0f0f0f] transition-colors">
                <Icon name={icon as any} size={15} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
