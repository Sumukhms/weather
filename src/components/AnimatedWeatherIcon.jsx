import { motion } from 'framer-motion';

const Sun = () => (
    <motion.g animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
        <circle cx="12" cy="12" r="6" fill="#FFD700" stroke="#FFA500" strokeWidth="0.5" />
    </motion.g>
);

const Clouds = () => (
    <motion.g initial={{ x: -10 }} animate={{ x: 10 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}>
        <path d="M17.5 19H9.5C7.01472 19 5 16.9853 5 14.5C5 12.0147 7.01472 10 9.5 10H10C10.5523 10 11 9.55228 11 9C11 7.34315 12.3431 6 14 6C15.6569 6 17 7.34315 17 9C17 9.55228 17.4477 10 18 10H18.5C20.433 10 22 11.567 22 13.5C22 15.433 20.433 17 18.5 17H17.5" fill="white" stroke="#E8E8E8" strokeWidth="0.5" />
        <path d="M12.5 17H7.5C5.567 17 4 15.433 4 13.5C4 11.567 5.567 10 7.5 10H8.5" fill="rgba(255,255,255,0.8)" stroke="#E0E0E0" strokeWidth="0.5" />
    </motion.g>
);


const Rain = () => (
    <motion.g>
        <Clouds />
        <motion.path d="M12 20 L10 25" stroke="#4682B4" strokeWidth="1.5" strokeLinecap="round" initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }} />
        <motion.path d="M16 20 L14 25" stroke="#4682B4" strokeWidth="1.5" strokeLinecap="round" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, repeat: Infinity, delay: 0.7 }} />
    </motion.g>
);

const Thunderstorm = () => (
    <motion.g>
        <Clouds />
        <motion.path d="M14 19 L12 22 L14 22 L13 25" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        />
    </motion.g>
);

export default function AnimatedWeatherIcon({ weather }) {
    const renderIcon = () => {
        const mainCondition = weather.toLowerCase();
        if (mainCondition.includes('rain')) return <Rain />;
        if (mainCondition.includes('thunderstorm')) return <Thunderstorm />;
        if (mainCondition.includes('clouds')) return <Clouds />;
        if (mainCondition.includes('clear')) return <Sun />;
        if (mainCondition.includes('haze') || mainCondition.includes('mist')) return <Clouds />;
        return <Clouds />; // Default icon for other conditions like snow, mist, etc.
    };

    return (
        <svg viewBox="0 0 30 30" width="120" height="120">
            {renderIcon()}
        </svg>
    );
}