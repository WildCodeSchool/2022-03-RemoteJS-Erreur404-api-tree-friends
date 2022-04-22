import React, { useState } from "react";

function Input() {
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center ">
      <input
        className="p-2 pl-8 w-full m-12 mt-0 rounded-md border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent shadow-inner "
        type="text"
        name={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Entrer votre nom"
      />
    </div>
  );
}
export default Input;
