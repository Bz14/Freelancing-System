import ActiveJobs from "./activeJobs";
import OverviewStats from "./overview";
import FreelancerProposals from "./proposals";

const Dashboard = () => {
  return (
    <>
      <OverviewStats />
      <ActiveJobs />
      <FreelancerProposals />
    </>
  );
};

export default Dashboard;
