import React, { useState, useEffect, useRef } from "react";

const LogoCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  // Sample award logos - replace these with your actual award logos
  const awardLogos = [
    {
      id: 1,
      name: "Innovation Award 2024",
      src: "/api/placeholder/200/80",
      alt: "Innovation Award 2024",
    },
    {
      id: 2,
      name: "Best AI Solution 2024",
      src: "/api/placeholder/200/80",
      alt: "Best AI Solution 2024",
    },
    {
      id: 3,
      name: "Technology Excellence Award",
      src: "/api/placeholder/200/80",
      alt: "Technology Excellence Award",
    },
    {
      id: 4,
      name: "AI Breakthrough Award",
      src: "/api/placeholder/200/80",
      alt: "AI Breakthrough Award",
    },
    {
      id: 5,
      name: "Industry Leader Award",
      src: "/api/placeholder/200/80",
      alt: "Industry Leader Award",
    },
    {
      id: 6,
      name: "Digital Transformation Award",
      src: "/api/placeholder/200/80",
      alt: "Digital Transformation Award",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      if (!isPaused && container) {
        position -= 1;
        container.style.transform = `translateX(${position}px)`;

        // Reset position when the first logo is out of view
        const containerWidth = container.offsetWidth;
        const viewportWidth = container.parentElement.offsetWidth;

        if (Math.abs(position) > containerWidth - viewportWidth + 200) {
          position = 0;
        }

        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <div className="flex flex-col items-center w-full max-w-6xl mx-auto mt-8 mb-12 px-4">
      <h2 className="text-2xl font-bold mb-6 text-purple-700 self-start">
        Recent Awards
      </h2>

      <div className="relative w-full overflow-hidden bg-gray-50 rounded-lg p-4 shadow-md">
        <div
          className="flex space-x-8"
          ref={containerRef}
          style={{ whiteSpace: "nowrap" }}
        >
          {/* Duplicate the logos array to create a seamless loop */}
          {[...awardLogos, ...awardLogos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex flex-col items-center min-w-40"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-16 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-700">
                {logo.name}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="absolute bottom-2 right-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm transition-colors duration-200"
        >
          {isPaused ? "Resume" : "Pause"}
        </button>
      </div>
    </div>
  );
};

export default LogoCarousel;
