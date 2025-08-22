export default function Header() {
    return (
      <header className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold animate__animated animate__fadeInDown">🌤 Weather App</h1>
          <ul className="flex gap-6 text-lg">
            <li className="hover:text-yellow-300 transition"><a href="#">Home</a></li>
            <li className="hover:text-yellow-300 transition"><a href="#">About</a></li>
            <li className="hover:text-yellow-300 transition"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  