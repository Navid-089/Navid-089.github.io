import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// external sites and PDFs open in a new tab; in-page anchors and mailto stay put
export function newTabProps(url: string) {
    if (/^https?:\/\//.test(url) || url.endsWith('.pdf')) {
        return { target: '_blank', rel: 'noopener noreferrer' };
    }

    return {};
}
