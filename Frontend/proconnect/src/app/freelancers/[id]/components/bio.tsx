import { FaUser } from "react-icons/fa";

interface BioProps {
  bio: string;
}

const Bio: React.FC<BioProps> = ({ bio }) => {
  return (
    <div className="bg-primary shadow-md rounded-lg p-6 mb-6 text-white">
      <h2 className="text-xl font-semibold mb-4">Bio</h2>
      <div className="flex items-center gap-2 justify-start">
        <FaUser />
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default Bio;
