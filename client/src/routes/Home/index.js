import React from "react"
import styles from "./styles.module.css"
import Carousel from "../../components/Carousel/Carousel"
import CarouselSlide from "../../components/CarouselSlide/CarouselSlide"
// Images
import Bonsai_1 from "../../assets/images/bonsai_1.jpg"
import Bonsai_2 from "../../assets/images/bonsai_2.jpg"
import Bonsai_3 from "../../assets/images/bonsai_3.jpg"
import Bonsai_4 from "../../assets/images/bonsai_4.jpg"
import ProductCard from "../../components/ProductCard/ProductCard"

const Home = () => {
  return (
    <div className={styles.home}>
      <Carousel>
        <CarouselSlide
          image={Bonsai_1}
          title="Azalea Bonsai"
          facts={[
            "grown outdoors in semi-shade",
            "need to be watered regularly during the growing phase",
            "should be fed with an inorganic fertilizer every two weeks in the spring",
          ]}
        />
        <CarouselSlide
          image={Bonsai_2}
          title="400 years old Bonsai"
          facts={[
            "gift from the imperial family of Japan in 1976 to the U.S. to celebrate the bicentennial",
            "survived the bombing of Hiroshima",
            "located at the National Arboretum",
          ]}
        />
        <CarouselSlide
          image={Bonsai_3}
          title="800 years old Bonsai"
          facts={[
            "Phoenix graft: technique of attaching young live plants to weathered wood",
            "The wild twists and turns of the deadwood has a good Japanese feel to it. The top looks as if one dragon is defeating another.",
          ]}
        />
        <CarouselSlide
          image={Bonsai_4}
          title="Stewartia, beech, boxwood"
          facts={[
            "3 different types of trees grow together in this type of bonsai called saikei",
            'a "living landscape" designed by Japanese artist Kawamoto, who introduced this style after the WWII',
          ]}
        />
      </Carousel>
      <section className={styles.home__best__sellers}>
        <p className={styles.best__sellers__title}>Best Sellers</p>
        <div className={styles.best__sellers__grid}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  )
}

export default Home
