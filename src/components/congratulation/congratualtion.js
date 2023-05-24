import React from "react";
import Modal from "react-bootstrap/Modal";
import Styles from "./Reset.module.css";
import img from "./112766-celebrate.gif";

export default function Congrats(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className={Styles.modal}>
        <div className={Styles.first}>
          <h4>Applay Job</h4>
          <p className={Styles.paragraph}>Applayed For job Successfully</p>
          <img
            src={img}
            className={Styles.congImage}
            alt=""
            style={{ width: "40%" }}
          />
          <button
            className={Styles.done}
            onClick={() => {
              props.onHide();
            }}
          >
            Done
          </button>{" "}
        </div>
      </div>
    </Modal>
  );
}
