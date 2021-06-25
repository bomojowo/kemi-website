import {Carousel} from 'react-bootstrap'
import PicOne from '../images/one.png'
import PicTwo from '../images/two.png'
import PicThree from '../images/three.png'
import PicFour from '../images/four.png'
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselPics(): JSX.Element {
    return(
        // <div>
        //     <img src={PicOne} alt="quote" />
        //     <img src={PicTwo} alt="quote" />
        //     <img src={PicThree} alt="quote" />
        //     <img src={PicFour} alt="quote" />
        // </div>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={PicOne}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={PicTwo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={"d-block w-100"}
      src={PicThree}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className={"d-block w-100"}
      src={PicFour}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselPics;