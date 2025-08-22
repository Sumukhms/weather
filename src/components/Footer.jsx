export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-30 backdrop-blur-md shadow-lg mt-auto border-t border-gray-700">
      <div className="max-w-6xl mx-auto text-center p-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Weather Hub. Built with ❤️ by Sumukh.
      </div>
    </footer>
  );
}