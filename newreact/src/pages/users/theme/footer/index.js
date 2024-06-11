import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer__about">
                        <h1 className="foot__about__LOGO">TAN NIGGA</h1>
                        <ul>
                            <li>Điachi:TPHCM</li>
                            <li>PHONE:0908xxxxx</li>
                            <li>EMAIL:buitanphat6112003@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer__widget">
                            <h3>cửa hàng</h3>
                            <ul>
                                <li>
                                    <Link to="">Liên Hệ</Link>
                                </li>
                                <li>
                                    <Link to="">Thông tin Cửa Hàng</Link>
                                </li>
                                <li>
                                    <Link to="">Sản Phẩm</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <Link to="">Thông tin tài khoản</Link>
                                </li>
                                <li>
                                    <Link to="">Độ Tin Cậy</Link>
                                </li>
                                <li>
                                    <Link to="">Hỏi Đáp</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">Khuyến Mãi và Ưu Đãi</div>
                    <p>
                        đăng ký nhận thông tin tại đây 
                    </p>
                    <form action="#">
                        <div>
                     <input type="text" placeholder="nhập email vào"/>
                        <button type="submit"className="button-submit">
                            Đăng ký
                        </button>
                        </div>
                        <div className="footer__widget__social">
                            <div>
                                <FaFacebook/>
                            </div>
                            <div>
                                <FaInstagram />
                            </div>
                            <div>
                                <FaYoutube />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);