import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import logo from "../assets/logo.png";
import Google_Podcast from "../assets/Google_Podcast.png";
import Spotify from "../assets/Spotify.png";
import Youtube from "../assets/Youtube.png";
import app_store from "../assets/app_store.png";
import google_play from "../assets/google_play.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContianeer">
        <div className="footerLinksIcons">
          <div className="footerItems">
            <ul>
              <li
                style={{
                  display: "flex",
                  alignItems: "end",
                  gap: "20px",
                }}
              >
                <img src={logo} alt="logo" />
                <p>©2021.</p>
              </li>
              <li>
                <p style={{padding:"20px 0", width:"200px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <a href="https://twitter.com/?lang=en">
                <FaTwitter size={24} />
                </a>
                <a href="https://www.instagram.com/?lang=en">
                <AiFillInstagram size={24}/>
                </a>
                <a href="https://www.tiktok.com/explore?lang=en">
                  <FaTiktok size={24} />
                </a>
              </li>
            </ul>
          </div>
          
          <div className="footerItems">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Features</a></li>
            </ul>
          </div>

          <div className="footerItems">
            <ul>
                <li><a href="#">Episodes</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footerItems">
           <ul>
            <li><p>Listen to episodes on your fav platform:</p></li>
            <li className="googlePodcost" style={{display:"flex", justifyContent:"space-between"}}>
               <a href="https://podcasts.google.com/"><img src={Google_Podcast} alt="Google_Podcast" /></a> 
                <a href="https://open.spotify.com/"><img src={Spotify} alt="Spotify" /></a>
                <a href="https://www.youtube.com/"><img src={Youtube} alt="Youtube" /></a>
            </li>
            <li>
                <p>App available on:</p>
            </li>
            <li><a href="https://www.apple.com/app-store/"><img src={app_store} alt="app_store" /></a><a href="https://play.google.com/store/games?hl=en&gl=US&pli=1"><img src={google_play} alt="google_play" /></a></li>
           </ul>
          </div>
        </div>
        <div className="termsPrivacy">
            <ul>
                <li><p style={{color:"#4D4D4D", fontSize:"14px",fontWeight:"500px", fontFamily:"Montserrat Alternates"}}>©2022. All Rights Reserved. <span style={{color:"#CD4631"}}>Pod of Cast</span> </p></li>
                <li><a href="#" style={{color:"#4D4D4D", fontSize:"14px",fontWeight:"500px", fontFamily:"Montserrat Alternates"}}>Terms . Privacy</a></li>
            </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
