import React from "react";
import "./History.css";
import Rec32 from "../../Assets/ImgHistory/Rectangle 32.png";
import Rec33 from "../../Assets/ImgHistory/Rectangle 33.png";
import Rec34 from "../../Assets/ImgHistory/Rectangle 34.png";
import Rec29 from "../../Assets/ImgHistory/Rectangle 29.png";
import Boss from "../../Assets/ImgHistory/images 6.png";
import Btn from "../../Components/Btn/Btn";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const History = () => {
  return (
    <>
      <section className="container-fluid history">
        <div className="row">
          <div className="main-page">
            <div className="col-sm-6 left">
              <div className="col-sm-2 rec"></div>
              <div className="col-sm-8 rec-img">
                <div className="mini-circle">
                  <div className="circle1"></div>
                  <div className="circle1"></div>
                  <div className="circle1"></div>
                  <div className="circle1"></div>
                  <div className="circle1"></div>
                </div>
              </div>
              <div className="col-sm-2 multi-circle">
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
                <div className="circle1"></div>
              </div>
            </div>
            <div className="col-sm-6 parent-right ">
              <div className="col-sm-12 right">
                <div className="col-sm-8 text">متحف النادي</div>
                <div className="col-sm-3 rec2"></div>
              </div>
              <Btn />
            </div>
          </div>
        </div>
        <section className="container-fluid hero-history">
          <h2>تاريخ النادي</h2>
          <div className="row bord">
            <Swiper
              // install Swiper modules
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <div className="slider">
                  <div className="col-sm-4 slider-img">
                    <img src={Boss} alt="" />
                  </div>
                  <div className="col-sm-8 slider-text">
                    <h4>مؤسس نادي الكرامة</h4>
                    <p>
                      يعتبر الأستاذ ساطع الأتاسي مؤسس النادي , و يعتبر ايضا الأب
                      الروحي للنادي
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider">
                  <div className="col-sm-4 slider-img">
                    <img src={Boss} alt="" />
                  </div>
                  <div className="col-sm-8 slider-text">
                    <h4>مؤسس نادي الكرامة</h4>
                    <p>
                      يعتبر الأستاذ ساطع الأتاسي مؤسس النادي , و يعتبر ايضا الأب
                      الروحي للنادي
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slider">
                  <div className="col-sm-4 slider-img">
                    <img src={Boss} alt="" />
                  </div>
                  <div className="col-sm-8 slider-text">
                    <h4>مؤسس نادي الكرامة</h4>
                    <p>
                      يعتبر الأستاذ ساطع الأتاسي مؤسس النادي , و يعتبر ايضا الأب
                      الروحي للنادي
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <div className="circle-bord"></div>
            </Swiper>
          </div>
        </section>
        {/* <!-- Start Champion Page   --> */}
        <section className="container-fluid botolat">
          <div className="top-bo">
            <h2>البطولات</h2>
            <div className="pii">
              <div className="pi left-box">
                <a href="#">2023</a>
              </div>
              <div className="pi2">2007</div>
              <div className="pi right-box">
                <a href="#">2014</a>
              </div>
            </div>
          </div>
          <div className="container-fluid bot">
            <div className="row rf">
              <div className="one-history">
                <div className="year-text">
                  <div className="year">2007</div>
                  <p>
                    حقق الكرامة السوري فوزا كبيرا على مضيفه السد القطري
                    <br />
                    2-صفر مساء الأربعاء ضمن الجولة الثالثة لدوري أبطال آسيا
                    <br />
                    لكرة القدم، بينما تغلب القادسية الكويتي على الغرافة
                    <br />
                    القطري وأصفهان الإيراني على الاتحاد السعودي والوصل <br />
                    الإماراتي على الكويت الكويتي.
                    <br />
                    وانفرد الكرامة بصدارة المجموعة الثالثة برصيد سبع نقاط
                    <br />
                    بعدما حسم مواجهته مع السد بهدفين لمحمد الحموي (70)
                    <br />
                    وعاطف عبد الإله (73){" "}
                  </p>
                </div>
                <div className="gold">
                  <img src={Rec29} alt="" />
                </div>
              </div>
              <div className="two-history">
                <div className="two-left">
                  <img src={Rec33} alt="" />
                  <img src={Rec34} alt="" />
                </div>
                <div className="two-right">
                  <img src={Rec32} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* <!-- End Champion Page   --> */}
      <section className="container-fluid video-page">
        <h2>اجمل الاهداف</h2>
        <div className="row video-row"></div>
      </section>
    </>
  );
};

export default History;
