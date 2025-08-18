import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { FaUserGraduate, FaLaptopCode, FaHandshake } from "react-icons/fa";

const programs = [
  {
    icon: <FaUserGraduate size={48} className="text-cyan-400" />,
    title: "Geleceğin Yazılımcısı Bursu",
    description:
      "Maddi imkanları kısıtlı, parlak gençlere üniversite ve bootcamp eğitimleri için tam kapsamlı burs sağlıyoruz.",
  },
  {
    icon: <FaLaptopCode size={48} className="text-cyan-400" />,
    title: "Yoğun Kodlama Kampları",
    description:
      "Sektörün ihtiyaçlarına yönelik, 3 aylık yoğun ve proje odaklı bootcamp'ler düzenleyerek mezunlarımızı iş hayatına hazırlıyoruz.",
  },
  {
    icon: <FaHandshake size={48} className="text-cyan-400" />,
    title: "Birebir Mentorluk Ağı",
    description:
      "Alanında uzman gönüllü mentorlarımızla öğrencilerimizi bir araya getirerek kariyer yollarında onlara rehberlik ediyoruz.",
  },
];

export const ProgramsSection = () => {
  return (
    // Navbar'daki linkle eşleşmesi için id="programs" ekliyoruz
    <section id="programs" className="w-full bg-gray-900 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Programlarımız
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Desteğinizle Neler Başarıyoruz?
          </h3>
          <p className="mt-6 text-lg text-gray-300">
            Yapılan her bağış, gençlerimizin potansiyelini açığa çıkaran bu üç
            temel program aracılığıyla doğrudan hayata dokunuyor.
          </p>
        </div>

        {/* Program Kartları */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card
              key={program.title}
              className="flex flex-col text-center items-center"
            >
              <div className="mb-6">{program.icon}</div>
              <h4 className="text-2xl font-bold text-white">{program.title}</h4>
              <p className="mt-4 flex-grow text-gray-300">
                {program.description}
              </p>
              <div className="mt-8">
                <Button variant="secondary">Detayları İncele</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
