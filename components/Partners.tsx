'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const Partners = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Our Partners',
      partners: [
        {
          name: 'Peak Planet',
          description: 'Our trusted mountain partner for Kilimanjaro experiences and the operational force behind Sky & Soul on the mountain.',
          image: '/peakplanet.jpeg',
        },
        {
          name: 'Kilidove / Mawe Lodges',
          description: 'Our trusted partner sharing Tanzanian hospitality, working toward Travelife Sustainable Certification.',
          image: '/MaweLodgesTeam.jpg',
        },
        {
          name: 'Culture Arts Center (CAC)',
          description: 'A vibrant hub where tradition meets innovation, fostering cultural exchange and empowering the next generation.',
          image: '/cacmakumira.jpeg',
        },
      ],
    },
    de: {
      title: 'Unsere Partner',
      partners: [
        {
          name: 'Peak Planet',
          description: 'Unser vertrauensvoller Bergpartner für Kilimandscharo-Erlebnisse und die operative Kraft hinter Sky & Soul am Berg.',
          image: '/peakplanet.jpeg',
        },
        {
          name: 'Kilidove / Mawe Lodges',
          description: 'Unser vertrauensvoller Partner, der tansanische Gastfreundschaft teilt und auf die Travelife-Nachhaltigkeitszertifizierung hinarbeitet.',
          image: '/kilidove.jpeg',
        },
        {
          name: 'Culture Arts Center (CAC)',
          description: 'Ein lebendiges Zentrum, wo Tradition auf Innovation trifft und kulturellen Austausch fördert.',
          image: '/cacmakumira.jpeg',
        },
      ],
    },
  };

  const t = translations[language];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.partners.map((partner, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={200}
                    height={150}
                    className="mx-auto rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;