import "./Header.scss";
import Navbar from "../Navbar/Navbar";
export default function Header() {
    // const mobileMenuHandler =()=>{
    //     const menu = document.getElementById('mobile_menu');
    //     if (menu.classList.contains('mobile_menu-active')) {
    //         menu.classList.remove('mobile_menu-active');
    //     }else{
    //         menu.classList.add('mobile_menu-active');
    //     }
    // }
    const leftNav = [
        {
            title:'Lorem',
            link:'#'
        },
        {
            title:'Ipsum',
            link:'#'
        },
        {
            title:'Dolor',
            link:'#'
        },

    ]
    const rightNav = [
        {
            title:'Sit',
            link:'#'
        },
        {
            title:'Consectetur',
            link:'#'
        },
        {
            title:'Elit',
            link:'#'
        },

    ]
    return (
        <div id="header">
            <nav>
                <Navbar navLinks={leftNav} />
            </nav>
            <h1 className="logo">Logo Here</h1>
            <nav>
                <Navbar navLinks={rightNav}/>
            </nav>
        {/* <img src={burgerToggler} onClick={mobileMenuHandler} className="mobile_menu_toggler" /> */}
        </div>
    );
}
