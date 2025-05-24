import {useState, useEffect} from 'react';
import type {Language} from './translations';

export function useLanguage() {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'ru' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return {language, toggleLanguage};
}
