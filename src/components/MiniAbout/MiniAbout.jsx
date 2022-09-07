import './MiniAbout.scss'
import ContentButton from '../Content_Button/ContentButton'
import heroimg from '../../assets/heroimg.png'
export default function MiniAbout() {
  return (
    <section className='mini_about'>
        <img src={heroimg} alt="mini about image"/>
        <div className="mini_about_content">
            <p>Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo. Vestibulum sit amet ipsum vitae mauris mattis vulputate lacinia nec neque. Aenean quis consectetur nisi, ac interdum elit. </p>
            <ul>
                <li>Consequat voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit.</li>
                <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
                <li>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</li>
            </ul>
            <ContentButton title='Lorem Ipsum'/>
        </div>
    </section>
  )
}
