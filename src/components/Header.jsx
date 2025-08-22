import { Link } from 'react-router-dom';

export default function Header() {
    return (
      <header className="bg-black bg-opacity-30 backdrop-blur-md shadow-lg border-b border-white/20">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-bold drop-shadow-[0_0_5px_rgba(0,150,255,0.7)]">
            🌤 Weather Hub
          </Link>
          <ul className="flex gap-6 text-lg">
            <li><Link to="/" className="hover:text-blue-300 transition-colors duration-300">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-300 transition-colors duration-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300 transition-colors duration-300">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }