import './Navbar.scss'
import Navlink from "../Navlink/Navlink";
export default function Navbar(props) {
    return (
        <div className="navbar">
            {props.navLinks.map((x,index) => {
               return <Navlink key={index} title={x.title} link={x.link} />;
            })}
        </div>
    );
}
