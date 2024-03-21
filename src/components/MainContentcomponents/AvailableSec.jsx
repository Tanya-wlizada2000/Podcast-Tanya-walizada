import { SubscribeBtn } from "../SubscribeBtn";
import { SiGooglepodcasts } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./AvailableSec.css";

const AvailableSec = () => {
  return (
    <>
     <div className="availableContianeer">
        <div className="availableItem">
            <div className="availableHaeading">
                <h5>Available now Pod of Cast App</h5>
                <p>We just launched our podcast app!</p>
            </div>

            <div className="avaBtn">
            <SubscribeBtn >DOWNLOAD NOW</SubscribeBtn>
            <p>Content also available on:</p>
            <div className="avaLinks" >
                <a href="#"><SiGooglepodcasts /></a>
                <a href="#"><FaSpotify /></a>
                <a href="#"><FaYoutube /></a>
            </div>
            </div>
            
        </div>
     </div>
    </>
  );
};

export { AvailableSec };
