// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Các file ngôn ngữ, ví dụ: en.json, vi.json
import translationEN from './locales/en.json';
import translationVI from './locales/vi.json';

const resources = {
  en: {
    translation: translationEN,
  },
  vi: {
    translation: translationVI,
  },
};

i18n
  .use(LanguageDetector) // Sử dụng LanguageDetector để tự động phát hiện ngôn ngữ
  .use(initReactI18next) // Pass i18n instance vào react-i18next.
  .init({
    resources,
    fallbackLng: 'en', // Ngôn ngữ mặc định khi không tìm thấy ngôn ngữ được phát hiện
    interpolation: {
      escapeValue: false, // React đã an toàn trước XSS, không cần escape
    },
  });

export default i18n;
