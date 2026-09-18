import type { Metadata } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';

import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { GENERAL_INFO } from '@/lib/data';

const serifFont = Source_Serif_4({
    subsets: ['latin'],
    variable: '--font-serif',
});

const sansFont = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
});

const description =
    'Wahid Al Azad Navid is a Lecturer at Presidency University and a CSE graduate of BUET, working on computational biology and machine learning.';

export const metadata: Metadata = {
    metadataBase: new URL(GENERAL_INFO.siteUrl),
    title: {
        default: `${GENERAL_INFO.name} | Computational Biology and Machine Learning`,
        template: `%s | ${GENERAL_INFO.name}`,
    },
    description,
    authors: [{ name: GENERAL_INFO.name }],
    openGraph: {
        title: GENERAL_INFO.name,
        description,
        url: GENERAL_INFO.siteUrl,
        type: 'profile',
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: GENERAL_INFO.name,
    url: GENERAL_INFO.siteUrl,
    email: `mailto:${GENERAL_INFO.email}`,
    jobTitle: 'Lecturer',
    worksFor: { '@type': 'CollegeOrUniversity', name: 'Presidency University' },
    alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Bangladesh University of Engineering and Technology',
    },
    sameAs: [
        GENERAL_INFO.githubProfile,
        GENERAL_INFO.linkedinProfile,
        GENERAL_INFO.scholarProfile,
        GENERAL_INFO.orcidProfile,
    ].filter(Boolean),
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${serifFont.variable} ${sansFont.variable} antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(personJsonLd),
                    }}
                />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
