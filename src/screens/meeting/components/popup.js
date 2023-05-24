import React, { useState } from "react";
import styles from "../meeting.module.css";
import { Icon } from "@iconify/react";
import Meet from "../../../components/meeting/meeting";
function Popup({ meetId }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.po}>
      <button onClick={() => setIsOpen(true)} className={styles.send}>
        Send Meeting Link
      </button>
      <Meet isOpen={isOpen} setIsOpen={setIsOpen} meetId={meetId} />
    </div>
  );
}

export default Popup;
