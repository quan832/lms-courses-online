import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, getCourses } from "../../../redux/actions/type";
import trash_alt from "./images/trash-alt.svg";
import edit_alt from "./images/edit-alt.svg";
// scss
import "./MangeCourse.scss";
// alert
import Swal from "../../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../../node_modules/sweetalert2/src/sweetalert2.scss";
import UpdateCourse from "../UpdateCourse/UpdateCourse";

export default function ManageCourse() {
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  // ========================================================

  // fetch API courses from getCourses Reducer

  // get reducer
  const Courses = useSelector((state) => {
    
    return state.getCoursesReducer.result.data;
  });

  const [khoaHoc, setkhoaHoc] = useState(1);

  const user = useSelector((state) => {
    return state.loginUserReducer.taiKhoan;
  });

  const dispatch = useDispatch();

  const [update, setUpdate] = useState(-1);

  // goi api
  useEffect(() => {
    dispatch(getCourses());
  }, [khoaHoc]);

  const renderListCourse = () => {
    return Courses?.map((course, index) => {
      if (course.nguoiTao.taiKhoan === user.taiKhoan) {
        return (
          <Fragment key={index}>
            {update === index ? (
              <UpdateCourse
                updateCourse={course}
                close={() => {
                  setUpdate(-1);
                }}
              />
            ) : (
              ""
            )}
            {/* <UpdateCourse /> */}
            <tr>
              <td className="text-center">{course.maKhoaHoc}</td>
              <td>{course.tenKhoaHoc}</td>
              <td className="text-center">{course.ngayTao}</td>
              <td className="text-center">{course.soLuongHocVien}</td>
              <td className="text-center">{course.luotXem}</td>
              <td className="text-center">
                <a href="#">{course.danhMucKhoaHoc?.maDanhMucKhoahoc}</a>
              </td>

              <td className="text-center">
                <a
                  onClick={() => {
                    setUpdate(index);
                  }}
                  title="Edit"
                  className="gray-s"
                >
                  <img src={edit_alt} className="uil uil-edit-alt" />
                </a>
                <a
                  onClick={() => {
                    swalWithBootstrapButtons
                      .fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, cancel!",
                        reverseButtons: true,
                      })
                      .then((result) => {
                        if (result.isConfirmed) {
                          swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your course has been deleted.",
                            "success"
                          );

                          dispatch(deleteCourse(course.maKhoaHoc));

                          setkhoaHoc(course.maKhoaHoc);
                        } else if (
                          /* Read more about handling dismissals below */
                          result.dismiss === Swal.DismissReason.cancel
                        ) {
                          swalWithBootstrapButtons.fire(
                            "Cancelled",
                            "Your course is safe :)",
                            "error"
                          );
                        }
                      });
                  }}
                  title="Delete"
                  className="gray-s"
                >
                  <img src={trash_alt} className="uil uil-trash-alt" />
                </a>
              </td>
            </tr>
          </Fragment>
        );
      }
    });
  };
  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-my-courses"
        role="tabpanel"
      >
        <div className="table-responsive mt-30">
          <table className="table ucp-table">
            <thead className="thead-s">
              <tr>
                <th className="text-center" scope="col">
                  Item No.
                </th>
                <th>Title</th>
                <th className="text-center" scope="col">
                  Publish Date
                </th>
                <th className="text-center" scope="col">
                  Student
                </th>
                <th className="text-center" scope="col">
                  View
                </th>
                <th className="text-center" scope="col">
                  Category
                </th>
                <th className="text-center" scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>{renderListCourse()}</tbody>
          </table>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-my-purchases" role="tabpanel">
        <div className="table-responsive mt-30">
          <table className="table ucp-table">
            <thead className="thead-s">
              <tr>
                <th className="text-center" scope="col">
                  Item No.
                </th>
                <th className="cell-ta" scope="col">
                  Title
                </th>
                <th className="cell-ta" scope="col">
                  Vendor
                </th>
                <th className="cell-ta" scope="col">
                  Category
                </th>
                <th className="text-center" scope="col">
                  Delivery Type
                </th>
                <th className="text-center" scope="col">
                  Price
                </th>
                <th className="text-center" scope="col">
                  Purchase Date
                </th>
                <th className="text-center" scope="col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">001</td>
                <td className="cell-ta">Course Title Here</td>
                <td className="cell-ta">
                  <a href="#">Zoena Singh</a>
                </td>
                <td className="cell-ta">
                  <a href="#">Web Development</a>
                </td>
                <td className="text-center">
                  <b className="course_active">Download</b>
                </td>
                <td className="text-center">$15</td>
                <td className="text-center">25 March 2020</td>
                <td className="text-center">
                  <a href="#" title="Download" className="gray-s">
                    <i className="uil uil-download-alt" />
                  </a>
                  <a href="#" title="Delete" className="gray-s">
                    <i className="uil uil-trash-alt" />
                  </a>
                  <a href="#" title="Print" className="gray-s">
                    <i className="uil uil-print" />
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-center">002</td>
                <td className="cell-ta">Course Title Here</td>
                <td className="cell-ta">
                  <a href="#">Rock William</a>
                </td>
                <td className="cell-ta">
                  <a href="#">C++</a>
                </td>
                <td className="text-center">
                  <b className="course_active">Download</b>
                </td>
                <td className="text-center">$20</td>
                <td className="text-center">20 March 2020</td>
                <td className="text-center">
                  <a href="#" title="Download" className="gray-s">
                    <i className="uil uil-download-alt" />
                  </a>
                  <a href="#" title="Delete" className="gray-s">
                    <i className="uil uil-trash-alt" />
                  </a>
                  <a href="#" title="Print" className="gray-s">
                    <i className="uil uil-print" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div
        className="tab-pane fade"
        id="pills-promotions"
        role="tabpanel"
        aria-labelledby="pills-promotions-tab"
      >
        <div className="promotion_tab mb-10">
          <img src="images/dashboard/promotion.svg" alt />
          <h4>Baby promotion plan is activated!</h4>
          <p>
            By activating promotion plans you can improve course views and
            sales.
          </p>
          <button
            className="plan_link_btn"
            onclick="window.location.href = '#';"
          >
            Change New Plan
          </button>
        </div>
      </div>
    </div>
  );
}
