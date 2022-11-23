import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/pending.jpg'

const data=[
{
  id:1,
  image:IMG1,
  title: 'Personal Portfolio',
  github: 'https://github.com/atul02022001/PortFolio',
  demo: 'https://atul-prajapati.vercel.app/'
},
{
  id:2,
  image:IMG2,
  title: 'Coming Soon...',
  // github: 'https://github.com',
  // demo: 'https://dribbble.com/AP_2001'
},
{
  id:3,
  image:IMG2,
  title: 'Coming Soon...',
  // github: 'https://github.com',
  // demo: 'https://dribbble.com/AP_2001'
},
{
  id:4,
  image:IMG2,
  title: 'Coming Soon...',
  // github: 'https://github.com',
  // demo: 'https://dribbble.com/AP_2001'
},
{
  id:5,
  image:IMG2,
  title: 'Coming Soon...',
  // github: 'https://github.com',
  // demo: 'https://dribbble.com/AP_2001'
},
{
  id:6,
  image:IMG2,
  title: 'Coming Soon...',
  // github: 'https://github.com',
  // demo: 'https://dribbble.com/AP_2001'
},

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {

            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
              </article>
            )

          })
        }
      </div>
    </section>
  )
}

export default Portfolio