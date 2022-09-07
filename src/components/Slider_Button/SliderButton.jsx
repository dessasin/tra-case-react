import './SliderButton.scss'
export default function SliderButton(props) {
    return (
        <button
            className={`slide_button ${
                props.primary ? "slide_button-active" : ""
            }`}
        >
            {props.title}
        </button>
    );
}
