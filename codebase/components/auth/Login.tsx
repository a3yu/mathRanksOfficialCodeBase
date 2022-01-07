import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert } from "@material-ui/lab";
import { Auth } from "aws-amplify";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "../../context/AuthContext";
import { Transition } from "react-transition-group";

interface IFormInput {
  username: string;
  password: string;
}

function Login(props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [signInError, setSignInError] = useState<string>("");
  const user = useUser();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      await Auth.signIn(data.username, data.password);
      router.push(`/dashboard`);
      props.onClose();
      reset({
        password: "",
        username: "",
      });
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
  const duration = 300;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };
  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);
  return (
    <div>
      <Transition in={props.show} timeout={duration}>
        {(state) => (
          <div
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
          >
            <div
              className={
                props.show
                  ? " inset-0 overflow-y-auto  fixed "
                  : " inset-0 overflow-y-auto pointer-events-none fixed "
              }
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div
                  className="fixed inset-0 bg-[rgb(0,0,0,0.7)] bg-opacity-75 transition-opacity "
                  aria-hidden="true"
                  onClick={props.onClose}
                ></div>

                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen "
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="inline-block  align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                >
                  <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 w-full sm:text-left">
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="bg-cardColorDark border-[0.5px] border-borderCardColor rounded px-12 pt-6 pb-8 mb-4 w-full"
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
                                className="shadow appearance-none border-[0.5px] border-borderCardColor rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Username"
                                type="text"
                                {...register("username", {})}
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
                                  className=" mb-2 shadow appearance-none border-[0.5px] border-borderCardColor rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
                                  placeholder="Password"
                                  type="password"
                                  {...register("password", {})}
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
                                <a
                                  onClick={props.onSwitch}
                                  className="cursor-pointer"
                                >
                                  Don&apos;t have an account? Sign up!
                                </a>
                              </div>
                              <div>
                                <a
                                  onClick={props.goToConfirm}
                                  className="cursor-pointer"
                                >
                                  Confirm Account
                                </a>
                              </div>
                              <div>
                                <a
                                  onClick={props.goToChange}
                                  className="cursor-pointer"
                                >
                                  Forgot Your Password?
                                </a>
                              </div>
                            </div>
                          </form>
                        </div>
                        <Snackbar
                          open={open}
                          autoHideDuration={6000}
                          onClose={handleClose}
                        >
                          <Alert onClose={handleClose} severity="error">
                            {signInError}
                          </Alert>
                        </Snackbar>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
}

export default Login;
