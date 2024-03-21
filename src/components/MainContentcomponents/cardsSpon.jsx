import { SubscribeBtn } from "../SubscribeBtn";
import "./OurSponsor.css";

// eslint-disable-next-line react/prop-types
const CardsSpon =({title, p, rs, mon})=>{
    return(
        <>
        <div className="cardsItem">
              <div className="cardText">
                <h5>{title}</h5>
                <p>
                  {p}
                </p>
              </div>
              <div className="btn">
                <SubscribeBtn>SUBSCRIBE</SubscribeBtn>
                <div className="price">
                  <h6>{rs}</h6>
                  <p>{mon}</p>
                </div>
              </div>
            </div>
        
        </>
    )
}

export { CardsSpon }