import { contactDetails } from '../../lib/contact';
import { dictionary, type Language } from '../../lib/dictionary';

export default function SiteFooter({ lang }: { lang: Language }) {
  const { footer, contact } = dictionary[lang];

  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>{footer}</p>
        <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          {contact.linkedin}
        </a>
      </div>
    </footer>
  );
}
