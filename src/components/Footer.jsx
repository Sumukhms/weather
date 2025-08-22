export default function Footer() {
    return (
      <footer className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg mt-10">
        <div className="max-w-6xl mx-auto text-center p-4 text-sm">
          © {new Date().getFullYear()} Weather App. Built with ❤️ using React & Tailwind.
        </div>
      </footer>
    );
  }
  