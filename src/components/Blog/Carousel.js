import Carousel from 'react-bootstrap/Carousel';
import { Image } from 'react-bootstrap';
import notion from "../images/notion.png"
import dev from "../images/dev.png";
import medium from "../images/medium.png"
function Interval() {
    return (
        <Carousel className='my-4'>

            <Carousel.Item interval={3000} width="80vw">
                <a
                    href=" https://hilarious-meeting-347.notion.site/"
                    target="_blank"
                    className="encloser"
                >
                    <Image src={notion} alt="First slide" fluid />
                </a>
                <Carousel.Caption >

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <a
                    href=" https://dev.to/aishanipach/comment/1f0p2"
                    target="_blank"
                    className="encloser"
                >
                    <Image src={dev} alt="Second slide" fluid />
                </a>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <a
                    href=" https://medium.com/@aishani-pachauri/how-to-get-started-arfoundation-in-unity-f0a050b3585f"
                    target="_blank"
                    className="encloser"
                >
                    <Image src={medium} alt="Third slide" fluid />
                </a>
                {/* <Carousel.Caption>
                     <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p> 
                </Carousel.Caption > */}
            </Carousel.Item>
        </Carousel>
    );
}

export default Interval;