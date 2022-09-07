import Navlink from "../Navlink/Navlink";
import "./MobileMenu.scss";
import { navLinks } from "../../navlinks";
import forward from '../../assets/arrow-forward.svg'
export default function MobileMenu() {
    const mobileNavHandler = (link)=>{
        window.location.href = link;
    }
    return (
        <div className="mobile_menu" id="mobile_menu">
            {navLinks.map((x, index) => {
                return (
                    <div className="mobile_menu_item" onClick={mobileNavHandler(x.link)}>
                    <Navlink key={index} title={x.title} link={x.link} />
                    <img src={forward} alt="mobile menu indicator" />
                    </div>
                )
            })}
        </div>
    );
}
