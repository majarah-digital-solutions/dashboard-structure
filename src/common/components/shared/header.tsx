"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BsList } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { Avatar, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { BsBoxArrowLeft } from "react-icons/bs";
import RingLoader from "react-spinners/RingLoader";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const {
    data: { user },
  }: any = useSession();

  const { loading } = useSelector((state: any) => state.config);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState([]);
  const [userMenu, setUserMenuShow] = useState(false);

  const subMenuToggle = (items: any) => {
    setActiveSubMenu(items);
    setShowOverlay(true);
    setShowSubMenu(true);
  };

  const closeEvryThing = () => {
    setShowOverlay(false);
    setShowSubMenu(false);
  };

  const menu: any = [
    {
      title: "الإحصائيات",
      icon: "/icon/analysis.png",
      path: "/dashboard/analysis",
    },
    {
      title: "تفريعات",
      icon: "/icon/vehicles.png",
      subMenu: [
        {
          title: "فرع اول",
          icon: "/icon/products.png",
          path: "/dashboard/",
        },
        {
          title: "فرع ثان",
          icon: "/icon/products.png",
          path: "/dashboard/",
        },
      ],
    },
  ];

  return (
    <>
      <section className="navFixed">
        <div className="main-header">
          <div className="logo">
            <Link href="/">
              {!loading ? (
                <img src="/logo.png" alt="logo" />
              ) : (
                <div className="text-center">
                  <RingLoader className="m-auto" size={35} color="#36d7b7" />
                </div>
              )}
            </Link>
          </div>

          <div className="navToggle">
            <label htmlFor="check" className="checkbtn">
              <BsList />
            </label>
          </div>
          <div className="mAuto"></div>
          <div className="header-part-right">
            <Badge badgeContent={4} color="secondary">
              <MdMailOutline color="red" />
            </Badge>
            <div
              className="user col align-self-end position-relative  "
              onClick={() => setUserMenuShow(!userMenu)}
            >
              <div
                className="userContnet"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                id="userDropdown"
              >
                <div className="username">{user.fullname}</div>
                <Avatar src={user.fullname} alt="" />
              </div>
              {userMenu ? (
                <div
                  className="dropdown-menu userDropMenu dropdown-menu-right text-right bg-red-500  "
                  aria-labelledby="userDropdown"
                >
                  <BsBoxArrowLeft />
                  <button className="dropdown-item" onClick={() => signOut()}>
                    {" "}
                    تسجيل الخروج
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="sideBar rightMenu">
        <div className="side-content-wrap">
          <div
            className="sidebar-left open rtl-ps-none"
            data-perfect-scrollbar=""
            data-suppress-scroll-x="true"
          >
            <ul className="navigation-left">
              {menu.map((item: any, index: number) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-item-hold"
                      href={item.subMenu ? "#" : item.path}
                      onClick={() =>
                        item.subMenu && subMenuToggle(item.subMenu)
                      }
                    >
                      <div>
                        <img src={item.icon} className="icon" />
                      </div>
                      <span className="nav-text">{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {showSubMenu ? (
            <div
              className="sidebar-left-secondary rtl-ps-none open"
              data-perfect-scrollbar=""
              data-suppress-scroll-x="true"
              id="siteInfo"
            >
              <ul className="childNav" data-parent="products">
                {activeSubMenu.map((subItem: any, index: number) => {
                  return (
                    <li className="nav-item" key={index}>
                      <Link href={subItem.path}>
                        <div>
                          <img src={subItem.icon} className="iconXs" />
                        </div>
                        <span className="item-name">{subItem.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : null}
          {showOverlay ? (
            <div className="sidebar-overlay" onClick={closeEvryThing}></div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Header;
