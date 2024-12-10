import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  const duration = 2000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    confetti({
      particleCount: 50, // Кількість частинок
      startVelocity: 70, // Початкова швидкість
      spread: 120, // Ширший розкид
      gravity: 2.8, // Прискорене падіння
      ticks: 150, // Тривалість життя частинок
      zIndex: 999, // Максимальне значення z-index
      origin: {
        x: Math.random(), // Рандомна горизонтальна позиція
        y: 0, // Початок у верхній частині
      },
    });
  }, 40); // Інтенсивність анімації
};
