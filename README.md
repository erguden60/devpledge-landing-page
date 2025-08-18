# DevPledge - Eğitim Odaklı Bağış Platformu 🚀

<img width="1508" height="1736" alt="localhost_3000_ (1)" src="https://github.com/user-attachments/assets/f37c5c7e-9396-4bec-9442-8887fa2515a1" />

Canlı demo için : 🚀
https://devpledge-landing-page-8lp1.vercel.app/

**DevPledge**, teknoloji eğitiminde fırsat eşitliği yaratmayı hedefleyen kâr amacı gütmeyen bir eğitim vakfı için tasarlanmış modern bir landing page projesidir. Bu proje, potansiyel bağışçılara vakfın misyonunu, programlarını ve etkisini etkili bir şekilde sunmayı amaçlar.

Projenin en dikkat çekici özelliklerinden biri, ziyaretçilerin sorularını yanıtlamak ve onlara rehberlik etmek için **Google Gemini API** ile entegre edilmiş akıllı bir sohbet botu içermesidir.

## ✨ Temel Özellikler

-   **Modern ve Duyarlı Arayüz**: Koyu tema üzerine kurulu, tüm cihazlarda (mobil, tablet, masaüstü) kusursuz çalışan şık bir tasarım.
-   **Bileşen Tabanlı Mimari**: React bileşenleri ile oluşturulmuş, bakımı ve geliştirilmesi kolay bir yapı.
-   **Akıllı Sohbet Botu**: Google Gemini API kullanılarak geliştirilmiş, sadece vakıf hakkında bilgi veren, amaca yönelik bir yapay zeka asistanı.
-   **Performans ve SEO Odaklı**: Next.js'in Server-Side Rendering (SSR) yetenekleri sayesinde hızlı yükleme süreleri ve arama motoru dostu bir altyapı.
-   **Güvenli API Kullanımı**: API anahtarları, Next.js Route Handlers (API Routes) sayesinde sunucu tarafında güvenli bir şekilde saklanır ve asla istemciye ifşa edilmez.
-   **Hız Sınırlaması (Rate Limiting)**: Kötüye kullanımı engellemek ve hizmet kalitesini korumak için API rotasında IP tabanlı istek sınırlaması (isteğe bağlı olarak Upstash/Vercel KV ile eklenebilir).

## 🛠️ Kullanılan Teknolojiler

### Frontend

-   **Framework**: [Next.js](https://nextjs.org/) 14+ (App Router)
-   **Dil**: [TypeScript](https://www.typescriptlang.org/)
-   **Stil**: [TailwindCSS](https://tailwindcss.com/)
-   **State Yönetimi**: [React Context API](https://react.dev/learn/passing-data-deeply-with-context)
-   **İkonlar**: [React Icons](https://react-icons.github.io/react-icons/)

### Backend & AI

-   **Backend Framework**: Next.js API Routes (Route Handlers)
-   **Yapay Zeka Modeli**: [Google Gemini API](https://ai.google.dev/) (`gemini-1.5-flash-latest`)
-   **SDK**: `@google/generative-ai`

## 🚀 Projeyi Yerel Makinede Çalıştırma

Bu projeyi kendi makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

-   [Node.js](https://nodejs.org/) (v18 veya üstü)
-   [npm](https://www.npmjs.com/) veya [yarn](https://yarnpkg.com/)

### Kurulum Adımları

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/kullanici-adiniz/devpledge.git
    cd devpledge
    ```

2.  **Bağımlılıkları Yükleyin:**
    ```bash
    npm install
    ```

3.  **Ortam Değişkenlerini Ayarlayın:**
    Projenin kök dizininde `.env.local` adında bir dosya oluşturun. Bu dosyanın içine Google Gemini API anahtarınızı ekleyin.

    ```bash
    # .env.local dosyası içeriği
    GOOGLE_API_KEY="AIzaSy...Sizin_API_Anahtarınız"
    ```

    > **Not:** API anahtarını [Google AI Studio](https://aistudio.google.com/) üzerinden ücretsiz olarak alabilirsiniz.

4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    ```

5.  **Uygulamayı Görüntüleyin:**
    Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📁 Proje Yapısı

Proje, `src` dizini altında organize edilmiş temiz ve ölçeklenebilir bir klasör yapısına sahiptir.

```
/
└── src/
    ├── app/             # Sayfalar, layout'lar ve API rotaları
    │   ├── api/
    │   └── ...
    ├── components/      # Tekrar kullanılabilir React bileşenleri
    │   ├── chat/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    └── context/         # Global state yönetimi için Context API
```
