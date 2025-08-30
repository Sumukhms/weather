import { motion } from 'framer-motion';

// --- SVG Icons for Social Links ---
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start pt-10 px-4 min-h-full"
    >
      <div className="w-full max-w-2xl p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl">
        <h2 className="text-4xl font-bold text-center drop-shadow-[0_0_5px_rgba(0,150,255,0.7)] mb-2">
          Contact Me
        </h2>
        <p className="text-center text-lg text-gray-300 mb-8">
          I'm always open to discussing new projects or creative ideas.
        </p>

        {/* Contact Form Placeholder */}
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none" />
          <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-lg font-bold text-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300">
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 text-center">
            <p className="text-gray-300 mb-4">Connect with me on social media:</p>
            <div className="flex justify-center gap-8">
                <a href="https://github.com/Sumukhms" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
                    <GithubIcon />
                </a>
                <a href="https://www.linkedin.com/in/sumukh-m-s-04a1aa25b" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
                    <LinkedinIcon />
                </a>
            </div>
        </div>
      </div>
    </motion.div>
  );
}