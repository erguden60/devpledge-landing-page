import Image from "next/image";

export const MissionSection = () => {
  return (
    <section id="mission" className="w-full bg-gray-950 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Sol Taraf: Metin İçeriği */}
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400">
              Misyonumuz
            </h2>
            <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
              Her Genç Beyne Teknolojide Fırsat Eşitliği
            </h3>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              DevPledge olarak, sosyo-ekonomik durumu ne olursa olsun,
              teknolojiye tutkulu her gencin hayallerine ulaşabileceğine
              inanıyoruz. Misyonumuz, onlara sadece kodlama eğitimi vermek
              değil; aynı zamanda problem çözme, eleştirel düşünme ve liderlik
              gibi yetenekler kazandırarak geleceğin teknoloji dünyasında söz
              sahibi olmalarını sağlamaktır.
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Yaptığınız her destek, bir gencin eğitim materyallerine, mentorluk
              programlarına ve ilham verici bir topluluğa erişimini sağlar.
            </p>
          </div>

          <div className="relative h-80 w-full lg:h-96 rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/10">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
              alt="Mentorship and learning"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
