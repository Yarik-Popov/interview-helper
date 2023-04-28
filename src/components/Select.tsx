// import React, { ChangeEvent } from 'react';

// interface SelectProps {
//   options: string[];
//   value: string;
//   onChange: (value: string) => void;
// }

// const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
//   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     onChange(event.target.value);
//   };

//   return (
//     <select value={value} onChange={handleChange}>
//       {options.map((option) => (
//         <option key={option} value={option}>
//           {option}
//         </option>
//       ))}
//     </select>
//   );
// };

// export default Select;

import React, { ChangeEvent } from 'react';

interface SelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  options = ["1", "2", "3"];
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
