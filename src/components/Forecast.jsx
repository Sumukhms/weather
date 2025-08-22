import { getDayOfWeek } from '../utils/helpers';
import { motion } from "framer-motion";

export default function Forecast({ data }) {
  const dailyForecasts = data.list.filter(item => item.dt_txt.includes("12:00:00"));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="mt-8 w-full max-w-4xl">
      <h3 className="text-2xl font-bold mb-4 text-center">5-Day Forecast</h3>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-5 gap-4"
      >
        {dailyForecasts.map((day, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center p-4 bg-black/30 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg text-center cursor-pointer"
          >
            <p className="text-xl font-bold">{getDayOfWeek(day.dt_txt)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="Weather Icon"
              className="w-20 h-20"
            />
            <div className="text-lg">
              <span className="font-bold">{Math.round(day.main.temp_max)}°</span>
              <span className="text-gray-400 ml-1">{Math.round(day.main.temp_min)}°</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}