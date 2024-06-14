import { memo, useState } from "react";
import "./style.scss"
import { AiOutlineFacebook } from "react-icons/ai";
import { FaYoutube, FaInstagram, FaUser, FaVoicemail, FaRegAddressCard,FaPhone } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { AiOutlineShop } from "react-icons/ai";
import { ROUTERS } from "../../../../utils/router";
import { CgDetailsMore } from "react-icons/cg";

const Header = () => {
    const formatter = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    }
    const [isShowCategories,setShowCategories] = useState(true);
    const [menu,] = useState([
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
            name: "thong tin cửa h",
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
            <div className="container"></div>
            <div className="row">
                <div className="col-xl-3 col-lg-3">
                    <div className="header__LOGO">
                        <h2>Jin</h2>
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
            <div className="row hero__categories__container">
                <div className="col-lg-3 hero__categories">
                    <div className="hero__categories__all " onClick={() => setShowCategories(!isShowCategories)}>
                        <CgDetailsMore />
                        danh sách sản phẩm
                    </div>
                    {isShowCategories && (<ul className={isShowCategories ?"":"hidden"}>
                        <li>
                            <Link to={"#"}>thịt</Link>
                        </li>
                        <li>
                            <Link to={"#"}>cá</Link>
                        </li>
                        <li>
                            <Link to={"#"}>rau củ</Link>
                        </li>
                    </ul>)}
                   
                </div>
                <div className="col-lg-9 hero__search_container">
                    <div className="hero__search">
                          <div className="hero__search__form">
                            <form>
                                <input type="" name="" value=""placeholder="tìm kiếm những gì"/>
                               <button type="submit" > tìm kiếm </button>
                            </form>
                          </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon" >
                                <FaPhone />
                            </div>
                            <div className="hero__search__phone__text" >
                                <p>012384758</p>
                                <span>hỗ trợ 24/7</span>
                            </div>
                        </div>
                    </div>
                    <div className="hero__item">
                          <div className="hero__Text">
                            <span>đồ gia dụng</span>
                            <h2>rau củ <br/>sạch 100%
                            </h2>
                             <p>miễn phí giao hàng tận nơi</p>
                             <Link to=""className="primary-btn"> mua nhanh</Link>
                           </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(Header);