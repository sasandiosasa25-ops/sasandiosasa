import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins, Comfortaa } from 'next/font/google';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/sonner';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});
const comfortaa = Comfortaa({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-comfortaa'
});

export const metadata: Metadata = {
  title: 'SasaNdioSasa - Transformative Travel Experiences in Tanzania',
  description: 'Experience Tanzania through safaris, inner journeys, and retreats. SasaNdioSasa offers transformative travel experiences that connect cultures, restore balance, and create sustainable impact. Explore Serengeti, Tarangire, Lake Victoria, and more. Contact: +255 755 688 091',
  keywords: 'Tanzania safaris, inner safari, retreats Tanzania, Serengeti tours, Tarangire National Park, sustainable travel Tanzania, transformative travel, leadership retreats, cultural immersion Tanzania, Lake Victoria, Arusha, Dar es Salaam, wellness retreats Africa',
  authors: [{ name: 'SasaNdioSasa' }],
  openGraph: {
    title: 'SasaNdioSasa - Transformative Travel Experiences in Tanzania',
    description: 'Explore Tanzania\'s vast landscapes through safaris, inner journeys, and transformative retreats aligned with UN Sustainability Goals.',
    url: 'https://sasandiosasa.com',
    siteName: 'SasaNdioSasa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SasaNdioSasa - Tanzania Travel Experiences',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SasaNdioSasa - Transformative Travel in Tanzania',
    description: 'Experience Tanzania through safaris, inner journeys, and retreats. Sustainable travel that connects cultures.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${comfortaa.variable} ${poppins.variable} font-comfortaa bg-brand-bg-light`}>
        <LanguageProvider>
          <Navigation />
          <div className="pt-20" /> 
          {children}
      
          <Toaster />
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}