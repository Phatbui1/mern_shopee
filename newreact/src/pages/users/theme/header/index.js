import { memo, useState } from "react";
import "./style.scss"
import { AiOutlineFacebook } from "react-icons/ai";
import { FaYoutube, FaInstagram, FaUser, FaVoicemail, FaRegAddressCard } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import { ROUTERS } from "../../../../utils/router";

const Header = () => {
    const formatter = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
    const [menu, setMenus] = useState([
        {
            name: "Trang chu",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "cua hang",
            path: "",
            isShowsubmenu: false,
            child: [
                {
                    name: "item",
                    path: "",
                },
                {
                    name: "machine",
                    path: "",
                },
                {
                    name: "toy",
                    path: "",
                }
            ]
        },
        {
            name: "thong tin cua hang",
            path: ROUTERS.USER.INFORMATION,
        },
        {
            name: "bao mat",
            path: ROUTERS.USER.SECURITYUSER,
        },
    ]);

    return (
        <>
            <div className="header__top">
                <div className="container">
                    <div className="row">
                        <div className="col-6 header__top_left">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <FaVoicemail />
                                    </Link>
                                    <span>buitanphat6112003@gmail.com</span>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FaRegAddressCard />
                                    </Link>
                                    <span>0906881xxx</span>
                                </li>
                                <li>
                                    <Link to="/">
                                        <IoMdContact />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 header__top_right">
                            <ul>
                                <li>
                                    <Link to="/">
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FaInstagram />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FaYoutube />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FaUser />
                                    </Link>
                                    <span></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__LOGO">
                            <h1>TANPHAT</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="header__menu">
                            <div className="header__menu">
                                <nav>
                                    <ul>
                                        {
                                            menu?.map((menu, menuKey) => (<li key={menuKey} className={menuKey === 0 ? "active" : ""}>
                                                <Link to={menu?.path}>{menu?.name}</Link>
                                                {
                                                    menu.child && (
                                                        <ul className="header__menu__dropdown">
                                                            {
                                                                menu.child.map((childItem, childKey) => (
                                                                    <li key={'${menuKey}-${childKey}'}>
                                                                        <Link to={childKey.path}>{childItem.name}</Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    )
                                                }

                                            </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3">
                        <div className="header__cart">
                            <div className="header__cart__price">
                                <span>{formatter(1000000)}</span>
                            </div>
                            <ul>
                                <li>
                                    <Link to="#">
                                        <AiOutlineShop /> <span>10</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);