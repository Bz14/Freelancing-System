"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/app/redux/store/store";

const VerifyPage = () => {
  const [resending, setResending] = useState(false);
  const router = useRouter();

  const { user, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleResend = async () => {
    setResending(true);
    setResending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-12">
        <h1 className="text-2xl font-bold text-center text-primary">
          Verify Your Email
        </h1>
        <p className="text-center mt-2 text-secondary">
          A verification email has been sent to{" "}
          <span className="font-bold">{user.email}</span>. Please check your
          inbox and verify your email.
        </p>

        {error && <p className="text-red-500 text-center mt-2">{error}</p>}

        <div className="text-center mt-4">
          <button
            onClick={handleResend}
            disabled={resending}
            className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary disabled:bg-gray-400 transition"
          >
            {resending ? "Resending..." : "Resend Email"}
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-secondary">
            Didn&apos;t receive the email? Check your spam folder.
          </p>
          <p className="text-center text-secondary mt-4">
            <span>Already verified?</span>
            <button
              onClick={() => router.push("/login")}
              className="text-primary hover:underline ml-1 font-bold"
            >
              Go to Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyPage;
