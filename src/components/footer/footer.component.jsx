import React from "react";
import {
    AiFillYoutube,
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillApple
} from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../footer/footer.style.css";

export const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div className="footer-content">
                    <h3
                        style={{
                            fontFamily: "Trebuchet MS",
                            fontSize: "2em"
                        }}
                    >
                        <em>CROWN   </em>CLOTHINGS
                    </h3>
                    <p>crown clothing is a registered company under Hexaview Tech Pvt. Ltd.</p>
                    <div className="sub">
                        <div>
                            <b>Company</b>
                            <p><Link href="#">About</Link></p>
                            <p><Link href="#">Blog</Link></p>
                        </div>
                        <div>
                            <b>For Foodies</b>
                            <p><Link href="#">Code of conduct</Link></p>
                            <p><Link href="#">Community</Link></p>
                        </div>
                        <div>
                            <b>For Compony</b>
                            <p><Link href="#">Crown Clothings</Link></p>
                            <p><Link href="#">Business</Link></p>
                        </div>
                        <div>
                            <b>For You</b>
                            <p><Link href="#">Privacy</Link></p>
                            <p><Link href="#">Security</Link></p>
                            <p><Link href="#">Terms</Link></p>
                        </div>
                        <div>
                            <b>Social links</b>
                            <div>
                                <AiFillYoutube />
                                <AiFillFacebook />
                                <AiFillTwitterCircle />
                                <AiFillInstagram />
                            </div>
                            <div>
                                <AiFillApple />
                                <FaGooglePlay />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};