import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { localUserService } from "../services/localService";
import { Outlet } from "react-router-dom";
import NavbarUser from "../components/profile/NavbarUser";
import ProfileTitle from "../components/profile/ProfileTitle";

const ProfileLayout = () => {
  const user = localUserService.get()?.user;
  return (
    <div>
      <Header />
      <div className="bg-[#020d18] relative">
        <div
          className="absolute w-full h-[350px] top-0 left-0"
          style={{ backgroundImage: "url(./bg-2.jpg)" }}
        ></div>
        <div className="container relative z-10 flex flex-col items-center justify-between py-20 mt-5 pt-60 lg:flex-row md:items-start lg:gap-0 gap-x-4">
          <NavbarUser />
          {/*profile user */}
          <div className="w-full lg:w-3/4">
            <ProfileTitle userName={user?.name} />
            <div className=" bg-[#020d18] mt-10 lg:mt-20 relative">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
