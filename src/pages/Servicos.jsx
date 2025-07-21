export default function Servicos() {
  return (
    <section id="servicos" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-stretch">

        {/* Coluna de Texto */}
        <div className="flex-1 space-y-20 justify-between flex flex-col">
          <h3 className="text-5xl font-transforma text-[#BDE128]">Serviços</h3>

          {/* Branding */}
          <div className="border-l-4 border-[#BDE128] pl-4">
            <h4 className="text-4xl font-transforma text-[#BDE128] mb-4">Branding</h4>
            <ul className="grid grid-cols-2 gap-x-8 text-xl leading-relaxed">
              <li>Logos</li>
              <li>Símbolos</li>
              <li>Packaging</li>
              <li>entre outros</li>
              <li className="col-span-2">Ilustrações</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="border-l-4 border-[#BDE128] pl-4">
            <h4 className="text-4xl font-transforma text-[#BDE128] mb-4">Conteúdo para redes sociais</h4>
            <ul className="space-y-2 text-xl leading-relaxed">
              <li>Posts e histórias para o Instagram</li>
              <li>Templates</li>
              <li>Edição de short vídeos</li>
              <li>entre outros</li>
            </ul>
          </div>

          {/* Materiais Gráficos */}
          <div className="border-l-4 border-[#BDE128] pl-4">
            <h4 className="text-4xl font-transforma text-[#BDE128] mb-4">Design gráfico</h4>
            <ul className="grid grid-cols-2 gap-x-8 text-xl leading-relaxed">
              <li>Posters</li>
              <li>Convites</li>
              <li>Flyers</li>
              <li>Outdoors</li>
              <li>Cartões de negócio</li>
              <li>entre outros</li>
              <li className="col-span-2">Catálogos</li>
            </ul>
          </div>
        </div>

        {/* Coluna de Imagens */}
        <div className="flex-1 flex flex-col items-center justify-center gap-10 pl-6 lg:pl-20 mt-4">
          <img
            src="/iphones.png"
            alt="Mockups de Instagram"
            className="w-[27rem] rotate-3 drop-shadow-lg"
          />
          <img
            src="/cards.png"
            alt="Cartão Brisa Design"
            className="w-[20rem] rotate-90 drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
