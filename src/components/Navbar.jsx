import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import { LanguageContext } from '../context/LanguageContext';

const EXLogo = ({ className, ...props }) => (
  <img 
    src="/assets/logo_no_bg.png" 
    alt="Pizzeria Ex Logo"
    className={cn("w-24 h-24 object-contain rounded-full", className)}
    width={96}
    height={96}
    {...props}
  />
);

const Navbar = () => {
  const { lang, toggleLang, t } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.menu'), path: '/jelovnik' },
    { name: t('nav.contact'), path: '/kontakt' }
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-700 font-sans",
        isScrolled ? "bg-obsidian/95 backdrop-blur-xl border-b border-ivory/5 py-4 shadow-2xl" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          aria-label="Back to home"
          className="relative z-50 flex items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <EXLogo className={cn("transition-transform duration-500", isScrolled ? "w-12 h-12" : "w-16 h-16")} />
          <div className="flex flex-col">
            <span className="text-ivory font-serif text-xl tracking-wider group-hover:text-gold transition-colors italic">EX</span>
            <span className="text-gold text-[10px] tracking-[0.3em] font-bold">PIZZERIA</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group",
                location.pathname === item.path ? "text-gold" : "text-ivory/60 hover:text-gold"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-2 left-0 h-px bg-gold transition-all duration-500",
                location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          
          <div className="h-8 w-px bg-ivory/10 mx-2" />
          
          {/* Lang Toggle */}
          <div className="flex items-center gap-4 bg-ivory/5 p-1 rounded-full border border-ivory/10 shadow-inner">
            <button 
              onClick={() => toggleLang('hr')}
              aria-label="Set language to Croatian"
              className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all",
                lang === 'hr' ? "bg-gold text-obsidian shadow-lg" : "text-ivory/40 hover:text-ivory"
              )}
            >
              HR
            </button>
            <button 
              onClick={() => toggleLang('en')}
              aria-label="Set language to English"
              className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all",
                lang === 'en' ? "bg-gold text-obsidian shadow-lg" : "text-ivory/40 hover:text-ivory"
              )}
            >
              EN
            </button>
          </div>
          
          <Link 
            to="/kontakt"
            aria-label={t('nav.book')}
            className="px-8 py-3 bg-ivory text-obsidian text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold transition-all duration-500 hover:scale-105 active:scale-95 rounded-full shadow-xl"
          >
            {t('nav.book')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-50 text-ivory p-2 group"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed inset-0 bg-obsidian z-40 flex flex-col items-center justify-center transition-all duration-700 ease-in-out",
        isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      )}>
        <div className="flex flex-col items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-4xl font-serif text-ivory italic hover:text-gold transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex gap-8 mt-10">
             <button onClick={() => toggleLang('hr')} className={cn("text-lg font-bold tracking-widest", lang === 'hr' ? "text-gold" : "text-ivory/40")}>HR</button>
             <button onClick={() => toggleLang('en')} className={cn("text-lg font-bold tracking-widest", lang === 'en' ? "text-gold" : "text-ivory/40")}>EN</button>
          </div>
          <Link 
            to="/kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-10 px-12 py-5 bg-gold text-obsidian font-bold uppercase tracking-widest rounded-full"
          >
            {t('nav.book')}
          </Link>
          <div className="flex gap-8 mt-12">
            <Instagram className="w-6 h-6 text-ivory/40" />
            <Facebook className="w-6 h-6 text-ivory/40" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
