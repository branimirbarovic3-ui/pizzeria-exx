import React, { useState, useContext } from 'react';
import { Star, Pizza, Flame, Coffee, Utensils, FileText, Download, Info } from 'lucide-react';
import { cn } from '../utils/cn';
import { LanguageContext } from '../context/LanguageContext';

const MenuPage = () => {
  const { t, lang } = useContext(LanguageContext);
  const [activeCategory, setActiveCategory] = useState(0);

  const menuData = [
    {
      id: 0,
      title: t('menuPage.cat0'),
      icon: <Star className="w-5 h-5" />,
      items: [
        { name: t('menuPage.items.sp1_n'), desc: t('menuPage.items.sp1_d'), price: "8.50 €", badge: t('menuPage.items.badge_pop') },
        { name: t('menuPage.items.sp2_n'), desc: t('menuPage.items.sp2_d'), price: "12.00 €" },
        { name: t('menuPage.items.sp3_n'), desc: t('menuPage.items.sp3_d'), price: "11.00 €" },
        { name: t('menuPage.items.sp4_n'), desc: t('menuPage.items.sp4_d'), price: "9.50 €" },
        { name: t('menuPage.items.sp5_n'), desc: t('menuPage.items.sp5_d'), price: "10.50 €" }
      ]
    },
    {
      id: 1,
      title: t('menuPage.cat1'),
      icon: <Pizza className="w-5 h-5" />,
      items: [
        { name: t('menuPage.items.m1_n'), desc: t('menuPage.items.m1_d'), price: "9.20 €" },
        { name: t('menuPage.items.m2_n'), desc: t('menuPage.items.m2_d'), price: "9.50 €" },
        { name: t('menuPage.items.m3_n'), desc: t('menuPage.items.m3_d'), price: "9.00 €" },
        { name: t('menuPage.items.m4_n'), desc: t('menuPage.items.m4_d'), price: "10.00 €" },
        { name: t('menuPage.items.m5_n'), desc: t('menuPage.items.m5_d'), price: "9.00 €" }
      ]
    },
    {
      id: 2,
      title: t('menuPage.cat2'),
      icon: <Flame className="w-5 h-5" />,
      items: [
        { name: t('menuPage.items.g1_n'), desc: t('menuPage.items.g1_d'), price: "8.50 €" },
        { name: t('menuPage.items.g2_n'), desc: t('menuPage.items.g2_d'), price: "9.00 €" },
        { name: t('menuPage.items.g3_n'), desc: t('menuPage.items.g3_d'), price: "9.50 €" },
        { name: t('menuPage.items.g4_n'), desc: t('menuPage.items.g4_d'), price: "15.00 €" },
        { name: t('menuPage.items.g5_n'), desc: t('menuPage.items.g5_d'), price: "28.00 €", badge: t('menuPage.items.badge_share') }
      ]
    },
    {
      id: 3,
      title: t('menuPage.cat3'),
      icon: <Coffee className="w-5 h-5" />,
      items: [
        { name: t('menuPage.items.b1_n'), desc: t('menuPage.items.b1_d'), price: "6.50 €" },
        { name: t('menuPage.items.b2_n'), desc: t('menuPage.items.b2_d'), price: "7.50 €" },
        { name: t('menuPage.items.b3_n'), desc: t('menuPage.items.b3_d'), price: "8.00 €" },
        { name: t('menuPage.items.b4_n'), desc: t('menuPage.items.b4_d'), price: "4.50 €" },
        { name: t('menuPage.items.b5_n'), desc: t('menuPage.items.b5_d'), price: "6.50 €" }
      ]
    },
    {
      id: 4,
      title: t('menuPage.cat4'),
      icon: <Utensils className="w-5 h-5" />,
      items: [
        { name: t('menuPage.items.s1_n'), desc: t('menuPage.items.s1_d'), price: "10.00 €" },
        { name: t('menuPage.items.s2_n'), desc: t('menuPage.items.s2_d'), price: "11.00 €" },
        { name: t('menuPage.items.s3_n'), desc: t('menuPage.items.s3_d'), price: "14.50 €" },
        { name: t('menuPage.items.s4_n'), desc: t('menuPage.items.s4_d'), price: "10.50 €" },
        { name: t('menuPage.items.s5_n'), desc: t('menuPage.items.s5_d'), price: "10.50 €" },
        { name: t('menuPage.items.s6_n'), desc: t('menuPage.items.s6_d'), price: "11.50 €" }
      ]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <span className="text-gold uppercase tracking-[0.3em] text-xs font-medium block mb-4">
            {t('menuPage.title1')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-ivory mb-6 italic">
            {t('menuPage.title2')}
          </h1>
          <p className="text-ivory/60 max-w-2xl mx-auto font-light leading-relaxed">
            {t('menuPage.desc')}
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4 scrollbar-hide no-scrollbar">
          {menuData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              aria-label={`Show ${cat.title}`}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-500 whitespace-nowrap",
                activeCategory === cat.id 
                  ? "bg-gold text-obsidian border-gold scale-105 shadow-[0_0_20px_rgba(201,168,76,0.3)]" 
                  : "bg-transparent text-ivory/60 border-ivory/10 hover:border-gold/50 hover:text-gold"
              )}
            >
              {cat.icon}
              <span className="text-sm font-medium tracking-wide uppercase">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 min-h-[600px]">
          {menuData[activeCategory].items.map((item, idx) => (
            <div 
              key={idx}
              className="group flex flex-col p-6 rounded-2xl bg-ivory/[0.02] border border-ivory/5 hover:border-gold/20 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="flex justify-between items-baseline mb-3">
                <h3 className="text-xl font-serif text-ivory group-hover:text-gold transition-colors duration-300 italic">
                  {item.name}
                </h3>
                <div className="h-px flex-grow mx-4 borer-t border-ivory/10 group-hover:border-gold/20 transition-all duration-500" />
                <span className="text-gold font-medium tracking-wider">{item.price}</span>
              </div>
              <div className="flex justify-between items-start gap-4">
                <p className="text-ivory/50 text-sm font-light leading-relaxed max-w-[80%] italic">
                  {item.desc}
                </p>
                {item.badge && (
                  <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-gold/10 text-gold border border-gold/20 rounded">
                    {item.badge}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Full PDF Section */}
        <div className="mt-24 pt-20 border-t border-ivory/5 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full text-xs tracking-widest uppercase mb-8">
            <Info className="w-4 h-4" />
            {t('menuPage.pdfNote')}
          </div>
          
          <h2 className="text-3xl font-serif text-ivory mb-4 italic">{t('menuPage.full')}</h2>
          <p className="text-ivory/50 mb-12 font-light">{t('menuPage.fullDesc')}</p>

          <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden bg-obsidian border border-ivory/5 shadow-2xl h-[800px]">
            <iframe
              src={`https://docs.google.com/viewer?url=https://www.pizzeriaex.com/assets/JELOVNIK.pdf&embedded=true`}
              className="w-full h-full border-none"
              title="Pizzeria EX Menu"
              loading="lazy"
            >
              <div className="flex items-center justify-center h-full text-ivory">
                {t('menuPage.loading')}
              </div>
            </iframe>
          </div>

          <div className="mt-12">
            <a
              href="/assets/JELOVNIK.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-obsidian rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(201,168,76,0.2)]"
            >
              <Download className="w-5 h-5" />
              {t('menuPage.btn')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
