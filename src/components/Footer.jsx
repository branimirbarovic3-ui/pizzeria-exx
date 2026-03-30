import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { EXLogo } from './Logo';
import { LanguageContext } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useContext(LanguageContext);
  return (
    <footer className="bg-obsidian pt-24 pb-12 border-t border-ivory/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-4 gap-16 md:gap-8 mb-20 text-center md:text-left">
        
        {/* Col 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <Link to="/" aria-label="Home page link" className="mb-0 group">
            <EXLogo className="w-24 h-24 mb-4" loading="lazy" />
          </Link>
          <p className="text-ivory/80 max-w-sm leading-relaxed text-lg font-serif italic mb-8 mx-auto md:mx-0">
            {t('brandDesc')}
          </p>
          <div className="flex gap-6">
            <a 
              href="https://www.instagram.com/pizzerijaex/" 
              aria-label="Follow us on Instagram"
              className="w-12 h-12 rounded-xl bg-ivory/5 flex items-center justify-center text-ivory/40 hover:bg-gold hover:text-obsidian transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href="https://web.facebook.com/PizzeriaEx/?_rdc=1&_rdr" 
              aria-label="Follow us on Facebook"
              className="w-12 h-12 rounded-xl bg-ivory/5 flex items-center justify-center text-ivory/40 hover:bg-gold hover:text-obsidian transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-ivory font-serif text-xl mb-10 italic uppercase border-b border-gold/40 pb-2 inline-block">
            {t('footer.nav')}
          </h4>
          <ul className="space-y-6">
            {['home', 'menu', 'contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'home' ? '/' : `/${item}`} 
                  aria-label={`Go to ${t(`nav.${item}`)} page`}
                  className="text-ivory/50 hover:text-gold transition-colors text-sm uppercase tracking-widest font-bold group flex items-center gap-2"
                >
                  <span className="w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  {t(`nav.${item}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Address & Info */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-ivory font-serif text-xl mb-10 italic uppercase border-b border-gold/40 pb-2 inline-block">
            {t('footer.findUs')}
          </h4>
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-ivory/50 hover:text-gold transition-colors">
              <MapPin className="w-5 h-5 text-gold shrink-0" />
              <span className="text-sm font-light italic">Miroslava Krleže 11, 51000 Rijeka</span>
            </div>
            <div className="flex items-center gap-4 text-ivory/50">
              <Phone className="w-5 h-5 text-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold opacity-60 mb-1">{t('footer.phoneLabel')}</span>
                <a href="tel:+38551621516" className="text-sm hover:text-gold transition-colors italic">051 621 516</a>
              </div>
            </div>
            <div className="flex items-center gap-4 text-ivory/50">
              <Mail className="w-5 h-5 text-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold opacity-60 mb-1">{t('footer.emailLabel')}</span>
                <a href="mailto:info@pizzeriaex.com" className="text-sm hover:text-gold transition-colors italic">info@pizzeriaex.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Col 4: Hours */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-ivory font-serif text-xl mb-10 italic uppercase border-b border-gold/40 pb-2 inline-block">
            {t('footer.hours')}
          </h4>
          <div className="space-y-8">
            <div className="flex items-center gap-4 text-ivory/50">
              <Clock className="w-5 h-5 text-gold shrink-0" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-gold opacity-60 mb-1 italic">{t('footer.everyday')}</span>
                <span className="text-sm italic font-bold">10:00 – 23:00</span>
              </div>
            </div>
            <div className="p-4 bg-ivory/5 rounded-2xl border border-ivory/10">
              <span className="text-[10px] uppercase tracking-widest text-gold opacity-60 mb-2 block italic">{t('footer.deliveryLabel')}</span>
              <p className="text-xs text-ivory/70 italic leading-relaxed">
                10:00 – 22:00 <br />
                <span className="text-[10px] opacity-40">{t('footer.weekendNote')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 border-t border-ivory/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-ivory/30 text-[10px] uppercase tracking-[0.2em] font-medium">
          &copy; {new Date().getFullYear()} PIZZERIA EX. {t('footer.rights')}
        </p>
        <p className="text-ivory/30 text-[10px] uppercase tracking-[0.2em] font-medium flex items-center gap-2">
          MADE IN RIJEKA <span className="w-2 h-2 rounded-full bg-gold" /> EST. 1988
        </p>
      </div>
    </footer>
  );
};

export default Footer;
