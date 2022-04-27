import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap';
import promo1 from '../../img/promo1.jpg';
import promo2 from '../../img/promo2.jpg';
import promo3 from '../../img/promo3.jpg';
import './Homecss.css';

function Home(props) {

    return (
<Carousel className='bgbox'>
  <Carousel.Item interval={10000}>
    <img
      className="bg"
      src={promo1}
      alt="Promo banner 1"
    />
    <Carousel.Caption>
      <h3>Lorem nonumy erat sit voluptua.</h3>
      <p>Nonumy amet justo dolor sit justo sea sea ipsum nonumy. Ut sea amet sanctus et lorem. Sed et duo aliquyam.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={5000}>
    <img
      className="bg"
      src={promo2}
      alt="Promo banner 2"
    />
    <Carousel.Caption>
      <h3>Erat sit sanctus amet dolores.</h3>
      <p>Ut et diam sanctus ut ut accusam lorem, diam amet voluptua labore et, eos justo nonumy amet clita est eirmod.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="bg"
      src={promo3}
      alt="Promo banner 3"
    />
    <Carousel.Caption>
      <h3>Est et vero diam et.</h3>
      <p>Kasd nonumy stet accusam ut lorem, no diam et justo clita aliquyam sanctus erat dolores. Justo accusam amet sit accusam.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    )
}

export default Home;