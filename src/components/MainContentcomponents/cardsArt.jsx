import "./Article.css"

// eslint-disable-next-line react/prop-types
const CardsArt = ({imgart, about, tittle, content}) => {
   return(
     <>
       <div className="artCardImg">
                <img src={imgart} alt="micimg" />
              </div>
              <div className="artCardText">
                <span>{about}</span>
                <h5>{tittle}</h5>
                <p>
                 {content}
                </p>
              </div>
     </>
   )
}

export { CardsArt }