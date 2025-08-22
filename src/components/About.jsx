import { motion } from 'framer-motion';
import ProfilePic from '../assets/profile-pic.jpg';

// --- SVG Icons for Technologies ---
const ReactIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg>
);
const TailwindIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
);
const ViteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
);

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-start pt-10 px-4 min-h-full"
    >
      <div className="w-full max-w-3xl p-8 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl text-center">
        
        {/* Profile Section */}
        <div className="flex flex-col items-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 p-1 mb-4">
                <img src={ProfilePic} alt="Sumukh" className="w-full h-full rounded-full object-cover" />
            </div>
          <h1 className="text-4xl font-bold">Sumukh</h1>
          <p className="text-lg text-cyan-300">Web Developer & Creator of Weather Hub</p>
        </div>

        {/* App Description */}
        <p className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
          Weather Hub is a passion project designed to deliver a clean, fast, and beautiful weather experience. It provides real-time weather data and a 5-day forecast for any location in the world.
        </p>

        {/* Tech Stack Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-6">Powered By Modern Technology</h3>
          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center gap-2">
              <ReactIcon />
              <span className="font-semibold">React</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TailwindIcon />
              <span className="font-semibold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ViteIcon />
              <span className="font-semibold">Vite</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}