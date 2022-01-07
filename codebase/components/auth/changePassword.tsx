import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Snackbar } from "@material-ui/core";
import { Auth } from "aws-amplify";
import { Alert } from "@material-ui/lab";
import { Transition } from "react-transition-group";
import { useUser } from "../../context/AuthContext";
import { useRouter } from "next/router";
interface IFormInput {
  username: string;
  code: string;
  newPass: string;
}

function ChangePassword(props) {
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
    reset,
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
      throw error;
    }
  }
  async function confirmSignUp(data: IFormInput) {
    const { username, code, newPass } = data;
    try {
      await Auth.forgotPasswordSubmit(username, code, newPass);
      router.push("/dashboard");
      reset({
        code: "",
        username: "",
        newPass: "",
      });
    } catch (e) {
      throw e;
    }
  }
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
                        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"></div>
                        <form
                          onSubmit={handleSubmit(onSubmit)}
                          className="bg-cardColorDark border-[0.5px] border-borderCardColor rounded px-8 pt-6 pb-8 mb-4 w-full"
                        >
                          <div className="mb-4">
                            <h1 className="text-white text-center text-4xl font-semibold">
                              Change Password
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

                          {showCode && (
                            <div>
                              <div className="mb-4">
                                <input
                                  required
                                  id="newPass"
                                  placeholder="New Password"
                                  type="password"
                                  className=" mb-2 shadow appearance-none border-[0.5px] border-borderCardColor rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
                                  {...register("newPass", {})}
                                />
                                <p className="text-red-900 text-xs italic m-1">
                                  {errors.newPass && errors.newPass.message}
                                </p>
                              </div>
                              <div className="mb-4">
                                <input
                                  required
                                  id="code"
                                  className=" mb-2 shadow appearance-none border-[0.5px] border-borderCardColor rounded w-full py-2 px-3 text-white bg-black  leading-tight focus:outline-none focus:shadow-outline"
                                  placeholder="Verification Code"
                                  type="text"
                                  {...register("code", {
                                    required: {
                                      value: true,
                                      message: "Please enter a code.",
                                    },
                                    minLength: {
                                      value: 6,
                                      message:
                                        "Your verification is 6 characters long.",
                                    },
                                    maxLength: {
                                      value: 6,
                                      message:
                                        "Your verification is 6 characters long.",
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
                              {showCode ? "Confirm Code" : "Change Password"}
                            </button>
                          </div>
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
                        </form>
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

export default ChangePassword;
