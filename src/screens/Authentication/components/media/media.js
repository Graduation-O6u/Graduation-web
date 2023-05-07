import React, { useState } from "react";
import styles from "./media.module.css";
import { useNavigate } from "react-router-dom";

import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { GOOGLE_LINK } from "../../../../constants";
import LoadingArea from "../../../../components/loadingArea/loadingButton";

const Media = ({ login }) => {
  const navigate = useNavigate();
  const [loading, chageLoading] = useState(false);

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "463906588928-g6ba36vujoe5vgagpqrlq0uhbfn85k55.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });

  function handleGoogleData(e) {
    const person = {
      name: e["profileObj"]["givenName"] + " " + e["profileObj"]["familyName"],
      email: e["profileObj"]["email"],
      image: e["profileObj"]["imageUrl"],
    };

    let requestJson = JSON.stringify(person);
    registerUser(requestJson);
  }

  function registerUser(requestJson) {
    chageLoading(true);
    fetch(GOOGLE_LINK, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: requestJson,
    })
      .then((response) => response.json())
      .then((json) => onGetSignUpResponse(json));
  }

  function onGetSignUpResponse(json) {
    let status = json.type;
    if (status === "Success") {
      console.log("success");
      localStorage.setItem("name", json.data.user.name);
      localStorage.setItem("image", json.data.user.image);

      localStorage.setItem("Access Token", json.data.accessToken);
      navigate("/homepage");
    } else {
      window.alert("Error Happened");
    }
    chageLoading(false);
  }

  const responseGoogle = (response) => {
    handleGoogleData(response);
  };

  const onFailure = (error) => {
    console.error("Google login failed:", error);

    if (error.error === "popup_closed_by_user") {
      console.log("You closed the login window. Please try again.");
    } else {
      console.log("There was an error logging in. Please try again later.");
    }
  };

  return (
    <div className={styles.photos}>
      <div className={styles.Img}>
        {!loading ? (
          <GoogleLogin
            clientId="463906588928-g6ba36vujoe5vgagpqrlq0uhbfn85k55.apps.googleusercontent.com"
            buttonText={login ? "Login with Google" : "Signup with Google"}
            onSuccess={responseGoogle}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        ) : (
          <LoadingArea />
        )}
      </div>
    </div>
  );
};

export default Media;
