import Carousel from 'react-bootstrap/Carousel';
import image1 from '../Images/image-1.jpg';
import image2 from '../Images/image-2.jpg';
import image3 from '../Images/image-3.jpg';

function HomeCarousel() {
  const carouselImageStyle = {
    height: '90vh', // Set the height to 100% of the viewport height
    objectFit: 'cover', // Ensure the image covers the entire area without stretching
  };

  return (
    <Carousel style={{ height: '100vh' }}>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image1} alt="First slide" style={carouselImageStyle} />
        <Carousel.Caption>
          <h3>Agriculture Corporation Prediction</h3>
          <p>Enhancing yields through advanced analytics and predictive insights.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={image2} alt="Second slide" style={carouselImageStyle} />
        <Carousel.Caption>
          <h3>Empowering Agriculture through Data</h3>
          <p>Revolutionizing farming practices with data-driven predictions.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" style={carouselImageStyle} />
        <Carousel.Caption>
          <h3>Optimizing Crop Production</h3>
          <p>Maximizing harvests through intelligent forecasting and analysis.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
