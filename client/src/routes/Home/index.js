import React from "react"
import styles from "./styles.module.css"
import Carousel from "../../components/Carousel/Carousel"
import CarouselSlide from "../../components/CarouselSlide/CarouselSlide"

const Home = () => {
  return (
    <div className={styles.home}>
      <Carousel>
        <CarouselSlide image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80">
          <p>Carousel</p>
        </CarouselSlide>
        <CarouselSlide image="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
          <p>Carousel</p>
        </CarouselSlide>
        <CarouselSlide image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80">
          <p>Carousel</p>
        </CarouselSlide>
        <CarouselSlide image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2551&q=80">
          <p>Carousel</p>
        </CarouselSlide>
      </Carousel>
    </div>
  )
}

export default Home
