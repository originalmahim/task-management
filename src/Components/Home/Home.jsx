// import  { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Home = () => {
//   const { user } = useContext(AuthContext);
const user = false;
  return (
    <div className="grid md:grid-cols-2 justify-center rounded items-center md:mt-40  mx-auto max-w-7xl mt-0 mb-10">
      <div className="col-span-1 order-2 md:order-1">
        <h1 className="text-3xl font-bold md:mt-0 mt-10 text-center md:text-left">
          Best Way to Manage
          <br />
          Your Daily Task
        </h1>
        <p className="my-2 text-gray-800 text-center md:text-left">
          Efficiently organize and prioritize your daily tasks with our
          intuitive task management system, ensuring enhanced productivity and
          stress-free planning for a more balanced day.
        </p>
        {user ? (
          <Link to={"/dashboard"}>
            <button className="text-xl text-white bg-blue-700 mt-3 px-4 py-3 rounded justify-center grid mx-auto md:mx-0">
              Go Dashboard
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="text-xl text-white bg-blue-700 mt-3 px-4 py-3 rounded justify-center grid mx-auto md:mx-0">
              Let’s Explore
            </button>
          </Link>
        )}
      </div>
      <div className="col-span-1 order-1 mt-10 md:mt-0">
        <img className="w-full h-full" src='https://geekbot.com/blog/wp-content/uploads/2021/04/3_-7-hard-to-get-tips-for-effortless-task-management-in-Slack-1920x1080.jpg' alt="" />
      </div>
    </div>
  );
};

export default Home;
