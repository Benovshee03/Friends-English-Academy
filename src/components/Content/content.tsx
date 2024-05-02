import { useEffect, useState } from "react";
import Rafiki from "../../images/rafiki.png";
import mobileFirst from "../../images/mobileFirst.png";
import udemy from "../../images/image 236.png";
import google from "../../images/image 237.png";
import tlc from "../../images/image 238.png";
import brand from "../../images/image 239.png";
import vector from "../../images/Vector 4094.png";
import vectorRes from "../../images/vectorRes.png";
import img1 from "../../images/Rectangle.png";
import img2 from "../../images/img.png";
import img3 from "../../images/image 12.png";
import img4 from "../../images/image 231.png";
import img10 from "../../images/10.png";
import lesson from "../../images/v6-icon (free).svg";
import level from "../../images/icon.svg";
import arrow from "../../images/keyboard_arrow_right.svg";
import arrowPri from "../../images/arrowPrimary.png"
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Content() {
  interface Course {
    courseName: string;
    description: string;
    level: string;
    lessonCount: number;
    image: string;
  }
  const navigate = useNavigate()
  function toTest(){
    navigate("/leveltest")
  }
  function toAll(){
    navigate("/courses")
  }
  const myUrl = "http://localhost:5003/api/courses"
  const [course, setCourse] = useState<Course[]>([]);
  const getCourse = async () => {
    await axios.get(myUrl)
    .then((res) => {
      // console.log(res.data);
      setCourse(res.data) 
    }) 
  
     .catch ((res) => {
      console.error("Error fetching items:", res);
    });
  };
  const [responsive, setResponsive] = useState(window.innerWidth > 480);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    getCourse()
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="d-flex fd-column align-items-center">
      <div
        className={
          responsive
            ? " container d-f  justify-content-sb"
            : "d-f fd-column align-items-center mb-2"
        }
        style={{ marginTop: "73px" }}
      >
        <div
          className="d-sm-none"
          style={{ maxWidth: "496px", marginTop: "86px" }}
        >
          <h1 className="fs-xxl">Studying Online is now much easier</h1>
          <p className="fw-400 fs-xs" style={{ marginBottom: "34px" }}>
            Friends Academy is an interesting platform that will teach you in
            more an interactive way
          </p>
          <div className="d-f g-3" style={{ marginBottom: "32px" }}>
            <button
              className="btn bg-primary text-light "
              style={{ width: "202px", height: "40px" }}
              onClick={toTest}
            >
              Test Your English
            </button>
            <button
              className="btn bg-light"
              style={{
                width: "202px",
                height: "40px",
                border: "1px solid #781527",
              }}
            >
              Learn More
            </button>
          </div>
          <div className="d-f justify-content-sb fs-md">
            <div>stars</div>
            <div>15K+ Students Love learning with us</div>
          </div>
        </div>
        <div>
          {responsive ? (
            <img src={Rafiki} alt="first page image" />
          ) : (
            <img src={mobileFirst} alt="first page image" />
          )}
        </div>
        <div
          className="d-none d-sm-flex fd-column align-items-center justify-content-center g-1 mt-2"
          style={{
            height: "208px",
            borderRadius: "8px",
            boxShadow:
              "4px 4px 50px 0px color(display-p3 0.149 0.1765 0.4627 / 0.09)",
          }}
        >
          <div className="fs-md fw-700 text-primary d-f align-items-center">
            You can learn online and sit in class
          </div>
          <div className="fs-sm fw-600 p-1">
            Friends Academy is a quick and convenient online test to help higher
            education institutions and employers check the English levels of
            individuals and groups of candidates.{" "}
          </div>
          <button
            className="btn bg-primary text-light"
            style={{ width: "133px", height: "30px" }}
            onClick={toTest}

          >
            Test Your English
          </button>
        </div>
      </div>
      <div
        className="container d-f fd-column align-items-center d-sm-none"
        style={{ marginBottom: "84px" }}
      >
        <div className="fs-xxl fw-700  " style={{ marginBottom: "32px" }}>
          Trusted by 2,000+ companies
        </div>
        <div className="d-f justify-content-sb g-5">
          <div
            className="d-f align-items-center g-1 fw-600 fs-lg"
            style={{ width: "160px" }}
          >
            <img src={udemy} alt="udemy" />
            <span>Udemy</span>
          </div>
          <div
            className="d-f align-items-center g-1 fw-600 fs-lg"
            style={{ width: "159px" }}
          >
            <img src={google} alt="google" />
            <span>Google</span>
          </div>
          <div
            className="d-f align-items-center g-1 fw-600 fs-lg"
            style={{ width: "116px" }}
          >
            <img src={tlc} alt="tlc" />
            <span>TLC</span>
          </div>
          <div
            className="d-f align-items-center g-1 fw-600 fs-lg"
            style={{ width: "354px" }}
          >
            <img src={brand} alt="brand" />
            <span>Brand Resource Center</span>
          </div>
        </div>
      </div>
      <div
        className={
          responsive ? "d-f fd-column g-5 mb-3" : "d-f fd-column g-3 mb-3"
        }
      >
        <div className="position-absolute zi--1 d-none d-sm-flex">
          <img src={vectorRes} alt="vector" />
        </div>
        <div className="container-fluid">
          <div className={responsive ? "position-absolute zi--1 " : "d-none"}>
            <img src={vector} alt="vector" />
          </div>
          <div
            className={
              responsive
                ? "container d-f justify-content-sb  align-items-center "
                : "container-sm "
            }
          >
            <div
              className="d-f fd-column align-items-center bg-light justify-content-center g-1 d-sm-none"
              style={{ width: "559px", height: "243px", borderRadius: "16px" }}
            >
              <div className="fs-xl fw-700">You can learn online</div>
              <div
                className="fs-md fw-400"
                style={{ width: "515px", height: "89px" }}
              >
                Friend Academy is a quick and convenient online test to help
                higher education institutions and employers check the English
                levels of individuals and groups of candidates.{" "}
              </div>
            </div>
            <div
              className={
                responsive ? "w-50 " : " d-f fd-column align-items-center"
              }
            >
              <img
                src={img1}
                className={responsive ? "img" : "responsImage"}
                alt="font image"
              />
              <div>
                <div
                  className={responsive ? "fs-44 fw-700" : "fs-lg fw-700"}
                  style={{ marginTop: "20px" }}
                >
                  You Speak Up To 6 Month Faster Than Now
                </div>
                <div className={responsive ? "fs-20" : "fs-sm"}>
                  Our range of free teaching resources, lesson plans and
                  activities is designed to help you prepare your students for
                  our exams and tests. We also have a range of teaching
                  qualifications, courses and support to help you as a teacher.
                </div>
                <div className="btn bg-light ">
                  <div className="m-2">
                    <div
                      className={responsive ? "fs-sm fw-600 " : "fs-14 fw-600"}
                    >
                      Fun Fact:
                    </div>
                    <div className={responsive ? "fs-xs" : "fs-sm"}>
                      Did you know remember %95 of a massage when it’s watched
                      vs only 10% of what you read try it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={responsive ? "container   " : "container-sm"}>
          <div
            className={
              responsive
                ? "container-fluid d-f justify-content-sb"
                : "d-f fd-column align-items-center"
            }
          >
            <div>
              <img
                src={img2}
                alt="image2"
                className={responsive ? "img" : "responsImage"}
              />
            </div>
            <div
              className={responsive ? "w-50 justify-content-center" : "w-100"}
            >
              <div className={responsive ? "fs-44 fw-700" : "fs-lg fw-700"}>
                You can learn online and sit in class
              </div>
              <div className={responsive ? "fs-20 mt-2" : "fs-sm"}>
                Friends Academy is a quick and convenient online test to help
                higher education institutions and employers check the English
                levels of individuals and groups of candidates
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            responsive
              ? "container d-f  justify-content-sb"
              : "container-sm d-f fd-column g-2 align-items-center"
          }
        >
          <div className="container-fluid d-sm-none d-f fd-column align-items-center ">
            <div className={responsive ? "fs-44 fw-700" : "fs-lg fw-700"}>
              Together we inspire learners to go further
            </div>
            <div
              className={responsive ? "fs-20 mt-2 text-secondary" : "fs-sm"}
              style={{ height: "auto" }}
            >
              Try our quick, free online tests to find out what your level of
              English is, and which Cambridge English Qualification might be
              best for you. at the end you will get recommendations on how to
              improve your English. Try our quick, free online tests to find out
              what your level of English is, and which Cambridge English
              Qualification might be best for you
            </div>
          </div>
          <div>
            <img
              src={img3}
              alt="font image"
              className={responsive ? "img" : "responsImage"}
            />
          </div>
          <div className="d-none d-sm-flex fd-column align-items-center ">
            <div className={responsive ? "fs-44 fw-700" : "fs-lg fw-700"}>
              Together we inspire learners to go further
            </div>
            <div
              className={responsive ? "fs-20 mt-2 text-secondary" : "fs-sm"}
              style={{ height: "auto" }}
            >
              Try our quick, free online tests to find out what your level of
              English is, and which Cambridge English Qualification might be
              best for you. at the end you will get recommendations on how to
              improve your English. Try our quick, free online tests to find out
              what your level of English is, and which Cambridge English
              Qualification might be best for you
            </div>
          </div>
        </div>
      </div>
      <div className={responsive ? "container row justify-content-sb g-2" : "container-sm row justify-content-sb g-2"}>
        <div className="d-none d-sm-block container-sm fw-700 text-primary">
          Popular Courses
        </div>
        {course && course.slice(1,4).map((e)=>{
                {console.log(e)}

          return(
              
            <div
            style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
            className={
              responsive
                ? "d-f fd-column align-items-center justify-content-center"
                : "d-f fd-column align-items-center mt-1 "
            }
          >
              <div 
              className={ responsive
                ? "d-f fd-column align-items-center justify-content-center"
                : "d-f fd-column align-items-center mt-1 "} 
                >
              <div
              className={responsive ? "d-f fd-column align-items-center justify-content-center" : "d-f fd-column align-items-center justify-content-center mt-1"}
              >
              <img className="w-90 btn" src={e.image} alt="course" />
            </div>
            <div className="fw-600 fw-90 mt-1" >
              {e.courseName}
            </div>
            <div
              className="w-90 d-f align-items-center g-2 mt-2"
            >
              <div className="d-f align-items-center g-1">
                <img src={lesson} alt="lesson" />
                Lesson : {e.lessonCount}
              </div>
              <div className="d-f align-items-center g-1">
                <img src={level} alt="level" />
                {e.level}
              </div>
            </div>
            <div style={{ width: "358px", marginTop: "35px" }}>
              <button
                className="btn text-light bg-primary d-f align-items-center justify-content-center"
                style={{ width: "164px", height: "48px" }}
              >
                Start Course
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
            </div>
              </div>
          </div>
            )
        })}
        <div className="d-none container-sm d-sm-flex justify-content-center align-items-center" style={{height:"81px"}}>
        <button 
              className="text-primary bg-light d-f  buttonMore align-items-center justify-content-center"
              style={{ width: "164px", height: "48px" }}
              onClick={toAll}

            >
              See all more
              <span>
                <img src={arrowPri} alt="arrow" style={{color:"#830024"}} />
              </span>
            </button>
        </div>
      </div>
      <div
        className={responsive ? "about container d-f justify-content-sb align-items-center mt-4" : "about container-sm align-items-center mt-4 "}
        style={{ height: "445px",marginBottom:"130px" }}
      >
                <div className="d-none d-sm-block w-100 mb-2">
          <div className={responsive ? "fs-44 fw-700 " : "fs-lg fw-700"}>About Us</div>
          <div className={responsive ? "fs-32 fw-700 mt-1":"fs-lg fw-700"}>Online Group Courses </div>
          <div className={responsive ? "fs-20 fw-400 mt-1" : "fs-sm"}>
            The learning experiences we create could only come from Cambridge.
            Our solutions for teaching and assessment are empowering millions of
            learners everywhere and are built on unique insights from our
            research, expertise and speak Up is a quick and convenient online
            test to help higher education institutions and employers and groups
            of candidates.{" "}
          </div>
        </div>
        <img src={img4} alt="" className={responsive ? "d-block" :"w-100"}/>
        <div className="d-sm-none w-50" >
          <div className={responsive ? "fs-44 fw-700 " : "fs-lg fw-700"}>About Us</div>
          <div className={responsive ? "fs-32 fw-700 mt-1":"fs-lg fw-700"}>Online Group Courses </div>
          <div className={responsive ? "fs-20 fw-400 mt-1" : "fs-sm"}>
            The learning experiences we create could only come from Cambridge.
            Our solutions for teaching and assessment are empowering millions of
            learners everywhere and are built on unique insights from our
            research, expertise and speak Up is a quick and convenient online
            test to help higher education institutions and employers and groups
            of candidates.{" "}
          </div>
        </div>
      </div>
      <div className={responsive ? "container mt-4 mb-4" : "container-sm mt-4 mb-4"}>
        <div className="d-f fd-column align-items-center">
          <div className={responsive ? "fw-70 fs-44" : "fs-sm fw-600"}>
            Here’s what others love about Friends Academy
          </div>
          <div className={responsive ? "fs-lg" : "fs-sm"}>
            Our strong community are all learning together. Here’s what some of
            them say.....{" "}
          </div>
        </div>
        <div className="d-f justify-content-sb d-sm-none">
          <div
            style={{ width: "32%", height: "280px" }}
            className="bg-light d-f fd-column align-items-center justify-content-center"
          >
            <div>stars</div>
            <div className="fs-md" style={{ width: "80%" }}>
              "I just had a an honest to god conversation in French with a
              friend in Quebec! I stumbled a bit, but we only used a translator
              very rarely, and it’s because of Speak Up!"
            </div>
            <div className="fs-xs fw-600">
              jack watson,<span className="fw-400"> 14 days</span>
            </div>
          </div>
          <div
            style={{ width: "32%", height: "280px" }}
            className="bg-light d-f fd-column align-items-center justify-content-center"
          >
            <div>stars</div>
            <div className="fs-md" style={{ width: "80%" }}>
              "I just had a an honest to god conversation in French with a
              friend in Quebec! I stumbled a bit, but we only used a translator
              very rarely, and it’s because of Speak Up!"
            </div>
            <div className="fs-xs fw-600">
              jack watson,<span className="fw-400"> 14 days</span>
            </div>
          </div>
          <div
            style={{ width: "32%", height: "280px" }}
            className="bg-light d-f fd-column align-items-center justify-content-center"
          >
            <div>stars</div>
            <div className="fs-md" style={{ width: "80%" }}>
              "I just had a an honest to god conversation in French with a
              friend in Quebec! I stumbled a bit, but we only used a translator
              very rarely, and it’s because of Speak Up!"
            </div>
            <div className="fs-xs fw-600">
              jack watson,<span className="fw-400"> 14 days</span>
            </div>
          </div>
        </div>
        <div className="d-none d-sm-flex justify-content-sb ">
          <div
            style={{ width: "48%", height: "auto" }}
            className="bg-light d-f fd-column align-items-center justify-content-center"
          >
            <div>stars</div>
            <div className="fs-sm" style={{ width: "80%" }}>
              "I just had a an honest to god conversation in French with a
              friend in Quebec! I stumbled a bit, but we only used a translator
              very rarely, and it’s because of Speak Up!"
            </div>
            <div className="fs-xs fw-600">
              jack watson,<span className="fw-400"> 14 days</span>
            </div>
          </div>
          <div
            style={{ width: "48%", height: "auto" }}
            className="bg-light d-f fd-column align-items-center justify-content-center"
          >
            <div>stars</div>
            <div className="fs-sm" style={{ width: "80%" }}>
              "I just had a an honest to god conversation in French with a
              friend in Quebec! I stumbled a bit, but we only used a translator
              very rarely, and it’s because of Speak Up!"
            </div>
            <div className="fs-xs fw-600">
              jack watson,<span className="fw-400"> 14 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
