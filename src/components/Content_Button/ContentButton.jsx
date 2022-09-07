import './ContentButton.scss'
export default function ContentButton(props) {
  return (
    <>
        <button className="content_button">{props.title}</button>
    </>
  )
}
