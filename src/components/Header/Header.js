import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import udemy from "../../assets/images/udemy-official.svg";
import { createAction } from "../../redux/actions";

// alert

import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.js";
import "../../../node_modules/sweetalert2/src/sweetalert2.scss";

// css
import "./Header.scss";

export default function Header() {
  // set active click
  const [active, setActive] = useState(0);
  const [active1, setActive1] = useState(0);
  const [active2, setActive2] = useState(0);

  const [nightMode, setNightMode] = useState(0);

  const classDropDown = ["active visible ", "left transition visible "];

  const taiKhoan = useSelector((state) => state.loginUserReducer.taiKhoan);

  // console.log(taiKhoan);

  return (
    <header className="header clearfix">
      <button type="button" id="toggleMenu" className="toggle_menu">
        <i className="uil uil-bars" />
      </button>
      <button id="collapse_menu" className="collapse_menu">
        <i className="uil uil-bars collapse_menu--icon " />
        <span className="collapse_menu--label" />
      </button>
      <div className="main_logo" id="logo">
        <NavLink to="/home">
          <img src={udemy} alt style={{ width: "115px" }} />
        </NavLink>
        <a href="index.html">
          <img className="logo-inverse" src="images/ct_logo.svg" alt />
        </a>
      </div>
      <div className="top-category">
        <div className="ui compact menu cate-dpdwn">
          <div className="ui simple dropdown item">
            <a href="#" className="option_links p-0" title="categories">
              <i className="uil uil-apps" />
            </a>
            <div className="menu dropdown_category5">
              <a href="#" className="item channel_item">
                Development
              </a>
              <a href="#" className="item channel_item">
                Business
              </a>
              <a href="#" className="item channel_item">
                Finance &amp; Accounting
              </a>
              <a href="#" className="item channel_item">
                IT &amp; Software
              </a>
              <a href="#" className="item channel_item">
                Office Productivity
              </a>
              <a href="#" className="item channel_item">
                Personal Development
              </a>
              <a href="#" className="item channel_item">
                Design
              </a>
              <a href="#" className="item channel_item">
                Marketing
              </a>
              <a href="#" className="item channel_item">
                Lifestyle
              </a>
              <a href="#" className="item channel_item">
                Photography
              </a>
              <a href="#" className="item channel_item">
                Health &amp; Fitness
              </a>
              <a href="#" className="item channel_item">
                Music
              </a>
              <a href="#" className="item channel_item">
                Teaching &amp; Academics
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="search120">
        <div className="ui search">
          <div className="ui left icon input swdh10">
            <input
              className="prompt srch10"
              type="text"
              placeholder="Search for Tuts Videos, Tutors, Tests and more.."
            />
            <i className="uil uil-search-alt icon icon1" />
          </div>
        </div>
      </div>
      <div className="header_right">
        <ul>
          <li>
            {/* || taiKhoan == " " */}
            {taiKhoan.maLoaiNguoiDung === "HV" ? (
              <a
                className="upload_btn bg-dark text-white "
                title="Create New Course"
                onClick={() => {
                  Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "You need to be a teacher!",
                  });
                }}
              >
                Create New Course
              </a>
            ) : (
              <NavLink
                to="/create-new-courses"
                className="upload_btn "
                title="Create New Course"
              >
                Create New Course
              </NavLink>
            )}
          </li>
          <li>
            <a href="shopping_cart.html" className="option_links" title="cart">
              <i className="uil uil-shopping-cart-alt" />
              <span className="noti_count">2</span>
            </a>
          </li>
          <li
            className={`ui dropdown ${active[0]}`}
            onClick={() => {
              if (active == 0) {
                setActive(classDropDown);
                setActive1([]);
                setActive2([]);
              } else {
                setActive([]);
              }
            }}
          >
            <a className="option_links" title="Messages">
              <i className="uil uil-envelope-alt" />
              <span className="noti_count">3</span>
            </a>
            <div className={`menu dropdown_ms ${active[1]}`}>
              <a className="channel_my item">
                <div className="profile_link">
                  <img src="images/left-imgs/img-6.jpg" alt />
                  <div className="pd_content">
                    <h6>Zoena Singh</h6>
                    <p>
                      Hi! Sir, How are you. I ask you one thing please explain
                      it this video price.
                    </p>
                    <span className="nm_time">2 min ago</span>
                  </div>
                </div>
              </a>
              <a href="#" className="channel_my item">
                <div className="profile_link">
                  <img src="images/left-imgs/img-5.jpg" alt />
                  <div className="pd_content">
                    <h6>Joy Dua</h6>
                    <p>
                      Hello, I paid you video tutorial but did not play error
                      404.
                    </p>
                    <span className="nm_time">10 min ago</span>
                  </div>
                </div>
              </a>
              <a href="#" className="channel_my item">
                <div className="profile_link">
                  <img src="images/left-imgs/img-8.jpg" alt />
                  <div className="pd_content">
                    <h6>Jass</h6>
                    <p>Thanks Sir, Such a nice video.</p>
                    <span className="nm_time">25 min ago</span>
                  </div>
                </div>
              </a>
              <a className="vbm_btn" href="instructor_messages.html">
                View All <i className="uil uil-arrow-right" />
              </a>
            </div>
          </li>
          <li
            className={`ui dropdown ${active1[0]}`}
            onClick={() => {
              if (active1 == 0) {
                setActive1(classDropDown);
                setActive([]);
                setActive2([]);
              } else {
                setActive1([]);
              }
            }}
          >
            <a className="option_links" title="Notifications">
              <i className="uil uil-bell" />
              <span className="noti_count">3</span>
            </a>
            <div className={`menu dropdown_mn ${active1[1]}`}>
              <a className="channel_my item">
                <div className="profile_link">
                  <img src="images/left-imgs/img-1.jpg" alt />
                  <div className="pd_content">
                    <h6>Rock William</h6>
                    <p>
                      Like Your Comment On Video{" "}
                      <strong>How to create sidebar menu</strong>.
                    </p>
                    <span className="nm_time">2 min ago</span>
                  </div>
                </div>
              </a>
              <a href="#" className="channel_my item">
                <div className="profile_link">
                  <img src="images/left-imgs/img-2.jpg" alt />
                  <div className="pd_content">
                    <h6>Jassica Smith</h6>
                    <p>
                      Added New Review In Video{" "}
                      <strong>Full Stack PHP Developer</strong>.
                    </p>
                    <span className="nm_time">12 min ago</span>
                  </div>
                </div>
              </a>
              <a className="channel_my item">
                <div className="profile_link">
                  <img src="images/left-imgs/img-9.jpg" alt />
                  <div className="pd_content">
                    <p>
                      Your Membership Approved <strong>Upload Video</strong>.
                    </p>
                    <span className="nm_time">20 min ago</span>
                  </div>
                </div>
              </a>
              <a className="vbm_btn" href="instructor_notifications.html">
                View All <i className="uil uil-arrow-right" />
              </a>
            </div>
          </li>
          {taiKhoan !== " " ? (
            <Fragment>
              <li
                className={`ui dropdown ${active2[0]}`}
                onClick={() => {
                  if (active2 == 0) {
                    setActive2(classDropDown);
                    setActive([]);
                    setActive1([]);
                  } else {
                    setActive2([]);
                  }
                }}
              >
                {taiKhoan !== " " ? (
                  <a className="opts_account" title="Account">
                    <img src="images/hd_dp.jpg" alt />
                  </a>
                ) : (
                  <a className="opts_account" title="Account">
                    <img src="images/123.png" />
                  </a>
                )}

                <div className={`menu dropdown_account ${active2[1]}`}>
                  <div className="channel_my">
                    <div className="profile_link">
                      <img src="images/hd_dp.jpg" alt />
                      <div className="pd_content">
                        <div className="rhte85">
                          <Fragment>
                            <h6>{taiKhoan.hoTen}</h6>
                            <div className="mef78" title="Verify">
                              <i className="uil uil-check-circle" />
                            </div>
                          </Fragment>
                        </div>
                        <span>
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="99fef8f4fbf6f5a0adaad9fef4f8f0f5b7faf6f4"
                          >
                            [email&nbsp;protected]
                          </a>
                        </span>
                      </div>
                    </div>
                    {taiKhoan.maLoaiNguoiDung === "HV" ? (
                      <NavLink
                        to="/profile"
                        href="my_instructor_profile_view.html"
                        className="dp_link_12"
                      >
                        View Student Profile
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/profile"
                        href="my_instructor_profile_view.html"
                        className="dp_link_12"
                      >
                        View Instuctor Profile
                      </NavLink>
                    )}
                  </div>
                  <div className="night_mode_switch__btn">
                    <a href="#" id="night-mode" className="btn-night-mode">
                      <i className="uil uil-moon" /> Night mode
                      <span className="btn-night-mode-switch">
                        <span className="uk-switch-button" />
                      </span>
                    </a>
                  </div>
                  <NavLink to="./dashboard" className="item channel_item">
                    Udemy dashboard
                  </NavLink>
                  <a href="membership.html" className="item channel_item">
                    Paid Memberships
                  </a>
                  <a href="setting.html" className="item channel_item">
                    Setting
                  </a>
                  <a href="help.html" className="item channel_item">
                    Help
                  </a>
                  <a href="feedback.html" className="item channel_item">
                    Send Feedback
                  </a>
                  <NavLink
                    to="/login"
                    className="item channel_item"
                    onClick={() => {
                      localStorage.clear();
                      window.location.assign("/login");
                    }}
                  >
                    Sign Out
                  </NavLink>
                </div>
              </li>
            </Fragment>
          ) : (
            <span></span>
          )}
        </ul>
      </div>
    </header>
  );
}
