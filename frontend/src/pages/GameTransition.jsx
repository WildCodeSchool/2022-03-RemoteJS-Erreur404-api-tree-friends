import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function GameTransition() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/game");
    }, 2300);
  }, []);

  return (
    <motion.div
      className="bg-black h-screen w-96 flex"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <video id="background-video" autoPlay loop muted>
        <source src="/src/assets/movie-countdown.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}

export default GameTransition;
