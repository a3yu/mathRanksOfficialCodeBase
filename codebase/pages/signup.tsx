import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, Snackbar, TextField } from "@material-ui/core";
import styles from "../styles/Signup.module.scss";
import { Auth } from "aws-amplify";
import { Alert } from "@material-ui/lab";
interface IFormInput {
  username: string;
  email: string;
  password: string;
  code: string;
}
export default function Signup() {
  const [open, setOpen] = useState(false);
  const [signUpError, setSignUpError] = useState<string>("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      signUpAWS(data);
    } catch (err) {
      console.log(err);
      setSignUpError(err.message);
      setOpen(true);
    }
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
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
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item>
            <TextField
              variant="outlined"
              id="username"
              label="Username"
              type="text"
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
              {...register("username", { required: true })}
            />
          </Grid>
          <Grid item>
            <TextField
              variant="outlined"
              id="email"
              label="Email"
              type="email"
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
              variant="outlined"
              id="password"
              label="Password"
              type="password"
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
          <Grid>
            <Button variant="contained" type="submit">
              Sign Up
            </Button>
          </Grid>
        </Grid>
        <Snackbar open={open} autoHideDuration={60000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error">
            {signUpError}
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}
