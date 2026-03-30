import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Context & Components
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy Loaded Pages & Direct
import HomePage from './pages/HomePage';
const MenuPage = lazy(() => import('./pages/MenuPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger);

// --- Scroll To Top Helper ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Loading Component ---
const LoadingScreen = () => (
  <div className="fixed inset-0 bg-obsidian flex items-center justify-center z-[9999]">
    <div className="flex flex-col items-center gap-6">
      <div className="w-16 h-16 border-4 border-gold/20 border-t-gold rounded-full animate-spin" />
      <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold animate-pulse">
        Pizzeria EX 1988
      </span>
    </div>
  </div>
);

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-obsidian min-h-screen font-sans selection:bg-gold selection:text-obsidian">
          <ScrollToTop />
          <Navbar />
          
          <Suspense fallback={<LoadingScreen />}>
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/jelovnik" element={<MenuPage />} />
                <Route path="/kontakt" element={<ContactPage />} />
              </Routes>
            </main>
          </Suspense>

          <Footer />
          
          <Analytics />
          <SpeedInsights />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
