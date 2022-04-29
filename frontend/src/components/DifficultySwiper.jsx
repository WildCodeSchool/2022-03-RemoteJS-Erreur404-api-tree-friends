import React from "react";

function DifficultySwiper() {
  return (
    <div className="flex flex-col text-cyan-700 m-6">
      <div className="self-center">
     
        <select>
          <option value="" disabled selected hidden>Choisis ton niveau</option>
          <option value="Facile">Facile</option>
          <option value="Moyen">Moyen</option>
          <option value="Difficile">Difficile</option>
        </select>
      </div>
    </div>
  );
}


// const [value,setValue] = React.useState('');

// const options = [

//   { label: 'Choisissez votre niveau de difficulté', value: 'choose lvl' },
//   { label: 'Facile', value: 'easy' },
//   { label: 'Moyen', value: 'medium' },
//   { label: 'Difficile', value: 'hard' },
// ];

// const handleChange = (event) => {
//   event.preventDefault()
//   setValue(event.target.value);
//    };


// return (
//   <div className="flex flex-col justify-center text-teal-600">
//     {/* <!-- Dropdown toggle button --> */}
//   <button className="flex items-center p-2 bg-red rounded-md">
//      Choisis ton niveau
//      <div className="absolute right-0 py-2 mt-2 bg-white rounded-md shadow-xl w-44" onChange={handleChange}>
//       <a className=" dropdown-content block px-4 py-2 text-sm text-teal-600">
//           {options[0].label}
//       </a>
//       <a  className=" dropdown-content block px-4 py-2 text-sm text-teal-600">
//       {options[1].label}
//       </a>
//       <a  className=" dropdown-content block px-4 py-2 text-sm text-teal-600">
//       {options[2].label}
//        </a>
//   </div>
//    </button>
   
//   {/* <!-- Dropdown list -->
//     <select value={value} onChange={handleChange} className="dropdown-content flex flex-col self-center mb-10">
//         {options.map((option) => (
//         <option key={option.value}>{option.label}</option>
//         ))}
//    </select> */}
// </div>
// )
// }

export default DifficultySwiper;
