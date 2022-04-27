import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/alt-logo.png";
import jt from "../assets/jt.gif";

function Error() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col">
      <img className="w-6/12 aspect-square self-center" src={logo} alt="logo" />
      <p className="text-5xl self-center font-bold text-orange-400 pt-10">
        Oups ...
      </p>
      <p className="text-5xl self-center font-bold text-cyan-700 mt-8">
        Error 404
      </p>
      <img
        className="w-12/12 aspect-square self-center pt-16"
        src={jt}
        alt="confused Travolta"
      />
    </div>
  );
}

export default Error;
