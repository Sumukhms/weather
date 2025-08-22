import Header from "./components/Header";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen text-white font-orbitron relative">
      {/* Static Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(http://googleusercontent.com/file_content/4)` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 -z-10" />
      
      <Header />
      <main className="flex-grow w-full z-10">
        <Weather />
      </main>
      <Footer />
    </div>
  );
}
