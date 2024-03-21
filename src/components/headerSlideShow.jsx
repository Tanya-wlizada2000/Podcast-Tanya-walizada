import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SiGooglepodcasts } from "react-icons/si";
import { LiaSpotify } from "react-icons/lia";
import { RiYoutubeLine } from "react-icons/ri";
import "./headerSlideShow.css";

const HeaderSlideShow = () =>{
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="headSlideItem">
            <div className="icons">
                 <SiGooglepodcasts color="#fff" size="30" />
                 <LiaSpotify color="#fff" size="30"/>
                 <RiYoutubeLine color="#fff" size="30" />
                 </div>
                 <h4>Self–confidence</h4>
            </div>
            
            <div className="headSlideItem2">
            <div className="icons">
                 <a href="https://podcasts.google.com/"><SiGooglepodcasts color="#fff" size="30" /></a>
                 <a href="https://open.spotify.com/"><LiaSpotify color="#fff" size="30"/></a>
                 <a href="https://www.youtube.com/"><RiYoutubeLine color="#fff" size="30" /></a>
                 </div>
                 <h4>Self–confidence</h4>
            </div>
            <div className="headSlideItem3">
            <div className="icons">
                 <SiGooglepodcasts color="#fff" size="30" />
                 <LiaSpotify color="#fff" size="30"/>
                 <RiYoutubeLine color="#fff" size="30" />
                 </div>
                 <h4>Self–confidence</h4>
            </div>
            <div className="headSlideItem4">
            <div className="icons">
                 <SiGooglepodcasts color="#fff" size="30" />
                 <LiaSpotify color="#fff" size="30"/>
                 <RiYoutubeLine color="#fff" size="30" />
                 </div>
                 <h4>Self–confidence</h4>
            </div>
            <div className="headSlideItem5">
            <div className="icons">
                 <SiGooglepodcasts color="#fff" size="30" />
                 <LiaSpotify color="#fff" size="30"/>
                 <RiYoutubeLine color="#fff" size="30" />
                 </div>
                 <h4>Self–confidence</h4>
            </div>
          </Slider>
        </div>
      );
    
}

export { HeaderSlideShow }