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
    <section id="travel-permit" className="space-y-12 lg:space-y-16">
      {/* Header */}
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-heading rounded-full opacity-80"></div>
        <div className="space-y-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-heading flex items-center gap-4">
            <FileText className="w-10 h-10 md:w-12 md:h-12 text-brand-primary flex-shrink-0" />
            {t.title}
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-brand-primary/80 italic font-light pl-14 md:pl-16">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* Hero Split Layout */}
      <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
        <div className="flex flex-col lg:flex-row lg:min-h-[600px]">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-auto lg:w-1/2 overflow-hidden">
            <img 
              src="/dar8.jpg" 
              alt="Passport and Travel" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-brand-heading/70 via-brand-heading/40 to-transparent"></div>
          </div>
          
          <div className="relative lg:w-1/2 flex items-center justify-center p-8 sm:p-10 lg:p-12 xl:p-16 bg-gradient-to-br from-brand-heading via-brand-secondary to-brand-heading overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-primary/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="w-16 h-1 bg-brand-primary mb-6 rounded-full"></div>
              <p className="text-white/95 text-base sm:text-lg lg:text-xl xl:text-2xl leading-relaxed font-light tracking-wide">
                {t.intro}
              </p>
              <div className="w-16 h-1 bg-brand-primary mt-6 rounded-full ml-auto"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Official Website Link Card */}
      <div className="relative bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-heading p-10 lg:p-12 rounded-3xl shadow-2xl text-white overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h3 className="text-lg lg:text-xl font-bold mb-4 opacity-90">{t.websiteTitle}</h3>
          <a 
            href={`https://${t.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl lg:text-3xl xl:text-4xl font-bold flex items-center gap-4 hover:text-white/80 transition-colors group"
          >
            {t.website}
            <ExternalLink className="w-8 h-8 lg:w-10 lg:h-10 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-brand-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
        
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <Check className="w-8 h-8 lg:w-10 lg:h-10 text-brand-primary" />
            <h3 className="text-3xl lg:text-4xl font-bold text-brand-heading">{t.prepareTitle}</h3>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-r from-brand-primary to-transparent transition-all duration-500 group-hover:w-24"></div>
          <p className="text-gray-700 text-lg lg:text-xl">{t.prepareText}</p>
          
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {t.requirements.map((req, index) => (
              <div 
                key={index} 
                className="group/item flex items-start gap-4 bg-brand-bg-light p-5 lg:p-6 rounded-2xl border border-brand-border hover:shadow-md hover:border-brand-primary/30 transition-all duration-300"
              >
                <div className="text-brand-primary mt-1 transition-transform duration-300 group-hover/item:scale-110">
                  <FileText className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-gray-700 text-base lg:text-lg">{req}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Guidelines Card */}
      <div className="group relative bg-gradient-to-br from-brand-bg-light to-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border-l-4 border-brand-secondary overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-secondary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
        
        <div className="relative z-10 space-y-4">
          <p className="text-gray-700 text-lg lg:text-xl">{t.guidelinesText}</p>
          <a 
            href="https://immigration.go.tz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-semibold text-lg lg:text-xl hover:text-brand-secondary flex items-center gap-3 group/link w-fit"
          >
            immigration.go.tz
            <ExternalLink className="w-5 h-5 lg:w-6 lg:h-6 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Processing Time & Arrival Option */}
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-brand-primary overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-primary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-heading mb-4">{t.processingTitle}</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-brand-primary to-transparent mb-4 transition-all duration-500 group-hover:w-20"></div>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">{t.processingText}</p>
          </div>
        </div>
        
        <div className="group relative bg-white p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-brand-secondary overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-brand-secondary/5 to-transparent rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-brand-heading mb-4">{t.arrivalTitle}</h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-brand-secondary to-transparent mb-4 transition-all duration-500 group-hover:w-20"></div>
            <p className="text-gray-700 leading-relaxed text-base lg:text-lg">{t.arrivalText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelPermit;