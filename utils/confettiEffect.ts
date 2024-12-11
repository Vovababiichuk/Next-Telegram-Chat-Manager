import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const duration = 2000; // Тривалість анімації
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    confetti({
      particleCount: 30, // Менше частинок
      startVelocity: 30, // Повільніша швидкість
      spread: 150, // Трохи менший розкид
      gravity: 1.5, // Легке падіння
      ticks: 150, // Тривалість життя частинок
      zIndex: 999, // Максимальне значення z-index
      origin: {
        x: Math.random(), // Рандомна горизонтальна позиція
        y: 1, // Початок знизу
      },
    });
  }, 80); // Інтервал між вибухами, щоб зробити ефект менш насиченим
};
