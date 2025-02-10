import ActiveJobs from "./dashboardComponents/activeJobs";
import OverviewStats from "./dashboardComponents/overview";
import FreelancerProposals from "./dashboardComponents/proposals";

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
