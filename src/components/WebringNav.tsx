'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function WebringNav() {
    return (
        <nav 
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:bottom-6"
            aria-label="Webring navigation"
        >
            <div className="flex items-center gap-1 sm:gap-2 bg-white/90 dark:bg-black/30 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/70 rounded-full px-3 py-2 sm:px-4 shadow-lg hover:shadow-xl transition-all duration-200">
                <a
                    href="https://webring.otomir23.me/tr3ble/prev"
                    className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors duration-200 hover:scale-105"
                    aria-label="Previous site in webring"
                    title="Previous site"
                >
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
                
                <a
                    href="https://webring.otomir23.me/"
                    className="flex items-center text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200 px-1.5 sm:px-2 leading-none"
                    aria-label="Visit webring homepage"
                    title="Webring"
                >
                    webring
                </a>
                
                <a
                    href="https://webring.otomir23.me/tr3ble/next"
                    className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 transition-colors duration-200 hover:scale-105"
                    aria-label="Next site in webring"
                    title="Next site"
                >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </a>
            </div>
        </nav>
    );
}
