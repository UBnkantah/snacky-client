import "../../styles/Global.styles.css"
import { HomeFtData } from "../../utils/Data"


const HomeFtCard = ({card}) => {
    const {name, text, image} = card
    return (
        // <div className='homeftcard-container'>
        <div className='col-lg-3 col-md-6 col-sm-12 homeftcard-container'>
            <img src={image} alt="" />
            <div>
                <h5>{name}</h5>
                <p>{text}</p>
            </div>
        </div>
    )
}

const HomeFt = () => {
  return (
    <div className="container">
      <div className='row m-3 rounded homeftmain'>
        {HomeFtData.map((item) => {
            return <HomeFtCard  key={item} card={item} />
        })}
        
      </div>
    </div>
  )
}

export default HomeFt
