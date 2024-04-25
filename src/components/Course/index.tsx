import React, { useState, useEffect } from "react";
import img10 from "../../images/10.png";
import lesson from "../../images/v6-icon (free).svg";
import level from "../../images/icon.svg";
import arrow from "../../images/keyboard_arrow_right.svg";
import arrowPri from "../../images/arrowPrimary.png";
const Courses = () => {
  const [responsive, setResponsive] = useState(window.innerWidth > 480);
  useEffect(() => {
    function handleResize() {
      setResponsive(window.innerWidth <= 480);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center "
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          style={{ width: "392px",height:"426px" , border:"1px solid #BDBDBD" ,borderRadius:"8px" }}
          className={
            responsive
              ? "d-f fd-column align-items-center justify-content-center"
              : "d-f fd-column align-items-center justify-content-center"
          }
        >
            <div>
            <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{ width: "358px" }}>
            Learning historical words and sentences
          </div>
          <div
            style={{ width: "358px", marginTop: "20px" }}
            className="d-f align-items-center g-2"
          >
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
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
        <div
          className="d-none container-sm d-sm-flex justify-content-center align-items-center"
          style={{ height: "81px" }}
        >
          <button
            className="text-primary bg-light d-f  buttonMore align-items-center justify-content-center"
            style={{ width: "164px", height: "48px" }}
          >
            See all more
            <span>
              <img src={arrowPri} alt="arrow" style={{ color: "#830024" }} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
