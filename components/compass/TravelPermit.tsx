import { FileText, ExternalLink, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TravelPermit = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Travel Permit',
      subtitle: 'Here you apply for your permit for Tanzania',
      intro: 'Please apply for your visa or travel permit online via the official Tanzanian Immigration website:',
      websiteTitle: 'Tanzania Electronic Visa Application System',
      website: 'visa.immigration.go.tz',
      prepareTitle: 'Prepare Before You Apply',
      prepareText: 'Make sure you have the following ready before starting your online application:',
      guidelinesText: 'You are welcome to view the official details and guidelines:',
      processingTitle: 'Processing Time',
      processingText: 'Standard processing for the online eVisa usually takes 4–7 working days. In some cases, it can take up to 10 days.',
      arrivalTitle: 'Arrival Option',
      arrivalText: 'You can also obtain a visa on arrival at Tanzanian airports; processing normally takes 15–60 minutes if all documents are in order. We do recommend to apply before hand and online.',
      requirements: [
        'Valid passport (minimum 6 months validity)',
        'Recent passport-size photo',
        'Travel itinerary or booking confirmation',
        'Yellow fever vaccination certificate (if applicable)',
        'Payment method for visa fee (credit/debit card)'
      ]
    },
    de: {
      title: 'Reisegenehmigung',
      subtitle: 'Hier beantragen Sie Ihre Genehmigung für Tansania',
      intro: 'Bitte beantragen Sie Ihr Visum oder Ihre Reisegenehmigung online über die offizielle tansanische Einwanderungswebsite:',
      websiteTitle: 'Tansania Elektronisches Visum-Antragssystem',
      website: 'visa.immigration.go.tz',
      prepareTitle: 'Vorbereiten vor der Antragstellung',
      prepareText: 'Stellen Sie sicher, dass Sie folgendes bereit haben, bevor Sie Ihren Online-Antrag starten:',
      guidelinesText: 'Sie können gerne die offiziellen Details und Richtlinien einsehen:',
      processingTitle: 'Bearbeitungszeit',
      processingText: 'Die Standardbearbeitung für das Online-eVisum dauert normalerweise 4–7 Werktage. In einigen Fällen kann es bis zu 10 Tage dauern.',
      arrivalTitle: 'Ankunftsoption',
      arrivalText: 'Sie können auch ein Visum bei der Ankunft an tansanischen Flughäfen erhalten; die Bearbeitung dauert normalerweise 15–60 Minuten, wenn alle Dokumente in Ordnung sind. Wir empfehlen jedoch, im Voraus und online zu beantragen.',
      requirements: [
        'Gültiger Reisepass (mindestens 6 Monate gültig)',
        'Aktuelles Passfoto',
        'Reiseroute oder Buchungsbestätigung',
        'Gelbfieberimpfbescheinigung (falls zutreffend)',
        'Zahlungsmethode für Visagebühr (Kredit-/Debitkarte)'
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="travel-permit" className="space-y-8">
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-red-500 to-orange-500 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4 mb-4">
          <FileText className="w-12 h-12 text-red-600" />
          {t.title}
        </h2>
        <p className="text-2xl text-gray-600 italic font-light">{t.subtitle}</p>
      </div>

      <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=1600&q=80" 
          alt="Passport and Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-orange-900 flex items-center justify-center">
          <p className="text-white text-xl px-8 text-center leading-relaxed max-w-3xl">{t.intro}</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-10 rounded-2xl shadow-2xl text-white">
        <h3 className="text-lg font-bold mb-4">{t.websiteTitle}</h3>
        <a 
          href={`https://${t.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold flex items-center gap-4 hover:text-amber-200 transition-colors group"
        >
          {t.website}
          <ExternalLink className="w-10 h-10 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <h3 className="text-3xl font-bold text-amber-800 flex items-center gap-3">
          <Check className="w-8 h-8" />
          {t.prepareTitle}
        </h3>
        <p className="text-gray-700 text-lg">{t.prepareText}</p>
        <div className="grid md:grid-cols-2 gap-4">
          {t.requirements.map((req, index) => (
            <div key={index} className="flex items-start gap-4 bg-emerald-50 p-5 rounded-xl border-l-4 border-emerald-500 hover:shadow-md transition-shadow">
              <div className="text-amber-600 mt-1">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-amber-700">{req}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-amber-50 p-8 rounded-2xl border-l-4 border-amber-500 space-y-4">
        <p className="text-gray-700 text-lg">{t.guidelinesText}</p>
        <a 
          href="https://immigration.go.tz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-700 font-semibold text-sm hover:text-emerald-900 flex items-center gap-3 group"
        >
          immigration.go.tz
          <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-8 rounded-2xl border-l-4 border-blue-500">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">{t.processingTitle}</h3>
          <p className="text-amber-700 leading-relaxed">{t.processingText}</p>
        </div>
        <div className="bg-green-50 p-8 rounded-2xl border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-amber-800 mb-4">{t.arrivalTitle}</h3>
          <p className="text-amber-700 leading-relaxed">{t.arrivalText}</p>
        </div>
      </div>
    </section>
  );
};

export default TravelPermit;