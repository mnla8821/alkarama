import React from "react";
import "./Table.css";
import Vector from "../../Assets/ImgLanding/Vector (1).png";
import Table1 from "../../Assets/ImgLanding/table.png";
const Table = () => {
  return (
    <>
      {/* <!-- Start  Table --> */}
      <div className="table-match">
        <div className="table-p">
          <img src={Vector} alt="" />
          <p>جدول الدوري السوري</p>
        </div>
        <table>
          <thead>
            <tr>
              <td>نقاط</td>
              <td>فرق</td>
              <td>+\-</td>
              <td>المتبقية</td>
              <td>فاز</td>
              <td>تعادل</td>
              <td>خسارة</td>
              <td>لعب</td>
              <td className="team">الفريق</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>6</td>
              <td>3</td>
              <td>3</td>
              <td>0</td>
              <td>7</td>
              <td>2</td>
              <td>5</td>
              <td>12</td>
              <td className="img-of-table">
                <p>الكرامة</p>
                <img src={Table1} alt="" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>3</td>
              <td>3</td>
              <td>0</td>
              <td>7</td>
              <td>2</td>
              <td>5</td>
              <td>12</td>
              <td className="img-of-table">
                <p>الوثبة</p>
                <img src={Table1} alt="" />
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>3</td>
              <td>3</td>
              <td>0</td>
              <td>7</td>
              <td>2</td>
              <td>5</td>
              <td>12</td>
              <td className="img-of-table">
                <p>الاتحاد</p>
                <img src={Table1} alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!-- End Table  --> */}
    </>
  );
};

export default Table;
