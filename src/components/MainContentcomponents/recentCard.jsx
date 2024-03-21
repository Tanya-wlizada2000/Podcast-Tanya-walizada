/* eslint-disable react/prop-types */
import "./Recent.css";

const RecentCards = ({ 
 image,
  alt,
  eps,
  title,
  content,
  btnone,
  bnttwo,
  comimg,
}) => {
  return (
    <>
      <div className="recentCardsItem">
        <div className="cardsimageBtn">
          <img src={image} alt={alt} />
          <div className="cardsText">
            <h5>{eps}</h5>
            <h5
              style={{
                fontSize: "22px",
              }}
            >
              {title}
            </h5>
            <p>{content}</p>
          </div>

        </div>

        
        <div className="cardsBtn">
            <div className="recentBtns">
              <button>{btnone}</button>
              <button
                style={{
                  marginLeft: "20px ",
                }}
              >
                {bnttwo}
              </button>
            </div>
            <div className="comments">
              <img src={comimg} alt="hostedby" />
            </div>
          </div>
      </div>
    </>
  );
};

export { RecentCards };
