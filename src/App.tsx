import {
  ArrowRight,
  BadgeCheck,
  Box,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ChevronDown,
  Gauge,
  HardHat,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Warehouse,
  X,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, ReactNode, useEffect, useMemo, useState } from "react";
import {
  ApplicationGroup,
  Product,
  applications,
  benefits,
  categoryCards,
  company,
  customers,
  gallery,
  industries,
  job,
  products,
  whatsappQuote,
} from "./data";

type Page = "home" | "about" | "products" | "applications" | "careers" | "contact" | "product";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Applications", href: "/applications" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const iconMap = [PackageCheck, ShieldCheck, HardHat, Truck, Gauge, BadgeCheck];

function getRoute(pathname: string): { page: Page; productSlug?: string } {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean.startsWith("/products/")) return { page: "product", productSlug: clean.replace("/products/", "") };
  if (clean === "/about") return { page: "about" };
  if (clean === "/products") return { page: "products" };
  if (clean === "/applications") return { page: "applications" };
  if (clean === "/careers") return { page: "careers" };
  if (clean === "/contact") return { page: "contact" };
  return { page: "home" };
}

function navigate(href: string) {
  window.history.pushState(null, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function useRoute() {
  const [route, setRoute] = useState(() => getRoute(window.location.pathname));
  useEffect(() => {
    const onPop = () => setRoute(getRoute(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return route;
}

function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute("content", description);
  }, [title, description]);
  return null;
}

function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost" | "whatsapp";
  className?: string;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-ember text-charcoal shadow-lg shadow-amber-500/20 hover:bg-yellow-300",
    secondary: "border border-white/25 bg-white/10 text-white backdrop-blur hover:bg-white/15",
    dark: "bg-charcoal text-white hover:bg-graphite",
    ghost: "border border-slate-200 bg-white text-charcoal hover:border-ember hover:bg-amber-50",
    whatsapp: "bg-[#25D366] text-white shadow-lg shadow-emerald-500/20 hover:bg-[#1ebe5d] focus:ring-[#25D366]",
  };

  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const props = isExternal
    ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: href.startsWith("http") ? "noreferrer" : undefined }
    : { href, onClick: (event: React.MouseEvent<HTMLAnchorElement>) => (event.preventDefault(), navigate(href)) };

  return (
    <a className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}

function Section({
  eyebrow,
  title,
  text,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  text?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-20 sm:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || text) && (
          <div className="mb-10 max-w-3xl">
            {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-safety">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold tracking-normal text-charcoal sm:text-4xl">{title}</h2>}
            {text && <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">{text}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function TimelineReveal({ children, index = 0, className = "" }: { children: ReactNode; index?: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ filter: "blur(10px)", opacity: 0, y: -20 }}
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      transition={{ delay: index * 0.14, duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const frames = 48;
    const timer = window.setInterval(() => {
      frame += 1;
      setDisplay(Math.round((value * frame) / frames));
      if (frame >= frames) window.clearInterval(timer);
    }, 24);
    return () => window.clearInterval(timer);
  }, [reduceMotion, value]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

function Header({ page }: { page: Page }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const homeTop = page === "home" && !compact;

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 transition duration-300 ${
        homeTop
          ? "top-2 border-transparent bg-transparent py-0"
          : compact
            ? "top-0 border-b border-slate-200 bg-white/95 py-2 shadow-sm backdrop-blur"
            : "top-0 border-b border-white/10 bg-charcoal/75 py-4 backdrop-blur"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition ${
          homeTop
            ? "max-w-5xl rounded-lg border border-slate-200/70 bg-white/75 p-1 px-2 shadow-sm backdrop-blur-2xl sm:px-3"
            : "max-w-7xl px-4 sm:px-6 lg:px-8"
        }`}
      >
        <a
          href="/"
          className={`flex items-center gap-3 ${homeTop ? "rounded-md bg-white/60 p-2" : ""}`}
          onClick={(event) => {
            event.preventDefault();
            navigate("/");
            setOpen(false);
          }}
        >
          <img src={company.logo} alt="Aarvi Industrial Materials logo" className="h-[72px] w-auto bg-white object-contain p-1" />
          <span className={`hidden text-sm font-bold uppercase tracking-[0.14em] sm:block ${compact || homeTop ? "text-charcoal" : "text-white"}`}>
            Aarvi
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {nav.map((item) => {
            const active = page === "product" ? item.href === "/products" : item.href === `/${page}` || (page === "home" && item.href === "/");
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.href);
                }}
                className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  active
                    ? compact || homeTop
                      ? "bg-charcoal text-white"
                      : "bg-white/15 text-white"
                    : compact || homeTop
                      ? "text-slate-700 hover:bg-slate-100"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LinkButton href={whatsappQuote} variant="whatsapp" className="px-4 py-2">
            <Phone className="h-4 w-4" />
            WhatsApp
          </LinkButton>
          <LinkButton href="/contact" variant="primary" className="px-4 py-2">
            <ArrowRight className="h-4 w-4" />
            Get Quote
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Open navigation menu"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-lg border lg:hidden ${
            compact || homeTop ? "border-slate-200 text-charcoal" : "border-white/20 text-white"
          }`}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-3 border border-slate-200 bg-white p-3 shadow-industrial lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-3 text-sm font-semibold text-charcoal hover:bg-amber-50"
              onClick={(event) => {
                event.preventDefault();
                navigate(item.href);
                setOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 grid gap-2">
            <LinkButton href="/contact" variant="dark">
              <ArrowRight className="h-4 w-4" />
              Get Quote
            </LinkButton>
            <LinkButton href={whatsappQuote} variant="whatsapp">
              <Phone className="h-4 w-4" />
              WhatsApp
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Reveal className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
      <img src={product.image} alt={`${product.name} product image`} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-safety">{product.category}</p>
        <h3 className="mt-2 text-xl font-bold text-charcoal">{product.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">{product.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-700">
          {product.specs.slice(0, 3).map((spec) => (
            <li key={spec} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{spec}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <LinkButton href={`/products/${product.slug}`} variant="ghost" className="px-4 py-2">
            View Details
            <ArrowRight className="h-4 w-4" />
          </LinkButton>
          <LinkButton href="/contact" variant="dark" className="px-4 py-2">
            Get Quote
          </LinkButton>
        </div>
      </div>
    </Reveal>
  );
}

function HomePage() {
  const heroPreviewCards = categoryCards.slice(0, 3);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const productsByCategory = useMemo(() => {
    const grouped = new Map<string, Product[]>();
    products.forEach((product) => {
      const list = grouped.get(product.category) || [];
      list.push(product);
      grouped.set(product.category, list);
    });
    return grouped;
  }, []);
  const heroStats = [
    { icon: Warehouse, value: company.warehouse, label: "ready Bangalore stock" },
    { icon: BadgeCheck, value: `${company.experience} years`, label: "insulation experience" },
    { icon: Building2, value: company.established, label: "established supply partner" },
    { icon: Truck, value: "B2B", label: "industrial project supply" },
  ];

  return (
    <>
      <Seo
        title="Aarvi Industrial Materials | Industrial & Commercial Insulation Materials"
        description="Bangalore-based stockist and distributor of thermal insulation, refractories, passive fire protection, and ancillary insulation materials."
      />
      <section className="relative overflow-hidden bg-white pt-20 text-charcoal sm:pt-24">
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/70 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:px-6 sm:pt-12 lg:px-8">
          <article className="mx-auto max-w-5xl text-center">
            <TimelineReveal
              index={0}
              className="inline-flex max-w-full items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm sm:text-sm"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-ember" />
              <span className="min-w-0 break-words">Ready stock in Bangalore for insulation and fire protection projects</span>
            </TimelineReveal>

            <TimelineReveal index={1}>
              <h1 className="mx-auto mt-5 max-w-5xl text-[34px] font-bold leading-tight tracking-normal text-charcoal sm:text-6xl">
                Industrial & Commercial{" "}
                <span className="bg-gradient-to-r from-charcoal via-safety to-ember bg-clip-text text-transparent">Insulation Materials</span>,
                Supplied Reliably
              </h1>
            </TimelineReveal>

            <TimelineReveal index={2}>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                {company.name} is a Bangalore-based stockist and distributor of thermal insulation, refractories, passive fire protection,
                and ancillary insulation materials.
              </p>
            </TimelineReveal>

            <TimelineReveal index={3} className="mt-7 flex flex-wrap justify-center gap-2.5">
              <LinkButton href="/contact" variant="dark">
                <ArrowRight className="h-4 w-4" />
                Get Best Quote
              </LinkButton>
              <LinkButton href="/products" variant="ghost">
                <Box className="h-4 w-4" />
                Explore Products
              </LinkButton>
              <LinkButton href={whatsappQuote} variant="whatsapp">
                <Phone className="h-4 w-4" />
                WhatsApp
              </LinkButton>
            </TimelineReveal>

            <TimelineReveal index={4} className="mx-auto mt-6 hidden max-w-4xl flex-wrap justify-center gap-2 sm:flex">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <span
                    key={stat.label}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-left text-xs font-semibold text-slate-700 shadow-sm sm:text-sm"
                  >
                    <Icon className="h-4 w-4 shrink-0 text-safety" />
                    <span className="text-charcoal">{stat.value}</span>
                    <span className="text-slate-500">{stat.label}</span>
                  </span>
                );
              })}
            </TimelineReveal>
          </article>

          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3">
            {heroPreviewCards.map((category, index) => {
              const href = `/products?category=${encodeURIComponent(category.name)}`;
              return (
                <TimelineReveal key={category.name} index={5 + index} className="min-w-0">
                  <a
                    href={href}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(href);
                    }}
                    className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-industrial md:aspect-[16/9]"
                  >
                    <img
                      src={category.image}
                      alt={`${category.name} product category`}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-charcoal/90 via-charcoal/55 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-4">
                      <span className="min-w-0 text-left text-xs font-semibold leading-5 text-white sm:text-sm">{category.name.replace(", NBR", "")}</span>
                      <span className="hidden shrink-0 rounded-md bg-white/15 px-2 py-1 text-[11px] font-semibold text-white backdrop-blur sm:inline-flex">
                        View
                      </span>
                    </div>
                  </a>
                </TimelineReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Section className="pt-14 sm:pt-16" eyebrow="Product Range" title="Core insulation and fire protection categories">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((category) => {
            const categoryProducts = productsByCategory.get(category.name) || [];
            const isOpen = openCategory === category.name;
            const dropdownId = `home-products-${category.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

            return (
              <Reveal key={category.name} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-industrial">
                <img src={category.image} alt={`${category.name} product category`} loading="lazy" className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-charcoal">{category.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{category.description}</p>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={dropdownId}
                    className="mt-5 flex w-full items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-semibold text-charcoal transition hover:border-ember hover:bg-amber-50"
                    onClick={() => setOpenCategory((current) => (current === category.name ? null : category.name))}
                  >
                    <span>{categoryProducts.length} products</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition ${isOpen ? "rotate-180 text-safety" : "text-slate-500"}`} />
                  </button>

                  {isOpen && (
                    <motion.div
                      id={dropdownId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-3 divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white">
                        {categoryProducts.map((product) => (
                          <li key={product.slug}>
                            <a
                              href={`/products/${product.slug}`}
                              className="flex items-center justify-between gap-3 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-amber-50 hover:text-safety"
                              onClick={(event) => {
                                event.preventDefault();
                                navigate(`/products/${product.slug}`);
                              }}
                            >
                              <span className="min-w-0">{product.name}</span>
                              <ArrowRight className="h-4 w-4 shrink-0" />
                            </a>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <LinkButton href={`/products?category=${encodeURIComponent(category.name)}`} variant="ghost" className="mt-4 px-4 py-2">
                    View Category
                    <ArrowRight className="h-4 w-4" />
                  </LinkButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-linen" eyebrow="Why Choose Aarvi" title="Built for dependable industrial supply">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[index] || BadgeCheck;
            return (
              <Reveal key={benefit} className="rounded-lg border border-amber-200/70 bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-safety" />
                <h3 className="mt-5 text-xl font-bold text-charcoal">{benefit}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Practical procurement support, dependable stock access, and technically aware guidance for project-driven insulation needs.
                </p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        eyebrow="Applications"
        title="Materials for building, HVAC, industrial, refractory, and fire protection work"
        text="Aarvi supplies insulation materials used across commercial buildings, process industries, HVAC systems, furnaces, and structural fire protection."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {applications.map((app) => (
            <ApplicationMini key={app.name} app={app} />
          ))}
        </div>
      </Section>

      <section className="overflow-hidden bg-charcoal py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ember">Product Showcase</p>
              <h2 className="text-3xl font-bold tracking-normal sm:text-4xl">Workbook product visuals, arranged for quick scanning</h2>
            </div>
            <LinkButton href="/products" variant="secondary">
              Open Catalog
              <ArrowRight className="h-4 w-4" />
            </LinkButton>
          </div>
          <div className="scrollbar-none flex snap-x gap-5 overflow-x-auto pb-4">
            {gallery.map((item) => (
              <figure key={item.label} className="group relative h-72 w-72 shrink-0 snap-start overflow-hidden rounded-lg bg-white/10">
                <img src={item.image} alt={item.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-sm font-semibold">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-linen" eyebrow="Industries Served" title="A broad materials range for serious project environments">
        <div className="flex flex-wrap gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
              {industry}
            </span>
          ))}
        </div>
      </Section>

      <QuoteBand />
    </>
  );
}

function ApplicationMini({ app }: { app: ApplicationGroup }) {
  return (
    <Reveal className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
      <img src={app.image} alt={`${app.name} application`} loading="lazy" className="h-36 w-full object-cover" />
      <div className="p-5">
        <h3 className="text-lg font-bold text-charcoal">{app.name}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{app.summary}</p>
      </div>
    </Reveal>
  );
}

function AboutPage() {
  return (
    <>
      <Seo
        title="About Aarvi Industrial Materials | Bangalore Insulation Supplier"
        description="Company profile for Aarvi Industrial Materials, a Bangalore-based insulation materials stockist, distributor, supplier, trader, and exporter established in 2015."
      />
      <PageHero
        title="Aarvi Industrial Materials"
        eyebrow="Company Profile"
        text="A reliable Bangalore-based supplier of industrial and commercial insulation materials, backed by more than 20 years of insulation industry experience."
        image="/assets/workbook/building-ins-08-r084-c006.png"
      />
      <Section eyebrow="Overview" title="Stockist, distributor, supplier, trader, and exporter">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="space-y-5 text-base leading-8 text-slate-650">
            <p>
              Aarvi Industrial Materials stocks and supplies a wide range of industrial and commercial insulation products for construction,
              HVAC, process industry, refractory, and passive fire protection requirements.
            </p>
            <p>
              The company operates from a permanent, company-owned warehouse in Bangalore, allowing customers to access materials quickly and
              receive practical product guidance for specific project needs.
            </p>
            <p>
              Aarvi sources insulation materials from reliable vendors and supports customers with economical pricing, timely deliveries, and
              long-term relationship-focused service.
            </p>
          </Reveal>
          <Reveal className="grid gap-4 sm:grid-cols-2">
            {[
              ["Established", company.established],
              ["Industry experience", `${company.experience} years`],
              ["Warehouse", company.warehouse],
              ["GST", company.gst],
              ["Employees", "5-10 people"],
              ["Legal status", "Sole proprietorship firm"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-500">{label}</p>
                <p className="mt-2 text-xl font-bold text-charcoal">{value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </Section>

      <Section className="bg-linen" eyebrow="Infrastructure" title="Ready stock and practical technical support">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Permanent warehouse", "A company-owned warehouse of approximately 5000 sq. ft. supports ready availability and faster servicing."],
            ["Experienced leadership", "The business is led by Ravikumar H with more than two decades of insulation industry exposure."],
            ["Vendor network", "Materials are procured from trusted vendors to support product quality, availability, and economical pricing."],
          ].map(([title, text]) => (
            <Reveal key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-charcoal">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Customers" title="Supplying established industrial customers and sectors">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <h3 className="text-2xl font-bold text-charcoal">Customer examples</h3>
            <ul className="mt-5 space-y-3">
              {customers.map((customer) => (
                <li key={customer} className="flex gap-3 text-slate-700">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-safety" />
                  <span>{customer}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal>
            <h3 className="text-2xl font-bold text-charcoal">Products handled</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {categoryCards.map((category) => (
                <span key={category.name} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {category.name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <QuoteBand />
    </>
  );
}

function ProductsPage() {
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get("category") || "All";
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(initialCategory);
  const [application, setApplication] = useState("All");
  const [openProductCategory, setOpenProductCategory] = useState<string | null>(initialCategory === "All" ? null : initialCategory);
  const productsByCategory = useMemo(() => {
    const grouped = new Map<string, Product[]>();
    products.forEach((product) => {
      const list = grouped.get(product.category) || [];
      list.push(product);
      grouped.set(product.category, list);
    });
    return grouped;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.description.toLowerCase().includes(q) ||
        product.specs.join(" ").toLowerCase().includes(q);
      const matchesCategory = category === "All" || product.category === category;
      const matchesApplication = application === "All" || product.applications.some((item) => item.toLowerCase().includes(application.toLowerCase()));
      return matchesQuery && matchesCategory && matchesApplication;
    });
  }, [application, category, query]);

  const appFilters = ["All", "Building", "HVAC", "Industrial", "Fire", "Refractory", "Pipe", "Acoustic"];

  return (
    <>
      <Seo
        title="Products | Aarvi Industrial Materials"
        description="Searchable insulation materials catalog for rockwool, glasswool, nitrile rubber insulation, XLPE foam, ceramic fiber, refractory materials, passive fire protection, and ancillary materials."
      />
      <PageHero
        title="Product Catalog"
        eyebrow="Quotation-Based B2B Supply"
        text="Search product categories, review key specifications, and request a quote for project-ready insulation materials."
        image="/assets/workbook/home-page-11-r016-c049.png"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <aside className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-safety">Categories</p>
                <h2 className="mt-1 text-lg font-bold text-charcoal">Product Browser</h2>
              </div>
              <button
                type="button"
                className={`rounded-lg border px-3 py-2 text-xs font-bold transition ${
                  category === "All" ? "border-charcoal bg-charcoal text-white" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
                onClick={() => {
                  setCategory("All");
                  setOpenProductCategory(null);
                }}
              >
                All
              </button>
            </div>

            <div className="space-y-2">
              {categoryCards.map((item) => {
                const categoryProducts = productsByCategory.get(item.name) || [];
                const isOpen = openProductCategory === item.name;
                const isActive = category === item.name;
                const dropdownId = `products-sidebar-${item.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`;

                return (
                  <div key={item.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={dropdownId}
                      className={`flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm font-bold transition ${
                        isActive ? "bg-amber-50 text-safety" : "text-charcoal hover:bg-slate-50"
                      }`}
                      onClick={() => {
                        setCategory(item.name);
                        setOpenProductCategory((current) => (current === item.name ? null : item.name));
                      }}
                    >
                      <span className="min-w-0">{item.name}</span>
                      <span className="flex shrink-0 items-center gap-2 text-xs text-slate-500">
                        {categoryProducts.length}
                        <ChevronDown className={`h-4 w-4 transition ${isOpen ? "rotate-180 text-safety" : ""}`} />
                      </span>
                    </button>

                    {isOpen && (
                      <motion.div
                        id={dropdownId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden border-t border-slate-100 bg-slate-50"
                      >
                        <ul className="py-2">
                          {categoryProducts.map((product) => (
                            <li key={product.slug}>
                              <a
                                href={`/products/${product.slug}`}
                                className="flex items-center justify-between gap-3 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-safety"
                                onClick={(event) => {
                                  event.preventDefault();
                                  navigate(`/products/${product.slug}`);
                                }}
                              >
                                <span className="min-w-0">{product.name}</span>
                                <ArrowRight className="h-4 w-4 shrink-0" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <div className="mb-8 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm lg:grid-cols-[1.2fr_0.9fr_0.9fr]">
              <label className="relative block">
                <span className="sr-only">Search products</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="h-12 w-full rounded-lg border border-slate-200 pl-12 pr-4 text-sm outline-none focus:border-ember focus:ring-2 focus:ring-amber-200"
                  placeholder="Search products, specs, or materials"
                />
              </label>
              <label className="relative block">
                <span className="sr-only">Filter by category</span>
                <select
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                    setOpenProductCategory(event.target.value === "All" ? null : event.target.value);
                  }}
                  className="h-12 w-full appearance-none rounded-lg border border-slate-200 px-4 pr-10 text-sm outline-none focus:border-ember focus:ring-2 focus:ring-amber-200"
                >
                  <option>All</option>
                  {categoryCards.map((item) => (
                    <option key={item.name}>{item.name}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </label>
              <label className="relative block">
                <span className="sr-only">Filter by application</span>
                <select
                  value={application}
                  onChange={(event) => setApplication(event.target.value)}
                  className="h-12 w-full appearance-none rounded-lg border border-slate-200 px-4 pr-10 text-sm outline-none focus:border-ember focus:ring-2 focus:ring-amber-200"
                >
                  {appFilters.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              </label>
            </div>
            <div className="mb-6 text-sm font-semibold text-slate-600">{filtered.length} products shown</div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
          </div>
        </div>
      </Section>
      <QuoteBand />
    </>
  );
}

function ProductDetailPage({ product }: { product?: Product }) {
  if (!product) {
    return (
      <>
        <Seo title="Product Not Found | Aarvi Industrial Materials" description="The requested product could not be found." />
        <PageHero title="Product Not Found" eyebrow="Catalog" text="The requested product is not available in the current catalog." image="/assets/workbook/home-page-13-r081-c001.jpeg" />
        <Section>
          <LinkButton href="/products" variant="dark">
            <ArrowRight className="h-4 w-4" />
            Back to Products
          </LinkButton>
        </Section>
      </>
    );
  }

  const related = products.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Seo title={`${product.name} | Aarvi Industrial Materials`} description={`${product.name} from Aarvi Industrial Materials. ${product.description}`} />
      <section className="bg-charcoal pt-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-ember">{product.category}</p>
            <h1 className="text-4xl font-bold tracking-normal sm:text-6xl">{product.name}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-100">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/contact" variant="primary">
                <ArrowRight className="h-4 w-4" />
                Request Quote
              </LinkButton>
              <LinkButton href={whatsappQuote} variant="whatsapp">
                <Phone className="h-4 w-4" />
                WhatsApp Now
              </LinkButton>
            </div>
          </div>
          <img src={product.image} alt={`${product.name} supplied by Aarvi Industrial Materials`} className="h-full max-h-[440px] w-full rounded-lg object-cover shadow-industrial" />
        </div>
      </section>
      <Section eyebrow="Specifications" title="Key details from the product source">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <li key={spec} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="rounded-lg bg-linen p-6">
            <h2 className="text-2xl font-bold text-charcoal">Applications</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {product.applications.map((app) => (
                <span key={app} className="rounded-lg border border-amber-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">
                  {app}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>
      {related.length > 0 && (
        <Section className="bg-linen" eyebrow="Related Products" title={`More from ${product.category}`}>
          <div className="grid gap-6 md:grid-cols-3">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </Section>
      )}
      <QuoteBand />
    </>
  );
}

function ApplicationsPage() {
  return (
    <>
      <Seo
        title="Applications | Aarvi Industrial Materials"
        description="Application areas for Aarvi insulation materials, including building insulation, HVAC insulation, industrial insulation, refractory lining, and passive fire protection."
      />
      <PageHero
        title="Applications"
        eyebrow="Where Materials Are Used"
        text="Thermal, acoustic, refractory, and passive fire protection materials for buildings, HVAC systems, industrial equipment, piping, and structural fire safety."
        image="/assets/workbook/building-ins-07-r072-c005.jpeg"
      />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {applications.map((app) => (
            <Reveal key={app.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <img src={app.image} alt={`${app.name} visual`} loading="lazy" className="h-64 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-charcoal">{app.name}</h2>
                <p className="mt-3 text-base leading-8 text-slate-600">{app.summary}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {app.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section
        className="bg-linen"
        eyebrow="Building Insulation Benefits"
        title="Comfort, heat control, and sound reduction"
        text="The building insulation content in the workbook emphasizes reducing solar heat penetration, reducing rainfall noise from metal roofs, improving comfort, reducing heat loss through walls, and lowering sound transmission between spaces."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {["Thermal and acoustic protection", "Reduced rainfall noise and drumming", "Improved building comfort"].map((item) => (
            <Reveal key={item} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <Sparkles className="h-7 w-7 text-safety" />
              <h3 className="mt-4 text-lg font-bold text-charcoal">{item}</h3>
            </Reveal>
          ))}
        </div>
      </Section>
      <QuoteBand />
    </>
  );
}

function CareersPage() {
  return (
    <>
      <Seo
        title="Careers | Aarvi Industrial Materials"
        description="Current opening at Aarvi Industrial Materials: Sales Executive, Outdoor in Bangalore."
      />
      <PageHero
        title="Careers"
        eyebrow="Current Opening"
        text="Join Aarvi Industrial Materials in an outdoor sales role focused on customers, quotes, orders, and long-term relationships."
        image="/assets/workbook/building-ins-05-r037-c010.jpeg"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <BriefcaseBusiness className="h-10 w-10 text-safety" />
            <h2 className="mt-5 text-3xl font-bold text-charcoal">{job.position}</h2>
            <dl className="mt-6 grid gap-4 text-sm">
              {[
                ["Location", job.location],
                ["Qualification", job.qualification],
                ["Experience", job.experience],
                ["Salary", job.salary],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <dt className="font-semibold text-slate-500">{label}</dt>
                  <dd className="text-right font-bold text-charcoal">{value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-6 text-lg font-bold text-charcoal">Responsibilities</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-700">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <ApplyForm />
        </div>
      </Section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact Aarvi Industrial Materials | Request Insulation Quote"
        description="Contact Aarvi Industrial Materials in Bangalore for insulation materials, passive fire protection, refractory materials, and ancillary insulation products."
      />
      <PageHero
        title="Contact & Quote Request"
        eyebrow="Bangalore, Karnataka"
        text="Share your product requirement, quantity, and application. The Aarvi team will help you choose the right insulation material."
        image="/assets/workbook/home-page-03-r017-c006.jpeg"
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-5">
            <ContactInfo />
            <div className="rounded-lg border border-slate-200 bg-linen p-6">
              <h2 className="text-xl font-bold text-charcoal">Google Maps</h2>
              <div className="mt-4 flex min-h-64 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center text-sm font-semibold text-slate-600">
                <MapPin className="mr-2 h-5 w-5 text-safety" />
                {company.address}
              </div>
            </div>
          </Reveal>
          <QuoteForm />
        </div>
      </Section>
    </>
  );
}

function ContactInfo() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-charcoal">{company.name}</h2>
      <div className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
        <p className="flex gap-3">
          <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-safety" />
          <span>{company.contactPerson}</span>
        </p>
        <p className="flex gap-3">
          <MapPin className="mt-1 h-5 w-5 shrink-0 text-safety" />
          <span>{company.address}</span>
        </p>
        <a className="flex gap-3 hover:text-safety" href={`tel:${company.phonePlain}`}>
          <Phone className="mt-1 h-5 w-5 shrink-0 text-safety" />
          <span>{company.phone}</span>
        </a>
        <a className="flex gap-3 hover:text-safety" href={`mailto:${company.email}`}>
          <Mail className="mt-1 h-5 w-5 shrink-0 text-safety" />
          <span>{company.email}</span>
        </a>
        <p className="flex gap-3">
          <Building2 className="mt-1 h-5 w-5 shrink-0 text-safety" />
          <span>GST: {company.gst}</span>
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <LinkButton href={whatsappQuote} variant="whatsapp">
          <Phone className="h-4 w-4" />
          WhatsApp
        </LinkButton>
        <LinkButton href={`mailto:${company.email}`} variant="ghost">
          <Mail className="h-4 w-4" />
          Email
        </LinkButton>
      </div>
    </div>
  );
}

function ApplyForm() {
  return (
    <Reveal className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-charcoal">Apply Now</h2>
      <form className="mt-6 grid gap-4" onSubmit={handleFormSubmit}>
        <TextInput label="Name" name="name" required />
        <TextInput label="Phone" name="phone" type="tel" pattern="[0-9 +()-]{8,}" required />
        <TextInput label="Email" name="email" type="email" required />
        <TextInput label="Experience" name="experience" placeholder="Example: 4 years in outdoor sales" />
        <label className="block">
          <span className="text-sm font-semibold text-charcoal">Resume upload</span>
          <input
            type="file"
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-charcoal file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
          />
        </label>
        <TextArea label="Message" name="message" />
        <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-charcoal px-5 py-3 text-sm font-semibold text-white transition hover:bg-graphite focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2">
          <ArrowRight className="h-4 w-4" />
          Send Application
        </button>
      </form>
    </Reveal>
  );
}

function QuoteForm() {
  return (
    <Reveal className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-charcoal">Request a Quote</h2>
      <form className="mt-6 grid gap-4" onSubmit={handleFormSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <TextInput label="Name" name="name" required />
          <TextInput label="Phone" name="phone" type="tel" pattern="[0-9 +()-]{8,}" required />
        </div>
        <TextInput label="Email" name="email" type="email" required />
        <div className="grid gap-4 sm:grid-cols-2">
          <SelectInput label="Product" name="product" options={products.map((product) => product.name)} />
          <SelectInput label="Application" name="application" options={applications.map((app) => app.name)} />
        </div>
        <TextArea label="Quantity / Requirement" name="requirement" required />
        <TextArea label="Message" name="message" />
        <div className="flex flex-wrap gap-3">
          <button className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-charcoal px-5 py-3 text-sm font-semibold text-white transition hover:bg-graphite focus:outline-none focus:ring-2 focus:ring-ember focus:ring-offset-2">
            <ArrowRight className="h-4 w-4" />
            Submit Request
          </button>
          <LinkButton href={whatsappQuote} variant="whatsapp">
            <Phone className="h-4 w-4" />
            WhatsApp Now
          </LinkButton>
        </div>
      </form>
    </Reveal>
  );
}

function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form = event.currentTarget;
  form.reportValidity();
}

function TextInput({
  label,
  name,
  type = "text",
  pattern,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  pattern?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-charcoal">{label}</span>
      <input
        name={name}
        type={type}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        className="mt-2 h-12 w-full rounded-lg border border-slate-200 px-4 text-sm outline-none focus:border-ember focus:ring-2 focus:ring-amber-200"
      />
    </label>
  );
}

function TextArea({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-charcoal">{label}</span>
      <textarea
        name={name}
        required={required}
        rows={4}
        className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none focus:border-ember focus:ring-2 focus:ring-amber-200"
      />
    </label>
  );
}

function SelectInput({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="relative block">
      <span className="text-sm font-semibold text-charcoal">{label}</span>
      <select
        name={name}
        className="mt-2 h-12 w-full appearance-none rounded-lg border border-slate-200 px-4 pr-10 text-sm outline-none focus:border-ember focus:ring-2 focus:ring-amber-200"
      >
        <option value="">Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 text-slate-400" />
    </label>
  );
}

function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-charcoal pt-24 text-white">
      <div className="absolute inset-0 opacity-35" style={{ backgroundImage: `url('${image}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/85 to-charcoal/45" />
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-ember sm:text-sm">{eyebrow}</p>
        <h1 className="max-w-4xl text-3xl font-bold tracking-normal sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">{text}</p>
      </div>
    </section>
  );
}

function QuoteBand() {
  return (
    <section className="bg-safety py-16 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-normal">Need insulation materials for your project?</h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-red-50">Share your requirement and our team will help you choose the right material.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <LinkButton href={whatsappQuote} variant="whatsapp">
            <Phone className="h-4 w-4" />
            WhatsApp Now
          </LinkButton>
          <LinkButton href="/contact" variant="primary">
            <ArrowRight className="h-4 w-4" />
            Request a Quote
          </LinkButton>
          <LinkButton href={`tel:${company.phonePlain}`} variant="secondary">
            Call {company.phone}
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={company.logo} alt="Aarvi Industrial Materials logo" className="h-20 w-auto bg-white object-contain p-1" />
          <p className="mt-5 text-sm leading-7 text-slate-300">{company.tagline}. Based in Bangalore, India.</p>
          <LinkButton href={whatsappQuote} variant="whatsapp" className="mt-5 px-4 py-2">
            <Phone className="h-4 w-4" />
            WhatsApp CTA
          </LinkButton>
        </div>
        <FooterList title="Quick Links" items={nav.map((item) => item.label)} links={nav.map((item) => item.href)} />
        <FooterList title="Product Categories" items={categoryCards.map((item) => item.name)} links={categoryCards.map(() => "/products")} />
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ember">Contact</h3>
          <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
            <p>{company.address}</p>
            <p>{company.phone}</p>
            <p>{company.email}</p>
            <p>GST: {company.gst}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-slate-400">
        © Aarvi Industrial Materials. All rights reserved.
      </div>
    </footer>
  );
}

function FooterList({ title, items, links }: { title: string; items: string[]; links: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-ember">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>
            <a
              href={links[index]}
              className="text-sm text-slate-300 transition hover:text-white"
              onClick={(event) => {
                event.preventDefault();
                navigate(links[index]);
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Schema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    description: company.tagline,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "105/5, Bailappanapalya, Tumkur Road, Madavara",
      addressLocality: "Bangalore",
      postalCode: "560073",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    foundingDate: "2015",
    areaServed: "India",
  };
  const productSchema = products.slice(0, 12).map((product) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    category: product.category,
    description: product.description,
    image: product.image,
    brand: company.name,
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}

export function App() {
  const route = useRoute();
  const product = products.find((item) => item.slug === route.productSlug);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-charcoal">
      <Schema />
      <Header page={route.page} />
      <main>
        {route.page === "home" && <HomePage />}
        {route.page === "about" && <AboutPage />}
        {route.page === "products" && <ProductsPage />}
        {route.page === "applications" && <ApplicationsPage />}
        {route.page === "careers" && <CareersPage />}
        {route.page === "contact" && <ContactPage />}
        {route.page === "product" && <ProductDetailPage product={product} />}
      </main>
      <Footer />
    </div>
  );
}
