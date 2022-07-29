import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination , Autoplay} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


const data = [
  {
    avatar: AVTR1,
    name: 'Sandesh Bogati',
    review:'aaaaaaaaaaaaaaa aaaaaaaaa aaaaaaaa aaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaa'
  },
  {
    avatar: AVTR2,
    name: 'Vaibhav Gothi',
    review:'bbbbbbbbbbbbbb bbbbbbbbbbbbb bbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbb bbbbbbbbbb bbbbbbbbbbbb'
  },
  {
    avatar: AVTR3,
    name: 'Dipesh Oza',
    review:'ccccccc ccccccccccccc ccccccccccc ccccccccccc ccccccccccc cccccccccc ccccccc cccccc ccc cccccccccc cccccccccc ccccccccc'
  },
  {
    avatar: AVTR4,
    name: 'Kamlesh Lodha',
    review:'ddddddd ddddddddddddd dddddddddddd dddddddd dddddddddddd ddddddd ddddddddddd dddddddddd ddddddddddd dddddddddddd'
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