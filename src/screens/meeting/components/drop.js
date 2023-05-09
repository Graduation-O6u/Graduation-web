// import React, { useState } from "react";
// import styles from "../meeting.module.css";
// const options = [
//   { value: "#888888", label: "Pending" },
//   { value: "#80CC28 ", label: "Accepted" },
//   { value: "red", label: "Rejected" },
// ];
// const CustomDropdown = () => {
//   const [selectedOption, setSelectedOption] = useState(options[0]);

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);

//   };
//   return (
//     <div className={styles.dropdown}>
//       <div
//         className={styles.selected_option}
//         style={{
//           color: selectedOption.value,
//           fontSize: "25px",
//           fontWeight: "bolder",
//         }}
//       >
//         {selectedOption.label}
//       </div>
//       <div className={styles.options}>
//         {options.map((option) => (
//           <div>
//             <p
//               key={option.value}
//               className={styles.option}
//               style={{
//                 color: option.value,
//                 fontSize: "25px",
//                 fontWeight: "bolder",
//               }}
//               onClick={() => handleOptionClick(option)}
//             >
//               {option.label}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CustomDropdown;
import React, { useState } from "react";
import styles from "../meeting.module.css";

const options = [
  { value: "#888888", label: "Pending" },
  { value: "#80CC28 ", label: "Accepted" },
  { value: "red", label: "Rejected" },
];

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [availableOptions, setAvailableOptions] = useState(options);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAvailableOptions(options.filter((o) => o.value !== option.value));
  };

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.selected_option}
        style={{
          color: selectedOption.value,
          fontWeight: "bolder",
        }}
      >
        {selectedOption.label}
      </div>
      <div className={styles.options}>
        {availableOptions.map((option) => (
          <div>
            <p
              key={option.value}
              className={styles.option}
              style={{
                color: option.value,
                fontSize: "25px",
                fontWeight: "bolder",
              }}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
