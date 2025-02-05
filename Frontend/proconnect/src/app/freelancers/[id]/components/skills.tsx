interface SkillsProps {
  skills: string[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">Skills</h2>

      <div className="flex flex-wrap gap-2">
        {skills &&
          skills.map((skill, index) => (
            <span
              key={index}
              className="bg-primary text-white px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Skills;
