import { AlertCircle, Check, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQs = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Dos and Don\'ts (FAQs)',
      dosTitle: 'Do\'s',
      dos: [
        'Do support local and reliable projects. If you want to give back, talk to us first, we will connect you with initiatives that truly make a difference.',
        'Do enjoy local transport safely. If you take a pikipiki (motorbike taxi), wear a helmet, choose a driver with two mirrors and a well-maintained bike.',
        "Do eat local food, including street food, but you are welcome to check in with us about safe and trusted places. Tanzania's flavors are part of your travel story.",
        "Do drink bottled or filtered water. Tap water is not safe to drink. In lodges, you'll often find recycled glass bottles, it's part of a conscious approach to reducing plastic.",
        'Do respect local culture and dress modestly (cover shoulders and knees, especially in rural or religious areas).',
        'Do use only licensed taxis or transfers, especially at night.',
        'Do listen to your guide or lodge staff. Safety rules in nature protect both you and the wildlife.',
        'Do carry a copy of your passport and visa separately, keeping the originals safe.',
        'Do stay aware of changing weather. Climate conditions can shift quickly; flexibility is part of travel here.',
        'Do pick up what you can. Leaving a place a little cleaner than you found it makes a quiet but real impact.'
      ],
      dontsTitle: 'Don\'ts',
      donts: [
        'Dont walk alone at night or in unfamiliar neighborhoods.',
        'Dont wear flashy jewelry or show large amounts of cash in public.',
        'Dont accept rides from unofficial taxis or strangers offering transport.',
        'Dont visit or donate to orphanages on your own. Support community-based projects instead. Its the ethical way to help.',
        'Dont feed or provoke wild animals, and never leave the vehicle during safaris unless your guide says its safe.',
        'Dont take or share photos of people, especially children, without permission.',
        'Dont ignore basic health precautions. Use mosquito nets, stay hydrated, and protect yourself from the sun.',
        'Dont underestimate the environment. Weather, altitude, and sun exposure can change quickly, especially when climbing Kilimanjaro.',
        'Dont accept or use plastic bags. They re banned in Tanzania. Bring reusable bags or ask us for sustainable options.'
      ]
    },
    de: {
      title: 'Dos und Don\'ts (FAQs)',
      dosTitle: 'Dos',
      dos: [
        'Unterstützen Sie lokale und zuverlässige Projekte. Wenn Sie etwas zurückgeben möchten, sprechen Sie zuerst mit uns, wir verbinden Sie mit Initiativen, die wirklich einen Unterschied machen.',
        'Genießen Sie lokale Verkehrsmittel sicher. Wenn Sie einen Pikipiki (Motorradtaxi) nehmen, tragen Sie einen Helm, wählen Sie einen Fahrer mit zwei Spiegeln und einem gut gewarteten Motorrad.',
        'Essen Sie lokale Speisen, einschließlich Straßenessen, aber Sie sind herzlich eingeladen, sich bei uns über sichere und vertrauenswürdige Orte zu erkundigen. Die Aromen Tansanias sind Teil Ihrer Reisegeschichte.',
        'Trinken Sie Flaschen- oder gefiltertes Wasser. Leitungswasser ist nicht sicher zu trinken. In Lodges finden Sie oft recycelte Glasflaschen, es ist Teil eines bewussten Ansatzes zur Reduzierung von Plastik.',
        'Respektieren Sie die lokale Kultur und kleiden Sie sich bescheiden (bedecken Sie Schultern und Knie, besonders in ländlichen oder religiösen Gebieten).',
        'Verwenden Sie nur lizenzierte Taxis oder Transfers, besonders nachts.',
        'Hören Sie auf Ihren Guide oder Lodge-Mitarbeiter. Sicherheitsregeln in der Natur schützen sowohl Sie als auch die Tierwelt.',
        'Tragen Sie eine Kopie Ihres Passes und Visums separat, bewahren Sie die Originale sicher auf.',
        'Bleiben Sie sich über wechselndes Wetter bewusst. Klimabedingungen können sich schnell ändern; Flexibilität ist Teil des Reisens hier.',
        'Sammeln Sie auf, was Sie können. Einen Ort ein wenig sauberer zu hinterlassen, als Sie ihn gefunden haben, hat eine stille, aber echte Wirkung.'
      ],
      dontsTitle: 'Don\'ts',
      donts: [
        'Gehen Sie nachts nicht alleine oder in unbekannten Nachbarschaften.',
        'Tragen Sie keinen auffälligen Schmuck oder zeigen Sie große Bargeldbeträge in der Öffentlichkeit.',
        'Akzeptieren Sie keine Fahrten von inoffiziellen Taxis oder Fremden, die Transport anbieten.',
        'Besuchen oder spenden Sie nicht auf eigene Faust an Waisenhäuser. Unterstützen Sie stattdessen gemeindebasierte Projekte. Das ist der ethische Weg zu helfen.',
        'Füttern oder provozieren Sie keine Wildtiere und verlassen Sie niemals das Fahrzeug während Safaris, es sei denn, Ihr Guide sagt, es ist sicher.',
        'Machen oder teilen Sie keine Fotos von Menschen, insbesondere Kindern, ohne Erlaubnis.',
        'Ignorieren Sie keine grundlegenden Gesundheitsvorsichtsmaßnahmen. Verwenden Sie Moskitonetze, bleiben Sie hydratisiert und schützen Sie sich vor der Sonne.',
        'Unterschätzen Sie nicht die Umgebung. Wetter, Höhe und Sonnenexposition können sich schnell ändern, besonders beim Klettern des Kilimandscharo.',
        'Akzeptieren oder verwenden Sie keine Plastiktüten. Sie sind in Tansania verboten. Bringen Sie wiederverwendbare Taschen mit oder fragen Sie uns nach nachhaltigen Optionen.'
      ]
    }
  };

  const t = translations[language];

  return (
    <section id="faqs" className="space-y-8">
      <div className="relative">
        <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-red-500 rounded-full"></div>
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 flex items-center gap-4">
          <AlertCircle className="w-12 h-12 text-yellow-600" />
          {t.title}
        </h2>
      </div>

      <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl mb-8">
        <img 
          src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1600&q=80" 
          alt="Travel Safety" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/80 to-red-900/80"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Do's */}
        <div className="space-y-6">
          <div className="bg-amber-600 p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <Check className="w-10 h-10" />
              {t.dosTitle}
            </h3>
          </div>
          <div className="space-y-4">
            {t.dos.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-emerald-50 p-6 rounded-xl border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                <Check className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Don'ts */}
        <div className="space-y-6">
          <div className="bg-red-600 p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <X className="w-10 h-10" />
              {t.dontsTitle}
            </h3>
          </div>
          <div className="space-y-4">
            {t.donts.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow">
                <X className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;