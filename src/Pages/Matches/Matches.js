import React from "react";
import "./Matches.css";
import Calender from "../../Assets/ImgMatches/calendar.png";
import KaramaMatches from "../../Assets/ImgMatches/karama.png";
import KaramaSmallMatches from "../../Assets/ImgMatches/karama-small.png";
import Ittehad from "../../Assets/ImgMatches/itthad.png";
import IttehadSmallIttehad from "../../Assets/ImgMatches/itthad-small.png";
import Jesh from "../../Assets/ImgMatches/jesh.png";
import Wathba from "../../Assets/ImgMatches/wathba.png";
import Map from "../../Assets/ImgMatches/map.png";
import Search from "../../Assets/ImgMatches/search.png";
import MaiMatches from "../../Assets/ImgMatches/main.png";
import Table from "../../Components/Table/Table";

const Matches = () => {
  return (
    <>
      <div className="matchs">
        <h1>المباريات</h1>
      </div>
      {/* <!-- Start Result Page  --> */}
      <div class="result-Matches">
        <div class="res-Matches">
          <div class="blue-Matches">
            <h4>01/09</h4>
          </div>
          <div class="imgs-Matches">
            <div class="img1-Matches">
              <img src={KaramaMatches} alt="" />
              <h3 class="team-name-Matches">الكرامة</h3>
              <h3>2</h3>
            </div>
            <div class="img2-Matches">
              <img src={Ittehad} alt="" />
              <h3 class="team-name-Matches">الاتحاد</h3>
              <h3>2</h3>
            </div>
          </div>
        </div>
        <div class="res-Matches">
          <div class="blue-Matches">
            <h4>01/09</h4>
          </div>
          <div class="imgs-Matches">
            <div class="img1-Matches">
              <img src={KaramaMatches} alt="" />
              <h3 class="team-name-Matches">الكرامة</h3>
              <h3>2</h3>
            </div>
            <div class="img2-Matches">
              <img src={Ittehad} alt="" />
              <h3 class="team-name-Matches">الاتحاد</h3>
              <h3>2</h3>
            </div>
          </div>
        </div>
        <div class="res-Matches">
          <div class="blue-Matches">
            <h4>01/09</h4>
          </div>
          <div class="imgs-Matches">
            <div class="img1-Matches">
              <img src={KaramaMatches} alt="" />
              <h3 class="team-name-Matches">الكرامة</h3>
              <h3>2</h3>
            </div>
            <div class="img2-Matches">
              <img src={Ittehad} alt="" />
              <h3 class="team-name-Matches">الاتحاد</h3>
              <h3>2</h3>
            </div>
          </div>
        </div>
        <div class="res-Matches">
          <div class="blue-Matches">
            <h4>01/09</h4>
          </div>
          <div class="imgs-Matches">
            <div class="img1-Matches">
              <img src={KaramaMatches} alt="" />
              <h3 class="team-name-Matches">الكرامة</h3>
              <h3>2</h3>
            </div>
            <div class="img2-Matches">
              <img src={Ittehad} alt="" />
              <h3 class="team-name-Matches">الاتحاد</h3>
              <h3>2</h3>
            </div>
          </div>
        </div>
        <div class="res-Matches">
          <div class="blue-Matches">
            <h4>01/09</h4>
          </div>
          <div class="imgs-Matches">
            <div class="img1-Matches">
              <img src={KaramaMatches} alt="" />
              <h3 class="team-name-Matches">الكرامة</h3>
              <h3>2</h3>
            </div>
            <div class="img2-Matches">
              <img src={Ittehad} alt="" />
              <h3 class="team-name-Matches">الاتحاد</h3>
              <h3>2</h3>
            </div>
          </div>
        </div>
        <div class="res-Matches">
          <div class="blue-Matches">
            <h4>01/09</h4>
          </div>
          <div class="imgs-Matches">
            <div class="img1-Matches">
              <img src={KaramaMatches} alt="" />
              <h3 class="team-name-Matches">الكرامة</h3>
              <h3>2</h3>
            </div>
            <div class="img2-Matches">
              <img src={Ittehad} alt="" />
              <h3 class="team-name-Matches">الاتحاد</h3>
              <h3>2</h3>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Result Page  --> */}
      {/* <!-- Start Search Page  --> */}
      <div class="container-fluid search-Matches">
        <div class="parent-Matches">
          <div class="search-window-MAtches">
            <div class="input-Matches">
              <span class="search-signal-Matches" id="addon-wrapping">
                <img src={Search} alt="" />
              </span>
              <input
                type="text"
                class="form-control-Matches"
                placeholder="ابحث عن مباراة"
                aria-describedby="addon-wrapping"
              />
            </div>
            <div class="match-time-Matches">
              <div className="date">
                <p>الاربعاء</p>
                <p>09 aug</p>
              </div>
              <div className="date-Matches">
                <p>البارحة</p>
                <p>10 aug</p>
              </div>
              <div className="date-Matches today">
                <p>اليوم</p>
                <p>11 aug</p>
              </div>
              <div className="date-Matches">
                <p>غدا</p>
                <p>12 aug</p>
              </div>
              <div className="date-Matches">
                <p>الاحد</p>
                <p>13 aug</p>
              </div>
              <div className="date-Matches">
                <p>الاثنين</p>
                <p>14 aug</p>
              </div>
              <div className="watch-all-Matches">
                <h5>
                  مشاهدة
                  <br />
                  الكل
                </h5>
                <img src={Calender} alt="" />
              </div>
            </div>
            <div className="competition">
              <div className=" row-Matches heros-Matches">
                <div className=" col-7 quarter-Matches">
                  <p>(الربع الأخير)</p>
                </div>
                <div className=" col-5 map-Matches">
                  <p>دوري الابطال</p>
                  <img src={Map} alt="" />
                </div>
              </div>
              <div className="gray-Matches">
                <div className="row-Matches">
                  <div className="col-5 live-Matches">
                    <p>Live</p>
                  </div>
                  <div className="col-7 against-Matches">
                    <div className="col-2 wathba-Matches">
                      <p>الوثبة</p>
                      <img src={Wathba} alt="" />
                    </div>
                    <div className="col-1 res-num-Matches">
                      <p> 2-1 </p>
                    </div>
                    <div className="col-2 karama-Matches">
                      <img src={KaramaSmallMatches} alt="" />
                      <p>الكرامة</p>
                    </div>
                    <div className="col-7"></div>
                  </div>
                </div>
              </div>
              <div className="gray-2-Matches">
                <div className="row-Matches">
                  <div className="col-5 hour-Matches">
                    <p>اليوم 6:30</p>
                  </div>
                  <div className="col-7 against-Matches">
                    <div className="col-2 karama-Matches">
                      <p>الجيش</p>
                      <img src={Jesh} alt="" />
                    </div>
                    <div className="col-1 res-num-Matches">
                      <p> - </p>
                    </div>
                    <div className="col-2 karama-Matches">
                      <img src={KaramaSmallMatches} alt="" />
                      <p>الكرامة</p>
                    </div>
                    <div className="col-7"></div>
                  </div>
                </div>
              </div>
              <div className="gray-Matches">
                <div className="row-Matches">
                  <div className="col-5 hour-Matches">
                    <p>الاحد 2:30</p>
                  </div>
                  <div className="col-7 against-Matches">
                    <div className="col-2 wathba-Matches">
                      <p>الاتحاد</p>
                      <img src={IttehadSmallIttehad} alt="" />
                    </div>
                    <div className="col-1 res-num-Matches">
                      <p> - </p>
                    </div>
                    <div className="col-2 karama-Matches">
                      <img src={KaramaSmallMatches} alt="" />
                      <p>الكرامة</p>
                    </div>
                    <div className="col-7"></div>
                  </div>
                </div>
              </div>
              <div className="republic-Matches">
                <div className=" row-Matches heros-Matches">
                  <div className=" col-7 quarter-Matches">
                    <p>(الربع الأول)</p>
                  </div>
                  <div className=" col-5 map-Matches">
                    <p>دوري الجمهورية</p>
                    <img src={Map} alt="" />
                  </div>
                </div>
                <div className="gray-Matches">
                  <div className="row-Matches">
                    <div className="col-5 hour-Matches">
                      <p></p>
                    </div>
                    <div className="col-7 against-Matches">
                      <div className="col-2 wathba-Matches">
                        <p>الوثبة</p>
                        <img src={Wathba} alt="" />
                      </div>
                      <div className="col-1 res-num-Matches">
                        <p> 1-2 </p>
                      </div>
                      <div className="col-2 karama-Matches">
                        <img src={KaramaSmallMatches} alt="" />
                        <p>الكرامة</p>
                      </div>
                      <div className="col-7"></div>
                    </div>
                  </div>
                </div>
                <div className="gray-2-Matches"></div>
                <div className="gray-Matches"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Start Table */}
      <Table />
      {/* End Table  */}
    </>
  );
};
export default Matches;
