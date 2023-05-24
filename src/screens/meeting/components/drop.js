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
import { Send_Meeting_DATA_URL } from "../../../constants";

const options = [
  { value: "#888888", label: "Pending" },
  { value: "#80CC28 ", label: "Accepted" },
  { value: "red", label: "Rejected" },
];

const CustomDropdown = ({ data, meetId }) => {
  let obj;
  if (data === "Pending") obj = { value: "#888888", label: "Pending" };
  if (data === "Accepted") obj = { value: "#80CC28", label: "Accepted" };
  if (data === "Rejected") obj = { value: "red", label: "Rejected" };

  console.log(data);
  const [selectedOption, setSelectedOption] = useState(obj);
  const [availableOptions, setAvailableOptions] = useState(options);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAvailableOptions(options.filter((o) => o.value !== option.value));
    meet();
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
      {localStorage.getItem("role") === "COMPANY" ? (
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
      ) : undefined}
    </div>
  );
  function meet() {
    const token = localStorage.getItem("Access Token");

    const Data = {
      status: selectedOption.label,
      description: ".",
    };

    let requestJson = JSON.stringify(Data);
    fetch(Send_Meeting_DATA_URL + "/" + meetId + "/changeStatus", {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => onGetData(json));
  }

  function onGetData(json) {
    console.log(json.type);

    // window.alert(json.data.user.email);
  }
};

export default CustomDropdown;
