import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slideshow.css";

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slideShowcontianeer">
        <div className="slideShowItem">
          <div className="slideShowHeading">
            <h5>What our listeners say</h5>
            <p>Their experience throughout every platform</p>
          </div>
          <div className="slides">
            <Slider {...settings}>
              <div className="slideItem">
                <div className="slideImg">
                  <img src="cot.png" alt="cot" />
                </div>
                <div className="slideText">
                  <p>
                    Lorem ipsum dolor sit amet consectet piscing elit, sed do
                    eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
                  </p>
                  <img src="users-platform.png" alt="users-platform" />
                </div>
              </div>
              <div className="slideItem">
                <div className="slideImg">
                  <img src="cot.png" alt="cot" />
                </div>
                <div className="slideText">
                  <p>
                    Lorem ipsum dolor sit amet consectet piscing elit, sed do
                    eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
                  </p>
                  <img src="users-platform (2).png" alt="users-platform" />
                </div>
              </div>
              <div className="slideItem">
                <div className="slideImg">
                  <img src="cot.png" alt="cot" />
                </div>
                <div className="slideText">
                  <p>
                    Lorem ipsum dolor sit amet consectet piscing elit, sed do
                    eiusmod tempor incidi ut labore et dolore magna aliqua.{" "}
                  </p>
                  <img src="users-platform(3).png" alt="users-platform" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export { SlideShow };
