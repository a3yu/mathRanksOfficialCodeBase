import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";
import styles from "../styles/Signup.module.scss";
import { Auth, withSSRContext } from "aws-amplify";
import { Alert } from "@material-ui/lab";
import { useUser } from "../context/AuthContext";
import { useRouter } from "next/router";
interface IFormInput {
  username: string;
  code: string;
  newPass: string;
}
function ChangePassword() {
  const { user, setUser } = useUser();
  const [open, setOpen] = useState(false);
  const [veriNotice, setVeriNotice] = useState(false);
  const [showCode, setShowCode] = useState<boolean>(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      if (showCode) {
        await confirmSignUp(data);
      } else {
        await signUpAWS(data);
        setVeriNotice(true);
        setShowCode(true);
      }
    } catch (err) {
      setSignUpError(err.message);
      setOpen(true);
    }
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleCloseVeri = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setVeriNotice(false);
  };
  async function signUpAWS(data: IFormInput) {
    const { username } = data;
    try {
      await Auth.forgotPassword(username);
    } catch (error) {
      console.log(1);
      throw error;
    }
  }
  async function confirmSignUp(data: IFormInput) {
    const { username, code, newPass } = data;
    try {
      await Auth.forgotPasswordSubmit(username, code, newPass);
      router.push("/");
    } catch (e) {
      throw e;
    }
  }
  console.log(user);
  return (
    <div className={styles.container}>
      <div>
        <Container>
          <Typography variant="h1" color="textPrimary" align="center">
            Change Password
          </Typography>
          <hr className={styles.divider} />
        </Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.gridContainer}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
              spacing={3}
            >
              <Grid item>
                <TextField
                  required
                  variant="filled"
                  id="username"
                  className={styles.textF}
                  label="Username"
                  type="text"
                  error={errors.username ? true : false}
                  helperText={errors.username ? errors.username.message : null}
                  {...register("username", {
                    required: true,
                    minLength: {
                      value: 3,
                      message:
                        "Your username must be between 3 and 20 letters (inclusive).",
                    },
                    maxLength: {
                      value: 20,
                      message:
                        "Your username must be between 3 and 20 letters (inclusive).",
                    },
                  })}
                />
              </Grid>
              {showCode && (
                <div>
                  <Grid item>
                    <TextField
                      required
                      variant="outlined"
                      id="newPass"
                      label="New Password"
                      type="password"
                      error={errors.newPass ? true : false}
                      helperText={
                        errors.newPass ? errors.newPass.message : null
                      }
                      {...register("newPass", {
                        required: {
                          value: true,
                          message: "Please enter a password.",
                        },
                        minLength: {
                          value: 8,
                          message: "Please enter a stronger password.",
                        },
                      })}
                    />
                    <TextField
                      required
                      variant="outlined"
                      id="code"
                      label="Verification Code"
                      type="text"
                      error={errors.code ? true : false}
                      helperText={errors.code ? errors.code.message : null}
                      {...register("code", {
                        required: {
                          value: true,
                          message: "Please enter a code.",
                        },
                        minLength: {
                          value: 6,
                          message: "Your verification is 6 characters long.",
                        },
                        maxLength: {
                          value: 6,
                          message: "Your verification is 6 characters long.",
                        },
                      })}
                    />
                  </Grid>
                </div>
              )}

              <Grid style={{ marginTop: 16 }}>
                <Button variant="contained" type="submit" color="primary">
                  {showCode ? "Confirm Code" : "Change Password"}
                </Button>
              </Grid>
            </Grid>
            <Snackbar
              open={open}
              autoHideDuration={60000}
              onClose={handleClose}
            >
              <Alert onClose={handleClose} severity="error">
                {signUpError}
              </Alert>
            </Snackbar>
            <Snackbar
              open={veriNotice}
              autoHideDuration={60000}
              onClose={handleCloseVeri}
            >
              <Alert onClose={handleCloseVeri} severity="info">
                A verification was sent to your email.
              </Alert>
            </Snackbar>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ChangePassword;
