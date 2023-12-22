import { useContext,  useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { Helmet } from "react-helmet";
import { AuthContex } from "../Provider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContex);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-green-500 p-4">
        <div className="container mx-auto">
          <div className="text-black text-center">
            <h1 className="text-2xl font-semibold">Welcome To Dashboard</h1>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden text-right p-4">
        <button
          onClick={toggleMobileMenu}
          className="text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="bg-gray-800 fixed inset-0 z-50 opacity-75"></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white w-2/3 p-4 rounded-lg shadow">
              <ul className="space-y-4">
                {user && (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/profile"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/requested"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        Requested Meals
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/myreviews"
                        onClick={toggleMobileMenu}
                        className="block p-4"
                      >
                        My Reviews
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="lg:max-w-7xl mx-auto mt-8">
      <Helmet>
          <title>Starbelly | Dashboard</title>
          </Helmet>
        <div className="lg:flex">
          <div className="lg:w-1/4 p-4 hidden lg:block">
            {user && (
              <ul>
                <li>
                  <NavLink to="/dashboard/profile" className="block p-4">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/requested" className="block p-4">
                    Add Task
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myreviews" className="block p-4">
                    Notification
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
          <div className="lg:w-3/4 p-4">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;