"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Comforter } from 'next/font/google';
import styles from './SplashScreen.module.scss';

const comforter = Comforter({ 
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const SplashScreen = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = 'unset';
    }, 3500); // 3.5 seconds total duration
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className={`${styles.textContainer} ${comforter.className}`}>
            <motion.div
              className={styles.text}
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            >
              Jai Dwarkadhish...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
