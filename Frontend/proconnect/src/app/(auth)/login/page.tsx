"use client";
import { useState, useEffect } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaEnvelope,
  FaLock,
  FaEyeSlash,
  FaEye,
  FaGoogle,
} from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/redux/store/store";
import { login, resetInitialState } from "@/app/redux/slices/userSlice";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .required("Password is required.")
    .matches(
      /(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(
      /(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(/(?=.*[0-9])/, "Password must contain at least one number.")
    .matches(
      /(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),
});

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { success, loading, error } = useSelector(
    (state: RootState) => state.user
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isValid, isDirty, isSubmitting, isSubmitSuccessful } =
    formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    if (success) {
      reset();
      resetInitialState();
      router.push("/");
    }
  }, [success]);

  const onError = (errors: FieldErrors) => {
    console.log(errors);
  };

  const onSubmit = (data: LoginForm) => {
    dispatch(login(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-primary">
          Welcome back!
        </h1>

        <form
          className="mt-4 space-y-4"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
              <FaEnvelope className="text-primary mx-2" />
              <input
                {...register("email")}
                type="email"
                id="email"
                aria-label="Email"
                autoComplete="email"
                className="w-full py-3 px-2 focus:outline-none bg-transparent"
                placeholder="Enter your email"
              />
            </div>
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.email?.message}
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
              <FaLock className="text-primary mx-2" />
              <input
                {...register("password")}
                type={passwordVisible ? "text" : "password"}
                id="password"
                aria-label="Password"
                autoComplete="new-password"
                placeholder="••••••••"
                className="w-full py-3 px-2 focus:outline-none bg-transparent"
              />
              <button
                type="button"
                className="text-gray-600 hover:text-gray-800 mx-3"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <FaEye color="#1A1A55" />
                ) : (
                  <FaEyeSlash color="#1A1A55" />
                )}
              </button>
            </div>
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.password?.message}
            </p>
          </div>
          {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}
          <button
            type="submit"
            disabled={(!isDirty && !isValid) || isSubmitting}
            className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-300"
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </form>

        <p className="mt-2">
          <Link
            href="/forgotPassword"
            className="text-secondary hover:underline ml-1"
          >
            Forgot password?
          </Link>
        </p>

        <p className="text-center text-secondary">Or</p>
        <button className="flex justify-center items-center w-full py-3 mt-4 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary transition duration-300">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        <p className="text-center text-secondary mt-4">
          Don&apos;t have an account?
          <Link href="/signup" className="text-primary hover:underline ml-1">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
