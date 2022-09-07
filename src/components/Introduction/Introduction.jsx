import IntroductionCard from "../Introduction_Card/IntroductionCard"
import './Introduction.scss'

import reading from '../../assets/reading-side.svg'
import plant from '../../assets/plant.svg'
import petting from '../../assets/petting.svg'
import sitting from '../../assets/sitting-reading.svg'

export default function Introduction() {
    const introductionCards = [
        {
            title:'Consectetur Adipiscing',
            content:'In a laoreet purus. Integer turpis quam, laoreet id orci nec.',
            img:reading,
            imgAlt:'Consectetur Adipiscing',
        },
        {
            title:'Suspendisse Bibendum',
            content:'Ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget.',
            img:petting,
            imgAlt:'Suspendisse Bibendum',
        },
        {
            title:'Efficitur Scelerisque',
            content:'Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. ',
            img:plant,
            imgAlt:'Efficitur Scelerisque',
        },
        {
            title:'Fringilla Mauris',
            content:'Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam.',
            img:sitting,
            imgAlt:'Fringilla Mauris',
        },
    ]
  return (
    <section className="introduction">
        <div className="introduction_top">
        <h1>What's on your mind?</h1>
        <p>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue.</p>
        </div>
        <div className="introduction_bottom">
            {
                introductionCards.map((x,index)=>{
                    return <IntroductionCard
                    key={index}
                    title={x.title}
                    content={x.content}
                    img={x.img}
                    imgAlt={x.imgAlt} />
                })
            }
        </div>
        </section>
  )
}
