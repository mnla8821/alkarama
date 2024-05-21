import React from "react";
import "./About.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Buttn from "../../Assets/ImgAbout/button.png";
import Coach from "../../Assets/ImgAbout/coach.png";
import Player1 from "../../Assets/ImgAbout/player1.png";
import Player2 from "../../Assets/ImgAbout/player2.png";
import Frame17 from "../../Assets/ImgAbout/Frame 17.png";
import Frame18 from "../../Assets/ImgAbout/Frame 18.png";
import Frame19 from "../../Assets/ImgAbout/Frame 19.png";
import GroupAbout from "../../Assets/ImgAbout/Group 15.png";
import Info from "../../Assets/ImgAbout/info.png";
import Main2 from "../../Assets/ImgAbout/main2.png";
import Sticker2 from "../../Assets/ImgAbout/sticker 2.png";
import Rectn from "../../Assets/ImgAbout/Rectangle 70.png";
import Asllah from "../../Assets/ImgAbout/ahed khazam.png";
import People from "../../Assets/ImgAbout/3_14 1.png";
import Btn from "../../Components/Btn/Btn";
const About = () => {
  return (
    <>
      {/* <!-- Design Main Img --> */}
      <section className="main-img"></section>
      {/* <!-- End Design Main Img --> */}
      {/* <!-- Design About Page  --> */}
      <section className="container hero-About">
        <div className="row-About bord-about">
          <h2>حول النادي</h2>
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="slider-about">
                <div className="col-sm-6 slider-img-about">
                  <Btn />
                </div>
                <div className="col-sm-6 slider-text-about">
                  <h4>فكرة تأسيس نادي الكرامة الرياضي</h4>
                  <p>
                    جاءت فكرة تأسيس النادي من قبل مجموعة من شباب مدينة حمص الذين
                    مارسوا راضة كرة القدم ,و فكرا بطريقة جدية في تاسيس نادي
                    ليجمعهم جميعا
                  </p>
                  <Btn />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-about">
                <div className="col-sm-6 slider-img-about">
                  <Btn />
                </div>
                <div className="col-sm-6 slider-text-about">
                  <h4>فكرة تأسيس نادي الكرامة الرياضي</h4>
                  <p>
                    جاءت فكرة تأسيس النادي من قبل مجموعة من شباب مدينة حمص الذين
                    مارسوا راضة كرة القدم ,و فكرا بطريقة جدية في تاسيس نادي
                    ليجمعهم جميعا
                  </p>
                  <Btn />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-about">
                <div className="col-sm-6 slider-img-about">
                  <Btn />
                </div>
                <div className="col-sm-6 slider-text-about">
                  <h4>فكرة تأسيس نادي الكرامة الرياضي</h4>
                  <p>
                    جاءت فكرة تأسيس النادي من قبل مجموعة من شباب مدينة حمص الذين
                    مارسوا راضة كرة القدم ,و فكرا بطريقة جدية في تاسيس نادي
                    ليجمعهم جميعا
                  </p>
                  <Btn />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="slider">
            <div className="col-sm-6 slider-img-About">
              <Btn />
            </div>
            <div className="col-sm-6 slider-text">
              <h4>فكرة تأسيس نادي الكرامة الرياضي</h4>
              <p>
                جاءت فكرة تأسيس النادي من قبل مجموعة من شباب مدينة حمص الذين
                مارسوا راضة كرة القدم ,و فكرا بطريقة جدية في تاسيس نادي ليجمعهم
                جميعا
              </p>
              <Btn />
            </div>
          </div> */}
        </div>
      </section>
      {/* <!-- End Design About Page  --> */}
      {/* <!-- Design Boss Page  --> */}
      <section className="container-fluid boss">
        <h2> رئيس النادي</h2>
        <div className="line "></div>
        <div className="container-fluid boss-info">
          <div className="row boss-info">
            <div className="boss-img">
              <div className="col-md-6 left ">
                <h3>الأستاذ عهد خزام</h3>
                <h4>رئيس نادي الكرامة</h4>
              </div>
              <div className="col-md-6 right ">
                <img src={Asllah} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Design Boss Page  --> */}
      {/* <!-- Design Coach Page  --> */}

      <section className="container-fluid coach">
        <div className="row">
          <h2>الطاقم الفني</h2>
          <div className="line "></div>
          <div className="coach-info">
            <div className="col-sm-4 card-coach">
              <div className="img-coach">
                <img src={Coach} alt="" />
              </div>
              <div className="name-coach">
                <p>احمد العمير</p>
                <p id="name-color">المدرب المساعد</p>
              </div>
            </div>
            <div className="col-sm-4 card-coach">
              <div className="img-coach">
                <img src={Coach} alt="" />
              </div>
              <div className="name-coach">
                <p>احمد العمير</p>
                <p>المدرب المساعد</p>
              </div>
            </div>
            <div className="col-sm-4 card-coach">
              <div className="img-coach">
                <img src={Coach} alt="" />
              </div>
              <div className="name-coach">
                <p>احمد العمير</p>
                <p>المدرب المساعد</p>
              </div>
            </div>
            <div className="col-sm-4 card-coach">
              <div className="img-coach">
                <img src={Coach} alt="" />
              </div>
              <div className="name-coach">
                <p>احمد العمير</p>
                <p>المدرب المساعد</p>
              </div>
            </div>
            <div className="col-sm-4 card-coach">
              <div className="img-coach">
                <img src={Coach} alt="" />
              </div>
              <div className="name-coach">
                <p>احمد العمير</p>
                <p>المدرب المساعد</p>
              </div>
            </div>
            <div className="col-sm-4 card-coach">
              <div className="img-coach">
                <img src={Coach} alt="" />
              </div>
              <div className="name-coach">
                <p>احمد العمير</p>
                <p>المدرب المساعد</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Design Coach Page  --> */}
      {/* <!-- Design Players Page  --> */}

      <section className="container-fluid players">
        <div className="row-About">
          <h2>اللاعبون</h2>
          <div className="rectangle">
            <div className="rec-child"></div>
            <div className="rec-child"></div>
            <div className="rec-child"></div>
            <div className="rec-child"></div>
            <div className="rec-child"></div>
          </div>
          <div className="container-fluid team-players">
            <div className="col-sm-4 card-player-About">
              <div className="info-player">
                <div className="info-numbers">
                  <p>المركز</p>
                  <p>DM</p>
                </div>
                <div className="info-numbers">
                  <p>الرقم</p>
                  <p>4</p>
                </div>
                <div className="info-numbers">
                  <p>182</p>
                  <p>CM</p>
                </div>
                <div className="info-numbers">
                  <p>35</p>
                  <p>عام</p>
                </div>
              </div>
              <div className="name-player">تامر حاج محمد</div>
            </div>
            <div className="col-sm-4 card-player-About middle">
              <div className="info-player">
                <div className="info-numbers">
                  <p>المركز</p>
                  <p>DM</p>
                </div>
                <div className="info-numbers">
                  <p>الرقم</p>
                  <p>4</p>
                </div>
                <div className="info-numbers">
                  <p>182</p>
                  <p>CM</p>
                </div>
                <div className="info-numbers">
                  <p>35</p>
                  <p>عام</p>
                </div>
              </div>
              <div className="name-player">تامر حاج محمد</div>
            </div>
            <div className="col-sm-4 card-player-About">
              <div className="info-player">
                <div className="info-numbers">
                  <p>المركز</p>
                  <p>DM</p>
                </div>
                <div className="info-numbers">
                  <p>الرقم</p>
                  <p>4</p>
                </div>
                <div className="info-numbers">
                  <p>182</p>
                  <p>CM</p>
                </div>
                <div className="info-numbers">
                  <p>35</p>
                  <p>عام</p>
                </div>
              </div>
              <div className="name-player">تامر حاج محمد</div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Design Players Page  --> */}
      {/* <!-- Design Startegy Page  --> */}

      <section className="container-fluid strategy">
        <div className="row-strategy ">
          <h2>استراتيجية النادي</h2>
          <div className="line"></div>
          <div className="goals ">
            <div className="col-sm-5 box one-strategy ">
              <div className="number">
                <div className="img-number">
                  <p id="num">01</p>
                </div>
                <h5>الرؤية</h5>
              </div>
              <p>
                أن يكون نادي الكرامة الأميز رياضياً,إجتماعياً مؤسسياً وفي طليعة
                الاندية العالمية .
              </p>
            </div>
            <div className="col-sm-5 box seconed-strategy ">
              <div className="number">
                <div className="img-number">
                  <p id="num">02</p>
                </div>
                <h5>الرسالة</h5>
              </div>
              <p>
                تحقيق الريادة الرياضية والاثر الاجتماعي من خلال تطوير وتمكين
                العمل المؤسسي وبناء قاعدة تجارية فعالة.
              </p>
            </div>
            <div className="col-sm-5 box three-strategy ">
              <div className="number">
                <div className="img-number">
                  <p id="num">03</p>
                </div>
                <h5>القيم</h5>
              </div>
              <div id="list">
                <ul>
                  <li>*الكفاءة</li>
                  <li>*التميز</li>
                  <li>*المصداقية</li>
                  <li>*روح الفريق</li>
                  <li>*الإستمرارية</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-5 box four-strategy ">
              <div className="number">
                <div className="img-number">
                  <p id="num">04</p>
                </div>
                <h5>الركائز</h5>
              </div>
              <div id="tall-words">
                <ul>
                  <li>*الريادة الرياضية</li>
                  <li>*المسؤلية الاجتماعية</li>
                  <li>*النمو التجاري</li>
                  <li>*العمل المؤسسي</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Design Startegy Page  --> */}
      {/* <!-- Design Fans Page  --> */}

      <section className="container-fluid nadi-fans">
        <h2>رابطة مشجعي النادي</h2>
        <div className="row-About">
          <div className="all-parts">
            <div className="p1"></div>
            <div className="p2">
              <div className="top-part2">
                <h3>لمحة عن الرابطة</h3>
                <div className="line "></div>
              </div>
              <p>
                تعدّ رابطة مشجعي الكرامة من أوائل روابط المشجعين التي
                <br />
                تشكلت بالقطر فقد تشكلت عام 1975، ولها شعار من تلك الأيام
                <br />
                وترأسها آنذاك المشجع عمر الشاغوري، وكان اهتمامها بالتشجيع
                <br />
                وتوجيه الجماهير واختيار الهتافات الجميلة البعيدة عن الاستفزاز
              </p>
            </div>
            <div className="p3-About">
              <div className="top-part2">
                <h3>مؤسسين الرابطة</h3>
                <div className="line"></div>
              </div>
              <div className=" table">
                <div className="oo">
                  <div className="col-sm-8 ora">
                    <div className="orange-circle"></div>
                    <h2>رئيس الرابطة</h2>
                    <div className="orange-circle"></div>
                  </div>
                  <div className="col-sm-4 log">
                    {/* <img src={Sticker2} alt="" /> */}
                  </div>
                </div>
                <h2>السيد باسم محمد نزار زهرة</h2>
                <div className="hr"></div>
                <div className="oo">
                  <div className="orange-circle"></div>
                  <h2>أعضاء الرابطة</h2>
                  <div className="orange-circle"></div>
                </div>
                <div className="fa">
                  <div className="left-t">
                    <h2>السيد عبدالله المغربي</h2>
                    <h2>السيد عمار حاضري</h2>
                    <h2>السيد نبيل الزامل</h2>
                  </div>
                  <div className="right-t">
                    <h2>الدكتور ايهاب القاضي</h2>
                    <h2>الدكتور كنان بيرقدار</h2>
                    <h2>المهندس وسيم أحمد الريس</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="p4">
              <div className="top-part3">
                <h3>أجمل لقطات مشجعي نادي الكرامة</h3>
                <div className="line"></div>
              </div>
              <div className=" container-fluid  results-video">
                <div className="row-rr">
                  <div className="col-6-sm rr1">
                    <img src={Frame17} alt="" />
                  </div>
                  <div className="col-4-sm rr2">
                    <div className="im1">
                      <img src={Rectn} alt="" />
                    </div>
                    <div className="bt">
                      <img src={Buttn} alt="" />
                    </div>
                  </div>
                  <div className="col-6-sm rr1">
                    <img src={Frame18} alt="" />
                  </div>
                  <div className="col-4-sm rr2">
                    <div className="im1">
                      <img src={Rectn} alt="" />
                    </div>
                    <div className="bt">
                      <img src={Buttn} alt="" />
                    </div>
                  </div>
                  <div className="col-6-sm rr1">
                    <img src={Frame19} alt="" />
                  </div>
                  <div className="col-4-sm rr2">
                    <div className="im1">
                      <img src={Rectn} alt="" />
                    </div>
                    <div className="bt">
                      <img src={Buttn} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- End Design Fans Page  --> */}
    </>
  );
};

export default About;
