
import { SubscribeBtn } from "../SubscribeBtn";
import "./Recent.css";
import { RecentCards } from "./recentCard";

const Recent = () => {
  return (
    <>
      <div className="recentContianeer">
        <div className="recentItem">
          <div className="recentHeading">
            <h4>Recent Episodes</h4>
            <p>Available on your favorite platform</p>
          </div>
              
              {/* frist cards of recent part */}
          <div className="recetCards">
        
          <RecentCards 
              image="chairs.png"
              alt="{chairs}"
              eps="Eps. 5"
              title="Pandemic Becoming Endemic  "
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
              btnone="covid-19"
              bnttwo="health"
              comimg="hostedby.png"
              />
            <RecentCards 
              image="rotatedcar.png" 
              alt="rotatedcar"
              eps="Eps. 6"
              title="Tesla Autopilot Controversy"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
              btnone="automation"
              bnttwo="tech"
              comimg="hostedby.png"
              />
          </div>

          {/* 2 cards of recent part */}
          <div className="recetCards">
          <RecentCards 
              image="grouppic.png" 
              alt="grouppic"
              eps="Eps. 4"
              title="Women Rights? Is it alright?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
              btnone="women’s rights"
              bnttwo="health"
              comimg="hostedby.png"
              />

            <RecentCards 
              image="rotatedcar.png" 
              alt="rotatedcar.png"
              eps="Eps. 3"
              title="How to Deal with Self–Confidence"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
              btnone="self-esteem"
              bnttwo="health"
              comimg="hostedby.png"
              /> 
          </div>

              {/* 3 cards of recent part */}
          <div className="recetCards">
          <RecentCards 
              image="manpic.png" 
              alt="manpic"
              eps="Eps. 2"
              title="Type of Social Classes of People"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
              btnone="social class"
              bnttwo="wealth"
              comimg="hostedby.png"
              />
           
           <RecentCards 
              image="girlpic.png" 
              alt="girlpic"
              eps="Eps. 1"
              title="Are you a Perplexed Mind Person?"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur ac ultrices odio."
              btnone="mind-behaviour"
              bnttwo="health"
              comimg="hostedby.png"
              />
          </div>

          <SubscribeBtn>BROWSE ALL EPISODES</SubscribeBtn>
        </div>
      </div>
    </>
  );
};

export { Recent };
