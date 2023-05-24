import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../screens/meeting/meeting.module.css";
import { Icon } from "@iconify/react";
import { Send_Meeting_DATA_URL } from "../../constants";
export default function Meet({ isOpen, setIsOpen, meetId }) {
  const [inputValue, setInputValue] = React.useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    setIsOpen(false);
    meet();
  };
  return (
    <Modal
      show={isOpen}
      onHide={() => setIsOpen(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
              Send
            </button>
          </form>
        </div>
      </div>
    </Modal>
  );
  function meet() {
    const token = localStorage.getItem("Access Token");

    const Data = {
      link: inputValue,
    };

    let requestJson = JSON.stringify(Data);
    fetch(Send_Meeting_DATA_URL + "/" + meetId + "/sendLink", {
      method: "POST",
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
}
