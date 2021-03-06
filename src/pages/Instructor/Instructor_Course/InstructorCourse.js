import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ManageCourse from "../../../components/Courses/InstructorCourse/ManageCourse";
import JumpCourseCreation from "../../../components/Courses/JumpCourseCreation/JumpCourseCreation";
import General from "../CreateNewCourses/General/General";
export default function InstructorCourse() {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="st_title">
              <i className="uil uil-book-alt" />
              Courses
            </h2>
          </div>
          <JumpCourseCreation></JumpCourseCreation>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="my_courses_tabs">
              <ul
                className="nav nav-pills my_crse_nav"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="pills-my-courses-tab"
                    data-toggle="pill"
                    href="#pills-my-courses"
                    role="tab"
                    aria-controls="pills-my-courses"
                    aria-selected="true"
                  >
                    <i className="uil uil-book-alt" />
                    My Courses
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-my-purchases-tab"
                    data-toggle="pill"
                    href="#pills-my-purchases"
                    role="tab"
                    aria-controls="pills-my-purchases"
                    aria-selected="false"
                  >
                    <i className="uil uil-download-alt" />
                    My Purchases
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="pills-promotions-tab"
                    data-toggle="pill"
                    href="#pills-promotions"
                    role="tab"
                    aria-controls="pills-promotions"
                    aria-selected="false"
                  >
                    <i className="uil uil-megaphone" />
                    Promotions
                  </a>
                </li>
              </ul>
              <ManageCourse></ManageCourse>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
