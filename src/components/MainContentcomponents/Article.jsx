import { SubscribeBtn } from "../SubscribeBtn";
import "./Article.css";
import { CardsArt } from "./cardsArt";

const Article = () => {
  return (
    <>
      <div className="articleContianeer">
        <div className="articleItem">
          <div className="articleHeading">
            <h4>Article and News</h4>
            <p>News, tips, tricks and more</p>
          </div>

          <div className="articleCards">
            <div className="artCardsItem">
              <CardsArt
              imgart="micimg.png"
              about="PODCAST"
              tittle="Setup own podcast"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minimvel iam, quis nostrud exercitation ullamco
              laboris..."
              />

              <div className="artCardBtn">
                <button>business</button>
                <button
                  style={{
                    marginLeft: "20px ",
                  }}
                >
                 startup
                </button>
              </div>
            </div>

            <div className="artCardsItem">
            <CardsArt
              imgart="painting.png"
              about="TIPS & TRICK"
              tittle="Doodle artwork 101"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minimvel iam, quis nostrud exercitation ullamco
              laboris..."
              />
              <div className="artCardBtn">
                <button>art</button>
                <button  style={{
                    marginLeft: "10px ",
                  }}>creative</button>
                <button
                  style={{
                    marginLeft: "10px ",
                  }}
                >
                 tips and trick
                </button>
              </div>
            </div>
          </div>

          <SubscribeBtn >BROWSE ALL</SubscribeBtn>
        </div>
      </div>
    </>
  );
};

export { Article };
