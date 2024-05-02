import React,{useState,useEffect} from 'react'
import img10 from "../../images/10.png";
import lesson from "../../images/v6-icon (free).svg";
import level from "../../images/icon.svg";
import arrow from "../../images/keyboard_arrow_right.svg";
import arrowPri from "../../images/arrowPrimary.png";
const MyCourses = () => {
    const [responsive, setResponsive] = useState(window.innerWidth > 480);
    useEffect(() => {
      function handleResize() {
        setResponsive(window.innerWidth <= 480);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
  return (
    <div className={responsive? 'w-100 d-f fd-column align-items-center' : "courseRes"}>
      <div
        className={
          responsive
            ? "w-80 fs-lg fw-700 text-primary mt-2 "
            : " container-sm fw-700 text-primary mt-1"
        }
      >
       My Courses
      </div>
      <div
        className={
          responsive
            ? "w-80 row justify-content-sb g-2 mt-1 mb-3"
            : "container-sm row justify-content-sb g-2 mt-1 mb-2"
        }
      >
        <div
          style={{ width: "382px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" ,backgroundColor:"white"}}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div className='w-100 d-f fd-column align-items-center'>
            <div className='w-100 d-f justify-content-center'>
            <img className='w-90' src={img10} alt="course" />
          </div>
          <div className="fw-600 w-90"  >
            Learning historical words and sentences
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="d-f align-items-center g-2 w-90"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1 ">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div className='w-90' style={{  marginTop: "35px" }}>
            <button
              className="btn text-light bg-primary d-f align-items-center justify-content-center"
              style={{ width: "164px", height: "48px" }}
            >
              Let's Go
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
          </div>
            </div>
        </div>
        <div
          style={{ width: "382px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" ,backgroundColor:"white"}}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div className='w-100 d-f fd-column align-items-center'>
            <div className='w-100 d-f justify-content-center'>
            <img className='w-90' src={img10} alt="course" />
          </div>
          <div className="fw-600 w-90"  >
            Learning historical words and sentences
          </div>
          <div
            style={{ marginTop: "20px" }}
            className="d-f align-items-center g-2 w-90"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1 ">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div className='w-90' style={{  marginTop: "35px" }}>
            <button
              className="btn text-light bg-primary d-f align-items-center justify-content-center"
              style={{ width: "164px", height: "48px" }}
            >
              Let's Go
              <span>
                <img src={arrow} alt="" />
              </span>
            </button>
          </div>
            </div>
        </div>
      </div>
    </div>

  )
}

export default MyCourses