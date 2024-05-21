import React from "react";
import youtube from "../../Assets/Footer/youtube.png";
import instagram from "../../Assets/Footer/instagram.svg";
import twitter from "../../Assets/Footer/twitter.svg";
import facebook from "../../Assets/Footer/facebook.png";
import Group from "../../Assets/Footer/Group.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="blurCon">
        <div className="white">
          <div className="container-fluid all">
            <div className="row">
              <div className="col-4 dow">
                <h4 className="title">حمل التطبيق</h4>
                <button>
                  <img src={Group} alt="" />
                </button>
                <button>
                  <img src={Group} alt="" />
                </button>
              </div>
              <div className="col-4 help">
                <h4 className="title">المساعدة</h4>
                <p>اتصل بنا</p>
                <p>الابلاغ و الشكاوي</p>
              </div>
              <div className="col-4">
                <div className="alk">
                  <div className="talk">
                    <h4 className="title">الكرامة</h4>
                    <p>الأخبار</p>
                    <p>المبارايات</p>
                    <p>حول النادي</p>
                    <p>اللاعبين</p>
                  </div>
                  <div className="logo-img"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="callUs">
                <p>اتصل بنا . سياسة الخصوصية . تفضيلات ملفات تعريف الإرتباط</p>
                <div class="social">
                  <div class="iicon">
                    <a href="www.youtube.com">
                      <img src={youtube} />
                    </a>
                  </div>
                  <div class="iicon">
                    <a href="www.facebook.com">
                      <img src={facebook} />
                    </a>
                  </div>
                  <div class="iicon">
                    <a href="www.twitter.com">
                      <img src={twitter} />
                    </a>
                  </div>
                  <div class="iicon">
                    <a href="www.instagram.com">
                      <img src={instagram} />
                    </a>
                  </div>
                </div>
                <p>جميع الحقوق محفوظة لنادي الكرامة</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sponsors">
          <p>SPONSORS</p>
          <div class="circles">
            <div class="circle"></div>
            <div class="circle"></div>
            <div class="circle"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
