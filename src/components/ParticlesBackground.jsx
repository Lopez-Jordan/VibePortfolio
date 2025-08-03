import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#445877", "#C4BA9D", "#2C3E50"],
          },
          links: {
            color: "#445877",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce"
            },
            random: true,
            speed: 1,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.3
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        detectRetina: true
      }}
      style={{
        position: "absolute",
        zIndex: 0,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    />
  );
};

export default ParticlesBackground;
