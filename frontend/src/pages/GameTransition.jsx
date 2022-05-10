import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

function GameTransition() {
  const navigate = useNavigate();
  const { start, end } = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate("/game");
    }, 3000);
  }, []);

  return (
    <motion.div
      className="bg-black h-screen w-96 flex justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="absolute top-20 text-center text-teal-200 text-2xl">
        Partez de : {start}
      </p>
      <video id="background-video" autoPlay muted>
        <source src="/src/assets/movie-countdown.mp4" type="video/mp4" />
      </video>
      <p className="absolute w-52 bottom-10 max-h-32 text-center text-orange-200 text-2xl">
        Pour arriver à : {end}
      </p>
    </motion.div>
  );
}

export default GameTransition;
