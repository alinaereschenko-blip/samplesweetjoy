import { createFileRoute } from "@tanstack/react-router";
import heroCake from "@/assets/hero-cake.jpg";
import cakeDisplay from "@/assets/cake-display.jpg";
import cakeStrawberry from "@/assets/cake-strawberry.jpg";
import cakePistachio from "@/assets/cake-pistachio.jpg";
import cakeMedovik from "@/assets/cake-medovik.jpg";
import coffeeRaf from "@/assets/coffee-raf.jpg";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const cakes = [
  { name: "Клубника со сливками", desc: "Нежный бисквит, маскарпоне и свежая клубника", price: "от 380 ₽", img: cakeStrawberry, tag: "Хит" },
  { name: "Фисташка-малина", desc: "Фисташковый крем и малиновое конфи", price: "от 420 ₽", img: cakePistachio, tag: "Новинка" },
  { name: "Медовик «Бабушкин»", desc: "Тонкие медовые коржи и сметанный крем", price: "от 320 ₽", img: cakeMedovik, tag: "Классика" },
];

const drinks = [
  { name: "Раф ванильный", price: "240 ₽" },
  { name: "Капучино", price: "190 ₽" },
  { name: "Латте лавандовый", price: "260 ₽" },
  { name: "Флэт уайт", price: "210 ₽" },
  { name: "Какао с маршмеллоу", price: "220 ₽" },
  { name: "Чай облепиха-имбирь", price: "280 ₽" },
];

const meals = [
  { name: "Боул с лососем", desc: "Рис, авокадо, огурец, нори", price: "490 ₽" },
  { name: "Цезарь с курицей", desc: "Романо, пармезан, гренки", price: "420 ₽" },
  { name: "Пицца «Маргарита»", desc: "Моцарелла, томаты, базилик", price: "450 ₽" },
  { name: "Боул фалафель", desc: "Булгур, хумус, овощи", price: "440 ₽" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <CakesSection />
      <CustomCakes />
      <MenuSection />
      <Visit />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`font-display text-2xl font-semibold tracking-tight text-primary ${className}`}>
      Sweet <span className="italic text-accent">Joy</span>
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#cakes" className="hover:text-primary transition">Торты</a>
          <a href="#order" className="hover:text-primary transition">На заказ</a>
          <a href="#menu" className="hover:text-primary transition">Меню</a>
          <a href="#visit" className="hover:text-primary transition">Адрес</a>
        </nav>
        <a
          href="#order"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]"
        >
          Заказать торт
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Кофейня и кондитерская в центре города
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-balance text-primary">
            Торты, от которых
            <span className="italic text-accent"> хочется улыбнуться</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Sweet Joy — это уютная кофейня, где витрина каждый день наполняется большими цветными тортами. Заходите за кусочком к рафу или закажите целый торт к празднику.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cakes" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]">
              Посмотреть витрину
            </a>
            <a href="#order" className="inline-flex items-center rounded-full bg-card border border-border text-primary px-7 py-3.5 text-sm font-semibold hover:bg-secondary transition">
              Торт на заказ →
            </a>
          </div>
          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div>
              <div className="font-display text-3xl text-primary">25+</div>
              <div>вкусов на витрине</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-3xl text-primary">7 лет</div>
              <div>в центре города</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-[var(--rose)] blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-[var(--pistachio)] blur-3xl opacity-40" />
          <div className="relative animate-float">
            <img
              src={heroCake}
              alt="Торт со свежими ягодами"
              width={1280}
              height={1280}
              className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-square"
            />
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-[var(--shadow-card)] border border-border">
              <div className="text-xs text-muted-foreground">торт дня</div>
              <div className="font-display text-lg text-primary">Ягодное облако</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 text-xs font-semibold rotate-6">
              свежие каждый день
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CakesSection() {
  return (
    <section id="cakes" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Витрина</span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
              Большие, цветные, по кусочкам
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Каждое утро мы выпекаем десятки тортов и выставляем их на витрину — отрежем любой по кусочку или продадим целиком.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cakes.map((c) => (
            <article key={c.name} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300">
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl text-primary">{c.name}</h3>
                  <span className="text-sm font-semibold text-accent whitespace-nowrap">{c.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <img
            src={cakeDisplay}
            alt="Витрина с тортами Sweet Joy"
            loading="lazy"
            width={1280}
            height={960}
            className="w-full rounded-3xl object-cover aspect-[16/9] shadow-[var(--shadow-card)]"
          />
        </div>
      </div>
    </section>
  );
}

function CustomCakes() {
  return (
    <section id="order" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">На заказ</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
            Торт к вашему празднику — таким, как вы мечтаете
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Свадьба, день рождения, корпоратив или просто вечер вторника — мы испечём торт по вашему вкусу, цвету и поводу. Минимум за 2 дня.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Выбор начинки и оформления",
              "Свежие фрукты, ягоды, шоколад",
              "Размер от 1 до 10 кг",
              "Доставка по городу",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                <span className="text-foreground">{it}</span>
              </li>
            ))}
          </ul>
          <a href="tel:+78001234567" className="mt-10 inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]">
            Обсудить заказ
          </a>
        </div>

        <div className="relative">
          <img
            src={cakePistachio}
            alt="Авторский торт на заказ"
            loading="lazy"
            width={800}
            height={800}
            className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-6 right-6 bg-card rounded-2xl px-6 py-5 shadow-[var(--shadow-card)] border border-border max-w-[220px]">
            <div className="font-display text-3xl text-accent">от 1500 ₽</div>
            <div className="text-xs text-muted-foreground mt-1">за килограмм авторского торта</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Меню</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
            Кофе, чай и сытные блюда
          </h2>
          <p className="mt-4 text-muted-foreground">
            Не только торты — у нас есть всё, чтобы провести у нас час или весь день.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-3xl text-primary">Кофе и напитки</h3>
              <span className="text-2xl">☕</span>
            </div>
            <ul className="divide-y divide-border">
              {drinks.map((d) => (
                <li key={d.name} className="flex items-center justify-between py-4">
                  <span className="text-foreground">{d.name}</span>
                  <span className="font-semibold text-accent">{d.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-3xl text-primary">Боулы, салаты, пицца</h3>
              <span className="text-2xl">🥗</span>
            </div>
            <ul className="divide-y divide-border">
              {meals.map((m) => (
                <li key={m.name} className="py-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="text-foreground font-medium">{m.name}</span>
                    <span className="font-semibold text-accent whitespace-nowrap">{m.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{m.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <img src={coffeeRaf} alt="Раф с кусочком торта" loading="lazy" width={1000} height={800} className="w-full aspect-[5/4] object-cover rounded-3xl shadow-[var(--shadow-card)]" />
          <div className="bg-accent/30 rounded-3xl p-10 flex flex-col justify-center">
            <h3 className="font-display text-3xl text-primary text-balance">Лучший раф в городе — и это не мы говорим</h3>
            <p className="mt-4 text-foreground/80">Варим на цельном молоке с натуральной ванилью. Идеально с кусочком медовика.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src={interior} alt="Интерьер кофейни Sweet Joy" loading="lazy" width={1280} height={900} className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-[4/3]" />
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Заходите</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
            В самом центре, между булочной и книжным
          </h2>
          <div className="mt-8 space-y-5 text-foreground">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Адрес</div>
              <div className="mt-1 text-lg">ул. Центральная, 12</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Часы работы</div>
              <div className="mt-1 text-lg">Пн–Вс · 09:00 — 22:00</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</div>
              <a href="tel:+78001234567" className="mt-1 text-lg block hover:text-accent transition">+7 (800) 123-45-67</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-3xl">Sweet <span className="italic text-accent">Joy</span></div>
          <p className="mt-3 text-sm opacity-80">Кофейня и кондитерская в центре города. С любовью к каждому кусочку с 2018 года.</p>
        </div>
        <div className="text-sm space-y-2 opacity-90">
          <div className="font-semibold mb-3 opacity-100">Навигация</div>
          <a href="#cakes" className="block hover:text-accent transition">Витрина тортов</a>
          <a href="#order" className="block hover:text-accent transition">Торт на заказ</a>
          <a href="#menu" className="block hover:text-accent transition">Меню кофейни</a>
        </div>
        <div className="text-sm space-y-2 opacity-90">
          <div className="font-semibold mb-3 opacity-100">Контакты</div>
          <div>ул. Центральная, 12</div>
          <div>+7 (800) 123-45-67</div>
          <div>hello@sweetjoy.ru</div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Sweet Joy. Все торты съедены с любовью.
      </div>
    </footer>
  );
}
