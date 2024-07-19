import { useState } from "react";
import {
  DefaultToastContainer,
  ToastProvider,
} from "react-toast-notifications";
import logo from "../assets/haloeslogo.png";

import address from "../assets/haloestouchaddress.png";
import TOAST from "../modules/toastManager";

export const CustomToastContainer = (props) => (
  <DefaultToastContainer {...props} style={{ zIndex: 9999 }} />
);
const { Typography, TextField, Button, Grid } = require("@mui/material");

const Reading = () => {
  const [key, setKey] = useState("");
  const validateKey = () => {
    //check if invalid
    if (key !== "nargelrvelasco@gmail.com") {
      TOAST.error("Not a valid key");
      return;
    }
    window.open(process.env.REACT_APP_DOWNLOAD);
  };
  const changeInputHandler = ({ target }) => {
    console.log("[TARGE}", target);
    setKey(target.value);
  };
  return (
    <>
      <ToastProvider components={{ ToastContainer: CustomToastContainer }}>
        <div align="center" style={{ paddingTop: 50 }}>
          <Grid container direction="row" spacing={2}>
            <Grid item md={12} sm={12} style={{ paddingTop: 10 }}>
              <img src={logo} alt="" width="80%" />
            </Grid>
            <Grid item md={12} sm={12}>
              <Typography variant="h6" style={{ color: "white" }}>
                Action Required: Email or Validation Needed To download the
                reading materials, please enter your email address or validation
                code. This will ensure you have access to the resources you
                need. Thank you for your cooperation!
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <TextField
                value={key}
                name="key"
                onChange={changeInputHandler}
                style={{
                  fontSize: "14pt",
                  width: "80%",
                  background: "white",
                  color: "black",
                }}
              />
            </Grid>
            <Grid item xs={12} md={12} sm={12}>
              <Button
                variant="contained"
                color="primary"
                style={{ width: "80%", fontSize: "14pt" }}
                onClick={() => validateKey()}
              >
                Submit
              </Button>{" "}
            </Grid>
            <Grid item xs={12} md={12} sm={12} style={{ paddingTop: 20 }}>
              <Typography variant="h5" style={{ color: "white" }}>
                Contact Us
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} sm={12} style={{ paddingTop: 0 }}>
              <img src={address} alt="" width="100%" />
            </Grid>
          </Grid>
        </div>
      </ToastProvider>
    </>
  );
};
export default Reading;
