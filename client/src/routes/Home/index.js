import React from "react"
import styles from "./styles.module.css"
import Carousel from "../../components/Carousel/Carousel"
import CarouselSlide from "../../components/CarouselSlide/CarouselSlide"
import Bonsai_1 from "../../assets/images/bonsai_1.jpg"
import Bonsai_2 from "../../assets/images/bonsai_2.jpg"
import Bonsai_3 from "../../assets/images/bonsai_3.jpg"
import Bonsai_4 from "../../assets/images/bonsai_4.jpg"

const Home = () => {
  return (
    <div className={styles.home}>
      <Carousel>
        <CarouselSlide image={Bonsai_1}>
          <p>Carousel</p>
        </CarouselSlide>
        <CarouselSlide image={Bonsai_2}>
          <p>Carousel</p>
        </CarouselSlide>
        <CarouselSlide image={Bonsai_3}>
          <p>Carousel</p>
        </CarouselSlide>
        <CarouselSlide image={Bonsai_4}>
          <p>Carousel</p>
        </CarouselSlide>
      </Carousel>
    </div>
  )
}

export default Home
