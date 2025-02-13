"use client";
import { useState, useEffect } from "react";
import { useForm, FieldErrors } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEyeSlash,
  FaEye,
  FaGoogle,
} from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/redux/store/store";
import { resetInitialState, signup } from "@/app/redux/slices/userSlice";
import { useRouter } from "next/navigation";

interface SignupForm {
  name: string;
  email: string;
  password: string;
  isFreelancer?: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Full name is required."),
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
  isFreelancer: yup.boolean(),
});

const Signup = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loading, error, success } = useSelector(
    (state: RootState) => state.user
  );
  const [passwordVisible, setPasswordVisible] = useState(false);
  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      isFreelancer: false,
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

  const onError = (errors: FieldErrors) => {
    reset();
    console.log(errors);
  };

  useEffect(() => {
    if (success) {
      dispatch(resetInitialState());
      router.push(`/verify`);
    }
  }, [success]);

  const onSubmit = (data: SignupForm) => {
    dispatch(signup(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-primary">
          Create an Account
        </h1>
        <p className="text-secondary text-center mt-2">
          Join us today and start freelancing!
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="relative">
            <div className="flex items-center border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-primary">
              <FaUser className="text-primary mx-2" />
              <input
                {...register("name")}
                type="text"
                id="name"
                aria-label="Name"
                autoComplete="name"
                className="w-full py-3 px-2 focus:outline-none bg-transparent text-secondary"
                placeholder="Enter your name"
              />
            </div>
            <p style={{ color: "red", fontSize: "12px" }}>
              {errors.name?.message}
            </p>
          </div>
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

          <div className="flex items-center space-x-2">
            <input
              {...register("isFreelancer")}
              type="checkbox"
              className="peer w-4 h-4 border border-gray-300 rounded-lg checked:bg-primary focus:outline-none"
            />
            <label
              htmlFor="checkbox"
              className="text-primary peer-checked:text-primary cursor-pointer"
            >
              I am a freelancer.
            </label>
          </div>
          <p style={{ color: "red", fontSize: "12px" }}>
            {errors.isFreelancer?.message}
          </p>
          {error && <p style={{ color: "red", fontSize: "12px" }}>{error}</p>}

          <button
            type="submit"
            disabled={(!isDirty && !isValid) || isSubmitting}
            className="w-full py-3 mt-4 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-300"
          >
            {loading ? "Loading..." : " Sign Up"}
          </button>
        </form>

        <p className="text-center text-secondary mt-4">Or</p>
        <button className="flex justify-center items-center w-full py-3 mt-4 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary transition duration-300">
          <FaGoogle className="mr-2" />
          Continue with Google
        </button>
        <p className="text-center text-secondary mt-4">
          Already have an account?
          <Link href="/login" className="text-primary hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
