import { FaLinkedin, FaGithub } from "react-icons/fa";

import { BiWorld } from "react-icons/bi";

interface AccountsProps {
  linkedAccounts: {
    [key: string]: string;
  };
}

const Accounts: React.FC<AccountsProps> = ({ linkedAccounts }) => {
  const icons = [
    <FaLinkedin key={2} className="text-primary" />,
    <FaGithub key={3} className="text-primary" />,
    <BiWorld key={4} className="text-primary" />,
  ];
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Linked Accounts
      </h2>
      <ul className="flex gap-4">
        {Object.keys(linkedAccounts).map((key, index) => (
          <li key={index} className="flex items-center gap-1">
            {icons[index]}
            <a
              // href={freelancerProfile.linkedAccounts[key]}
              target="_blank"
              className="text-primary hover:text-secondary underline hover:cursor-pointer"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accounts;
