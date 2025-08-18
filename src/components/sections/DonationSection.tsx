import { Button } from "@/components/ui/Button";
import Link from "next/link";

export const DonationSection = () => {
  return (
    <section id="donate" className="w-full bg-gray-900 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto bg-gray-800/50 border border-gray-700/60 rounded-xl p-8 md:p-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            DEĞİŞİMİN BİR PARÇASI OL
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Geleceğin Teknoloji Liderlerini Birlikte Yetiştirelim
          </h3>
          <p className="mt-6 text-lg text-gray-300">
            Desteğinizle daha fazla gence ulaşıp onlara parlak bir gelecek
            sunabiliriz. Atacağınız küçük bir adım, büyük hayallerin başlangıcı
            olabilir.
          </p>

          <div className="mt-10">
            <Link href="#">
              {" "}
              <Button
                variant="primary"
                className="w-full sm:w-auto text-xl py-4 px-12"
              >
                Şimdi Destek Ol
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
