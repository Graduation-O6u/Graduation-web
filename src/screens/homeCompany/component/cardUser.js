import React from "react";
import styles from "./cardUser.module.css";
import pic from "../../../images/default_profile_img.png";
import { Icon } from "@iconify/react";
import DateTimePicker from "react-datetime-picker";
export default function CardUser({ setShow, setUserId, data }) {
  console.log("-------------------------");
  console.log(data);
  return (
    <div
      className={styles.card}
      id={data["User"]["id"]}
      style={{
        position: "relative",
        boxShadow: "2px 4px 2px #d7d7d7",
        width: "18%",
      }}
      s
    >
      {/* <Icon
        icon="ph:trash-light"
        style={{
          color: "red",
          fontSize: "1.8rem",
          position: "absolute",
          top: "5",
          zIndex: "100",
          right: "5",
          cursor: "pointer",
        }}
      /> */}

      <img
        src={data["User"]["backgroundImage"]}
        alt="card background"
        className={styles.cardImg}
      />
      <img
        src={data["User"]["image"]}
        alt="card profile"
        className={styles.profileImg}
      />
      <h1 className={styles.cardh1}>{data["User"]["name"]}</h1>
      <p className={styles.jobTitle}>{data["User"]["job"]["title"]}</p>
      <ul className={styles.social}>
        {data["User"]["github"] !== "" ? (
          <li>
            <a href={data["User"]["github"]} className={styles.iconsocial}>
              <Icon icon="octicon:mark-github-16" color="black" />
            </a>
          </li>
        ) : undefined}
        {data["User"]["cv"] !== "" ? (
          <li>
            <a href={data["User"]["cv"]} className={styles.iconsocial}>
              <Icon icon="tabler:file-cv" color="#2c6684" />
            </a>
          </li>
        ) : undefined}
        {data["User"]["behance"] !== "" ? (
          <li>
            <a href={data["User"]["behance"]} className={styles.iconsocial}>
              <Icon icon="devicon:behance" />
            </a>
          </li>
        ) : undefined}
      </ul>
      {!data["meeting"] ? (
        <button
          style={{
            width: "90%",
            backgroundColor: "#0074d9",
            color: "white",
            borderColor: "#0074d9",
            fontSize: "large",
            padding: "3%",
            margin: "3% 0",
            borderRadius: "15px",
          }}
          onClick={() => {
            setUserId(data["User"]["id"]);
            setShow(true);
          }}
        >
          Meet
        </button>
      ) : undefined}
    </div>
  );
}
