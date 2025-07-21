import { useEffect, useRef } from "react";

export default function Portfolio() {
  const brushedRef = useRef(null);
  const doradoRef = useRef(null);

  useEffect(() => {
    const scrollSpeed = 0.5;

    const scroll = (ref) => {
      if (ref.current) {
        ref.current.scrollLeft += scrollSpeed;
        if (
          ref.current.scrollLeft + ref.current.clientWidth >=
          ref.current.scrollWidth
        ) {
          ref.current.scrollLeft = 0;
        }
      }
    };

    const brushedInterval = setInterval(() => scroll(brushedRef), 25);
    const doradoInterval = setInterval(() => scroll(doradoRef), 25);

    return () => {
      clearInterval(brushedInterval);
      clearInterval(doradoInterval);
    };
  }, []);

  const projetos = {
    Brushed: [
      ["/brushed1.png", "/brushed6.png"],
      ["/brushed2.png", "/brushed3.png"],
      ["/brushed4.png", "/brushed5.png"],
    ],
    Dorado: [
      ["/dorado5.png", "/dorado2.png"],
      ["/dorado1.png", "/dorado3.png"],
      ["/dorado4.png", "/dorado5.png"],
    ],
  };

  return (
    <section id="portfolio" className="py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-transforma text-[#BDE128] mb-16 text-left">Portfólio</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* BRUSHED */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">Brushed</h3>
            <div
              ref={brushedRef}
              className="flex overflow-x-hidden whitespace-nowrap"
            >
              {projetos.Brushed.flat().map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-[400px] w-auto object-cover inline-block"
                  alt={`Brushed ${i}`}
                />
              ))}
            </div>
          </div>

          {/* DORADO */}
          <div>
            <h3 className="text-3xl font-semibold mb-4">Dorado</h3>
            <div
              ref={doradoRef}
              className="flex overflow-x-hidden whitespace-nowrap"
            >
              {projetos.Dorado.flat().map((src, i) => (
                <img
                  key={i}
                  src={src}
                  className="h-[400px] w-auto object-cover inline-block"
                  alt={`Dorado ${i}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div> {/* <- esta div faltava ser fechada corretamente */}
    </section>
  );
}

