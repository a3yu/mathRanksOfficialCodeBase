import React, { useState } from "react";
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
import { GetServerSideProps } from "next";
import Link from "next/link";
interface IFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}

function Signup() {
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
    const { username, password, email } = data;
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          email,
        },
      });
      console.log("signed up user:", user);
    } catch (error) {
      throw error;
    }
  }
  async function confirmSignUp(data: IFormInput) {
    const { username, password, code } = data;
    try {
      await Auth.confirmSignUp(username, code);
      const amplifyUser = await Auth.signIn(username, password);
      if (amplifyUser) {
        router.push(`/`);
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      throw error;
    }
  }
  console.log("The value of the user from:", user);
  return (
    <div className={styles.container}>
      <Container>
        <Typography variant="h1" color="textPrimary" align="center">
          Sign Up
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
                className={styles.textF}
                id="username"
                label="Username"
                type="text"
                color="primary"
                autoComplete="off"
                error={errors.username ? true : false}
                helperText={errors.username ? errors.username.message : null}
                {...register("username", {
                  required: {
                    value: true,
                    message: "Please enter a username.",
                  },
                  minLength: {
                    value: 3,
                    message: "Please enter a username between 3-16 characters.",
                  },
                  maxLength: {
                    value: 16,
                    message: "Please enter a username between 3-16 characters.",
                  },
                })}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                variant="filled"
                id="email"
                label="Email"
                type="email"
                className={styles.textF}
                error={errors.email ? true : false}
                helperText={errors.email ? errors.email.message : null}
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please enter a valid email.",
                  },
                })}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                variant="filled"
                id="password"
                label="Password"
                type="password"
                className={styles.textF}
                error={errors.password ? true : false}
                helperText={errors.password ? errors.password.message : null}
                {...register("password", {
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
            </Grid>
            {showCode && (
              <Grid item>
                <TextField
                  required
                  variant="filled"
                  id="code"
                  label="Verification Code"
                  type="text"
                  className={styles.textF}
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
            )}

            <Grid style={{ marginTop: 16 }}>
              <Button
                variant="contained"
                type="submit"
                className={styles.butText}
                style={{
                  backgroundColor: "#a9c5ea",
                }}
              >
                <a>{showCode ? "Confirm Code" : "Sign Up"}</a>
              </Button>
            </Grid>
            <div className={styles.botText}>
              <Link href="/login">Have an account? Sign in!</Link>
            </div>
            <div className={styles.botText2}>
              <Link href="/confirm">Confirm Account</Link>
            </div>
          </Grid>
          <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
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
  );
}
export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const { Auth } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    res.writeHead(302, { Location: "/" });
    res.end();
  } catch (err) {}
  return { props: {} };
};
export default Signup;
