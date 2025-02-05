import Image, { StaticImageData } from "next/image";
interface ProfileProps {
  profilePicture: StaticImageData;
  name: string;
  title: string;
  location: string;
  hourlyRate: string;
}

const Profile: React.FC<ProfileProps> = ({
  profilePicture,
  name,
  title,
  location,
  hourlyRate,
}) => {
  return (
    <div className="flex items-center mb-6 mt-4 p-2">
      <Image
        src={profilePicture}
        alt={name}
        className="w-32 h-32 rounded-full object-cover mr-6"
        width={128}
        height={128}
      />
      <div className="text-secondary">
        <h1 className="text-3xl font-bold text-primary">{name}</h1>
        <p className="text-xl text-primary">{title}</p>
        <p className="text-sm">Location: {location}</p>
        <p className="text-sm">Hourly Rate: {hourlyRate}</p>
      </div>
    </div>
  );
};

export default Profile;
