import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import Logo from "../assets/Z-blue.svg";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300
  }
});

const CircularText = ({ text, spinDuration = 20, onHover = "speedUp", className = "" }) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    controls.start({
      rotate: rotation.get() + 360,
      scale: 1,
      transition: getTransition(spinDuration, rotation.get())
    });
  }, [spinDuration, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    let transitionConfig = getTransition(spinDuration, start);
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = { rotate: { type: "spring", damping: 20, stiffness: 300 } };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start)
    });
  };

  return (
    <motion.div
      className={`m-0 mx-auto rounded-full xs:size-[200px] md:size-[260px] relative text-white font-black text-center cursor-pointer origin-center ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={Logo}
          alt="Logo Z"
          className="md:size-50 xs:size-35"  
        />
      </div>
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            className="absolute inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
