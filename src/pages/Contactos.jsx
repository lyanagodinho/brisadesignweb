import { useState } from 'react';

export default function Contactos() {
  const [formSubmitted, setFormSubmitted] = useState(false);

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
            <strong>instagram:</strong> <a href="https://www.instagram.com/brisadesign.pt" target="_blank" rel="noopener noreferrer">@brisadesign.pt</a>
          </p>
        </div>

        {/* Formulário + Título imagem */}
        <div className="relative space-y-6">
          <img
            src="/brisadesignweb/formstitle.svg"
            alt="Let's Work Together"
            className="w-full mb-6"
          />

          <form
            action="https://formsubmit.co/el/nozapu"
            method="POST"
            target="hidden_iframe"
            onSubmit={() => setFormSubmitted(true)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Campos ocultos */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input type="text" name="nome" placeholder="Nome" className="bg-black rounded-xl px-4 py-3 w-full" required />
            <input type="text" name="apelido" placeholder="Apelido" className="bg-black rounded-xl px-4 py-3 w-full" required />
            <input type="text" name="negocio" placeholder="Nome do negócio" className="bg-black rounded-xl px-4 py-3 w-full sm:col-span-1" />
            <input type="email" name="email" placeholder="E-mail" className="bg-black rounded-xl px-4 py-3 w-full sm:col-span-1" required />

            <button
              type="submit"
              className="col-span-2 relative overflow-hidden bg-[#BDE128] text-black px-6 py-3 rounded-full font-semibold group transition-colors duration-200 hover:bg-black hover:text-white"
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                Enviar
              </span>
              <span className="absolute inset-0 bg-black rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200"></span>
            </button>
          </form>

          {/* Mensagem após envio */}
          {formSubmitted && (
            <p className="text-[#BDE128] text-sm mt-4">
              Obrigado pelo seu interesse! Entraremos em contacto em breve.
            </p>
          )}

          {/* iframe invisível para impedir redirecionamento */}
          <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>

          <p className="text-xs text-white/60 mt-2">
            Estas informações serão utilizadas para entrar em contacto consigo.
          </p>
        </div>
      </div>
    </section>
  );
}
