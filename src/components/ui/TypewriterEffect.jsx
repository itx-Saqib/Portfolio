import { useState, useEffect } from 'react';

const TypewriterEffect = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="inline-block relative">
      {currentText}
      <span className="animate-pulse border-r-2 border-text-secondary ml-1 absolute h-full top-0"></span>
    </span>
  );
};

export default TypewriterEffect;
