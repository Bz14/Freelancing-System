interface PortfolioProps {
  portfolio: {
    title: string;
    description: string;
    link: string;
  }[];
}
const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-primary">
        Portfolio of Work
      </h2>
      {portfolio &&
        portfolio.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold text-primary">
              {project.title}
            </h3>
            <p className="text-secondary">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-primary font-bold hover:underline hover:text-secondary"
            >
              View Project
            </a>
          </div>
        ))}
    </div>
  );
};

export default Portfolio;
