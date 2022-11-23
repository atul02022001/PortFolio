import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import { Pagination , Autoplay} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data = [
  {
    avatar: AVTR1,
    name: 'Sandesh Bogati',
    review:'Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.'
  },
  {
    avatar: AVTR1,
    name: 'Vaibhav Gothi',
    review:'Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.'
  },
  {
    avatar: AVTR1,
    name: 'Dipesh Oza',
    review:'Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.'
  },
  {
    avatar: AVTR1,
    name: 'Kamlesh Lodha',
    review:'Excellent, working with web designer express was great.  Thanks to their knowledge and determination our website looks great and functions really good.  I am recommend anyone that is looking for a custom website to give them a call and speak to Gus, he will guide you to the right direction.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[Pagination,Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            >
        {
          data.map(({avatar, name, review}, index) => {
            return(
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials