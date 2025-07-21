export default function Footer() {
  return (
    <footer className="bg-[#181818]  text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        
        {/* LOGO + COPYRIGHT */}
        <div className="flex items-center gap-4">
          <img src="/bdmediumwhite.png" alt="Logotipo Brisa Design" className="w-20 sm:w-24" />
          <p className="text-sm text-white/80">
            © 2025 Brisa Design. Todos os direitos reservados.
            <br className="hidden sm:block" />
            Feito com amor em Leiria.
          </p>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col sm:flex-row gap-3 sm:gap-8 text-sm sm:text-base text-white/90">
          <a href="#sobre" className="hover:text-[#BDE128] transition">Sobre a Brisa</a>
          <a href="#servicos" className="hover:text-[#BDE128] transition">Serviços</a>
          <a href="#portfolio" className="hover:text-[#BDE128] transition">Portfólio</a>
          <a href="#contactos" className="hover:text-[#BDE128] transition">Contactos</a>
        </nav>
      </div>
    </footer>
  );
}