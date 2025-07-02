import React, { useState } from "react";
import { Upload } from "lucide-react";

const translations = {
  en: {
    dir: "ltr",
    title: "PDF Services",
    intro: "Upload your PDF file and describe the edits you need. We'll get back to you within 24 hours.",
    name: "Your Name",
    email: "Email",
    file: "PDF File",
    description: "What do you want to modify?",
    placeholder: "E.g., remove watermark, change text, merge with another file...",
    submit: "Submit Request",
    note: "Your PDF will be treated securely and confidentially. You'll receive an email with pricing and estimated delivery."
  },
  ar: {
    dir: "rtl",
    title: "خدمات PDF",
    intro: "ارفع ملف PDF ووضح التعديلات المطلوبة. سنرد عليك خلال 24 ساعة.",
    name: "اسمك",
    email: "البريد الإلكتروني",
    file: "ملف PDF",
    description: "ما التعديلات المطلوبة؟",
    placeholder: "مثلاً: إزالة علامة مائية، تغيير نص، دمج مع ملف آخر...",
    submit: "إرسال الطلب",
    note: "سيتم التعامل مع ملفك بسرية تامة. سيتم التواصل معك عبر البريد لتحديد السعر وموعد التسليم."
  }
};

export default function App() {
  const [lang, setLang] = useState("ar");
  const t = translations[lang];

  return (
    <div dir={t.dir} className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6 flex flex-col items-center">
      <div className="mb-4">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border p-2 rounded text-sm shadow"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-blue-700">{t.title}</h1>

      <div className="w-full max-w-2xl bg-white shadow-xl p-6 space-y-4 rounded-xl border border-gray-200">
        <p className="text-gray-700 text-sm">{t.intro}</p>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t.name}</label>
          <input className="w-full border p-2 rounded shadow-sm" placeholder={t.name} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t.email}</label>
          <input type="email" className="w-full border p-2 rounded shadow-sm" placeholder={t.email} />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t.file}</label>
          <input type="file" accept="application/pdf" className="w-full p-2 border rounded shadow-sm" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">{t.description}</label>
          <textarea rows={4} className="w-full border p-2 rounded shadow-sm" placeholder={t.placeholder}></textarea>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded flex justify-center items-center font-semibold">
          <Upload className="w-4 h-4 mr-2" /> {t.submit}
        </button>
      </div>

      <div className="text-sm text-gray-500 mt-6 max-w-xl text-center">
        {t.note}
      </div>
    </div>
  );
}
