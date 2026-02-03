"use client";
import { useEffect, useState } from "react";

// Seeded random function for consistent SSR/client results
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    if (typeof window === "undefined") return;

    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      // Use seeded random for consistent results
      newStars.push({
        id: i,
        size: seededRandom(i * 1) * 3 + 1,
        x: seededRandom(i * 2) * 100,
        y: seededRandom(i * 3) * 100,
        opacity: seededRandom(i * 4) * 0.5 + 0.5,
        animationDuration: seededRandom(i * 5) * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      // Use seeded random for consistent results
      newMeteors.push({
        id: i,
        size: seededRandom(i * 10 + 1) * 2 + 1,
        x: seededRandom(i * 10 + 2) * 100,
        y: seededRandom(i * 10 + 3) * 20,
        delay: seededRandom(i * 10 + 4) * 15,
        animationDuration: seededRandom(i * 10 + 5) * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  // Don't render until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0"></div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay,
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};
