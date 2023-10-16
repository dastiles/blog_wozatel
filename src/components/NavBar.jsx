import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setOpenMenu((value) => !value);
  });
  return (
    <div className="bg-white shadow-lg">
      <div className="w-[85vw] mx-auto py-5">
        {openMenu && (
          <div className="absolute inset-0  h-[100vh] z-50 flex lg:hidden">
            <div className="bg-white h-full w-3/6">
              <div className="h-2/6 bg-[#3b3abe] w-full flex flex-col justify-center items-center gap-5">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img src="./placeholder.jpg" alt="" className="object-fit" />
                </div>

                <button className="bg-[#2d97ee] outline-none text-white rounded-full py-1 w-[150px] font-bold">
                  Sign Up
                </button>
                <button className="bg-[#34bb61] outline-none text-white rounded-full py-1 w-[150px] font-bold">
                  Login
                </button>
              </div>
              <div className="px-6 py-5">
                <ul className="text-black flex gap-5 text-lg flex-col font-bold">
                  <li className="hover:bg-[#f0d4ef] rounded-full p-2 hover:text-[#f740cf] transition-all">
                    <Link to={"#"}>Home</Link>
                  </li>
                  <li className="hover:bg-[#f0d4ef] rounded-full p-2 hover:text-[#f740cf] transition-all">
                    <Link to={"#"}>Courses</Link>
                  </li>
                  <li className="hover:bg-[#f0d4ef] rounded-full p-2 hover:text-[#f740cf] transition-all">
                    <Link to={"#"}>Groups</Link>
                  </li>
                  <li className="hover:bg-[#f0d4ef] rounded-full p-2 hover:text-[#f740cf] transition-all">
                    <Link to={"#"}>Video Library</Link>
                  </li>
                  <li className="hover:bg-[#f0d4ef] rounded-full p-2 hover:text-[#f740cf] transition-all">
                    <Link to={"#"}>Blog</Link>
                  </li>
                  <li className="hover:bg-[#f0d4ef] rounded-full p-2 hover:text-[#f740cf] transition-all">
                    <Link to={"#"}>Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              onClick={toggleMenu}
              className="h-full w-3/6 bg-black opacity-50"
            ></div>
          </div>
        )}

        <div className="flex justify-between items-center">
          <h1 className="text-2xl">
            <Link to={"#"}>WazatelOnline</Link>
          </h1>

          <div className="hidden lg:block">
            <ul className="text-black text-lg flex gap-5">
              <li className="hover:text-[#3b3abe] transition-all">
                <Link to={"#"}>Home</Link>
              </li>
              <li className="hover:text-[#3b3abe] transition-all">
                <Link to={"#"}>Courses</Link>
              </li>
              <li className="hover:text-[#3b3abe] transition-all">
                <Link to={"#"}>Groups</Link>
              </li>
              <li className="hover:text-[#3b3abe] transition-all">
                <Link to={"#"}>Video Library</Link>
              </li>
              <li className="hover:text-[#3b3abe] transition-all">
                <Link to={"#"}>Blog</Link>
              </li>
              <li className="hover:text-[#3b3abe] transition-all">
                <Link to={"#"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-5">
            <button className="bg-black rounded-xl py-2 px-4 hover:shadow-xl">
              <Link className="text-white  font-bold" to={"#"}>
                sign up
              </Link>
            </button>

            <button className="bg-white border-[#3b3abe] border-[1px] rounded-xl py-2 px-4 hover:shadow-xl">
              <Link className="text-[#3b3abe]  font-bold" to={"#"}>
                login
              </Link>
            </button>
          </div>

          <div className="lg:hidden">
            <AiOutlineMenu size={25} onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
