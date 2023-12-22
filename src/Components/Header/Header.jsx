import { Link, NavLink, Outlet } from "react-router-dom";

import {  useState } from "react";

// import Swal from 'sweetalert2';
import Footer from "./Footer";
const Header = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

          // const {user, LogOut} = useContext(AuthContex)

          // const handleLogOut = () => {
          //           LogOut()
          //           .then(() => {
          //             Swal.fire(
          //               'Loged Out',
          //               'You have loged Out successfully',
          //               'success'
          //             )
          //           })
          //         }
          const user = false;
          const links = <>
          
          <li className="flex">
          <NavLink to= '/'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
          </li>
          <li className="flex">
          <NavLink to= '/alljobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">All Jobs</NavLink>
          </li>
          { user ? <li className="flex">
          <NavLink to= '/appliedjobs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Applied Jobs</NavLink>
          </li> :
          <li className="flex">
          <NavLink to= '/about'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">About Us</NavLink>
          </li>
          }
          { user && <li className="flex">
          <NavLink  to='/postedJobs' className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Posted Jobs</NavLink>
          </li> }
          <li className="flex">
          <NavLink to= '/blogs'  className="text-xl flex items-center px-4 -mb-1 border-b-2 border-transparent ">Blogs</NavLink>
          </li>
          
          </>
          return (
          <div className="bg-white text-black">
          <div className="max-w-7xl mx-auto ">
          <header className=" p-4">
          <div className="container flex justify-between h-16 mx-auto">
          <a className="flex items-center p-2">
          <img className="h-9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWUAAACNCAMAAABYO5vSAAAAulBMVEX///8DRYCOxUsAOnoANXiaq8LK1N8AN3nFzdmMxEeiz3AAQX61wtMAQ38AMXYAP32GwTksWIzv9ukALnUAPHvj8NXS2+W32ZJOcJpHbJjl6O6Nnrg9YI+Jw0CEwTWfsMVhfqP5/Pauu83x9Pf6/fhrhah2jq7c4uoWS4PH4azn8tuYyl6+3Z2dzGfd7c2OobssWozQ5roAInCm0Xd+viTE4Key14t+lbJYd58WUYiUyFXO5bat1IIAGW2FEeZcAAALU0lEQVR4nO2df3vaNheGRWUwzEhOapeCQwK1i2HdOtJ2LWHb+/2/1otJ0gSdo582mA0919V/GnNsbsxj6ejoQIiXl5eXl5eXl5eXl5eXl5eXl5eX1yWo129QvbbfTaP6+E7UJ9dQkyRoTPy6yTfZur7dXR3qz7euocZRpzFF0ybfZNv69erNoe7+cI7lKUv06U6AfPvePZinjOvjYHAIefBbjWieMq5vA/FWdjZl4ilL9L1BUyaeMq53TZoy8ZRRNWvKxFNG9Uujpkw8ZUwNmzLxlBFBU/69bkhPWdSHW9GUP9eO6SmLgqb8oXZMT1nQ77eiKb+rH3TCQ7liSJIqDg/+Azm5I5jyTv2hQguAma5Vxw8buKB29UG8kxswZZ26VKQc/LcS9UCfj2DKOl0c5aOYsk6XRvkPYMrfT3DWC6PchimTi6MsmvJg8PEUp70syu/bMGVyYZTbMWVyWZShKf9yojNfEuXf2jFlclGUoSk7FxLZqhnKxbLXH+azWZ73e1lR85J2wfaxhg3EeiVgylcnMmVSn3I2XM+3KedBGIa0yjMFPOiM133Hy+l1Hzq7CME+VhDwcPWw7stRf38v6odsuvy2NVMm9ShnswfKAxpH7DACi2iQjHPr+7C/2EU7DMZYvIt1vx7hr/h8OxB0J1u+a8+USQ3Ko5ttQpG86bOiMCgzqyvpBDHDYzHKV2vsQwPp+DdXEsotmjJxpVzMtjzVLQ6wNFkY388zGkoQP4NO5vBDM6YMTflX0ytrQi6Ui00Qmq2/pEFudBXL+0AfLFyA15lSfisuWQ++GV1XU7KnXGx4qrztDsQfDC5ilph8aCFcQTClLJrym4EJm+ZkT3nDzRnvRLda1ygTo4gJDGRI+UerpkxcKI+4DeROJ15pMM8N3KKDL+yaUW7ZlImTLzOre7nCrAxXmkHu0DV8rRFlYMq3pzVl4kS5TO0od9KxItrM9KvBkTGzEeW/xJHyGytCTciBct/w5nsVsisNlpl58k4x8moTyq2bMnEbyWF3H4uY3ElYIp2f3JuW5MRz5NUGlL8AU/7bElEDcqH8ulhpNwMOOU+i7XS6DROOVdFUiGSeMUS+FyyuIiZJlRx5mfqE2MhbT/kMTJm4Uc7Dp0MjyunkZrj8OYhY5gt8DpdIgq7grZwG83wfsch6ebnlTxMgjn0d9JTPwJSJG+UsecSRbLEsTh6BkLvPA7+ZocWzpDwc+GX5OKGsw9CBipbyOZgyccxj3LNOFMY3S8mfS8S4cWd+AAbDkZxp0e0EdIO9Xkf5i+gXbZgycaS8psFWlaBARmcpSikBJ5eEzVM0Y62hDE35H+17O4qcKI8STRJoHYpR0YEYMIxoYnf1GsrAlP+yC9+YHDOfugOm4KmGTSrW4smRhJBSasr/AFOuuUPHWUdaXYXJDorMTOaiLaMDCYWUlKEpf6n5rpx1rDVsMNvARhn34qAvsFzFUlF+C0pcftR9U846FmUYFzHmzjEpn40pk+NRHoGRMOIGYP4SSFZRZVJQPh9TJsejXMBBGhyLgUckPt6TS0757/MxZXLE2iJAmc7AMcAxWGD3+JNShg1G2jNlckTKIAmd3oBj4HiP6RZWDiWl/OaMTJkciXKxE1iBjeESNLIeEHVk83ZMMsrAlGVlGidSc5SL0bBbzqfbiNKqWxd4siFDuRxOETtRYuHNEsrAlO/aNGXSEOVsuJnESRDStKrmkmTzkdkzfERWoiFaR4QJp3xmpkyaoDxcrHiYKmq5nikja9Bj/GU0WJgN6XDK4v+1bMqkNuXhQxLKqtsEMWRzcU+ytMrSZDszuKFRyt/OzJRJzZrPDQ3097CKMplIl/0Y5WNt7gih/KHJVnxNyZ1yNk+sSgZQyhnqzE+KglTj0JDyLcgR1ez61IicKZeJ+W0sp0y66nIMypXluZCyOFCu3fWpETlS7sfI4p4LZTLXBEq5YmSHUEaMun25UTasHzShTCYazIzKc/t6ymdgysSR8hSZTThTJhNtNGl5rpbyOZgycaJcrCwdWUPZ4JuRRvi8W0f5LEyZOFFGKlWeFaU0DPi+MgjElVMmOdfVcUVYBYGe8gkajBjJnvJUcifHIaeTcjbsLbOsKAoQWEGZZFOY9xCUYJg1lM/DlIkD5Q3qolEQL4YHY66ZDeXd7RxTNWeWGFXWnqEpE3vKPWwaEScTcKdZUiZkHag5M2ThUEn5XEyZ2FPeQhIsmCDPJmvKu2thgcqf0zl4hZLyuZgysaacw0pYxuFSE3GiTMhwkihuaFg4qqJcmXKD27hryZLyCjBgAT7IcqK8ew52r6Ub3WDuVEG5asXXV+9oOZ3sKCOVsFhlViVHyjsty1CyjxU8AOWUq65PWRCWhuc8suwog5KrTojaBalDuXpxjHJORWhyypUpX0f4+O/0sqMMpxpb2aG1KO+uC81cp8JRUspV16d9Hio8C2u2ogxrDNHdHnvVpEwKLIvEhWeAjHJlyo9F1PFZNNm1ogwPRnbtPqkuZTQnKn6oEsqVKY+eBvYhshnz5LKiDBrcsnvzwNaUkeUqsXJGQnlnysXP1UhsznhqWVEGbxvdhPcoUNFiTzkDBiWeD6dcmfJLtoVFtudtXlaUQaUFeOi/6BrUwNk3yAZd0MWaDpRy1YqvfJVtSU2aRxxXVpTBvSWnDAtaHCgDbxfnJRjlqutTfnB2fHJ6SllRBuTkjgHjOlAGO1sNKA9uP5Ll4bIAS2xq746hepSZdJwEimZdKPfFLKuBY1SmvBWcBt+SeUJZUYYTMi45Eux+cqIMqhXFutHP4i96Xt1VrfhAepbCetOTyoqyeI/sDsaXl0dIFtqBMhiniJ1IPoFfp31cHQH7DZN2fzXBijLc0Iv/fkkh9vGTUe6rn0vg2oz3A4rLZoy3OtO2ooz4ALalN0PXXzHKZbJScLsBpxNZ5V2gxyMK8NyUz59OICvKSJcXJPPZx5vNYZRXLArYWlKjlYOBIwgxDaigr0/B+qJnhZYbgxqVXU4OW2kWrLlYSAoMkdn4vhaRUT6dIaA3sIIO7H+dwJ4Ez5FK8Y3JWnScQnXzy9XdPH65nUcllxWCsg4I9zyGiGiyLQ+WwJc3FEnJgdyUgnKVXT48f9qeNVuulaAVmjFfLbrDYb5+YFLG6KD11YfG0pCn9/PNutu9KScxx4rnUjAeU1HOxO6CsWXDggZlue4Hx3KPjOKq9TJVVuWzEEQDabs4rbxV0qcVGSeoKENfV7QCO7IsKQ8tGyMeABCDWXZZRDLFSspkLn6xWptp29ZjwI2QEjFQg5Toz60Stuqhpkw6wsVG8NFwGtlSBm4nEVuBJAR8dtn8vCOLkYeXhjKYgiKFMyeRdZ1crtoJ8lNRkBFxcC02FShsDIOJS357aSiTLrgGs37QTcuhM7BBA8qILmFfBpGTTSfLOEanLjrKYEOhokvjMeVQv7zQ0kk71XsRVzrE1g0b8y1W4T0+1tVSBtvBo1Z+0tRlx8NGYxpPGxTEjJq4AH2trVl+JiPdmq2ljCRB2yg3ctpXMuSKPQ/0maa4ngTmx7NIWeP5pDjBSkofpacM663bSII6djoby3b70ZcOkqLvIouEw2lClaBZmkwU12NAGfapaqHcqJsEgr4aZVV6E7hzlcUB3by8hezrYWCO5aKz7pQH+GSPRZR3NsqJhAllkARtodxoCX+L2fCjXm5iHqb7Tg27f1Eacj4//DIa/spz0d9MEx7s2z7sFUW7mfYu3LirK1gxoUyGIAl6DuVG5lrm5XQVU0qj7aTMa9XwZP3ZZjG5XlW6ns433b7JkGsKvon/Q1624GIS+jwqQf8tWo6AsMNuRP27bmYvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL68j6P+raexrF2HlhwAAAABJRU5ErkJggg==" alt="" />
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
          {links}
          </ul>
          <div className="items-center gap-2 flex-shrink-0 hidden lg:flex">
          
          { user? <Link to= '/postJob' className=" flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Post a Job</Link>  : <Link to= '/alljobs' className=" flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Apply Now</Link> 
          }

        {user && (
        <div
          className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
            <div className="px-2 border-b pb-2">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={user.photoURL}
                alt="User Avatar"
              />
              <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div className="mt-1">
              <Link to="/dashboard" className="btn btn-sm bg-violet-300">
                Dashboard
              </Link>
              <button
          //       onClick={}
                className="btn btn-sm bg-violet-300"
              >
                LogOut
              </button>
            </div>
          </ul>
        </div>
      )}
          { user ? '' :
          <Link to= '/login' className="btn bg-violet-400 text-white">
          Sign In
          </Link>
          }
          </div>
          <div className="p-4 lg:hidden">
          { user ? <div
          className={`dropdown dropdown-end hover:dropdown hover:dropdown-end ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user.photoURL} alt="User Avatar" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content hover:dropdown-content bg-base-100 rounded-box w-52">
            <div className="px-2 border-b pb-2">
              <img
                className="h-24 w-24 rounded-full mx-auto"
                src={user.photoURL}
                alt="User Avatar"
              />
              <p className="pt-2 text-lg font-semibold">Hi, {user.displayName}</p>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
            <div>
              {links}
              <Link to= '/postJob' className=" my-1 flex items-center uppercase gap-2">
          <span className="relative flex-shrink-0 w-2 h-2 rounded-full bg-violet-400 text-xl">
          <span className="absolute flex-shrink-0 w-3 h-3 rounded-full -left-1 -top-1 animate-ping bg-violet-400"></span>
          </span>Post a Job</Link>
            </div>
            <div className="mt-1">
              <Link to="/dashboard" className="btn btn-sm bg-violet-300">
                Dashboard
              </Link>
              <button
          //       onClick={handleLogOut}
                className="btn btn-sm bg-violet-300"
              >
                LogOut
              </button>
            </div>
          </ul>
        </div> :
          <Link to= '/login' className="btn bg-violet-400 text-white">
          Sign In
          </Link>
          }
          </div>
          </div>
          </header>                             
          </div>
          <div>
          <Outlet></Outlet>
          </div>
          <div>
          <Footer></Footer>
          </div>
          </div>
          );
};

export default Header;