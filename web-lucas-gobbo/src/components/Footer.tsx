import Link from 'next/link';

export const Footer = () => {
  const socialLinks = {
    twitter: '#',
    instagram: '#',
    linkedin: '#',
  };

  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna de Redes Sociales */}
        <div className="flex space-x-4">
            {/* Aquí irían los iconos SVG */}
            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a>
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white">IG</a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LI</a>
        </div>

        {/* Columna Explorer */}
        <div>
          <h3 className="font-semibold text-white mb-4">Explorer</h3>
          <ul className="space-y-2">
            <li><Link href="/politique-confidentialite" className="hover:text-white">Politique de Confidentialité</Link></li>
            <li><Link href="/mentions-legales" className="hover:text-white">Mentions Légales</Link></li>
            <li><Link href="/faq" className="hover:text-white">Questions fréquemment posées</Link></li>
          </ul>
        </div>

        {/* Columna Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            <li><Link href="/benedicte" className="hover:text-white">Titre du Livre</Link></li>
            <li><Link href="/histoires-courtes" className="hover:text-white">Histoires Courtes</Link></li>
            <li><Link href="/a-propos" className="hover:text-white">À Propos</Link></li>
            <li><Link href="/presse" className="hover:text-white">Presse</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Columna Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-white">Formulaire de contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-12 border-t border-gray-800 pt-8">
        <p>&copy; {new Date().getFullYear()} Lucas R. Gobbo. Tous droits réservés. Développé par Koda.</p>
      </div>
    </footer>
  );
};