
import gitHub from '../assets/GitHub.jpg';
import twitter from '../assets/Twitter.jpg';
import linkedIn from '../assets/LinkedIn.jpg';
// import { Outlet, Link } from "react-router-dom";


export const Footer = () => {

    // const gitHub = require('../assets/GitHub.jpg')


    return (

        <section className="sectionFooter">
            <footer className="footer">
                <div className="footerLeft">
                </div>
                <nav className="footerNav">
                    <div className="footerLinks">
                        <a href="/">Home</a>
                        <a href="/">Contact</a>
                    </div>
                    <div className="footerLinks">
                        <a href="/">Personal</a>
                        <a href="/">Portfolio</a>
                    </div>
                    <div className="footerLinks">
                        <a href="/">Resume</a>
                        <a href="/">Blog</a>
                    </div>

              

                    <div className="footerSocial">
                        <a href="https://github.com/kimbstocker" target="_blank">
                            <img src={gitHub} alt="GitHub logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/kim-stocker-83547217" target="_blank">
                            <img src={linkedIn} alt="LinkedIn logo" />
                        </a>
                        <a href="https://twitter.com/KimStocker7" target="_blank">
                            <img src={twitter} alt="Twitter logo" />
                        </a>
                    </div>
                </nav>
            </footer>
        </section>

    )
}