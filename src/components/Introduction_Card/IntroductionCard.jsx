import './IntroductionCard.scss'
export default function IntroductionCard(props) {
  return (
    <div className="intro_card">
        <div className="intro_card_top">
        <img src={props.img} alt={props.imgAlt} />
        <h6>{props.title}</h6>
        </div>
        <p>{props.content}</p>
    </div>
  )
}
