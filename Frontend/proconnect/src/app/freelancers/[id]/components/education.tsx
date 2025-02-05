interface EducationProps {
  educationalHistory: {
    degree: string;
    institution: string;
    year: string;
  }[];
}

const Education: React.FC<EducationProps> = ({ educationalHistory }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Educational History
      </h2>
      {educationalHistory &&
        educationalHistory.map((education, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-primary">
              {education.degree}
            </h3>
            <p className="text-sm text-secondary">{education.institution}</p>
            <p className="text-sm text-secondary">{education.year}</p>
          </div>
        ))}
    </div>
  );
};

export default Education;
