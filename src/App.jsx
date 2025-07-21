import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Portfolio from './pages/Portfolio';
import Contactos from './pages/Contactos';
import Footer from './footer';

export default function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="relative">
      {/* MENU HAMBURGUER MOBILE */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* MENU SLIDE MOBILE */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-black bg-opacity-90 backdrop-blur-md text-white p-6 transform transition-transform duration-300 ease-in-out z-40 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <nav className="flex flex-col gap-6 mt-12 text-xl">
          <a href="#sobre" onClick={closeMenu} className="hover:text-lime-300">Sobre</a>
          <a href="#servicos" onClick={closeMenu} className="hover:text-lime-300">Serviços</a>
          <a href="#portfolio" onClick={closeMenu} className="hover:text-lime-300">Portfólio</a>
          <a href="#contactos" onClick={closeMenu} className="hover:text-lime-300">Contactos</a>
        </nav>
      </div>

      {/* SEÇÕES DA LANDING PAGE */}
      <Home />
      <Sobre />
      <Servicos />
      <Portfolio />
      <Contactos />

      {/* BOTÃO VOLTAR AO TOPO */}
      {showTopButton && (
        <a
          href="#Home"
          className="fixed bottom-6 right-6 bg-white/30 text-black px-4 py-2 rounded-full shadow-lg hover:bg-[#BDE128] transition-colors duration-300 text-sm font-semibold z-50 backdrop-blur-sm"
        >
          ↑ Voltar ao topo
        </a>
      )}
      <Footer />
    </main>
  );
}
