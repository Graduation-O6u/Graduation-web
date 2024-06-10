import React from "react";
import { Icon } from "@iconify/react";
import { cites } from "../../../static";
import axios from "axios";
import {
  CHANGE_BACKGROUND_URL,
  CHANGE_PROFILE_URL,
  SERVER_LINK,
} from "../../../constants";

export const CardProfile = ({
  user,
  setIsPopupShown,
  setIsPopupShown2,
  setUser,
}) => {
  const hiddenFileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState();
  const [changeType, setchangeType] = React.useState(false);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    if (
      event.target.files[0].type.split("/")[1] !== "png" &&
      event.target.files[0].type.split("/")[1] !== "PNG" &&
      event.target.files[0].type.split("/")[1] !== "jpg" &&
      event.target.files[0].type.split("/")[1] !== "JPG" &&
      event.target.files[0].type.split("/")[1] !== "JPEG" &&
      event.target.files[0].type.split("/")[1] !== "jpeg"
    ) {
      console.log("file type not allowed");
    } else if (event.target.files[0].size > 1000000) {
      console.log("file type not j");
    } else {
      console.log("success");
      // localStorage.setItem("image" , event)
      console.log(event["target"].files[0]);
      uplaodFile(event.target.files[0]);
    }
  };
  const country = cites.findIndex((obj) => obj.code === user["user"]["cityId"]);

  return (
    <div>
      <div
        style={{
          position: "relative",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <img
          alt="backgroundImage"
          src={user["user"]["backgroundImage"]}
          style={{
            width: "100%",
            height: "200px",
            borderRadius: "10px 10px 0 0",
          }}
        />
        {user["user"]["id"] === localStorage.getItem("id") ? (
          <div
            style={{
              position: "absolute",
              right: "3%",
              top: "10%",
              backgroundColor: "white",
              width: "4%",
              height: "12%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
            }}
          >
            <input
              type="file"
              ref={hiddenFileInput}
              style={{ display: "none" }}
              onChange={changeHandler}
            />
            <Icon
              icon="material-symbols:edit-outline-rounded"
              onClick={(e) => {
                handleClick(e);
                setchangeType(false);
              }}
              style={{
                fontSize: "1.5rem",
                color: "#969696",
                cursor: "pointer",
              }}
            />
          </div>
        ) : undefined}

        <div>
          <div
            style={{
              boxShadow: "2px 2px 4px 0 rgba(0, 0, 0, 0.5)",
              position: "absolute",
              left: "2%",
              bottom: "-20%",
              borderRadius: "50%",
              border: "5px solid white",
              height: "150px",
              width: "150px",
            }}
          >
            <img
              alt="profile"
              src={user["user"]["image"]}
              onClick={(e) => {
                if (user["user"]["id"] === localStorage.getItem("id")) {
                  handleClick(e);
                }
                setchangeType(true);
              }}
              style={{
                borderRadius: "50%",
                height: "100%",
                width: "100%",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          paddingTop: "4%",
          paddingBottom: "4%",
          paddingLeft: "2%",
          paddingRight: "2%",
          boxShadow: "0px 2px 4px 0  #969696",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {user["user"]["id"] === localStorage.getItem("id") ? (
            <>
              <h2
                style={{
                  fontWeight: "600",
                  fontSize: "25px",
                  textTransform: "capitalize",
                  color: "#222222",
                  marginBottom: "-4px",
                  marginTop: "12px",
                }}
              >
                {user["user"]["name"]}
              </h2>
              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  setIsPopupShown(true);
                }}
              >
                Edit Profile
              </span>
            </>
          ) : //  <Icon
          //     icon="material-symbols:edit-outline-rounded"
          //                style={{
          //       fontSize: "1.5rem",
          //       color: "#0074d9",
          //       cursor: "pointer",
          //       position: "absolute",
          //       right: "0",
          //       top: "-45%",
          //     }}
          //   />
          undefined}

          {/* <div
            style={{
              display: "flex",
              marginRight: "2%",
              gap: "15px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span> {cites[country]["name"]}</span>
            <img
              alt="country"
              src={cites[country]["image"]}
              style={{
                width: "50px",
              }}
            />
          </div> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          {localStorage.getItem("role") === "COMPANY" && (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <div>
                <h2
                  style={{
                    fontWeight: "600",
                    fontSize: "25px",
                    textTransform: "capitalize",
                    color: "#222222",
                    marginBottom: "-4px",
                    marginTop: "12px",
                  }}
                >
                  {user["user"]["name"]}
                </h2>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#222222",
                    fontWeight: "500",
                    marginTop: "5px",
                  }}
                >
                  {user["user"]["job"]["title"]}
                </p>
              </div>

              <span
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                onClick={() => {
                  setIsPopupShown2(true);
                }}
              >
                Meet
              </span>
            </div>
          )}
          {localStorage.getItem("role") === "USER" && (
            <p
              style={{
                fontSize: "18px",
                color: "#222222",
                fontWeight: "500",
                marginTop: "5px",
              }}
            >
              {user["user"]["job"]["title"]}
            </p>
          )}
          {user["user"]["role"] === "USER" ? (
            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginTop: "-10px",
              }}
            >
              {user["user"]["github"] ? (
                <Icon
                  onClick={() => {
                    window.open(user["user"]["github"], "_blank");
                  }}
                  icon="mdi:github"
                  style={{
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              ) : undefined}
              {user["user"]["cv"] ? (
                <Icon
                  onClick={() => {
                    window.open(user["user"]["cv"], "_blank");
                  }}
                  icon="academicons:cv-square"
                  style={{
                    color: "red",
                    fontSize: "1.4rem",
                    cursor: "pointer",
                  }}
                />
              ) : undefined}
              {user["user"]["behance"] ? (
                <Icon
                  onClick={() => {
                    window.open(user["user"]["behance"], "_blank");
                  }}
                  icon="ant-design:behance-circle-filled"
                  style={{
                    color: "blue",
                    fontSize: "2rem",
                    cursor: "pointer",
                  }}
                />
              ) : undefined}
            </div>
          ) : undefined}
        </div>
        <p
          style={{
            color: "#969696",
            width: "70%",
          }}
        >
          {user["user"]["aboutme"]}
        </p>
      </div>
    </div>
  );
  async function uplaodFile(file) {
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);

    const result = await axios.post(`${SERVER_LINK}/upload/file`, formData, {
      crossDomain: true,
    });
    const data = user;
    if (changeType) {
      data["user"]["image"] = result["data"]["url"];
      console.log(data);
      localStorage.setItem("image", result["data"]["url"]);
      setUser(data);
      const person = {
        image: result["data"]["url"],
      };

      let requestJson = JSON.stringify(person);
      fetch(CHANGE_PROFILE_URL, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("Access Token"),
        },
        body: requestJson,
      })
        .then((response) => response.json())
        .then((json) => null);
    } else {
      data["user"]["backgroundImage"] = result["data"]["url"];
      console.log(data);
      setUser(data);
      const person = {
        image: result["data"]["url"],
      };

      let requestJson = JSON.stringify(person);
      fetch(CHANGE_BACKGROUND_URL, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("Access Token"),
        },
        body: requestJson,
      })
        .then((response) => response.json())
        .then((json) => null);
    }
    window.location.reload();
    // navigate("/user");
    console.log(user);
  }
};
