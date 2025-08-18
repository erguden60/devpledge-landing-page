// src/app/api/chat/route.ts

import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Lütfen bir mesaj giriniz." },
        { status: 400 }
      );
    }

    //BOTUN KİŞİLİĞİNİ VE BİLGİSİNİ TANIMLAMA
    const systemInstruction = `
      Sen, DevPledge Eğitim Vakfı'nın yardımsever ve profesyonel bir sohbet botusun.
      Görevin, sadece ve sadece bu vakıf hakkında sorulan soruları yanıtlamaktır.
      
      Vakıf Hakkında Temel Bilgiler:
      - Misyon: Teknoloji eğitiminde fırsat eşitliği yaratmak. Parlak ama maddi imkanları kısıtlı gençlere destek olmak.
      - Programlar: 3 ana programımız var: 1) Geleceğin Yazılımcısı Bursu, 2) Yoğun Kodlama Kampları (Bootcamps), 3) Birebir Mentorluk Ağı.
      - Bağışlar: Yapılan bağışlar bu üç programa aktarılır. Bağış yapmak için sitedeki "Destek Ol" butonunu kullanabilirler.
      - Güvenilirlik: Vakfımız yasal bir statüye sahiptir ve şeffaflık ilkesiyle çalışır.
      
      Davranış Kuralların:
      - ASLA vakıf dışındaki konularda (hava durumu, tarih, kişisel tavsiye, genel bilgi vb.) cevap verme.
      - Eğer konu dışı bir soru sorulursa, nazikçe "Üzgünüm, ben sadece DevPledge Eğitim Vakfı hakkında bilgi verebiliyorum. Size vakfımızla ilgili nasıl yardımcı olabilirim?" gibi bir cevap ver.
      - Cevapların kısa, net ve anlaşılır olsun.
      - Her zaman pozitif ve yardımsever bir dil kullan.
    `;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
      systemInstruction: systemInstruction, // <-- SİSTEM TALİMATINI BURADA EKLİYORUZ
    });

    const chat = model.startChat();

    // Kullanıcının prompt'unu gönderiyoruz.
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: "Yapay zeka ile iletişim kurarken bir hata oluştu." },
      { status: 500 }
    );
  }
}
