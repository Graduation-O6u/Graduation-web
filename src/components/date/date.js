import React from "react";
import Modal from "react-bootstrap/Modal";

import { DatePicker } from "react-responsive-datepicker";
import Timekeeper from "react-timekeeper";
import turnDate from "../../util/turnDate";
import { APPLAY_JOB_URL } from "../../constants";

export default function DateModel({
  show,
  date,
  setDate,
  userId,
  users,
  setShow,
  setUsers,
}) {
  const [openTime, setOpenTime] = React.useState(false);
  return (
    <Modal
      show={show}
      onHide={() => {
        setOpenTime(false);
        setShow(false);
      }}
      size={openTime ? "sm" : "md"}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {!openTime ? (
        <DatePicker
          isOpen={true}
          defaultValue={new Date(2022, 8, 8)}
          minDate={new Date(2022, 10, 10)}
          maxDate={new Date(2023, 0, 10)}
          headerFormat="DD, MM dd"
          closeText="Next"
          onChange={(date) => setDate(date)}
          onClose={() => setOpenTime(true)}
        />
      ) : (
        <Timekeeper
          onChange={(data) => {
            setDate(turnDate(date, data.formatted24));
          }}
        />
      )}
      <button
        style={{
          width: "90%",
          backgroundColor: "#0074d9",
          color: "white",
          borderColor: "#0074d9",
          fontSize: "large",
          padding: "3%",
          margin: "3% 5%",
          borderRadius: "15px",
        }}
        onClick={() => {
          meet();
        }}
      >
        Send
      </button>
    </Modal>
  );
  function meet() {
    const index = users.findIndex((obj) => obj["User"]["id"] === userId);
    console.log(users[0]);
    console.log(userId);
    console.log(index);
    const x = users;
    x[index]["meeting"] = true;
    setUsers(x);
    setShow(false);
    const token = localStorage.getItem("Access Token");
    const id = window.location.href.split("/").pop();
    const Data = {
      userId: userId,
      date: date,
      time: "5:30",
      jobId: id,
    };

    let requestJson = JSON.stringify(Data);
    fetch(APPLAY_JOB_URL + "/meetUser", {
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
