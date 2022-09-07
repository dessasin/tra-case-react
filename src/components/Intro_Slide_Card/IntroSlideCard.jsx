import "./IntroSlideCard.scss";
export default function ProductSlideCard(props) {
    return (
        <div className="slide_card" title={props.title}>
            <div className="slide_card_content">
                <h5>{props.title}</h5>
                <p>{props.content}</p>
            </div>
            <img src={props.img} alt="" />
        </div>
    );
}
