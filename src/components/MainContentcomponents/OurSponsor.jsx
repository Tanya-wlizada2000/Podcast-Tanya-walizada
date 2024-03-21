import "./OurSponsor.css";
import { CardsSpon } from "./cardsSpon";
import { DescribetionCards } from "./describeptionCards";


const OurSponsor = () => {
  return (
    <>
      <div className="ourSponsorContianeer">
        <div className="sponsorItem">
          <div className="sponsorHeading">
            <h4>Become our sponsor</h4>
            <p>Get exclusive episodes, merch and more</p>
          </div>
          <div className="sponsorCards">
            <CardsSpon
              title="Member"
              p=" Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
            tempor."
              rs="$9.99"
              mon="/Month"
            />

            <CardsSpon
              title="Family"
              p=" Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
            tempor."
              rs="$14.99"
              mon="/Month"
              style={{
                backgroundColor: "#F7EDE8",
                borderColor: "#CD4631",
              }}
            />

            <CardsSpon
              title="Official"
              p=" Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
            tempor."
              rs="$29.99"
              mon="/Month"
            />
          </div>

          <div className="sponsorCards">
            <div className="cardsItem">
              <DescribetionCards
                tittle="What’s included:"
                line1="• Exclusive Content"
                line2="• 5% Discount on Merch"
                line3="• Join the Community"
                line4="• Livestreaming Access"
              />
            </div>

            <div
              className="cardsItem"
              style={{
                backgroundColor: "#F7EDE8",
                borderColor: "#CD4631",
              }}
            >
              <DescribetionCards
                tittle="What’s included:"
                line1="• Exclusive Content"
                line2="• 5% Discount on Merch"
                line3="• Join the Community"
                line4="• Livestreaming Access"
              />
            </div>

            <div className="cardsItem">
              <DescribetionCards
                tittle="What’s included:"
                line1="• Exclusive Content"
                line2="• 5% Discount on Merch"
                line3="• Join the Community"
                line4="• Livestreaming Access"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export { OurSponsor };
