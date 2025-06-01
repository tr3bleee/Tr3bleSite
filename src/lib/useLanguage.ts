import { useEffect, useState } from 'react';
import type { Language } from './translations';

export function useLanguage() {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'language' && e.newValue) {
                setLanguage(e.newValue as Language);
            }
        };

        const handleLanguageChange = (e: CustomEvent) => {
            setLanguage(e.detail);
        };

        window.addEventListener('storage', handleStorageChange);
        window.addEventListener('languageChange', handleLanguageChange as EventListener);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            window.removeEventListener('languageChange', handleLanguageChange as EventListener);
        };
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
        
        window.dispatchEvent(new CustomEvent('languageChange', { detail: newLanguage }));
    };

    return {language, toggleLanguage};
}
