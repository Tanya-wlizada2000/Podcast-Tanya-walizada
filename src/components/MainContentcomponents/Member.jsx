import { SubscribeBtn } from "../SubscribeBtn";
import "./Member.css";
const Member = () => {
  return (
    <>
      <div className="memberContianeer">
        <div className="memberitem">
          <div className="memberheading">
            <h3>Membership benefits</h3>
            <p>Become our sponsor and get all benefits</p>
          </div>

          <div className="memberCards">
            <div className="cards">
              <img src="Scribble.png" alt="Scribble" />
              <h4>Topic by Request</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aperiam magnam pariatur obcaecati quod.
              </p>
            </div>
            <div className="cards">
              <img src="Shiningstars.png" alt="Shiningstars" />
              <h4>Exclusive Content</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aperiam magnam pariatur obcaecati quod.
              </p>
            </div>
            <div className="cards">
              <img src="Face1.png" alt="Face" />
              <h4>Join the Community</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aperiam magnam pariatur obcaecati quod.
              </p>
            </div>
          </div>

          <div className="memberCards">
            <div className="cards">
              <img src="snake.png" alt="snake" />
              <h4>Livestreaming Access</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aperiam magnam pariatur obcaecati quod.
              </p>
            </div>
            <div className="cards">
              <img src="fire.png" alt="fire" />
              <h4>Exclusive Episodes & Merch</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aperiam magnam pariatur obcaecati quod.
              </p>
            </div>
            <div className="cards">
              <img src="spark.png" alt="spark" />
              <h4>And much more!</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus aperiam magnam pariatur obcaecati quod.
              </p>
            </div>
          </div>
          <SubscribeBtn >SEE PRICING</SubscribeBtn>
        </div>
      </div>
    </>
  );
};

export { Member };
