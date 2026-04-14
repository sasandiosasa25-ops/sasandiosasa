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
    <section id="travel-permit" className="space-y-4">
      {/* Header */}
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-heading rounded-full opacity-80"></div>
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-heading flex items-center gap-4">
            <FileText className="w-8 h-8 text-brand-primary flex-shrink-0" />
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-brand-primary/80 italic font-light pl-12">
            {t.subtitle}
          </p>
        </div>
      </div>

      <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg group mb-4">
        <img 
          src="/dar8.jpg" 
          alt="Passport and Travel" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-4">
          <div className="text-center text-white">
            <p className="text-sm leading-relaxed">{t.intro}</p>
          </div>
        </div>
      </div>

      {/* Official Website Link Card */}
      <div className="relative bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-heading p-6 rounded-2xl shadow-lg text-white overflow-hidden group">
        <div className="relative z-10">
          <h3 className="text-base font-bold mb-2 opacity-90">{t.websiteTitle}</h3>
          <a
            href={`https://${t.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold flex items-center gap-2 hover:text-white/80 transition-colors group"
          >
            {t.website}
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary overflow-hidden">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <Check className="w-6 h-6 text-brand-primary" />
            <h3 className="text-lg font-bold text-brand-heading">{t.prepareTitle}</h3>
          </div>
          <div className="w-8 h-0.5 bg-gradient-to-r from-brand-primary to-transparent transition-all duration-300 group-hover:w-12"></div>
          <p className="text-gray-700 text-sm">{t.prepareText}</p>

          <div className="grid md:grid-cols-2 gap-2">
            {t.requirements.map((req, index) => (
              <div
                key={index}
                className="group/item flex items-start gap-2 bg-brand-bg-light p-3 rounded-xl border border-brand-border hover:shadow-sm hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="text-brand-primary mt-0.5 transition-transform duration-300 group-hover/item:scale-110">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-gray-700 text-sm">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guidelines Card */}
      <div className="group relative bg-gradient-to-br from-brand-bg-light to-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-secondary overflow-hidden">
        <div className="relative z-10 space-y-2">
          <p className="text-gray-700 text-sm">{t.guidelinesText}</p>
          <a
            href="https://immigration.go.tz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-semibold text-sm hover:text-brand-secondary flex items-center gap-2 group/link w-fit"
          >
            immigration.go.tz
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Processing Time & Arrival Option */}
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-primary overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-brand-heading mb-2">{t.processingTitle}</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-brand-primary to-transparent mb-2 transition-all duration-300 group-hover:w-12"></div>
            <p className="text-gray-700 leading-relaxed text-sm">{t.processingText}</p>
          </div>
        </div>

        <div className="group relative bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-secondary overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-brand-heading mb-2">{t.arrivalTitle}</h3>
            <div className="w-8 h-0.5 bg-gradient-to-r from-brand-secondary to-transparent mb-2 transition-all duration-300 group-hover:w-12"></div>
            <p className="text-gray-700 leading-relaxed text-sm">{t.arrivalText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPermit;