import React, { useState } from "react";
import styles from "../meeting.module.css";
import { Icon } from "@iconify/react";
function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)} className={styles.send}>
        Send Meeting Link
      </button>
      {isOpen && (
        <div className={styles.popup}>
          <div className={styles.content}>
            <button className={styles.button} onClick={() => setIsOpen(false)}>
              <Icon icon="ic:baseline-close" className={styles.ico} />
            </button>
            <form onSubmit={handleSubmit} className={styles.for}>
              <input
                id="input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Meeting Link"
                className={styles.inp}
              />
              <button type="submit" className={styles.butt}>
                Saved
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
