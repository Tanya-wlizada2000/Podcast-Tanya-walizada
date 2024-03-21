import "./OurSponsor.css";

// eslint-disable-next-line react/prop-types
const DescribetionCards = ({tittle, line1, line2, line3, line4}) => {
    return(
        <>
        
              <div className="cardslist">
                <p>{tittle}</p>
                <ul>
                  <li>{line1}</li>
                  <li>{line2}</li>
                  <li>{line3}</li>
                  <li>{line4}</li>
                </ul>
              </div>
        
        </>
    )
}
export { DescribetionCards }