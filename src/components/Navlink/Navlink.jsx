import './Navlink.scss'
export default function Navlink(props) {
  return (
    <>
        <a className="navlink" href={props.link}>{props.title}</a>
    </>
  )
}
