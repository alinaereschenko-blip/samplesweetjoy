import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroCake from "@/assets/hero-cake.png";
import logo from "@/assets/logo-transparent.png";
import cakeDisplay from "@/assets/cake-display.jpg";
import cakeStrawberry from "@/assets/cake-slice-pink.png";
import cakePistachio from "@/assets/cake-slice-berry.png";
import cakeMedovik from "@/assets/cake-slice-chocolate.png";
import coffeeRaf from "@/assets/coffee-raf.jpg";
import interior from "@/assets/interior.jpg";
import chef from "@/assets/chef.jpg";
import customCake from "@/assets/custom-cake.png";
import review1 from "@/assets/reviews/review-1.jpg";
import review2 from "@/assets/reviews/review-2.jpg";
import review3 from "@/assets/reviews/review-3.jpg";
import review4 from "@/assets/reviews/review-4.jpg";
import review5 from "@/assets/reviews/review-5.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const cakes = [
  { name: "Клубника со сливками", desc: "Нежный бисквит, маскарпоне и свежая клубника", img: cakeStrawberry, tag: "Хит" },
  { name: "Фисташка-малина", desc: "Фисташковый крем и малиновое конфи", img: cakePistachio, tag: "Новинка" },
  { name: "Медовик «Бабушкин»", desc: "Тонкие медовые коржи и сметанный крем", img: cakeMedovik, tag: "Классика" },
];

const reviews = [
  { img: review1, text: "Очень необычные, но ооочень вкусные!", author: "Гостья кофейни" },
  { img: review2, text: "Дубайским шоколадом уже никого не удивишь. А как насчёт дубайского чизкейка?", author: "Постоянный гость" },
  { img: review3, text: "Домашнее горячее какао после тренировки в такую погоду — то, что нужно", author: "Из соседнего зала" },
  { img: review4, text: "Покупая «Добрый десерт» в Sweet Joy — вы помогаете детям. Вечер стал продолжением дня Добра", author: "look_vokrug26" },
  { img: review5, text: "Похлёбка с лососем и креветками + смузи с базиликом и малиной. Лучший обед!", author: "Гостья кофейни" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <CakesSection />
      <CustomCakes />
      <Reviews />
      <ChefMenu />
      <Visit />
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center ${className}`} aria-label="Sweet Joy Cafe">
      <img src={logo} alt="Sweet Joy Cafe" className="h-auto w-[180px] md:w-[220px]" />
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-1.5 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#cakes" className="hover:text-primary transition">Торты</a>
          <a href="#order" className="hover:text-primary transition">На заказ</a>
          <a href="#menu" className="hover:text-primary transition">Меню</a>
          <a href="#visit" className="hover:text-primary transition">Адрес</a>
        </nav>
        <a
          href="tel:+79187778219"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]"
        >
          +7 (918) 777-82-19
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
            Кофейня и кондитерская в центре Ставрополя
          </span>
          <h1 className="mt-6 font-display text-5xl md:text-7xl font-semibold leading-[1.05] text-balance text-primary">
            Торты, от которых
            <span className="italic text-accent"> хочется улыбнуться</span>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground max-w-lg">
            Свежая выпечка каждый день. Торты на заказ от 2100 ₽/кг.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cakes" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]">
              Посмотреть витрину
            </a>
            <a href="#order" className="inline-flex items-center rounded-full bg-card border border-border text-primary px-7 py-3.5 text-sm font-semibold hover:bg-secondary transition">
              Торт на заказ →
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-[var(--rose)] blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -right-6 h-48 w-48 rounded-full bg-[var(--pistachio)] blur-3xl opacity-40" />
          <div className="relative animate-float">
            <img
              src={heroCake}
              alt="Фисташковый торт с клубникой"
              width={1280}
              height={1280}
              className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-square"
            />
            <div className="absolute bottom-3 left-3 md:-bottom-6 md:-left-6 bg-card rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-[var(--shadow-card)] border border-border">
              <div className="text-xs text-muted-foreground">наша гордость</div>
              <div className="font-display text-base md:text-lg text-primary">Ягодное облако</div>
            </div>
            <div className="absolute top-3 right-3 md:-top-4 md:-right-4 bg-accent text-accent-foreground rounded-full px-3 py-1.5 md:px-4 md:py-2 text-[11px] md:text-xs font-semibold rotate-6">
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
                <h3 className="font-display text-2xl text-primary">{c.name}</h3>
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
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-accent/20 px-6 py-3">
            <span className="font-display text-3xl leading-none text-accent">20+</span>
            <span className="text-sm leading-none text-foreground">видов начинок на выбор</span>
          </div>
          <ul className="mt-8 space-y-4">
            {[
              "Минимальный вес от 1,5 кг",
              "Стоимость от 2100 ₽/кг",
              "Бенто-торт от 1500 ₽ / 600 г",
              "Готовность от 24 часов",
              "Стандарт, Премиум и Свадебные торты",
            ].map((it) => (
              <li key={it} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-accent text-accent-foreground text-xs font-bold">✓</span>
                <span className="text-foreground">{it}</span>
              </li>
            ))}
          </ul>
          <a href="tel:+79187778219" className="mt-10 inline-flex items-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]">
            Обсудить заказ
          </a>
        </div>

        <div className="relative">
          <img
            src={customCake}
            alt="Авторский торт на заказ"
            loading="lazy"
            width={800}
            height={800}
            className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-square"
          />
          <div className="absolute -bottom-6 right-6 bg-card rounded-2xl px-6 py-5 shadow-[var(--shadow-card)] border border-border max-w-[220px]">
            <div className="font-display text-3xl text-accent">от 2100 ₽/кг</div>
            <div className="text-xs text-muted-foreground mt-1">за килограмм авторского торта</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, [active]);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Отзывы гостей</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
            Истории из нашей кофейни
          </h2>
          <p className="mt-3 text-muted-foreground">Реальные сторис от гостей Sweet Joy в Instagram</p>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-6 -mx-6 px-6 md:justify-center scrollbar-thin">
          {reviews.map((r, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`group relative flex-none snap-center w-[260px] md:w-[280px] aspect-[9/16] rounded-[28px] overflow-hidden shadow-[var(--shadow-card)] transition-all duration-500 ${
                active === i ? "scale-[1.04] ring-4 ring-accent/60" : "scale-100 opacity-80 hover:opacity-100"
              }`}
              style={{
                background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                padding: "3px",
              }}
              aria-label={`Сторис ${i + 1}`}
            >
              <div className="relative w-full h-full rounded-[26px] overflow-hidden bg-black">
                <img src={r.img} alt={r.author} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                {/* top progress bars */}
                <div className="absolute top-3 left-3 right-3 flex gap-1 z-10">
                  {reviews.map((_, j) => (
                    <div key={j} className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-white"
                        style={{
                          width: active === i && j === i ? "100%" : j < i ? "100%" : "0%",
                          transition: active === i && j === i ? "width 5s linear" : "none",
                        }}
                      />
                    </div>
                  ))}
                </div>
                {/* header */}
                <div className="absolute top-7 left-3 right-3 flex items-center gap-2 z-10">
                  <div className="h-7 w-7 rounded-full bg-gradient-to-br from-accent to-[var(--rose)] ring-2 ring-white flex items-center justify-center text-[10px] font-bold text-white">SJ</div>
                  <div className="text-white text-xs font-semibold drop-shadow">sweetjoycafe_stv</div>
                </div>
                {/* gradient + caption */}
                <div className="absolute inset-x-0 bottom-0 p-4 pt-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
                  <p className="text-white text-sm font-medium leading-snug drop-shadow">
                    {r.text}
                  </p>
                  <div className="mt-2 text-[11px] text-white/70">— {r.author}</div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-2 flex justify-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Перейти к сторис ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === active ? "w-8 bg-accent" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChefMenu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 relative order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-[var(--pistachio)]/30 rounded-[2rem] -rotate-3" />
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-[var(--shadow-card)] aspect-[3/4]">
              <img
                src={chef}
                alt="Шеф-повар Семён Найдёнов"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                <div className="text-xs uppercase tracking-wider opacity-80">Шеф-повар</div>
                <div className="font-display text-2xl">Семён Найдёнов</div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-3 order-1 md:order-2">
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Наш шеф-повар</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
            Новое меню от Семёна Найдёнова
          </h2>
          <div className="mt-6 space-y-4 text-foreground/90 text-lg">
            <p>
              С радостью представляем вам новое меню и его автора — нашего шеф-повара Семёна Найдёнова!
            </p>
            <p>
              Сочиняя новое меню, Семён решил расширить ассортимент горячих блюд и обновить полюбившиеся нашим гостям завтраки и сладкие блюда.
            </p>
            <p>
              Также мы дополнили витрину новыми десертами: от трендовых сладостей с дубайским шоколадом до классических чизкейков в авторском исполнении наших кондитеров.
            </p>
            <p className="text-primary font-medium">
              С нетерпением ждём, когда вы попробуете наши новые блюда и десерты!
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)]"
            >
              Открыть меню (PDF) ↗
            </a>
            <a
              href="#visit"
              className="inline-flex items-center rounded-full bg-card border border-border text-primary px-7 py-3.5 text-sm font-semibold hover:bg-background transition"
            >
              Как нас найти
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <img src={interior} alt="Интерьер кофейни Sweet Joy" loading="lazy" width={1280} height={900} className="rounded-3xl shadow-[var(--shadow-soft)] w-full object-cover aspect-[4/3]" />
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-accent font-semibold">Заходите</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary text-balance">
            В самом центре Ставрополя
          </h2>
          <div className="mt-8 space-y-5 text-foreground">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Адреса</div>
              <ul className="mt-2 space-y-1.5 text-lg">
                <li>ул. Маршала Жукова, 30</li>
                <li>просп. Октябрьской Революции, 20</li>
                <li>ул. Маргелова, 9/1</li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Часы работы</div>
              <div className="mt-1 text-lg">Ежедневно · 10:00 — 22:00</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Телефон</div>
              <a href="tel:+79187778219" className="mt-1 text-lg block hover:text-accent transition">+7 (918) 777-82-19</a>
            </div>
          </div>
          <details className="mt-8 group relative inline-block">
            <summary className="list-none cursor-pointer inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-semibold hover:opacity-90 transition shadow-[var(--shadow-soft)] [&::-webkit-details-marker]:hidden">
              Построить маршрут
              <span className="transition-transform group-open:rotate-180">▾</span>
            </summary>
            <div className="absolute left-0 mt-2 z-20 min-w-[280px] rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] overflow-hidden">
              {[
                { label: "ул. Маршала Жукова, 30", q: "Ставрополь, ул. Маршала Жукова, 30" },
                { label: "просп. Октябрьской Революции, 20", q: "Ставрополь, просп. Октябрьской Революции, 20" },
                { label: "ул. Маргелова, 9/1", q: "Ставрополь, ул. Маргелова, 9/1" },
              ].map((a) => (
                <a
                  key={a.label}
                  href={`https://yandex.ru/maps/?text=${encodeURIComponent(a.q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-5 py-3 text-sm text-foreground hover:bg-secondary transition border-b border-border last:border-b-0"
                >
                  {a.label} →
                </a>
              ))}
            </div>
          </details>
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
          <img src={logo} alt="Sweet Joy Cafe" className="h-auto w-[200px]" style={{ filter: "brightness(0) invert(1)" }} />
          <p className="mt-4 text-sm opacity-80">Кофейни и кондитерские в центре Ставрополя. С любовью к каждому кусочку.</p>
        </div>
        <div className="text-sm space-y-2 opacity-90">
          <div className="font-semibold mb-3 opacity-100">Навигация</div>
          <a href="#cakes" className="block hover:text-accent transition">Витрина тортов</a>
          <a href="#order" className="block hover:text-accent transition">Торт на заказ</a>
          <a href="#reviews" className="block hover:text-accent transition">Отзывы</a>
          <a href="/menu.pdf" target="_blank" rel="noopener noreferrer" className="block hover:text-accent transition">Меню (PDF)</a>
        </div>
        <div className="text-sm space-y-2 opacity-90">
          <div className="font-semibold mb-3 opacity-100">Контакты</div>
          <div>ул. Маршала Жукова, 30</div>
          <div>просп. Октябрьской Революции, 20</div>
          <div>ул. Маргелова, 9/1</div>
          <div className="opacity-70">Ставрополь</div>
          <div>Ежедневно 10:00 — 22:00</div>
          <a href="tel:+79187778219" className="block hover:text-accent transition">+7 (918) 777-82-19</a>
          <div className="flex items-center gap-4 pt-4">
            <a href="https://wa.me/79187778219" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-primary-foreground hover:text-accent transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413"/></svg>
            </a>
            <a href="https://t.me/sweetjoycafe" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-primary-foreground hover:text-accent transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0m4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024q-.16.036-5.061 3.345-.72.495-1.302.48c-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789q.04-.323.893-.661 5.247-2.286 6.998-3.014c3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="https://vk.com/sweetjoycafe" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте" className="text-primary-foreground hover:text-accent transition">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2m3.07 14.27h-1.45c-.55 0-.72-.44-1.7-1.43-.86-.83-1.23-.94-1.45-.94-.3 0-.39.09-.39.5v1.31c0 .35-.11.56-1.03.56-1.52 0-3.2-.92-4.38-2.63-1.78-2.5-2.27-4.38-2.27-4.77 0-.21.09-.41.5-.41h1.45c.37 0 .51.17.65.56.71 2.07 1.91 3.88 2.4 3.88.19 0 .27-.09.27-.55V10.2c-.06-.99-.58-1.07-.58-1.42 0-.17.14-.34.36-.34h2.28c.3 0 .41.16.41.52v3.07c0 .31.14.42.22.42.19 0 .35-.11.71-.47 1.1-1.23 1.88-3.13 1.88-3.13.1-.22.28-.42.65-.42h1.45c.44 0 .53.22.44.52-.18.84-1.95 3.34-1.95 3.34-.15.25-.21.36 0 .64.15.21.65.64.99 1.03.62.7 1.09 1.29 1.22 1.69.13.41-.07.62-.48.62"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs opacity-60">
        © {new Date().getFullYear()} Sweet Joy. Все торты съедены с любовью.
      </div>
    </footer>
  );
}
