import Rafiki from "../../images/rafiki.png";
import udemy from "../../images/image 236.png";
import google from "../../images/image 237.png";
import tlc from "../../images/image 238.png";
import brand from "../../images/image 239.png";
import vector from "../../images/Vector 4094.png";
import img1 from "../../images/Rectangle.png";
import img2 from "../../images/img.png";
import img3 from "../../images/image 12.png";
import img4 from "../../images/image 231.png";
import img10 from "../../images/10.png";
import lesson from "../../images/v6-icon (free).svg";
import level from "../../images/icon.svg";
import arrow from "../../images/keyboard_arrow_right.svg";
function Content() {
  return (
    <div>
      <div
        className=" container d-f  justify-content-sb"
        style={{ marginTop: "73px", marginBottom: "184px" }}
      >
        <div style={{ maxWidth: "496px", marginTop: "86px" }}>
          <h1 className="fs-xxl">Studying Online is now much easier</h1>
          <p className="fw-400 fs-xs" style={{ marginBottom: "34px" }}>
            Speak Up is an interesting platform that will teach you in more an
            interactive way
          </p>
          <div className="d-f g-3" style={{ marginBottom: "32px" }}>
            <button
              className="btn bg-primary text-light "
              style={{ width: "202px", height: "40px" }}
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
          <img src={Rafiki} alt="first page image" />
        </div>
      </div>
      <div
        className="container d-f fd-column align-items-center"
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
      <div className="d-f fd-column g-5 mb-3">
        <div className="container-fluid">
          <div className="position-absolute zi--1 ">
            <img src={vector} alt="vector" />
          </div>
          <div className="container d-f justify-content-sb  align-items-center ">
            <div
              className="d-f fd-column align-items-center bg-light justify-content-center g-1"
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
            <div className="w-50 ">
              <img src={img1} alt="font image" />
              <div>
                <div className="fs-44 fw-700" style={{ marginTop: "20px" }}>
                  You Speak Up To 6 Month Faster Than Now
                </div>
                <div className="fs-20">
                  Our range of free teaching resources, lesson plans and
                  activities is designed to help you prepare your students for
                  our exams and tests. We also have a range of teaching
                  qualifications, courses and support to help you as a teacher.
                </div>
                <div className="btn bg-light ">
                  <div className="m-2">
                    <div className="fs-sm fw-600 ">Fun Fact:</div>
                    <div className="fs-xs">
                      Did you know remember %95 of a massage when it’s watched
                      vs only 10% of what you read try it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-f  justify-content-sb">
          <div>
            <img src={img2} alt="image2" />
          </div>
          <div className="w-50 justify-content-center">
            <div className="fs-xl fw-700">
              You can learn online and sit in class
            </div>
            <div className="fs-md" style={{ marginTop: "24px" }}>
              Friends Academy is a quick and convenient online test to help
              higher education institutions and employers check the English
              levels of individuals and groups of candidates
            </div>
          </div>
        </div>
        <div className="container d-f justify-content-sb">
          <div>
            <div className="fs-xl fw-700">
              Together we inspire learners to go further
            </div>
            <div
              className="fs-20 fw-400 text-secondary"
              style={{ height: "240px" }}
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
            <img src={img3} alt="font image" />
          </div>
        </div>
      </div>
      <div className="container row justify-content-sb g-2">
      <div style={{width:"392px"}} className="d-f fd-column align-items-center ">
          <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{width:"358px"}}>Learning historical words and sentences</div>
          <div style={{width:"358px",marginTop:"20px"}} className="d-f align-items-center g-2">
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div style={{width:"358px"}}>
          <button className="btn text-light bg-primary d-f align-items-center justify-content-center" style={{width:"164px",height:"48px"}}>
            Start Course
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          </div>
        </div>
        <div style={{width:"392px"}} className="d-f fd-column align-items-center ">
          <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{width:"358px"}}>Learning historical words and sentences</div>
          <div style={{width:"358px",marginTop:"20px"}} className="d-f align-items-center g-2">
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div style={{width:"358px",marginTop:"32px"}}>
          <button className="btn text-light bg-primary d-f align-items-center justify-content-center" style={{width:"164px",height:"48px"}}>
            Start Course
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          </div>
        </div>
        <div style={{width:"392px"}} className="d-f fd-column align-items-center ">
          <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{width:"358px"}}>Learning historical words and sentences</div>
          <div style={{width:"358px",marginTop:"20px"}} className="d-f align-items-center g-2">
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div style={{width:"358px",marginTop:"32px"}}>
          <button className="btn text-light bg-primary d-f align-items-center justify-content-center" style={{width:"164px",height:"48px"}}>
            Start Course
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          </div>
        </div>
        <div style={{width:"392px"}} className="d-f fd-column align-items-center ">
          <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{width:"358px"}}>Learning historical words and sentences</div>
          <div style={{width:"358px",marginTop:"20px"}} className="d-f align-items-center g-2">
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div style={{width:"358px",marginTop:"32px"}}>
          <button className="btn text-light bg-primary d-f align-items-center justify-content-center" style={{width:"164px",height:"48px"}}>
            Start Course
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          </div>
        </div>
        <div style={{width:"392px"}} className="d-f fd-column align-items-center ">
          <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{width:"358px"}}>Learning historical words and sentences</div>
          <div style={{width:"358px",marginTop:"20px"}} className="d-f align-items-center g-2">
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div style={{width:"358px",marginTop:"32px"}}>
          <button className="btn text-light bg-primary d-f align-items-center justify-content-center" style={{width:"164px",height:"48px"}}>
            Start Course
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          </div>
        </div>
        <div style={{width:"392px"}} className="d-f fd-column align-items-center ">
          <div>
            <img src={img10} alt="course" />
          </div>
          <div className="fw-600" style={{width:"358px"}}>Learning historical words and sentences</div>
          <div style={{width:"358px",marginTop:"20px"}} className="d-f align-items-center g-2">
            <div className="d-f align-items-center g-1">
              <img src={lesson} alt="lesson" />
              Lesson : 6
            </div>
            <div className="d-f align-items-center g-1">
              <img src={level} alt="level" />
              Advanced
            </div>
          </div>
          <div style={{width:"358px",marginTop:"32px"}}>
          <button className="btn text-light bg-primary d-f align-items-center justify-content-center" style={{width:"164px",height:"48px"}}>
            Start Course
            <span>
              <img src={arrow} alt="" />
            </span>
          </button>
          </div>
        </div>

      </div>
      <div
        className="about container d-f justify-content-sb align-items-center mt-4"
        style={{ height: "445px" }}
      >
        <img src={img4} alt="" />
        <div className="w-50">
          <div className="fs-44 fw-700 ">About Us</div>
          <div className="fs-32 fw-700 mt-1">Online Group Courses </div>
          <div className="fs-20 fw-400 mt-1">
            The learning experiences we create could only come from Cambridge.
            Our solutions for teaching and assessment are empowering millions of
            learners everywhere and are built on unique insights from our
            research, expertise and speak Up is a quick and convenient online
            test to help higher education institutions and employers and groups
            of candidates.{" "}
          </div>
        </div>
      </div>
      <div className="container mt-4 mb-4">
        <div className="d-f fd-column align-items-center">
          <div className="fw-70 fs-44">
            Here’s what others love about Friends Academy
          </div>
          <div className="fs-lg">
            Our strong community are all learning together. Here’s what some of
            them say.....{" "}
          </div>
        </div>
        <div className="d-f justify-content-sb">
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
      </div>

    </div>
  );
}

export default Content;
