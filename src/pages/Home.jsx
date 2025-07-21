export default function Home() {
  return (
    <header id="Home" className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/brisadesignweb/leiriapb.jpg')" }}>
      
      {/* ELIPSE 6 */}
      <img
        src="/brisadesignweb/elipse6.png"
        alt=""
        className="absolute bottom-0 left-0 w-64 sm:w-80 opacity-70 pointer-events-none"
      />

      {/* ELIPSE 7 */}
      <div className="absolute top-[9] right-[-550px] w-[70vw] pointer-events-none"> 
        <img
          src="/brisadesignweb/elipse7.png"
          alt=""
          className="w-full opacity-70"
        />
      </div>

      {/* LOGO NO CANTO SUPERIOR ESQUERDO */}
      <div className="absolute top-6 left-6 sm:left-16 z-50">
        <img src="/brisadesignweb/bdmediumwhite.png" alt="Logotipo" className="w-24 sm:w-32 h-auto" />
      </div>

      {/* NAVBAR CENTRAL (DESKTOP) */}
      <div className="hidden md:flex justify-center absolute top-6 left-1/2 -translate-x-1/2 z-40">
        <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full flex items-center gap-8">
          {[
            { href: "#sobre", label: "Sobre" },
            { href: "#servicos", label: "Serviços" },
            { href: "#portfolio", label: "Portfólio" },
            { href: "#contactos", label: "Contactos" },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="relative group px-4 py-2 overflow-hidden rounded-full"
            >
              <span className="relative z-10 text-white font-bold group-hover:text-black transition-colors duration-300">
                {label}
              </span>
              <span className="absolute inset-0 bg-[#BDE128] rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          ))}
        </div>
      </div>

      {/* TEXTO PRINCIPAL */}
    <div className="h-full flex items-start px-6 sm:px-16">
      <div className="max-w-xl text-left mt-24 sm:mt-0 pt-32 sm:pt-59">
        <h1 className="text-3xl sm:text-5xl font-transforma leading-tight text-left">
          <span className="text-white block mb-2">A SUA MARCA.</span>
          <span className="relative inline-block text-[#BDE128] px-6 py-4 mb-2 align-middle">
            <span
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "/brisadesignweb/13.svg')",
                backgroundSize: "auto 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                opacity: 0.4,
              }}
            ></span>
            <span className="relative z-10">A NOSSA ARTE.</span>
          </span>
          <span className="text-white block">O SEU SUCESSO.</span>
        </h1>
      </div>
    </div>

    </header>
  );
}
