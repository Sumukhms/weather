import Header from "./components/Header";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Weather />
      </main>
      <Footer />
    </>
  );
}
