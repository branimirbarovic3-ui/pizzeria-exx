import React, { useState, useContext } from 'react';
import { MapPin, Phone, Mail, Clock, Info } from 'lucide-react';
import { cn } from '../utils/cn';
import { LanguageContext } from '../context/LanguageContext';

const ContactPage = () => {
  const { t } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    type: 'reservation',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Hvala vam na upitu! Javit ćemo vam se u najkraćem mogućem roku.');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-obsidian pt-28">
      {/* Header */}
      <section className="py-20 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-6 block">RESERVATIONS</span>
          <h1 className="text-5xl md:text-8xl font-serif text-ivory italic mb-8">
            {t('contact.header')}
          </h1>
          <p className="text-ivory/50 text-lg md:text-xl font-light italic leading-relaxed max-w-2xl mx-auto">
            {t('contact.sub')}
          </p>
        </div>
      </section>

      {/* Events Banner */}
      <section className="py-20 bg-ivory text-obsidian px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block">{t('contact.events.title')}</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight italic">
                Proslavite Svoje<br />
                <span className="text-gold not-italic underline decoration-1 underline-offset-8">Najvažnije Trenutke</span>
              </h2>
              <p className="text-obsidian/60 text-lg leading-relaxed font-light italic">
                {t('contact.events.body')}
              </p>
              <div className="flex gap-4 p-6 bg-gold/5 rounded-2xl border border-gold/10">
                <Info className="w-6 h-6 text-gold shrink-0" />
                <p className="text-sm italic">{t('contact.events.cta')}</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-1000 group">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale-0 group-hover:scale-105 transition-transform duration-1000" 
                  alt="Events at Pizzeria Ex"
                  width={800}
                  height={1000}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid: Form & Info */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Form */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-serif text-ivory mb-4 italic">{t('contact.form.title')}</h3>
              <div className="w-12 h-0.5 bg-gold" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-ivory/40 font-bold">{t('contact.form.fname')}</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    aria-label="First Name"
                    className="w-full bg-ivory/[0.03] border border-ivory/10 rounded-xl px-6 py-4 text-ivory focus:border-gold/50 focus:bg-ivory/[0.05] transition-all outline-none"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-ivory/40 font-bold">{t('contact.form.lname')}</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    aria-label="Last Name"
                    className="w-full bg-ivory/[0.03] border border-ivory/10 rounded-xl px-6 py-4 text-ivory focus:border-gold/50 focus:bg-ivory/[0.05] transition-all outline-none"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-ivory/40 font-bold">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-label="Email Address"
                    className="w-full bg-ivory/[0.03] border border-ivory/10 rounded-xl px-6 py-4 text-ivory focus:border-gold/50 focus:bg-ivory/[0.05] transition-all outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-ivory/40 font-bold">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    aria-label="Phone Number"
                    className="w-full bg-ivory/[0.03] border border-ivory/10 rounded-xl px-6 py-4 text-ivory focus:border-gold/50 focus:bg-ivory/[0.05] transition-all outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="type" className="text-xs uppercase tracking-widest text-ivory/40 font-bold">{t('contact.form.type')}</label>
                <select
                  id="type"
                  name="type"
                  aria-label="Type of Inquiry"
                  className="w-full bg-ivory/[0.03] border border-ivory/10 rounded-xl px-6 py-4 text-ivory/60 focus:border-gold/50 focus:bg-ivory/[0.05] transition-all outline-none appearance-none"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="reservation" className="bg-obsidian">{t('contact.form.opt1')}</option>
                  <option value="event" className="bg-obsidian">{t('contact.form.opt2')}</option>
                  <option value="other" className="bg-obsidian">{t('contact.form.opt3')}</option>
                </select>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-ivory/40 font-bold">{t('contact.form.msg')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  aria-label="Message text"
                  className="w-full bg-ivory/[0.03] border border-ivory/10 rounded-xl px-6 py-4 text-ivory focus:border-gold/50 focus:bg-ivory/[0.05] transition-all outline-none resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                aria-label={t('contact.form.btn')}
                className="w-full py-5 bg-gold text-obsidian rounded-xl font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_10px_20px_rgba(201,168,76,0.2)]"
              >
                {t('contact.form.btn')}
              </button>
            </form>
          </div>

          {/* Map & Info */}
          <div className="space-y-16">
            <div className="aspect-square w-full rounded-3xl overflow-hidden border border-ivory/5 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.308732644218!2d14.36440807604586!3d45.34262104151747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a74288077595%3A0xe54e17e4726c043e!2sPizzeria%20Ex!5e0!3m2!1shr!2shr!4v1711394567232!5m2!1shr!2shr"
                className="w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Pizzeria Ex Lokacija"
              ></iframe>
            </div>

            <div className="grid gap-10">
              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-ivory font-serif italic text-xl mb-2">{t('contact.map.header')}</h4>
                  <p className="text-ivory/50 font-light italic">{t('contact.map.sub')}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-ivory font-serif italic text-xl mb-2">{t('footer.phoneLabel')}</h4>
                  <a href="tel:+38551621516" className="text-ivory/50 font-light hover:text-gold transition-colors italic">051 621 516</a>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-obsidian transition-all duration-500">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-ivory font-serif italic text-xl mb-2">{t('footer.hours')}</h4>
                  <p className="text-ivory/50 font-light italic uppercase">{t('footer.everyday')} 10:00 – 23:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
