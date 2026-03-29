import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Menu,
  X,
  ArrowRight,
  ChefHat,
  Calendar,
  Activity,
  Clock,
  Scan,
  Zap,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Mail,
  Star,
  ChevronLeft,
  ChevronRight,
  Pizza,
  Flame,
  Utensils,
  Coffee,
  FileText,
  Download,
  CreditCard,
  Package,
  Bike,
  ShoppingBag,
  Info,
  Check
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Translations ---
const translations = {
  hr: {
    nav: { home: 'Početna', menu: 'Jelovnik', contact: 'Kontakt', book: 'Rezerviraj Stol' },
    hero: { line1: 'Kvarnerski gušti i', line2: 'Tradicija.', menuBtn: 'Pogledajte Jelovnik', bookBtn: 'Rezervirajte Stol' },
    details: { title: 'Naši Specijaliteti', subtitle: 'Okusi Tradicije' },
    why: {
      title: 'Standard kojem težimo',
      subtitle: 'Sve što vam treba za brzo, jednostavno i kvalitetno iskustvo.',
      cards: [
        { title: 'Kartično plaćanje', desc: 'Sve glavne kartice, Apple Pay i beskontaktno.' },
        { title: 'Brza Dostava', desc: 'Pouzdano na vašu adresu, svakim danom 10-22h.' },
        { title: 'Za ponijeti', desc: 'Naručite unaprijed i preuzmite bez čekanja.' },
        { title: 'Rezervacije', desc: 'Rezervirajte svoj stol u samo nekoliko klikova.' },
        { title: 'Užitak', desc: 'Ugodan ambijent i vrhunska usluga od 1988.' },
        { title: 'Kvaliteta', desc: 'Koristimo isključivo svježe i domaće namirnice.' }
      ],
      swipe: 'Prevucite za više'
    },
    footer: {
      location: 'ADRESA',
      hours: 'Radno Vrijeme',
      kitchen: 'Radno vrijeme kuhinje',
      everyday: 'SVAKI DAN:',
      nav: 'NAVIGACIJA',
      findUs: 'PRONAĐITE NAS',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      kitchenLabel: 'KUHINJA:',
      deliveryLabel: 'DOSTAVA:',
      weekendNote: '( Vikendom su moguće izmjene radnog vremena dostave )',
      rights: 'Sva prava zadržana.'
    },
    brandDesc: 'Čuvari tradicije i vrhunskog okusa. Naš stol je vaš dom od 1988. godine.',
    philosophy: {
      label: 'NAŠ MANIFESTO',
      intro: 'U svijetu brzih izbora i prolaznih trendova',
      introHigh: '',
      focus: 'Mi se fokusiramo na',
      highlight: 'Okuse',
      suffix: 'koji traju'
    },
    gallery: {
      label: 'NAŠI SPECIJALITETI',
      title: 'Okusi Tradicije',
      item1: 'Orada sa Žara',
      item2: 'Teletina Pod Pekom',
      item3: 'Losos sa Žara'
    },
    stack: [
      { num: "01", title: "Bogata Mesna Plata", desc: "Raskošna selekcija pilećih rolica, pljeskavica, ražnjića, ćevapa i lungića, poslužena s domaćim pekarskim krumpirom i grilanim povrćem." },
      { num: "02", title: "Legendarna BBQ Rebarca", desc: "Savršenstvo pečenja uz posebnu marinadu i meso koje se topi u ustima." },
      { num: "03", title: "Pfeffer Steak", desc: "Juneći ramstek u kremastom umaku od papra, poslužen sa krumpirićima." }
    ],
    contact: {
      header: 'Vaš Stol Vas Čeka',
      sub: 'Kontaktirajte nas za rezervacije, informacije ili organizaciju vaših najvažnijih trenutaka.',
      events: {
        title: 'Proslave & Domjenci',
        body: 'Planirate li poslovni događaj, krizmu, pričest ili svečanu promociju? Pizzeria EX nudi vam više od samog prostora – nudimo kompletno, bezbrižno iskustvo. Slažemo personalizirane premium menije prema vašim željama.',
        cta: 'Javite nam se za personaliziranu ponudu.'
      },
      form: {
        title: 'Pošaljite Upit',
        fname: 'Ime',
        lname: 'Prezime',
        email: 'Email adresa',
        phone: 'Broj telefona',
        type: 'Vrsta upita (odaberite)',
        opt1: 'Rezervacija Stola',
        opt2: 'Organizacija Proslave / Domjenka',
        opt3: 'Ostalo / Općenito',
        msg: 'Vaša poruka...',
        btn: 'Pošalji Upit'
      },
      map: {
        header: 'Kako do nas?',
        sub: 'Miroslava Krleže 11, 51000 Rijeka – U srcu Srdoča.',
        btn: 'Otvori u Google Maps'
      }
    },
    menuPage: {
      title1: 'Naš',
      title2: 'Jelovnik',
      desc: 'Izdvojeni izbor jela koja s ponosom preporučujemo svakom gostu.',
      chef: 'Preporuke Šefa Kuhinje',
      cat0: 'Posebna Ponuda',
      cat1: 'Naše Pizze',
      cat2: 'Jela s Roštilja',
      cat3: 'Doručak & Predjela',
      cat4: 'Plodovi Mora & Tjestenine',
      disclaimer: 'Ovo je izbor najpopularnijih jela iz naše bogate ponude.',
      pdfNote: 'Cjelokupnu ponudu pronađite u PDF jelovniku na dnu stranice.',
      full: 'Cjelokupni Jelovnik',
      fullDesc: 'Prelistajte našu potpunu ponudu u PDF izdanju.',
      btn: 'Preuzmi PDF',
      loading: 'Očitavanje cjelokupnog dokumenta...',
      items: {
        sp1_n: "Teletina Pod Pekom", sp1_d: "Vrhunska teletina polagano pečena s krumpirom pod tradicionalnom pekom.",
        sp2_n: "Orada Sa Žara", sp2_d: "Svježa orada sa žara poslužena s blitvom na dalmatinski.",
        sp3_n: "Losos Sa Žara", sp3_d: "File lososa na žaru poslužen uz aromatičnu zelenu rižu od graška.",
        sp4_n: "Zapečeni Zabatak", sp4_d: "Zapečeni otkošteni pileći zabatak uz jedinstvenu ljubičastu rižu.",
        sp5_n: "BBQ Rebarca", sp5_d: "Slasna svinjska rebarca u domaćem BBQ umaku uz krumpiriće.",
        m1_n: "Pizza BBQ", m1_d: "Sir, piletina s roštilja, Worcestershire umak, kečap, kapula, masline",
        m2_n: "Pizza Dimljena Piletina", m2_d: "Sir, dimljena piletina, vrhnje, zelena salata, tartar umak, masline",
        m3_n: "Pizzeria EX", m3_d: "Pelati, sir, šunka, feta sir, artičoke, gljive, origano",
        m4_n: "Tartufata", m4_d: "Pelati, sir, šunka, gljive, pršut, salsa tartufata, origano",
        m5_n: "Slavonska", m5_d: "Pelati, sir, kulen, hamburger, paprika, maslina",
        g1_n: "Ćevapčići", g1_d: "10 kom, juneće mljeveno meso, pomfrit, lepinja",
        g2_n: "Pljeskavica sa sirom", g2_d: "Juneće i svinjsko mljeveno meso, sir, pomfrit",
        g3_n: "Djevojački san", g3_d: "Juneće/svinjsko meso punjeno suhom šunkom i sirom, pomfrit",
        g4_n: "Miješano meso", g4_d: "Pileći file, svinjska vratina, ćevapi, ražnjić, kobasica, gljive",
        g5_n: "Plata za dvoje", g5_d: "Pileće rolice, ražnjići, pljeskavice, ćevapi, lungić, povrće",
        b1_n: "Doručak EX", b1_d: "3 jaja, hamburger, pomfrit, lepinja",
        b2_n: "Engleski doručak", b2_d: "3 jaja, kobasica, fažol, hamburger, gljive, rajčica",
        b3_n: "Hladna plata 'Pršut'", b3_d: "Pršut 100g, kiseli krastavci, feferoni, masline",
        b4_n: "Topli sendvič Maxi", b4_d: "Sir, šunka, gljive, pelati, majoneza",
        b5_n: "Omlet EX", b5_d: "3 jaja, pršut, sir, gljive, lepinja",
        s1_n: "Lignje Frigane", s1_d: "Lignje, pomfrit, tartar umak",
        s2_n: "Lignje Na Žaru", s2_d: "Lignje, pomfrit, tržački umak",
        s3_n: "Tuna Steak", s3_d: "Odrezak od tune, dinstano povrće, maslinovo ulje",
        s4_n: "Zelene Tagliatelle Gamberi", s4_d: "Zeleni rezanci, gamberi, češnjak, bijelo vino, maslinovo ulje",
        s5_n: "Zelene Tagliatelle Plodovi Mora", s5_d: "Zeleni rezanci, plodovi mora, češnjak, vino, maslinovo ulje",
        s6_n: "Zelene Tagliatelle Kazačok", s6_d: "Zeleni rezanci, dimljeni losos, kavijar, votka, vrhnje za kuhanje",
        badge_pop: "Popularno",
        badge_share: "Za dijeliti"
      }
    }
  },
  en: {
    nav: { home: 'Home', menu: 'Menu', contact: 'Contact', book: 'Book a Table' },
    hero: { line1: 'Kvarner Tastes and', line2: 'Tradition.', menuBtn: 'View Menu', bookBtn: 'Book a Table' },
    details: { title: 'Our Specialties', subtitle: 'Traditional Tastes' },
    why: {
      title: 'The standard we strive for',
      subtitle: 'Everything you need for a fast, simple, and quality experience.',
      cards: [
        { title: 'Card Payments', desc: 'We accept all major cards for fast and secure payments.' },
        { title: 'Delivery', desc: 'Fast and reliable delivery directly to your address.' },
        { title: 'Takeaway', desc: 'Order in advance and pick up without waiting.' },
        { title: 'Reservations', desc: 'Book your table in just a few clicks.' },
        { title: 'Pleasant Atmosphere', desc: 'Enjoy a pleasant atmosphere and top-notch service.' },
        { title: 'Quality', desc: 'We use exclusively fresh and local ingredients.' }
      ],
      swipe: 'Swipe for more'
    },
    footer: {
      location: 'ADDRESS',
      hours: 'Opening Hours',
      kitchen: 'Kitchen Hours',
      everyday: 'EVERY DAY:',
      nav: 'NAVIGATION',
      findUs: 'FIND US',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      kitchenLabel: 'KITCHEN:',
      deliveryLabel: 'DELIVERY:',
      weekendNote: '( Delivery hours might vary on weekends )',
      rights: 'All rights reserved.'
    },
    brandDesc: 'Guardians of tradition and top flavor. Our table has been your home since 1988.',
    philosophy: {
      label: 'OUR MANIFESTO',
      intro: 'In a world of fast choices and passing trends,',
      introHigh: '',
      focus: 'We focus on:',
      highlight: 'Tastes',
      suffix: 'that last.'
    },
    gallery: {
      label: 'OUR SPECIALTIES',
      title: 'Traditional Tastes',
      item1: 'Grilled Sea Bream',
      item2: 'Veal Under the Bell',
      item3: 'Grilled Salmon'
    },
    stack: [
      { num: "01", title: "Rich Meat Platter", desc: "A lavish selection of chicken rolls, patties, skewers, ćevapi, and pork tenderloin, served with traditional roasted potatoes and grilled vegetables." },
      { num: "02", title: "Legendary BBQ Ribs", desc: "Roasting perfection with a special marinade and meat that melts in your mouth." },
      { num: "03", title: "Pfeffer Steak", desc: "Beef rumpsteak in a creamy pepper sauce, served with fries." }
    ],
    contact: {
      header: 'Your Table Awaits',
      sub: 'Contact us for reservations, information, or organization of your most important moments.',
      events: {
        title: 'Events & Celebrations',
        body: 'Planning a business event, confirmation, first communion, or formal promotion? Pizzeria EX offers more than just space – we offer a complete, carefree experience. We create personalized premium menus according to your wishes.',
        cta: 'Contact us for a personalized offer.'
      },
      form: {
        title: 'Send an Inquiry',
        fname: 'First Name',
        lname: 'Last Name',
        email: 'Email address',
        phone: 'Phone number',
        type: 'Type of inquiry (select)',
        opt1: 'Table Reservation',
        opt2: 'Event / Celebration Organization',
        opt3: 'Other / General',
        msg: 'Your message...',
        btn: 'Send Inquiry'
      },
      map: {
        header: 'Find Us?',
        sub: 'Miroslava Krleže 11, 51000 Rijeka – In the heart of Srdoči.',
        btn: 'Open in Google Maps'
      }
    },
    menuPage: {
      title1: 'Our',
      title2: 'Menu',
      desc: 'A curated selection of dishes we proudly recommend to every guest.',
      chef: 'Chef Recommendations',
      cat0: 'Special Offer',
      cat1: 'Our Pizzas',
      cat2: 'Grill Specialities',
      cat3: 'Breakfast & Starters',
      cat4: 'Seafood & Pastas',
      disclaimer: 'This is a selection of the most popular dishes from our extensive menu.',
      pdfNote: 'Find our full selection in the PDF menu at the bottom of the page.',
      full: 'Full Menu',
      fullDesc: 'Browse our complete offer in the PDF edition.',
      btn: 'Download PDF',
      loading: 'Loading the full document...',
      items: {
        sp1_n: "Veal Under the Bell", sp1_d: "Traditional slow-roasted veal with potatoes under the iron bell.",
        sp2_n: "Grilled Sea Bream", sp2_d: "Fresh grilled sea bream served with Swiss chard and potatoes.",
        sp3_n: "Grilled Salmon", sp3_d: "Grilled salmon fillet served with aromatic green pea rice.",
        sp4_n: "Roasted Chicken Thigh", sp4_d: "Roasted boneless chicken thigh served with unique purple rice.",
        sp5_n: "BBQ Ribs", sp5_d: "Delicious pork ribs in homemade BBQ sauce with fries.",
        m1_n: "BBQ Pizza", m1_d: "Cheese, grilled chicken, Worcestershire sauce, ketchup, onion, olives",
        m2_n: "Smoked Chicken Pizza", m2_d: "Cheese, smoked chicken, cream, lettuce, tartar sauce, olives",
        m3_n: "Pizzeria EX", m3_d: "Tomato sauce, cheese, ham, feta cheese, artichokes, mushrooms, oregano",
        m4_n: "Tartufata", m4_d: "Tomato sauce, cheese, ham, mushrooms, prosciutto, truffle salsa, oregano",
        m5_n: "Slavonian", m5_d: "Tomato sauce, cheese, kulen, burger-meat, bell peppers, olive",
        g1_n: "Ćevapčići", g1_d: "10 pcs, minced beef, fries, flatbread",
        g2_n: "Cheese Patty", g2_d: "Minced beef and pork, cheese, fries",
        g3_n: "Maiden's Dream", g3_d: "Beef/pork stuffed with dried ham and cheese, fries",
        g4_n: "Mixed Grill", g4_d: "Chicken fillet, pork neck, ćevapi, skewer, sausage, mushrooms",
        g5_n: "Platter for Two", g5_d: "Chicken rolls, skewers, patties, ćevapi, pork tenderloin, vegetables",
        b1_n: "Breakfast EX", b1_d: "3 eggs, burger-meat, fries, flatbread",
        b2_n: "English Breakfast", b2_d: "3 eggs, sausage, beans, burger-meat, mushrooms, tomato",
        b3_n: "Cold Platter 'Prosciutto'", b3_d: "Prosciutto 100g, pickles, chili peppers, olives",
        b4_n: "Maxi Toast", b4_d: "Cheese, ham, mushrooms, tomato sauce, mayo",
        b5_n: "Omelet EX", b5_d: "3 eggs, prosciutto, cheese, mushrooms, flatbread",
        s1_n: "Fried Squid", s1_d: "Squid, french fries, tartar sauce",
        s2_n: "Grilled Squid", s2_d: "Squid, french fries, garlic sauce",
        s3_n: "Tuna Steak", s3_d: "Tuna steak, sautéed vegetables, olive oil",
        s4_n: "Green Tagliatelle Prawns", s4_d: "Green pasta, prawns, garlic, white wine, olive oil",
        s5_n: "Green Tagliatelle Seafood", s5_d: "Green pasta, seafood, garlic, wine, olive oil",
        s6_n: "Green Tagliatelle Kazačok", s6_d: "Green pasta, smoked salmon, caviar, vodka, cooking cream",
        badge_pop: "Popular",
        badge_share: "To share"
      }
    }
  }
};

const LanguageContext = React.createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('pizzeria_ex_lang');
    return saved || 'hr';
  });

  const t = (path) => {
    const keys = path.split('.');
    let result = translations[lang];
    for (const key of keys) {
      if (result[key]) result = result[key];
      else return path;
    }
    return result;
  };

  const toggleLang = (val) => {
    setLang(val);
    localStorage.setItem('pizzeria_ex_lang', val);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

gsap.registerPlugin(ScrollTrigger);

// --- Components ---

const EXLogo = ({ className }) => (
  <img 
    src="/assets/logo_no_bg.png" 
    alt="Pizzeria Ex Logo"
    className={cn("w-24 h-24 object-contain rounded-full", className)}
  />
);

const Navbar = () => {
  const { lang, t, toggleLang } = React.useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/jelovnik' },
    { name: t('nav.contact'), path: '/kontakt' },
    { 
      name: t('footer.findUs'), 
      path: 'https://www.google.com/maps/dir/?api=1&destination=45.3550719,14.3689996', 
      external: true 
    }
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out pill-nav",
          "flex items-center justify-between px-6 py-3 rounded-full border border-obsidian/10",
          "w-[90%] max-w-4xl",
          isScrolled
            ? "bg-ivory/60 backdrop-blur-xl py-2 shadow-2xl"
            : "bg-transparent border-transparent"
        )}
      >
        <Link to="/" className="flex items-center group cursor-pointer">
          <EXLogo className="w-16 h-16 md:w-20 md:h-20 -my-4 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105" />
          <div className={cn(
            "ml-2 md:ml-4 text-base md:text-xl font-serif font-black tracking-tighter transition-colors duration-300",
            isScrolled ? "text-obsidian" : "text-ivory"
          )}>
            PIZZERIA EX
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.filter(l => !l.external).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors duration-300",
                isScrolled ? "text-obsidian" : "text-ivory/80 hover:text-ivory"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          {/* Language Toggle */}
          <div className="flex bg-obsidian/10 rounded-full p-1 border border-obsidian/10">
            <button
              onClick={() => toggleLang('hr')}
              className={cn(
                "px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300",
                lang === 'hr' ? "bg-champagne text-obsidian shadow-sm scale-110" : "opacity-70 hover:opacity-100 text-ivory"
              )}
            >
              HR
            </button>
            <button
              onClick={() => toggleLang('en')}
              className={cn(
                "px-2 py-1 rounded-full text-[10px] font-bold transition-all duration-300",
                lang === 'en' ? "bg-champagne text-obsidian shadow-sm scale-110" : "opacity-70 hover:opacity-100 text-ivory"
              )}
            >
              EN
            </button>
          </div>

          <Link to="/kontakt" className={cn(
            "hidden md:block px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 overflow-hidden relative group",
            isScrolled
              ? "bg-obsidian text-ivory shadow-lg"
              : "bg-champagne text-obsidian"
          )}>
            <span className="relative z-10 group-hover:text-ivory transition-colors duration-300">{t('nav.book')}</span>
            <div className="absolute inset-0 bg-obsidian scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-full transition-colors",
              isScrolled ? "text-obsidian" : "text-ivory"
            )}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 w-screen h-[100dvh] bg-black z-[90] transition-opacity duration-500 overflow-hidden",
        mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="h-full w-full flex flex-col justify-center items-center gap-8 px-8">
          {navLinks.map((link, idx) => (
            link.external ? (
              <a
                key={link.name}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-ivory hover:text-champagne transition-all duration-300 text-center"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter text-ivory hover:text-champagne transition-all duration-300 text-center"
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-8 px-10 py-5 border border-champagne text-champagne rounded-full uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:bg-champagne hover:text-obsidian"
          >
            {t('nav.book')}
          </Link>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const { t } = React.useContext(LanguageContext);
  const containerRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1.2 } });
      tl.from(textRef1.current, { y: 60, opacity: 0 }, 0.5)
        .from(textRef2.current, { y: 100, opacity: 0, rotation: 5 }, 0.7)
        .from(ctaRef.current, { y: 40, opacity: 0 }, 1.0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100dvh] w-full flex items-center justify-center md:items-end md:justify-start p-8 md:p-24 overflow-hidden text-center md:text-left"
    >
      {/* Background Image - Luxury Pizza Noir */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/herofinal.jpg"
          className="w-full h-full object-cover scale-105"
          alt="Luxury Pizza"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl w-full -translate-y-20 md:translate-y-0 md:max-w-4xl">
        <div ref={textRef1} className="text-ivory font-bold text-2xl md:text-5xl uppercase tracking-tighter mb-2 md:mb-4 relative z-20">
          {t('hero.line1')}
        </div>
        <div ref={textRef2} className="text-champagne font-serif italic text-5xl md:text-[10rem] lg:text-[12rem] leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 drop-shadow-[0_20px_50px_rgba(201,168,76,0.2)] relative z-10 -mt-2 md:-mt-8">
          {t('hero.line2')}
        </div>

        <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 md:gap-6 relative z-20 items-center justify-center md:justify-start">
          <Link to="/jelovnik" className="w-[75%] sm:w-auto px-8 py-4 bg-champagne text-obsidian rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-3 group shadow-2xl shadow-champagne/20 touch-manipulation min-h-[50px]">
            {t('hero.menuBtn')}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/kontakt" className="w-[75%] sm:w-auto px-8 py-4 bg-black/60 border border-ivory/20 text-ivory rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center hover:bg-black/80 transition-colors backdrop-blur-md touch-manipulation min-h-[50px]">
            {t('hero.bookBtn')}
          </Link>
        </div>
      </div>
    </section>
  );
};

const FeatureCard1 = () => {
  // Diagnostic Shuffler: Vertical shuffle logic
  const [items, setItems] = useState(['Miješano meso', 'Juneći ramstek', 'BBQ Rebarca', 'Losos na žaru']);

  useEffect(() => {
    const interval = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        const val = next.pop();
        if (val) next.unshift(val);
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-10 h-[450px] flex flex-col justify-between group overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-champagne mb-4">
          <ChefHat size={20} />
          <span className="text-xs font-mono uppercase tracking-widest">Ritual Okusa</span>
        </div>
        <h3 className="text-4xl font-serif italic text-obsidian mb-4">Spektakl Ponude</h3>
        <p className="font-sans text-slate/70 text-sm leading-relaxed md:leading-loose max-w-[250px]">
          Specijaliteti koji oduzimaju dah: od bogate mesne plate i sočnih BBQ rebaraca, do vrhunskog junećeg ramsteka.
        </p>
      </div>

      <div className="relative h-40 mt-8">
        {items.map((item, idx) => (
          <div
            key={item}
            className={cn(
              "absolute w-full py-4 px-6 rounded-2xl border text-lg font-bold transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
              idx === 0 ? "top-0 z-20 bg-obsidian text-champagne scale-100 opacity-100 shadow-xl" :
                idx === 1 ? "top-10 -z-10 bg-ivory text-black/40 scale-90 opacity-60" :
                  "top-20 -z-20 bg-ivory text-black/20 scale-80 opacity-30"
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureCard2 = () => {
  // Telemetry Typewriter
  const [text, setText] = useState("");
  const fullText = "35+ GODINA POVJERENJA... SVAKI TANJUR JE PRIČA... DOBRODOŠLI KUĆI...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index = (index + 1) % (fullText.length + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-10 h-[450px] flex flex-col justify-between group bg-obsidian border-white/5">
      <div>
        <div className="flex items-center gap-2 text-champagne mb-4">
          <div className="w-2 h-2 rounded-full bg-champagne animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest">LIVE TRADICIJA</span>
        </div>
        <h3 className="text-4xl font-serif italic text-ivory mb-4">Srce Rijeke</h3>
        <p className="font-sans text-ivory/50 text-sm leading-relaxed">
          Osmijeh naših gostiju od 1988. godine naša je najveća nagrada.
        </p>
      </div>

      <div className="mt-8 font-mono text-champagne text-sm leading-8 min-h-[140px]">
        {text}<span className="inline-block w-2 h-4 bg-champagne ml-1" />
      </div>
    </div>
  );
};

const FeatureCard3 = () => {
  // Cursor Protocol Scheduler
  const [activeCell, setActiveCell] = useState(4); // Thursday

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCell(prev => (prev + 1) % 7);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card p-10 h-[450px] flex flex-col justify-between group">
      <div>
        <div className="flex items-center gap-2 text-champagne mb-4">
          <Clock size={20} />
          <span className="text-xs font-mono uppercase tracking-widest">DINAMIKA KVALITETE</span>
        </div>
        <h3 className="text-4xl font-serif italic text-obsidian mb-4">Svaki Dan</h3>
        <p className="font-sans text-slate/70 text-sm leading-relaxed">
          Pomno selektirani sastojci i priprema koja ne poznaje kompromise.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-7 gap-2">
        {['P', 'U', 'S', 'Č', 'P', 'S', 'N'].map((day, i) => (
          <div
            key={i}
            className={cn(
              "h-12 flex items-center justify-center rounded-xl text-xs font-bold transition-all duration-500",
              i === activeCell
                ? "bg-obsidian text-champagne scale-110 shadow-lg shadow-champagne/20"
                : "bg-obsidian/5 text-black/40"
            )}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center">
        <div className="px-6 py-2 bg-champagne text-obsidian rounded-full text-[10px] uppercase font-bold tracking-[0.2em] shadow-lg shadow-champagne/20">
          Status: Premium
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const { t } = React.useContext(LanguageContext);
  const scrollRef = useRef(null);

  const cards = [
    { icon: <CreditCard className="w-8 h-8" />, ...t('why.cards')[0] },
    { icon: <Bike className="w-8 h-8" />, ...t('why.cards')[1] },
    { icon: <Package className="w-8 h-8" />, ...t('why.cards')[2] },
    { icon: <Calendar className="w-8 h-8" />, ...t('why.cards')[3] },
    { icon: <Utensils className="w-8 h-8" />, ...t('why.cards')[4] },
    { icon: <ChefHat className="w-8 h-8" />, ...t('why.cards')[5] }
  ];

  // Double the cards for seamless marquee
  const allCards = [...cards, ...cards];

  useEffect(() => {
    // No marquee, just stability.
  }, []);

  return (
    <section className="py-24 bg-ivory relative overflow-hidden group/section">
      {/* Subtle Texture for White Background removed */}

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10 px-8">
        <h2 className="text-4xl md:text-6xl font-serif italic text-obsidian mb-4 uppercase tracking-tighter">{t('why.title')}</h2>
        <div className="w-24 h-1 bg-champagne mx-auto rounded-full" />
      </div>

      {/* Stable Gold Grid Layout (Always 3 Cards) */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {cards.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className="relative p-10 rounded-[40px] bg-[#E7BF60] border border-obsidian/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 group/card overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000" />
              
              <div className="relative z-10 w-16 h-16 bg-obsidian rounded-2xl flex items-center justify-center text-champagne mb-8 group-hover/card:scale-110 transition-all duration-500 shadow-xl">
                {card.icon}
              </div>
              <h3 className="text-2xl font-sans font-bold uppercase tracking-widest text-obsidian mb-4 relative z-10">
                {card.title}
              </h3>
              <p className="text-obsidian/70 leading-relaxed font-sans text-sm relative z-10">
                {card.desc || card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FoodGallery = () => {
  const { lang, t } = React.useContext(LanguageContext);
  const scrollRef = useRef(null);

  const finalItems = [
    { title: t('gallery.item1'), img: "/assets/oradasazara.png" },
    { title: t('gallery.item2'), img: "/assets/teletina.png" },
    { title: t('gallery.item3'), img: "/assets/losos.png" }
  ];

  return (
    <section className="py-24 md:py-32 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.5em] text-champagne mb-4 block">{t('gallery.label')}</span>
          <h2 className="text-4xl md:text-6xl font-serif italic text-obsidian tracking-tighter">{t('gallery.title')}</h2>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
      >
        {finalItems.map((item, idx) => (
          <div 
            key={idx} 
            className="group cursor-pointer"
          >
            <div className="aspect-[4/3] relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-all duration-700 hover:shadow-champagne/10">
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt={item.title} 
              />
              <div className="absolute inset-0 bg-obsidian/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <h3 className="mt-8 text-center text-xl lg:text-3xl font-serif italic text-obsidian group-hover:text-champagne transition-colors duration-500">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <>
      <FoodGallery />
      <WhyChooseUs />
    </>
  );
};

const Philosophy = () => {
  const { t } = React.useContext(LanguageContext);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".reveal-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1.2,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 md:py-40 px-8 bg-obsidian text-ivory relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 grayscale">
        <img
          src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2670&auto=format&fit=crop"
          className="w-full h-full object-cover"
          alt="Atmosphere"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="reveal-text text-sm font-mono uppercase tracking-[0.4em] text-champagne/80 mb-8">
          {t('philosophy.label')}
        </p>
        <p className="reveal-text text-xl md:text-4xl text-ivory/60 mb-8 md:mb-12 max-w-2xl mx-auto">
          {t('philosophy.intro')}
        </p>
        <h2 className="reveal-text text-4xl md:text-8xl font-serif italic text-ivory leading-tight">
          {t('philosophy.focus')} <br />
          <span className="text-champagne not-italic font-black uppercase tracking-tighter">{t('philosophy.highlight')}</span> {t('philosophy.suffix')}
        </h2>
      </div>
    </section>
  );
};

const ProtocolSection = () => {
  const { t } = React.useContext(LanguageContext);
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.stack-card');
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: i === cards.length - 1,
          scrub: 1.5, // Smoother scrub for cinematic feel
          onUpdate: (self) => {
            if (i < cards.length - 1) {
              const scale = 1 - (self.progress * 0.05); // Less aggressive scaling
              const opacity = 1 - (self.progress * 0.7);
              const blur = self.progress * 15;
              gsap.to(card, { scale, opacity, filter: `blur(${blur}px)`, duration: 0.5 });
            }
          }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const steps = [
    {
      ...t('stack')[0],
      bg: "/assets/meat.jpg"
    },
    {
      ...t('stack')[1],
      bg: "/assets/ribs.jpg"
    },
    {
      ...t('stack')[2],
      bg: "/assets/steak.jpg"
    }
  ];

  return (
    <div ref={containerRef} className="bg-obsidian">
      {steps.map((step, i) => (
        <section
          key={i}
          className="stack-card h-screen w-full flex items-center justify-center p-6 md:p-12 bg-obsidian relative overflow-hidden"
        >
          {/* Enhanced Image Visibility - Grayscale but brighter */}
          <div className="absolute inset-0 opacity-45 grayscale mix-blend-luminosity">
            <img src={step.bg} className="w-full h-full object-cover" alt={step.title} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
          </div>

          <div className="relative z-10 max-w-4xl text-center px-4 flex flex-col items-center">
            <h3 className="text-4xl md:text-8xl font-serif text-ivory mb-6 md:mb-10 leading-[0.85] tracking-tight">
              {step.title}
            </h3>
            <p className="text-sm md:text-xl text-ivory/80 max-w-2xl mx-auto leading-relaxed font-sans uppercase tracking-[0.2em]">
              {step.desc}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

const ContactSection = () => {
  const { t } = React.useContext(LanguageContext);
  const [formStatus, setFormStatus] = useState('idle');
  return (
    <section id="kontakt" className="py-24 px-4 md:px-8 bg-black text-ivory relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-ivory italic">
            {t('contact.header')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-24 mb-24 items-start">

          {/* Left Column - Contact Details & Events */}
          <div className="flex flex-col gap-20">

            {/* Events Block */}
            <div className="bg-ivory/5 border border-champagne/20 rounded-3xl p-6 md:p-8 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="flex items-center gap-4 mb-6">
                <Star className="w-8 h-8 text-champagne fill-champagne" />
                <h3 className="text-2xl font-sans font-bold uppercase tracking-widest text-ivory">{t('contact.events.title')}</h3>
              </div>
              <p className="text-ivory/70 leading-relaxed font-serif italic text-lg mb-6">
                {t('contact.events.body')}
              </p>
              <div className="text-xs font-mono text-champagne uppercase tracking-widest font-bold">
                {t('contact.events.cta')}
              </div>
            </div>

            {/* Direct Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-champagne shrink-0 border border-white/5">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-ivory/60 mb-1 text-sm tracking-widest uppercase">{t('footer.phoneLabel')}</p>
                  <a href="tel:+385051624471" className="text-xl font-bold text-champagne hover:text-white transition-colors">051 624 471</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-champagne shrink-0 border border-white/5">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-bold text-ivory/60 mb-1 text-sm tracking-widest uppercase">{t('footer.emailLabel')}</p>
                  <a href="mailto:pizzeriaex.rijeka@gmail.com" className="font-bold text-ivory hover:text-champagne transition-colors">pizzeriaex.rijeka@gmail.com</a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column - Form */}
          <div className="bg-white/5 border border-ivory/10 rounded-3xl p-8 md:p-12 shadow-2xl relative">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-ivory mb-8">{t('contact.form.title')}</h3>
            {formStatus === 'success' ? (
              <div className="bg-white/5 border border-champagne/30 rounded-3xl p-12 text-center animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-champagne rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-champagne/20">
                  <Check className="w-10 h-10 text-obsidian" />
                </div>
                <h3 className="text-3xl font-serif italic text-ivory mb-4">Hvala vam!</h3>
                <p className="text-ivory/60 leading-relaxed max-w-sm mx-auto">
                  Vaš upit je uspješno poslan. Javit ćemo vam se u najkraćem mogućem roku.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-10 text-champagne text-xs font-mono uppercase tracking-widest hover:text-white transition-colors"
                >
                  Pošalji ponovo
                </button>
              </div>
            ) : (
              <form 
                className="relative z-10 flex flex-col gap-6" 
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('loading');
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  
                  try {
                    const response = await fetch("https://formsubmit.co/ajax/pizzeriaex.rijeka@gmail.com", {
                      method: "POST",
                      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                      body: JSON.stringify(data)
                    });
                    if (!response.ok) throw new Error('Network response was not ok');
                    setFormStatus('success');
                  } catch (err) {
                    setFormStatus('error');
                    alert("Došlo je do greške. Molimo pokušajte ponovo.");
                  }
                }}
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="Novi upit - Pizzeria EX Website" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="text" name="First Name" placeholder={t('contact.form.fname')} required className="w-full bg-obsidian border border-ivory/20 rounded-xl px-6 py-4 text-ivory placeholder:text-ivory/60 focus:outline-none focus:border-champagne transition-colors" />
                  <input type="text" name="Last Name" placeholder={t('contact.form.lname')} required className="w-full bg-obsidian border border-ivory/20 rounded-xl px-6 py-4 text-ivory placeholder:text-ivory/60 focus:outline-none focus:border-champagne transition-colors" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input type="email" name="Email" placeholder={t('contact.form.email')} required className="w-full bg-obsidian border border-ivory/20 rounded-xl px-6 py-4 text-ivory placeholder:text-ivory/60 focus:outline-none focus:border-champagne transition-colors" />
                  <input type="tel" name="Phone" placeholder={t('contact.form.phone')} required className="w-full bg-obsidian border border-ivory/20 rounded-xl px-6 py-4 text-ivory placeholder:text-ivory/60 focus:outline-none focus:border-champagne transition-colors" />
                </div>
                <div className="flex flex-col gap-6">
                  <select name="Inquiry Type" className="w-full bg-obsidian border border-ivory/10 rounded-xl px-6 py-4 text-ivory focus:outline-none focus:border-champagne transition-colors appearance-none" required>
                    <option value="" disabled selected className="text-ivory/30">{t('contact.form.type')}</option>
                    <option value="stol">{t('contact.form.opt1')}</option>
                    <option value="slavlje">{t('contact.form.opt2')}</option>
                    <option value="ostalo">{t('contact.form.opt3')}</option>
                  </select>
                  <textarea name="Message" placeholder={t('contact.form.msg')} rows="4" required className="w-full bg-obsidian border border-ivory/10 rounded-xl px-6 py-4 text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-champagne transition-colors resize-none"></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-champagne text-obsidian font-bold uppercase tracking-[0.3em] py-5 rounded-xl hover:bg-white transition-all duration-500 shadow-xl shadow-champagne/10 active:scale-95 disabled:opacity-50 disabled:cursor-wait"
                >
                  {formStatus === 'loading' ? 'Slanje...' : t('contact.form.btn')}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Map Section */}
        <div className="w-full pt-16 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-widest text-ivory mb-2 flex items-center gap-4">
                <MapPin className="w-8 h-8 text-champagne" />
                {t('contact.map.header')}
              </h2>
              <p className="text-ivory/50 font-mono text-sm tracking-widest">{t('contact.map.sub')}</p>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=45.3550719,14.3689996"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-champagne text-champagne rounded-full font-bold uppercase tracking-widest text-xs hover:bg-champagne hover:text-obsidian transition-colors"
            >
              {t('contact.map.btn')}
            </a>
          </div>

          <div className="w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-ivory/10 shadow-2xl bg-white/5">
            <iframe
              src="https://maps.google.com/maps?q=45.3550719,14.3689996&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

const MarqueeSection = () => {
  const { lang } = React.useContext(LanguageContext);
  const words = lang === 'hr'
    ? ["LOKALNI PROIZVODI", "VIŠE OD 30 GODINA ISKUSTVA", "OCJENA 4.5 NA GOOGLE-U"]
    : ["LOCAL PRODUCTS", "OVER 30 YEARS OF EXPERIENCE", "4.5 GOOGLE RATING"];

  return (
    <div className="bg-champagne py-5 overflow-hidden flex whitespace-nowrap border-y border-obsidian/10">
      <div className="animate-marquee flex items-center">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="flex items-center">
            {words.map((word, j) => (
              <React.Fragment key={`${i}-${j}`}>
                <span className="text-obsidian font-bold tracking-widest px-8 text-sm md:text-base">{word}</span>
                <span className="text-obsidian/30">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const BigStatement = () => {
  const { lang, t } = React.useContext(LanguageContext);
  return (
    <section className="py-32 px-4 bg-black text-center flex flex-col items-center justify-center border-t border-ivory/5">
      <div className="w-16 h-16 mb-12 text-champagne">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
      </div>
      <h2 className="max-w-6xl mx-auto text-5xl md:text-7xl lg:text-[6rem] font-serif italic text-ivory leading-[0.9] tracking-tight">
        {lang === 'hr'
          ? <>Otkrijte zašto su naši gosti oduševljeni već više od <span className="text-champagne font-black not-italic font-sans tracking-tighter">30</span> godina.</>
          : <>Discover why our guests have been delighted for over <span className="text-champagne font-black not-italic font-sans tracking-tighter">30</span> years.</>}
      </h2>
    </section>
  );
};

const Footer = () => {
  const { t } = React.useContext(LanguageContext);
  return (
    <footer className="bg-black pt-24 pb-8 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 text-center md:text-left">
        {/* Col 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" className="mb-0 group">
            <EXLogo className="w-24 h-24 mb-4" />
          </Link>
          <p className="text-ivory/80 max-w-sm leading-relaxed text-lg font-serif italic mb-8 mx-auto md:mx-0">
            {t('brandDesc')}
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/pizzeriaex/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-champagne hover:text-obsidian transition-all duration-300 border border-white/20 text-white shadow-xl shadow-black/40">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/pizzeria.ex#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-champagne hover:text-obsidian transition-all duration-300 border border-white/20 text-white shadow-xl shadow-black/40">
              <Facebook size={20} />
            </a>
            <a href="https://www.google.com/maps/place/EX/@45.3550756,14.3664247,724m/data=!3m2!1e3!5s0x4764a65e4b023d2d:0x35568045d129c3fa!4m8!3m7!1s0x4764a65fb36400bf:0x1d76f2461939675a!8m2!3d45.3550719!4d14.3689996!9m1!1b1!16s%2Fg%2F1tjl4pq2?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" title="Google Reviews" className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center hover:bg-champagne hover:text-obsidian transition-all duration-300 border border-white/20 text-white shadow-xl shadow-black/40">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-1.93 5.39-7.84 5.39-5.1 0-9.25-4.22-9.25-9.42s4.15-9.42 9.25-9.42c2.9 0 4.84 1.2 5.95 2.27l2.59-2.5c-1.66-1.55-3.8-2.49-8.54-2.49C5.46 0 0 5.46 0 12s5.46 12 12.48 12c7.33 0 12.18-5.16 12.18-12.42 0-.84-.09-1.48-.2-2.1L12.48 10.92z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Info */}
        <div className="flex flex-col items-center md:items-start gap-12">
          <div>
            <h4 className="font-black uppercase tracking-tighter text-xs md:text-sm text-ivory mb-6">{t('footer.hours')}</h4>
            <div className="space-y-4">
              <p className="text-ivory font-bold text-base md:text-lg">
                {t('footer.everyday')} <span className="text-champagne ml-1">07:00 — 23:00h</span>
              </p>
              <div className="space-y-2">
                <p className="text-ivory/70 font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1 h-1 rounded-full bg-champagne/40" />
                  {t('footer.kitchenLabel')} <span className="text-ivory ml-1">09:30 - 22:20 h</span>
                </p>
                <p className="text-ivory/70 font-mono text-[11px] uppercase tracking-widest flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1 h-1 rounded-full bg-champagne/40" />
                  {t('footer.deliveryLabel')} <span className="text-ivory ml-1">10:00 - 22:00 h</span>
                </p>
                <p className="text-[#E7D8C9]/40 font-serif italic text-[10px] mt-2 text-center md:text-left">
                  {t('footer.weekendNote')}
                </p>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <h4 className="font-black uppercase tracking-tighter text-xs md:text-sm text-ivory mb-6">{t('footer.location')}</h4>
            <p className="text-ivory/90 font-serif italic text-base md:text-lg leading-relaxed max-w-[280px]">
              Miroslava Krleže 11, Rijeka (Srdoči)
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-white/10 flex flex-col justify-center items-center text-center">
        <div className="text-ivory/60 text-[10px] font-mono uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Pizzeria EX. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => (
  <main>
    <Hero />
    <Features />
    <Philosophy />
    <ProtocolSection />
  </main>
);

const MenuPage = () => {
  const { t } = React.useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(0);

  const menuData = [
    {
      icon: <Star className="w-6 h-6" />,
      category: t('menuPage.cat0'),
      items: [
        { name: t('menuPage.items.sp1_n'), desc: t('menuPage.items.sp1_d'), price: "19,50 €", badge: "Premium" },
        { name: t('menuPage.items.sp2_n'), desc: t('menuPage.items.sp2_d'), price: "17,50 €" },
        { name: t('menuPage.items.sp3_n'), desc: t('menuPage.items.sp3_d'), price: "18,20 €", badge: "Special Choice" },
        { name: t('menuPage.items.sp4_n'), desc: t('menuPage.items.sp4_d'), price: "13,20 €" },
        { name: t('menuPage.items.sp5_n'), desc: t('menuPage.items.sp5_d'), price: "15,20 €", badge: "Signature" }
      ]
    },
    {
      icon: <Pizza className="w-6 h-6" />,
      category: t('menuPage.cat1'),
      items: [
        { name: t('menuPage.items.m1_n'), desc: t('menuPage.items.m1_d'), price: "12,30 €" },
        { name: t('menuPage.items.m2_n'), desc: t('menuPage.items.m2_d'), price: "11,30 €" },
        { name: t('menuPage.items.m3_n'), desc: t('menuPage.items.m3_d'), price: "11,40 €", badge: "Signature" },
        { name: t('menuPage.items.m4_n'), desc: t('menuPage.items.m4_d'), price: "12,50 €", badge: "Premium" },
        { name: t('menuPage.items.m5_n'), desc: t('menuPage.items.m5_d'), price: "11,30 €" }
      ]
    },
    {
      icon: <Flame className="w-6 h-6" />,
      category: t('menuPage.cat2'),
      items: [
        { name: t('menuPage.items.g1_n'), desc: t('menuPage.items.g1_d'), price: "13,70 €" },
        { name: t('menuPage.items.g2_n'), desc: t('menuPage.items.g2_d'), price: "14,70 €" },
        { name: t('menuPage.items.g3_n'), desc: t('menuPage.items.g3_d'), price: "15,10 €", badge: t('menuPage.items.badge_pop') },
        { name: t('menuPage.items.g4_n'), desc: t('menuPage.items.g4_d'), price: "15,30 €" },
        { name: t('menuPage.items.g5_n'), desc: t('menuPage.items.g5_d'), price: "34,80 €", badge: t('menuPage.items.badge_share') }
      ]
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      category: t('menuPage.cat3'),
      items: [
        { name: t('menuPage.items.b1_n'), desc: t('menuPage.items.b1_d'), price: "6,90 €" },
        { name: t('menuPage.items.b2_n'), desc: t('menuPage.items.b2_d'), price: "7,50 €" },
        { name: t('menuPage.items.b5_n'), desc: t('menuPage.items.b5_d'), price: "7,30 €", badge: "New" },
        { name: t('menuPage.items.b3_n'), desc: t('menuPage.items.b3_d'), price: "7,50 €" },
        { name: t('menuPage.items.b4_n'), desc: t('menuPage.items.b4_d'), price: "7,30 €" }
      ]
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      category: t('menuPage.cat4'),
      items: [
        { name: t('menuPage.items.s1_n'), desc: t('menuPage.items.s1_d'), price: "16,70 €" },
        { name: t('menuPage.items.s2_n'), desc: t('menuPage.items.s2_d'), price: "16,70 €" },
        { name: t('menuPage.items.s3_n'), desc: t('menuPage.items.s3_d'), price: "18,20 €", badge: "Premium" },
        { name: t('menuPage.items.s4_n'), desc: t('menuPage.items.s4_d'), price: "15,20 €" },
        { name: t('menuPage.items.s5_n'), desc: t('menuPage.items.s5_d'), price: "14,40 €" },
        { name: t('menuPage.items.s6_n'), desc: t('menuPage.items.s6_d'), price: "16,10 €", badge: "Extra" }
      ]
    }
  ];

  return (
    <main className="pt-40 pb-24 bg-black min-h-screen text-ivory relative selection:bg-champagne selection:text-black">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 md:mb-32">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white">
            {t('menuPage.title1')} <span className="text-champagne">{t('menuPage.title2')}</span>
          </h1>
        </div>

        {/* Full PDF Menu Embed */}
        <div className="pt-24 border-t border-white/10 mb-24 md:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-8 text-center md:text-left">
            <div className="max-w-xl">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <FileText className="w-6 h-6 text-champagne" />
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">
                  {t('menuPage.full')}
                </h2>
              </div>
              <p className="text-ivory/60 font-mono text-xs md:text-sm tracking-widest leading-relaxed uppercase">
                {t('menuPage.fullDesc')}
              </p>
            </div>

            <a
              href="/assets/JELOVNIK.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-5 bg-champagne text-black rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:scale-105 transition-all duration-500 shadow-2xl shadow-champagne/20"
            >
              <Download className="w-5 h-5 animate-bounce-slow" />
              {t('menuPage.btn')}
            </a>
          </div>

          <div className="w-full bg-white/5 border border-white/10 p-2 md:p-6 rounded-[2rem] shadow-2xl relative overflow-hidden h-[80vh] min-h-[600px]">
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-white/20 font-mono tracking-widest">
              <FileText className="w-12 h-12 mb-4 animate-pulse text-white/30" />
              <p>{t('menuPage.loading')}</p>
            </div>
            <iframe
              src="/assets/JELOVNIK.pdf#toolbar=0&view=FitW"
              className="w-full h-full rounded-xl border-0 bg-transparent grayscale opacity-90 invert-[0.05]"
              title="Pizzeria EX Cjelokupni Jelovnik"
            />
          </div>
        </div>

        <div className="text-center mb-16 px-4">
          <p className="max-w-xl mx-auto text-ivory/90 font-sans font-bold text-[11px] md:text-lg uppercase tracking-widest leading-loose mb-6">
            {t('menuPage.desc')}
          </p>
        </div>

        {/* Interactive Menu Highlights Header */}
        <div className="mb-6 md:mb-10 flex items-center gap-3 border-t border-white/10 pt-24">
          <Star className="w-5 h-5 text-champagne fill-champagne" />
          <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white/90">{t('menuPage.chef')}</h2>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-16 mb-24 md:mb-32">
          {/* Categories Navigation - Pill Style for Mobile */}
          <div className="lg:col-span-4 relative">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible no-scrollbar snap-x snap-mandatory gap-2 md:gap-4 px-1 lg:px-0 pb-4 lg:pb-0">
              {menuData.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={cn(
                    "flex-none flex items-center gap-2 px-5 py-3 md:p-6 transition-all duration-500 rounded-full lg:rounded-none lg:rounded-r-2xl snap-center focus:outline-none whitespace-nowrap",
                    activeCategory === idx
                      ? "bg-champagne text-obsidian shadow-lg shadow-champagne/20 border-transparent"
                      : "bg-white/5 border border-white/10 text-ivory/50 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <div className={cn("transition-colors duration-500", activeCategory === idx ? "text-obsidian" : "text-champagne")}>
                    {React.cloneElement(cat.icon, { size: 16 })}
                  </div>
                  <h3 className="font-bold tracking-widest uppercase text-[9px] md:text-xs">{cat.category}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Items Display */}
          <div className="lg:col-span-8 bg-white/[0.03] border border-white/10 p-5 md:p-12 h-fit rounded-[1.5rem] md:rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 opacity-30" />
            
            <h2 className="text-lg md:text-2xl font-black uppercase tracking-widest text-white mb-8 md:mb-10 flex items-center gap-3 relative z-10 border-b border-white/10 pb-4">
              <span className="text-champagne opacity-70">{menuData[activeCategory].icon}</span>
              {menuData[activeCategory].category}
            </h2>

            <div className="flex flex-col gap-8 md:gap-16 relative z-10">
              {menuData[activeCategory].items.map((item, idx) => (
                <div key={idx} className="group/item relative">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline mb-1.5 gap-1">
                    <h4 className="text-base md:text-2xl font-black uppercase tracking-tight text-white flex flex-wrap items-center gap-x-2">
                       {item.name}
                      {item.badge && (
                        <span className="text-[7px] font-mono px-1 py-0.5 bg-champagne/20 text-champagne border border-champagne/30 tracking-widest uppercase rounded-sm">
                          {item.badge}
                        </span>
                      )}
                    </h4>
                    <span className="text-base md:text-xl font-bold text-champagne whitespace-nowrap sm:ml-auto">{item.price}</span>
                  </div>
                  <p className="text-[11px] md:text-sm font-sans tracking-wide text-ivory/40 group-hover/item:text-ivory/70 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-center gap-2 relative z-10">
              <Info size={10} className="text-white/20" />
              <p className="text-[8px] md:text-xs font-mono uppercase tracking-widest text-white/20 text-center">
                {t('menuPage.disclaimer')}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Synchronized Brand Sections for Consistency */}
      <div className="mt-24">
        <MarqueeSection />
        <BigStatement />
      </div>
    </main>
  );
};

const ContactPage = () => (
  <main className="pt-40 bg-black">
    <ContactSection />
    <MarqueeSection />
    <BigStatement />
  </main>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleCopy = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/jelovnik" element={<MenuPage />} />
        </Routes>
        <Footer />
        <Analytics />
      </Router>
    </LanguageProvider>
  );
};

export default App;
