import React, { useState, useEffect } from "react";
import img10 from "../../images/10.png";
import lesson from "../../images/v6-icon (free).svg";
import level from "../../images/icon.svg";
import arrow from "../../images/keyboard_arrow_right.svg";
import arrowPri from "../../images/arrowPrimary.png";
import axios from "axios";
 interface Course {
  courseName: string;
  description: string;
  level: string;
  lessonCount: number;
  image: string;
}
const Courses = () => {
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
    <div>
      <div
        className={
          responsive
            ? "container fs-lg fw-700 text-primary mt-2 "
            : " container-sm fw-700 text-primary mt-1"
        }
      >
        English Courses
      </div>
      <div
        className={
          responsive
            ? "container row justify-content-sb g-2 mt-1 mb-3"
            : "container-sm row justify-content-sb g-2 mt-1 mb-2"
        }
      >
        {course && course.map((e)=>{
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

      </div>
    </div>
  );
};

export default Courses;
