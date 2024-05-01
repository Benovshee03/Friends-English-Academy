import { useEffect, useState } from "react";
import profile from "../../images/profile.png";
import backArrow from "../../images/arrow_back_ios_new.svg";
import arrow from "../../images/arrowPrimary.png"
import { Link } from "react-router-dom";
import face from "../../images/face.svg"
import course from "../../images/library_books.svg"
import setting from "../../images/settings.svg"
const Profile = ({ layout }: { layout: React.ReactNode }) => {
  const [responsive, setResponsive] = useState(window.innerWidth > 480);
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu= () => {
    setMenuOpen(!menuOpen)
}

  return (
    <div
      className={
        responsive ? "d-f container  mt-1 mb-1 profile" : "container-sm d-f fd-column "
      }
      style={{ height: "100vh" }}
    >
      <div className="w-20 d-f fd-column g-2 d-sm-none menu">
        <div className="d-f align-items-center">
          <div className="image">
            <img
              style={{ width: "80px", height: "80px" }}
              src={profile}
              alt="profile"
            />
          </div>
          <div className="name fs-md">Benovshe Maharramova</div>
        </div>
        <div>Menu</div>
        <ul className="list-style-none d-f fd-column">
          <li  className="profilebutton d-f align-items-center">
            <img src={face} alt="face" style={{color:"gray"}} className="mr-2 ml-1"/>
            <Link className="text-dec-none" to={"/myProfile"}>
              My Profile
            </Link>
          </li>
          <li className="profilebutton d-f align-items-center" >
          <img src={course} alt="face"  className="mr-2 ml-1"/>
            <Link className="text-dec-none" to={"/myCourses"}>
              My Courses
            </Link>
          </li>
          <li className="profilebutton d-f align-items-center" >
          <img src={setting} alt="face"  className="mr-2 ml-1"/>

            <Link className="text-dec-none" to={"/setting"}>
              Setting
            </Link>
          </li>
        </ul>
      </div>
      <div className="d-none d-sm-flex fd-column " > 
      <div className="d-f g-5 mb-2 fw-600 mt-1" onClick={toggleMenu}>
        {menuOpen ? <img src={backArrow} alt="arrow"  /> : <img src={arrow} alt="arrow"  />}
         My Profile
      </div>
      <div  style={{display : menuOpen ? "block" : "none"}}>
        <div >
          <div className="d-f fd-column align-items-center">
          <div className="image">
            <img
              style={{ width: "80px", height: "80px" }}
              src={profile}
              alt="profile"
            />
          </div>
          <div className="name fs-md">Benovshe Maharramova</div>
          </div>
          <div className="d-f fd-column align-items-center">
            <ul className="list-style-none ">
              <li >
                <Link className="text-dec-none" to={"/myProfile"}>
                  My Profile
                </Link>
              </li>
              <li>
                <Link className="text-dec-none" to={"/myCourses"}>
                  My Courses
                </Link>
              </li>
              <li>
                <Link className="text-dec-none" to={"/setting"}>
                  Setting
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </div>
      </div>
      <div className={responsive ? "w-90 justify-content-center " : menuOpen ? "d-none" : "block"}>{layout}</div>
    </div>
  );
};

export default Profile;
