import PicOne from '../images/one.png'
import PicTwo from '../images/two.png'
import PicThree from '../images/three.png'
import PicFour from '../images/four.png'

function Carousel(): JSX.Element {
    return(
        <div>
            <img src={PicOne} alt="quote" />
            <img src={PicTwo} alt="quote" />
            <img src={PicThree} alt="quote" />
            <img src={PicFour} alt="quote" />
        </div>
    )
}

export default Carousel;