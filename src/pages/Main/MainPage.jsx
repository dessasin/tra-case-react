import Left from "../../assets/Left.svg";
import Right from "../../assets/Right.svg";
import Header from "../../components/Header/Header";
import Intro from "../../components/Intro/Intro";
import Introduction from "../../components/Introduction/Introduction";
import MiniAbout from "../../components/MiniAbout/MiniAbout";
import Footer from "../../components/Footer/Footer";
import "./MainPage.scss";

function App() {
    return (
        <div id="main_page">
            <img src={Left} alt="" className="main_illustration" />
            <img src={Right} alt="" className="main_illustration" />
            <header>
                <Header />
            </header>
            <main>
                <Intro />
                <Introduction />
                <MiniAbout />
            </main>
          <Footer/>
        </div>
    );
}

export default App;
