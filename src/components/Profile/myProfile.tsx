import React ,{useState,useEffect} from "react";
import profileWelcome from "../../images/Profile Welcome.png";
import profileIcon from "../../images/profileicon.png";
const MyProfile = () => {
    const [responsive, setResponsive] = useState(window.innerWidth > 480);
    useEffect(() => {
      function handleResize() {
        setResponsive(window.innerWidth <= 480);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    
  return (
    <div className="w-100 mt-2 d-f fd-column align-items-center">
      <div className="w-90 bg-primary btn text-light d-f justify-content-center align-items-center">
        <div className={responsive ? "w-50 d-f fd-column g-1 justify-content-center" :"w-50 d-f fd-column g-1 profileicon  justify-content-center"} >
          <div className={responsive ? "fs-xl fw-700" : "fs-14 fw-600"}>Hi Benovshe, Welcome</div>
          <div className={responsive ? " " : 'fs-sm'}>
            You’ve learned 70% of your goal this week! Keep it up and improve
            your progeress.
          </div>
        </div>
        <div className="w-40">
            {responsive ?<img src={profileWelcome} alt="profilewelcome" /> : <img src={profileIcon} alt="profilewelcome" />}
          
        </div>
      </div>
      <div className={responsive? "mt-3 d-f fd-column g-1 align-items-center justify-content-center menu w-60 btn " : "mt-3 d-f fd-column g-1 align-items-center justify-content-center menu w-100 btn "} style={{height:"328px"}}>
        <div className="d-f align-items-center w-80 fs-md g-2 gap btn " style={{height:"56px"}}>
            <div className="ml-1">Your Level :</div>
            <div> Intermediate</div>
        </div>
        <div className="d-f align-items-center w-80 fs-md g-2 gap btn  " style={{height:"56px"}}>
            <div className="ml-1">Choosen Course :</div>
            <div>General English</div>
        </div>
        <div className="d-f align-items-center w-80 fs-md g-2 gap btn "  style={{height:"56px"}}>
            <div className="ml-1">Teacher :</div>
            <div>Fatima Yusifzade</div>
        </div>
        <div className="d-f align-items-center w-80 fs-md g-2 gap btn " style={{height:"56px"}}>
            <div className="ml-1">Point :</div>
            <div>98</div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
