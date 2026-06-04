import Carousel from 'react-bootstrap/Carousel';
import { bannerData } from '../data/bannerData';

function MyCarousel() {
  return (
    <Carousel>
      {bannerData.map((banner) => (
        <Carousel.Item key={banner.id}>
          
          <img
            className="d-block w-100"
            src={banner.imageSrc}
            alt={banner.title}
            style={{
              height: "500px",
              objectFit: "cover"
            }}
          />

          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.description}</p>
          </Carousel.Caption>

        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;