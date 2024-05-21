import React from "react";
import "./News.css";
import Newsimg from "../../Assets/ImgNews/news-image.png";
import Newscard1 from "../../Assets/ImgNews/NewsCard1.png";
import Newscard2 from "../../Assets/ImgNews/NewsCard 2.png";
import Newscard4 from "../../Assets/ImgNews/NewsCard (4).png";
import Cherv from "../../Assets/ImgNews/chevron-right.svg";
const News = () => {
  return (
    <>
      <div className="header-news">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 3"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 3"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 3"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="6"
              aria-label="Slide 3"
            >
              <li></li>
            </button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="7"
              aria-label="Slide 3"
            >
              <li></li>
            </button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img src={Newsimg} className="d-block w-100 imgs" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>الوثبة يصطدم بجبلة.. وأهلي حلب يستضيف الكرامة</h5>
                <p>
                  تنطلق منافسات الجولة الخامسة من الدوري السوري، الجمعة، ب4
                  مباريات، وتستكمل السبت بمواجهة أهلي حلب والكرامة، ثم تختتم
                  بلقاء مؤجل يجمع الفتوة بتشرين، الإثنين المقبل. جبلة × الوثبة
                  يدخل الوثبة المباراة تحت قيادة المدرب مصعب محمد، منتشيا بفوزه
                  على الجيش ثم تشرين، حيث يحتل المركز الرابع ب8 نقاط.في نفس
                  الوضعية يلعب جبلة بحافز كبير بعد الفوز ع
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* <!-- Design Hero Page  --> */}
      <section className="container-fluid hero-news">
        <div className="row row-news">
          <div className="col-lg-8 left-news">
            <div class="first-left-news">
              <div class="col-lg-6-sm-12 card1-news"></div>
              <div class="col-lg-6-sm-12 card1-news"></div>
            </div>
            <div class="first-right-news">
              <div class="col-lg-6-sm-12 card2-news"></div>
              <div class="col-lg-6-sm-12 card3-news"></div>
            </div>
            <div class="end-left-news"></div>
          </div>
          <div class="col-lg-4 right-news">
            <div class="right-content-news">
              <div class="icon-news">
                <div class="svg-icon-news"></div>
                <p>ارشيف الاخبار</p>
              </div>
              <div class="img-content1-news">
                <img src={Newscard1} alt="" />
              </div>
              <div class="txt-news">
                نتائج المباراه الاخيرة بين الوثبة و الكرامة في ملعب خالد ابن
                الوليد
              </div>
            </div>
            <div class="end-right-news">
              <div class="end-txt-news">
                <p id="one-news">
                  نص الخبر هنا نص الخبر هنانص الخبر هنانص الخبر
                </p>
                <p id="two-news">10 oct 2023, 09:00 PM</p>
              </div>
              <div class="end-img-news">
                <img src={Newscard2} alt="" />
              </div>
            </div>
            <div class="end-right-news mt-2">
              <div class="end-txt-news">
                <p id="one-news">
                  نص الخبر هنا نص الخبر هنانص الخبر هنانص الخبر
                </p>
                <p id="two-news">10 oct 2023, 09:00 PM</p>
              </div>
              <div class="end-img-news">
                <img src={Newscard2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Design Hero Page  --> */}
    </>
  );
};

export default News;
