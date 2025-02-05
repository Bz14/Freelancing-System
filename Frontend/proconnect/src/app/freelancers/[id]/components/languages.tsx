import { FaLanguage } from "react-icons/fa";

interface LanguagesProps {
  languages: string[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className="shadow-md rounded-lg p-6 mb-6 bg-primary text-white">
      <h2 className="text-xl font-semibold mb-4">Languages</h2>
      <div className="flex items-center gap-2 justify-start">
        <FaLanguage />
        <ul className="flex flex-wrap gap-2">
          {languages &&
            languages.map((language, index) => <li key={index}>{language}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
