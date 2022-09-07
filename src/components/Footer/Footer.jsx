import "./Footer.scss";
import Navbar from "../Navbar/Navbar";
import seperator from '../../assets/footer_seperator.svg'
export default function Footer() {
    const footerNavLinks = [
        {
            title: "Lorem",
            link: "#",
        },
        {
            title: "Ipsum",
            link: "#",
        },
        {
            title: "Dolor",
            link: "#",
        },
    ];
    return (
        <section className="footer">
            <img src={seperator} className="footer_seperator" alt="seperator"></img>

            <div className="footer_content">
                <div className="footer_content_left">
                    <nav>
                        <Navbar navLinks={footerNavLinks} />
                    </nav>
                    <p className="copyright">© 2022 Parturient Lorem</p>
                </div>
                <div className="footer_content_right">
                    <p>
                        <strong>Fermentum Venenatis</strong>
                        <br />
                        Parturient Venenatis Etiam Frilingilla / Nullam
                    </p>

                    <a href="mailto:lorem@example.com.tr" className="email">
                        lorem@example.com.tr
                    </a>
                </div>
            </div>
        </section>
    );
}
