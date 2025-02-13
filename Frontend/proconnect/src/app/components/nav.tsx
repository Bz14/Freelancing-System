"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store/store";

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isFreelancer, setIsFreelancer] = useState(false);
  const { user, accessToken } = useSelector((state: RootState) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const paths = ["/", "/jobs", "/freelancers", "/about", "/contact"];

  useEffect(() => {
    if (accessToken) {
      setIsLogged(true);
      setIsFreelancer(user.isFreelancer);
    }
    console.log(user, accessToken);
  }, [accessToken, user]);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="ProConnect" width={50} height={50} />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {["Home", "Browse Jobs", "Freelancers", "About", "Contact"].map(
            (item, index) => (
              <div key={index}>
                <Link
                  href={paths[index]}
                  className="text-gray-700 hover:text-secondary"
                >
                  {item}
                </Link>
                {path === paths[index] && (
                  <hr className="h-[3px] bg-primary border-none w-full rounded-full" />
                )}
              </div>
            )
          )}
        </nav>

        <div className="hidden md:flex space-x-4">
          {!isLogged && (
            <>
              <Link
                href="/login"
                className="text-primary border px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary"
              >
                Sign Up
              </Link>
            </>
          )}
          {isLogged &&
            (isFreelancer ? (
              <Link
                href="/dashboard/freelancer"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary"
              >
                {user.profilePic ? (
                  <Image
                    src={user.profilePic}
                    alt="profile"
                    width={30}
                    height={30}
                  />
                ) : user.name ? (
                  user.name[0]
                ) : (
                  "P"
                )}
              </Link>
            ) : (
              <Link
                href="/dashboard/client"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary"
              >
                {user.profilePic ? (
                  <Image
                    src={user.profilePic}
                    alt="profile"
                    width={30}
                    height={30}
                  />
                ) : user.name ? (
                  user.name[0]
                ) : (
                  "P"
                )}
              </Link>
            ))}
        </div>

        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} color="#1A1A55" />
          ) : (
            <Menu size={28} color="#1A1A55" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full px-6 py-4 space-y-4">
          {["Home", "Browse Jobs", "Freelancers", "About", "Contact"].map(
            (item, index) => (
              <div key={index}>
                <Link
                  href={paths[index]}
                  className={`block text-gray-700 hover:text-secondary text-center {${
                    path === paths[index] && "text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </div>
            )
          )}
          <div className="border-t pt-4 flex justify-between align-middle">
            <Link
              href="/login"
              className="block text-primary py-2 hover:bg-blue-50 rounded-lg w-20 text-center border px-4"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block bg-primary text-white py-2 rounded-lg hover:bg-secondary w-20 text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
