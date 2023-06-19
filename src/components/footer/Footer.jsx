import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Условия эксплуатации</li>
                    <li className="menuItem">Политика конфиденциальности</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Блог</li>
                    <li className="menuItem">Часто задаваемые вопросы</li>
                </ul>
                <div className="infoText">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aut omnis eos accusamus magni labore, velit dolor sequi. Quod magnam debitis voluptates commodi illum? Dolores ullam ex enim! Eligendi quia earum fugit at consequuntur quaerat placeat corrupti porro eaque quae voluptatem itaque, fugiat iusto debitis fuga voluptate neque deserunt voluptas nam tempore dignissimos, ad quo? Sint vitae incidunt quibusdam delectus eaque veritatis ducimus esse modi reprehenderit aliquid? Expedita, in deleniti necessitatibus ullam maiores cumque at cupiditate dolor inventore eligendi? Placeat eos maxime facere soluta rerum, maiores at neque quae corrupti temporibus fugit impedit nostrum vel ad atque ipsa! Amet, inventore.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
