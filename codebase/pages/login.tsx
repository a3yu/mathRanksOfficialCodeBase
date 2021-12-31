import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "../context/AuthContext";

interface IFormInput {
  username: string;
  password: string;
}

function Login() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [signInError, setSignInError] = useState<string>("");
  const user = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await Auth.signIn(data.username, data.password);
      router.push(`/dashboard`);
    } catch (error) {
      console.error(error);
      setSignInError(error.message);
      setOpen(true);
    }
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-cardColorDark  rounded px-12 pt-6 pb-8 mb-4 w-full"
        >
          <div className="mb-4">
            <h1 className="text-white text-center text-4xl font-semibold">
              Login
            </h1>
          </div>
          <div className="mb-6">
            <input
              required
              autoComplete="false"
              id="username"
              className="shadow appearance-none  rounded w-full py-3 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Username"
              type="text"
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
            <p className="text-red-900 text-xs italic m-1">
              {errors.username && errors.username.message}
            </p>
          </div>
          <div>
            <div className="mb-4">
              <input
                required
                id="password"
                className=" mb-2 shadow appearance-none  rounded w-full py-3 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Password"
                type="password"
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
              <p className="text-red-900 text-xs italic m-1">
                {errors.password && errors.password.message}
              </p>
            </div>
          </div>
          <div className="mb-2 w-full flex flex-col">
            <button className="bg-linkColorDark hover:bg-linkColorDarkHover text-black py-2 px-4 rounded">
              Login
            </button>
          </div>
          <div className="container max-w-md mx-auto flex-1 space-y-2 mt-4 flex flex-col items-center justify-center px-2">
            <div>
              <Link href="/signup">Don&apos;t have an account? Sign up!</Link>
            </div>
            <div>
              <Link href="/confirm">Confirm Account</Link>
            </div>
          </div>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {signInError}
        </Alert>
      </Snackbar>
    </div>
  );
}
export default Login;
