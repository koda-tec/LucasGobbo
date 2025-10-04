import Link from 'next/link';

export const Navbar = () => {
  return (
    <header className="bg-black text-white sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* RECORDATORIO!! luego colocar el logo de Lucas en caso de haber */}
        <div>
          <Link href="/" className="text-xl font-bold">
            Lucas R. Gobbo
          </Link>
        </div>

        {/* Enlaces de Navegación */}
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link href="/" className="hover:text-gray-300 transition-colors">Accueil</Link></li>
          <li><Link href="/benedicte" className="bg-gray-800 px-3 py-1 rounded-md">Bénédicte</Link></li>
          <li><Link href="/a-propos" className="hover:text-gray-300 transition-colors">À Propos</Link></li>
          <li><Link href="/histoires-courtes" className="hover:text-gray-300 transition-colors">Histoires Courtes</Link></li>
        </ul>

        {/* Botón de Contacto */}
        <div>
          <Link
            href="/contact"
            className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};