import React from "react";
import "./Contact.css";
import Youtube2 from "../../Assets/ImgContact/youtube2.png";
import facebook2 from "../../Assets/ImgContact/facebook.png";
import Insta2 from "../../Assets/ImgContact/instagram.png";
import Location1 from "../../Assets/ImgContact/location.png";
import Phone from "../../Assets/ImgContact/phone.png";
import Mail from "../../Assets/ImgContact/.png";
import Flag from "../../Assets/ImgContact/flag.png";
const Contact = () => {
  return (
    <>
      {/* <!-- Design Contact Page  --> */}
      <div className="contact">
        <div className="hh">
          <img src={Flag} alt="" />
        </div>
        <div className="blur">
          <div className="lineGroup">
            <div className="line1"></div>
            <div>
              <img src={Youtube2} className="im" alt="" />
            </div>
            <div>
              <img src={facebook2} alt="" />
            </div>
            <div>
              <img src={Insta2} alt="" />
            </div>
            <div className="line2"></div>
          </div>
          <div className="con">
            <div className="inputGroup">
              <div className="cu" dir="rtl">
                تواصل معنا
              </div>
              <div className="star">
                <input
                  dir="rtl"
                  className="in"
                  id="myInput"
                  name="myInput"
                  placeholder="الاسم"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="بريد الالكتروني"
                  dir="rtl"
                  className="ein"
                />
              </div>
              <div className="star">
                <input
                  type="tel"
                  className="in"
                  id="myInput"
                  dir="rtl"
                  name="myInput"
                  placeholder="الرقم"
                />
              </div>
              <textarea
                placeholder="رسالتك"
                dir="rtl"
                className="ta"
              ></textarea>
              <button type="submit" className="sub" dir="rtl">
                ارسال
              </button>
              <div className="ic">
                <div className="phone"></div>
              </div>
            </div>
            <div className="lo">
              <div className="phone">
                <p dir="rtl">
                  رقم الهاتف
                  <br />
                  <span className="phoneNumber">+963-1111 1111</span>
                </p>
                <img src={Phone} alt=" " />
              </div>
              <div className="location">
                <p dir="rtl">
                  الموقع <br />
                  حمص-الملعب البلدي
                </p>
                <div>
                  <img src={Location1} alt="" />
                </div>
              </div>
              <div className="email">
                <p dir="rtl">
                  البريد الالكتروني <br />
                  <span className="alk-email">alkaramah@gmail.com</span>
                </p>
                <img src={Mail} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- End Contact Page  --> */}
    </>
  );
};

export default Contact;
