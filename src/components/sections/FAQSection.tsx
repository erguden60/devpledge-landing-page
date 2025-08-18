'use client'; // Etkileşimli state yönetimi için bu zorunludur.

import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqData = [
  {
    question: 'Yaptığım bağış tam olarak nereye gidiyor?',
    answer: 'Tüm bağışlar, doğrudan üç ana programımıza aktarılır: Öğrenci bursları, kodlama kamplarının masrafları ve mentorluk ağımızın operasyonel giderleri. Finansal şeffafllık raporlarımızı her 3 ayda bir web sitemizde yayınlıyoruz.',
  },
  {
    question: 'Vakfınız yasal bir statüye sahip mi?',
    answer: 'Evet, DevPledge Vakfı, ilgili kanunlar çerçevesinde kurulmuş, kâr amacı gütmeyen bir eğitim vakfıdır. Tüm faaliyetlerimiz resmi denetime tabidir.',
  },
  {
    question: 'Bağış yaptıktan sonra bir bilgilendirme alacak mıyım?',
    answer: 'Kesinlikle. Bağışınızın ardından e-posta adresinize resmi bir teşekkür ve bağış makbuzu gönderilir. Ayrıca, bültenimize kaydolarak bağışınızın yarattığı etkiyi gösteren başarı hikayelerini ve gelişmeleri düzenli olarak takip edebilirsiniz.',
  },
  {
    question: 'Gönüllü olarak nasıl destek olabilirim?',
    answer: 'Harika bir soru! Para bağışının yanı sıra, mentorluk programımıza katılarak veya etkinliklerimizde gönüllü olarak çalışarak da bize destek olabilirsiniz. Web sitemizdeki "Gönüllü Ol" formunu doldurarak bizimle iletişime geçebilirsiniz.',
  },
];

// DÜZELTME 1: FaqItem bileşeninin alacağı props'lar için bir tip arayüzü (interface) tanımlandı.
interface FaqItemProps {
  item: {
    question: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
}

// DÜZELTME 2: ": any" ifadesi, oluşturduğumuz ": FaqItemProps" tipi ile değiştirildi.
const FaqItem = ({ item, isOpen, onClick }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-700/60">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        <FiChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-400'
          }`}
          size={24}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-300 leading-relaxed">{item.answer}</p>
      </div>
    </div>
  );
};

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // İlk soru açık başlasın

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-gray-950 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık Bölümü */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            MERAK EDİLENLER
          </h2>
          <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Sıkça Sorulan Sorular
          </h3>
        </div>

        {/* Akordeon */}
        <div className="mt-12 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              item={item}
              isOpen={activeIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
