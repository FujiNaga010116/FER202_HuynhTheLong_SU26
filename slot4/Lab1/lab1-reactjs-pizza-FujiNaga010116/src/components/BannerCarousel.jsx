import React from 'react'
import { Carousel } from 'react-bootstrap'
import { BannersData } from '../shared/ListOfBanners'

// TODO-CAROUSEL-1: Render a Carousel component from react-bootstrap
// Requirements:
//   1. Import BannersData from '../shared/ListOfBanners' (already done above)
//   2. Use BannersData.map(...) to render a <Carousel.Item> for each banner
//   3. Each Carousel.Item must contain:
//      - <img src={banner.image} ... />
//      - <Carousel.Caption> with banner.title and banner.caption
//   4. Number of .carousel-item elements must equal BannersData.length
export default function BannerCarousel() {
  return (
    <Carousel>
      {BannersData.map((banner) => (
        <Carousel.Item key={banner.id}>
          {/* Yêu cầu 3: Thẻ <img> với thuộc tính src lấy từ dữ liệu banner */}
          <img
            className="d-block w-100"
            src={banner.image}
            alt={banner.title}
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
          
          {/* Yêu cầu 3: Carousel.Caption chứa title và caption */}
          <Carousel.Caption>
            <h3>{banner.title}</h3>
            <p>{banner.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}