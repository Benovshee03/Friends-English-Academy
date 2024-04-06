import Rafiki from "../../images/rafiki.png";
import udemy from "../../images/image 236.png";
import google from "../../images/image 237.png";
import tlc from "../../images/image 238.png";
import brand from "../../images/image 239.png";
import vector from "../../images/Vector 4094.png";
import img1 from "../../images/Rectangle.png";
import img2 from "../../images/img.png";
import img3 from "../../images/image 12.png";
const Content: React.FC = () => {
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
      <div>
        <div>
          <div className="position-absolute ">
            <img src={vector} alt="vector" />
          </div>
          <div className="container d-f zi-1">
            <div>
              <div>You can learn online</div>
              <div>
                Friend Academy is a quick and convenient online test to help
                higher education institutions and employers check the English
                levels of individuals and groups of candidates.{" "}
              </div>
            </div>
            <div>
              <img src={img1} alt="font image" />
              <div>
                <div>You Speak Up To 6 Month Faster Than Now</div>
                <div>
                  Our range of free teaching resources, lesson plans and
                  activities is designed to help you prepare your students for
                  our exams and tests. We also have a range of teaching
                  qualifications, courses and support to help you as a teacher.
                </div>
                <div>
                  <div>Fun Fact</div>
                  <div>
                    Did you know remember %95 of a massage when it’s watched vs
                    only 10% of what you read try it.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={img2} alt="image2" />
          </div>
          <div>
            Friends Academy is a quick and convenient online test to help higher
            education institutions and employers check the English levels of
            individuals and groups of candidates
          </div>
        </div>
        <div>
          <div>
            <div>Together we inspire learners to go further</div>
            <div>
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
    </div>
  );
};

export default Content;
