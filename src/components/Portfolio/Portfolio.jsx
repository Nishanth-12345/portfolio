import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import RealEstate from '../../img/real-estate-app.png';
import RealEstatePD from '../../img/real-estate-pd.png';
import Ecommerce from "../../img/ecommerce.png";
import SMFeed from "../../img/social-media-feed.png";
import SMPage from "../../img/social-media-google-auth.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={RealEstate} alt="real estate" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={RealEstatePD} alt="product list" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SMFeed} alt="social media feed" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={SMPage} alt="social media page" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="ecommerce" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
