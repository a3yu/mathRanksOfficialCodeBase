import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";
import { Auth } from "aws-amplify";
import { Alert } from "@material-ui/lab";
import { useUser } from "../context/AuthContext";
import { useRouter } from "next/router";
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
        router.push(`/dashboard`);
      } else {
        throw new Error("Something went wrong :'(");
      }
    } catch (error) {
      throw error;
    }
  }
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-cardColorDark  rounded px-8 pt-6 pb-8 mb-4 w-full"
        >
          <div className="mb-4">
            <h1 className="text-white text-center text-4xl font-semibold">
              Sign Up
            </h1>
          </div>
          <div className="mb-6">
            <input
              required
              autoComplete="false"
              id="username"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
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
          <div className="mb-6">
            <input
              required
              id="email"
              placeholder="Email"
              className="shadow appearance-none  rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Please enter a valid email.",
                },
              })}
            />
            <p className="text-red-900 text-xs italic m-1">
              {errors.email && errors.email.message}
            </p>
          </div>
          <div className="mb-6">
            <input
              required
              id="password"
              className=" mb-2 shadow appearance-none  rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
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
          {showCode && (
            <div>
              <div className="mb-4">
                <input
                  required
                  id="code"
                  className=" mb-2 shadow appearance-none  rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Verification Code"
                  type="text"
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
                <p className="text-red-900 text-xs italic m-1">
                  {errors.code && errors.code.message}
                </p>
              </div>
            </div>
          )}
          <div className="mb-2 w-full flex flex-col">
            <button className="bg-linkColorDark hover:bg-linkColorDarkHover text-black py-2 px-4 rounded m-0 ">
              {showCode ? "Confirm Code" : "Sign Up"}
            </button>
          </div>
          <div className="container max-w-md mx-auto flex-1 mt-4 space-y-2 flex flex-col items-center justify-center px-2">
            <div>
              <Link href="/login">Have an account? Sign in!</Link>
            </div>
            <div>
              <Link href="/confirm">Confirm Account</Link>
            </div>
          </div>
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
        </form>
      </div>
    </div>
  );
}

export default Signup;
