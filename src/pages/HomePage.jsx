import React, { useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowRight, ChefHat, Calendar, Activity, Clock, Scan, 
  Zap, Star, ChevronLeft, ChevronRight, Check, Pizza, Flame, Utensils,
  CreditCard, Bike, ShoppingBag
} from 'lucide-react';
import { cn } from '../utils/cn';
import { LanguageContext } from '../context/LanguageContext';

// --- Hero Component ---
const Hero = () => {
  const { t } = useContext(LanguageContext);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });
      
      gsap.to(".hero-bg", {
        scale: 1.1,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none"
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      <div className="absolute inset-0 z-0 hero-bg">
        <img 
          src="/assets/herofinal.jpg" 
          className="w-full h-full object-cover opacity-60" 
          alt="Pizzeria Ex Hero"
          width={1920}
          height={1080}
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center hero-content">
        <span className="text-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6 block drop-shadow-lg">
          EST. 1988 — RIJEKA (SRDOČI)
        </span>
        <h1 className="text-6xl md:text-9xl font-serif text-ivory mb-8 leading-[0.9] italic drop-shadow-2xl">
          {t('hero.line1')}<br/>
          <span className="text-gold not-italic">{t('hero.line2')}</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Link 
            to="/jelovnik"
            aria-label={t('hero.menuBtn')}
            className="group relative px-10 py-5 bg-gold text-obsidian font-bold uppercase tracking-widest overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(201,168,76,0.3)] rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2">
              {t('hero.menuBtn')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link 
            to="/kontakt"
            aria-label={t('hero.bookBtn')}
            className="px-10 py-5 border border-ivory/20 text-ivory font-bold uppercase tracking-widest hover:bg-ivory hover:text-obsidian transition-all duration-500 hover:scale-105 active:scale-95 rounded-full backdrop-blur-sm"
          >
            {t('hero.bookBtn')}
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

// --- Features Section ---
const FeaturesSection = () => {
  const { t } = useContext(LanguageContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        if ((e.deltaY > 0 && el.scrollLeft < el.scrollWidth - el.clientWidth) || (e.deltaY < 0 && el.scrollLeft > 0)) {
          // Prevent scroll through if we have room to scroll horizontally
          // e.preventDefault();
          el.scrollTo({ left: el.scrollLeft + e.deltaY, behavior: 'smooth' });
        }
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <section className="py-32 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">EXCELLENCE</span>
            <h2 className="text-5xl md:text-7xl font-serif text-obsidian italic leading-tight">
              {t('why.title')}
            </h2>
          </div>
          <p className="text-obsidian/60 max-w-sm text-lg font-light italic">
            {t('why.subtitle')}
          </p>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-12 scrollbar-hide no-scrollbar snap-x snap-mandatory"
        >
          {t('why.cards').map((card, i) => (
            <div 
              key={i}
              className="min-w-[320px] md:min-w-[400px] p-10 bg-white border border-obsidian/5 rounded-3xl snap-center group hover:bg-obsidian transition-colors duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-10 group-hover:bg-gold/20 transition-colors">
                {[<CreditCard className="w-8 h-8 text-gold" />, <Bike className="w-8 h-8 text-gold" />, <ShoppingBag className="w-8 h-8 text-gold" />, <Calendar className="w-8 h-8 text-gold" />, <Clock className="w-8 h-8 text-gold" />, <Star className="w-8 h-8 text-gold" />][i]}
              </div>
              <h3 className="text-2xl font-serif text-obsidian mb-4 group-hover:text-ivory transition-colors italic">{card.title}</h3>
              <p className="text-obsidian/60 leading-relaxed font-light group-hover:text-ivory/60 transition-colors">{card.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-8 text-obsidian/20 md:hidden">
          <ArrowRight className="w-5 h-5 animate-pulse" />
          <span className="text-xs uppercase tracking-widest">{t('why.swipe')}</span>
        </div>
      </div>
    </section>
  );
};

// --- Philosophy Section ---
const Philosophy = () => {
  const { t } = useContext(LanguageContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".philo-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-40 overflow-hidden bg-obsidian">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?q=80&w=2670&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-20"
          alt="Atmosphere"
          width={1920}
          height={1080}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <span className="text-gold uppercase tracking-[0.5em] text-xs font-bold mb-12 block">{t('philosophy.label')}</span>
        <h2 className="philo-text text-4xl md:text-7xl font-serif text-ivory leading-tight italic">
          "{t('philosophy.intro')}" 
          <br />
          <span className="text-gold not-italic mt-4 block">{t('philosophy.focus')} <span className="underline decoration-1 underline-offset-8">{t('philosophy.highlight')}</span> {t('philosophy.suffix')}</span>
        </h2>
      </div>
    </section>
  );
};

// --- Food Gallery ---
const FoodGallery = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">PORTFOLIO</span>
          <h2 className="text-5xl md:text-7xl font-serif text-obsidian italic">{t('gallery.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { img: "/assets/oradasazara.jpg", title: t('gallery.item1') },
            { img: "/assets/teletina.jpg", title: t('gallery.item2') },
            { img: "/assets/losos.jpg", title: t('gallery.item3') }
          ].map((item, i) => (
            <div key={i} className="group relative h-[600px] overflow-hidden rounded-3xl">
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                alt={item.title} 
                width={800}
                height={600}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-obsidian/10 group-hover:bg-transparent transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-obsidian/80 to-transparent">
                <h3 className="text-2xl font-serif text-ivory italic">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Protocol Section ---
const ProtocolSection = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-32 bg-obsidian text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {t('stack').map((step, i) => (
            <div key={i} className="relative group">
              <div className="h-[500px] overflow-hidden rounded-3xl mb-8 relative">
                <img 
                  src={[ "/assets/meat.jpg", "/assets/ribs.jpg", "/assets/steak.jpg" ][i]} 
                  className="w-full h-full object-cover" 
                  alt={step.title} 
                  width={1920}
                  height={1080}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
                <span className="absolute top-8 left-8 text-6xl font-serif text-gold/30 italic group-hover:text-gold transition-colors duration-500">
                  {step.num}
                </span>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-serif italic mb-4">{step.title}</h3>
                  <p className="text-ivory/60 font-light leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Marquee Section ---
const MarqueeSection = () => {
  return (
    <div className="py-12 bg-gold overflow-hidden whitespace-nowrap border-y border-obsidian">
      <div className="flex animate-marquee items-center">
        {[1,2,3,4,5,6].map((i) => (
          <React.Fragment key={i}>
            <span className="text-4xl md:text-6xl font-serif text-obsidian italic mx-12">PIZZERIA EX</span>
            <Star className="w-8 h-8 text-obsidian fill-obsidian" />
            <span className="text-4xl md:text-6xl font-serif text-obsidian italic mx-12">SINCE 1988</span>
            <Star className="w-8 h-8 text-obsidian" />
            <span className="text-4xl md:text-6xl font-serif text-obsidian italic mx-12">SRDOČI RIJEKA</span>
            <Star className="w-8 h-8 text-obsidian fill-obsidian" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// --- Big Statement ---
const BigStatement = () => {
  const { t } = useContext(LanguageContext);
  return (
    <section className="py-40 bg-ivory text-center px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-9xl font-serif text-obsidian leading-[0.85] italic mb-12">
          {t('philosophy.highlight')} <br />
          <span className="text-gold tracking-tighter not-italic">{t('philosophy.suffix')}</span>
        </h2>
        <div className="w-24 h-px bg-gold mx-auto mb-12" />
        <p className="text-obsidian/40 text-xl font-light italic tracking-widest uppercase">
          30+ GODINA TRADICIJE
        </p>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <Philosophy />
      <FoodGallery />
      <MarqueeSection />
      <ProtocolSection />
      <BigStatement />
    </>
  );
};

export default HomePage;
