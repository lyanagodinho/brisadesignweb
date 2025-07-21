export default function Contactos() {
  return (
    <section id="contactos" className="bg-[#181818] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Texto à esquerda */}
        <div className="space-y-6">
          <h2 className="text-[#BDE128] text-5xl font-transforma">Contacta-nos</h2>
          <p className="text-white text-lg">
            <strong>Queres dar vida à tua marca? Fala connosco!</strong> Para orçamentos ou dúvidas,
            entra em contacto por e-mail ou DM no Instagram.
          </p>
          <p className="text-[#BDE128] text-md">
            <strong>email:</strong> <a href="mailto:brisadesign.pt@gmail.com">brisadesign.pt@gmail.com</a><br />
            <strong>instagram:</strong> <a href="https://www.instagram.com/brisadesign.pt" target="_blank">@brisadesign.pt</a>
          </p>
        </div>

        {/* Formulário + Título imagem */}
        <div className="relative space-y-6">
          <img
            src="/formstitle.svg"
            alt="Let's Work Together"
            className="w-full mb-6"
          />

          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Nome" className="bg-black rounded-xl px-4 py-3 w-full" />
            <input type="text" placeholder="Apelido" className="bg-black rounded-xl px-4 py-3 w-full" />
            <input type="text" placeholder="Nome do negócio" className="bg-black rounded-xl px-4 py-3 w-full sm:col-span-1" />
            <input type="email" placeholder="E-mail" className="bg-black rounded-xl px-4 py-3 w-full sm:col-span-1" />
            <button
              type="submit"
              className="col-span-2 relative overflow-hidden bg-[#BDE128] text-black px-6 py-3 rounded-full font-semibold group"
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-[#BDE128]">
                  Enviar
              </span>
              <span className="absolute inset-0 bg-white rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
            </button>
          </form>

          <p className="text-xs text-white/60 mt-2">
            Estas informações serão utilizadas para entrar em contato consigo
          </p>
        </div>
      </div>
    </section>
  );
}
