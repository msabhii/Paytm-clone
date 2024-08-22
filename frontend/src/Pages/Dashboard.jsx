import { AppBar, Searchbar, Users } from "../Components";
import { Balance } from "../Components/Balance";

const Dashboard = () => {
  return (
    <>
      <div>
        <AppBar />
        <Balance value={"10,000"} />
        <Users />
      </div>
    </>
  );
};
export default Dashboard;
