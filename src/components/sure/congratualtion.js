import React from "react";
import Modal from "react-bootstrap/Modal";
import Styles from "./Reset.module.css";
import img from "./112766-celebrate.gif";
import { useNavigate } from "react-router-dom";
import { APPLAY_JOB_URL } from "../../constants";
export default function Sure(props) {
  const navigate = useNavigate();
  function handler(json) {
    console.log(json);
    if (json.type === "Success") {
      navigate("/login");
    }
  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div
        className={Styles.modal}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <h4>Are you sure?</h4>
          <hr
            style={{
              color: "red",
              width: "40%",
            }}
          />
        </div>
        <h4>You want to delete this job ?</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <button
            className={Styles.done}
            style={{
              width: "48%",
              backgroundColor: "red",
              color: "white",
              border: "1px solid red",
              borderRadius: "2%",
              padding: "3% 2%",
            }}
            onClick={async () => {
              const token = localStorage.getItem("Access Token");
              const id = window.location.href.split("/").pop();
              await fetch(APPLAY_JOB_URL + "/" + id + "/delete", {
                method: "DELETE",
                headers: {
                  "content-type": "application/json",
                  Authorization: "Bearer " + token,
                },
              })
                .then((response) => response.json())
                .then((json) => handler(json));
            }}
          >
            Delete
          </button>{" "}
          <button
            style={{
              width: "48%",
              padding: "3% 2%",
              backgroundColor: "transparent",
              border: "1px solid #0074d9",
              borderRadius: "2%",
              color: "#0074d9",
            }}
            className={Styles.done}
            onClick={() => {
              props.onHide();
            }}
          >
            Cancel
          </button>{" "}
        </div>
      </div>
    </Modal>
  );
}
