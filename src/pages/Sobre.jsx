export default function Sobre() {
  return (
    <section id="sobre" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Texto */}
        <div className="md:w-2/3 space-y-6 text-lg leading-relaxed">
          <h2 className="text-5xl font-transforma mb-6">Sobre a Brisa</h2>

          <p>
            A Brisa Design nasceu em Leiria, mas o design não tem fronteiras – os nossos projetos
            ganham vida em qualquer parte do mundo!
          </p>

          <p className="italic">
            O nome Brisa vem da Brisa do Lis, um doce tradicional de Leiria, e simboliza exatamente
            aquilo que queremos trazer para cada projeto: <br />
            <span className="italic text-white/90">
              leveza, autenticidade e um toque especial que faz a diferença.
            </span>
          </p>

          <p className="font-semibold">
            Se procuras um design que dá vida ao teu negócio ou produto, transmite emoção e deixa
            a sua marca, a Brisa é para ti – onde quer que estejas no mundo.
          </p>
        </div>

        {/* Logotipo */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/brisadesignweb/bdlogo.png"
            alt="Logotipo Brisa Design"
            className="w-64 h-auto"
          />
        </div>
      </div>
    </section>
  );
}
