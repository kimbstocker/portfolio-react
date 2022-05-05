import logo from '../assets/Kim_Stocker_T1A2_Logo.jpg';
import { Outlet, Link } from "react-router-dom";

export const Header = () => {
    return (

        <section className="sectionHeader">
            <header className="header">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="a personal logo" />
                    </Link>
                </div>

                <div className="topnav">
                
                    <Link to="/" className='topnavlinks'>Home</Link>
                    <Link to="/contact" className='topnavlinks'>Contact</Link>
                    <Link to="/portfolio" className='topnavlinks'>Portfolio</Link>
                    <Link to="/resume" className='topnavlinks'>Resume</Link>
                    <Link to="/personal" className='topnavlinks'>Personal</Link>
                    <Link to="/blogs" className='topnavlinks'>Blogs</Link>

                </div>




                {/* <a href="javascript:void(0);" class="icon" onclick="DropDownMenu()">
                    <i class="fa fa-bars" style="font-size:48px; color: #dd8c8c;">
                    </i>
                </a> */}
                <Outlet />

            </header>
        </section>

    )
}

// export const TopNavLinks = () => {
//     return (

//         <div className="topnav">
                
//         <Link to="/" className='topnavlinks'>Home</Link>
//         <Link to="/contact" className='topnavlinks'>Contact</Link>
//         <Link to="/portfolio" className='topnavlinks'>Portfolio</Link>
//         <Link to="/resume" className='topnavlinks'>Resume</Link>
//         <Link to="/personal" className='topnavlinks'>Personal</Link>
//         <Link to="/blogs" className='topnavlinks'>Blogs</Link>

//         </div>
//     )

// }


