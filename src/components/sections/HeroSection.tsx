import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1974&auto=format&fit=crop"
          alt="Collaboration and learning environment"
          fill
          style={{ objectFit: "cover" }}
          className="opacity-20"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900 to-gray-900"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
          Bilgiyle <span className="text-cyan-400">Geleceği Kodla</span>, Bir
          Hayatı Değiştir.
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Teknoloji eğitiminde fırsat eşitliği yaratıyoruz. Yapacağın her bağış,
          parlak bir genç beynin potansiyelini ortaya çıkararak geleceğin
          teknoloji liderlerinden biri olmasına yardımcı olacak.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" className="w-full sm:w-auto">
            Bir Genci Destekle
          </Button>
          <Button variant="secondary" className="w-full sm:w-auto">
            Vakfı Tanı
          </Button>
        </div>
      </div>
    </section>
  );
};
