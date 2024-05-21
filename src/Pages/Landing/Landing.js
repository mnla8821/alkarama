import React from "react";
import "./Ladning.css";
import Main from "../../Assets/ImgLanding/main.png";
import Main2 from "../../Assets/ImgLanding/main2.png";
import Karama from "../../Assets/ImgLanding/2.png";
import Wasba from "../../Assets/ImgLanding/1.png";
import Last1 from "../../Assets/ImgLanding/last1.png";
import Last2 from "../../Assets/ImgLanding/last2.png";
import Table from "../../Components/Table/Table";
import Next from "../../Assets/ImgLanding/next.png";
import Cham1 from "../../Assets/ImgLanding/cham1.png";
import Cham2 from "../../Assets/ImgLanding/cham2.png";
import Cham3 from "../../Assets/ImgLanding/cham3.png";
import Goal from "../../Assets/ImgLanding/goal.png";
import Eye from "../../Assets/ImgLanding/eye.svg";
import i from "../../Assets/ImgLanding/i.png";
import Play from "../../Assets/ImgLanding/play.png";
import Control from "../../Assets/ImgLanding/control.png";
import Sug1 from "../../Assets/ImgLanding/sug1.png";
import Sug2 from "../../Assets/ImgLanding/sug2.png";
import Sug3 from "../../Assets/ImgLanding/sug3.png";
import Sug4 from "../../Assets/ImgLanding/sug4.png";
const Landing = () => {
  return (
    <>
      {/* <!-- Start Caoursel Page  --> */}
      <div className=" hero-landing">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Main} className="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Main2} className="d-block w-100" alt="" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden"></span>
          </button>
        </div>
      </div>
      {/* <!-- End  Caoursel Page  --> */}

      {/* <!-- Start Next Match Page  --> */}
      <div className="next-match">
        <div className="next">
          <div className="row">
            <div className="col-4">
              <img src={Wasba} alt="" />
              <p>اسم النادي</p>
            </div>
            <div className="col-3 vs">
              <p>المبارة القادمة</p>
              <h1>VS</h1>
              <h5>00:14 pm</h5>
            </div>
            <div className="col-4">
              <img src={Karama} alt="" />
              <p>اسم النادي</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End  Next Match Page  --> */}

      {/* <!-- Start News  --> */}
      <div className="last-news">
        <div className="last-p">
          <p>اخر الاخبار</p>
        </div>
        <div className="last">
          <div className="last1">
            <img className="last1-img2" src={Last2} alt="" />
            <img className="last1-img1" src={Last1} alt="" />
          </div>
          <div className="last2">
            <img className="last2-img2" src={Last1} alt="" />
            <img className="last2-img1" src={Last2} alt="" />
          </div>
        </div>
      </div>
      {/* <!-- End News  --> */}
      {/* <!-- Start  Table --> */}
      <Table />
      {/* <!-- End Table  --> */}
      {/* <!-- Start Match Times  --> */}
      <div className="next-match1">
        <div className="next-p">
          <p>المباريات القادمة</p>
        </div>
        <div className="next-img">
          <div className="img1">
            <img src={Next} alt="" />
          </div>
          <div className="img2">
            <img src={Next} alt="" />
          </div>
          <div className="img3">
            <img src={Next} alt="" />
          </div>
          <div className="img4">
            <img src={Next} alt="" />
          </div>
          <div className="img5">
            <img src={Next} alt="" />
          </div>
        </div>
      </div>
      {/* <!--End Match Times  --> */}
      {/* <!-- Start Champion Page  --> */}
      <div className="champion">
        <div className="cham-p">
          <p>البطولات</p>
        </div>
        <div className="cham-img">
          <div className="cham1">
            <img src={Cham3} alt="" />
            <h3>اسم البطولة (2024)</h3>
          </div>
          <div className="cham2">
            <img src={Cham2} alt="" />
            <h3>اسم البطولة (2024)</h3>
          </div>
          <div className="cham3">
            <img src={Cham1} alt="" />
            <h3>اسم البطولة (2024)</h3>
          </div>
        </div>
      </div>
      {/* <!-- End Champion  Page  --> */}
      {/* <!-- Start Goals Page  --> */}
      <div className="goal">
        <div className="goal-p">
          <p> اجمل الاهداف</p>
        </div>
        <div className="final-Landing">
          <div className="imgs-Landing">
            <div className="one-Landing">
              <div className="show-Landing">
                <p>أهداف الكرامة على جونبورك الكوري/نهائي ابطال أسيا</p>
                <div className="views">
                  <h6 className="h6">قبل 5 أشهر</h6>
                  <div className="eye">
                    <h6>2 ألف مشاهدة</h6>
                    <img src={Eye} alt="" />
                  </div>
                </div>
              </div>
              <img src={Goal} alt="" className="img-goal" />
            </div>
            <div className="two-Landing">
              <div className="show-Landing">
                <p>أهداف الكرامة على جونبورك الكوري/نهائي ابطال أسيا</p>
                <div className="views">
                  <h6 className="h6">قبل 5 أشهر</h6>
                  <div className="eye">
                    <h6>2 ألف مشاهدة</h6>
                    <img src={Eye} alt="" />
                  </div>
                </div>
              </div>
              <img src={Goal} alt="" />
            </div>
            <div className="three-Landing">
              <div className="show-Landing">
                <p>أهداف الكرامة على جونبورك الكوري/نهائي ابطال أسيا</p>
                <div className="views">
                  <h6 className="h6">قبل 5 أشهر</h6>
                  <div className="eye">
                    <h6>2 ألف مشاهدة</h6>
                    <img src={Eye} alt="" />
                  </div>
                </div>
              </div>
              <img src={Goal} alt="" />
            </div>
          </div>
          <div className="video">
            <div className="video-player">
              <h5>Video Player</h5>
              <div className="afc">
                <img src={i} alt="" />
                <h4>AFC</h4>
              </div>
            </div>
            <div className="h4">
              <h4>نهائي دوري أبطال آسيا 2006: رحلة تاريخيه للكرامة</h4>
            </div>
            <div className="click">
              <img src={Play} alt="" />
            </div>
            <div className="up-next">
              <h4>Up next</h4>
              <div className="suggestions">
                <div>
                  <img src={Sug1} alt="" />
                </div>
                <div>
                  <img src={Sug2} alt="" />
                </div>
                <div>
                  <img src={Sug3} alt="" />
                </div>
                <div>
                  <img src={Sug4} alt="" />
                </div>
              </div>
              <div className="control">
                <img src={Control} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Goals Page  --> */}
    </>
  );
};

export default Landing;
