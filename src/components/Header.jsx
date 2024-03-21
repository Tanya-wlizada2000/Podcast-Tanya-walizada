import Google_Podcast from "../assets/Google_Podcast.png";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import logo from "../assets/logo.png";
import "./Header.css";
import { SubscribeBtn } from "./SubscribeBtn";
import { HeaderSlideShow } from "./headerSlideShow";

const Header = () => {
  return (
    <header>
      {/* header contianeer */}
      <div className="contianeer">
        {/* navbar part */}
        <nav className="navBar">
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <a href="#">Episodes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
          <div className="navBarbtn">
            <button>RECENT EPISODES</button>
            <SubscribeBtn >SUBSCRIBE</SubscribeBtn>
          </div>
        </nav>
           {/* bannar part */}
        <div className="bannerHomePage">
          <div className="bannerTextBtn">
            <h1>Your Daily</h1>
            <h2 style={{color:"#CD4631"}}>Podcast</h2>
            <p style={{
                width:"300px", 
                margin:"0 auto",
                padding: "40px 0",
                fontFamily:"Montserrat Alternates", 
                color:"#4D4D4D",
                fontSize:"16px",
                fontWeight:"500"}}>
              We cover all kinds of categories and a weekly special guest.
            </p>
            <SubscribeBtn >SUBSCRIBE</SubscribeBtn>
          </div>
        </div>
         <div className="HeaderSlideShow">
            <HeaderSlideShow />
         </div>
       

        {/* bannar links */}

        <div className="bannerLinks">
            <ul>
                <li><p style={{
                    fontFamily:"Montserrat Alternates", 
                    color:"#000",
                    fontSize:"20px",
                    fontWeight:"700"
                }}>Supported by:</p></li>
                <li><a href="https://open.spotify.com/"><img src={Spotify} alt="Spotify" /></a></li>
                <li><a href="https://podcasts.google.com/"><img src={Google_Podcast} alt="Google_Podcast" /></a></li>
                <li><a href="https://www.youtube.com/"><img src={Youtube} alt="Youtube" /></a></li>
            </ul>

        </div>

      </div>
    </header>
  );
};

export { Header };
