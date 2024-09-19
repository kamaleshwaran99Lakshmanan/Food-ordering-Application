import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../public/assets/image-2.jpg'; // Use forward slashes
import image2 from '../../../public/assets/image-2.jpg';

function HeroSection() {
  return (
    <div className="hero-section position-relative">
      <Carousel className='z-index-1'>
        <Carousel.Item>
          <img src={image1} alt="food image 1" className='w-100' />
          <Carousel.Caption className='position-absolute top-50 start-50 translate-middle text-center z-index-5'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt="food image 2" className='w-100' />
          <Carousel.Caption className='position-absolute top-50 start-50 translate-middle text-center z-index-5'>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50 z-index-2"></div>
    </div>
  );
}

export default HeroSection;
