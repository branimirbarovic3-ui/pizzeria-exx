import React, { useState } from 'react';

export const translations = {
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

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
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
