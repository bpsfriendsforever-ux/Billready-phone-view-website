export type Language = 'en' | 'hinglish' | 'hi';

export interface TranslationDict {
  [key: string]: {
    en: string;
    hinglish: string;
    hi: string;
  };
}
