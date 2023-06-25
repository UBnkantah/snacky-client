import {FaTwitter, FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa"
import EthanImg from "../../assets/ethan-hunt.png"
import { SnackyChefData } from "../../utils/Data";

const SnackyChef = () => {
  return (
    <div>
      <h2 className="text-danger font-bold text-center">Snacky's Talent Chefs</h2>
      <div className="snack-chef-main">
        {SnackyChefData.map((item) => {
          return(
            <div className='snack-chef' key={item.id}>
              <img src={item.image} alt="" className="w-100 rounded" />
              <h4 className="text-center">{item.name}</h4>
              <p className="text-center">{item.title}</p>
              <p className="text-center title">
                Ethant began his culinary journey at a young age, working with his Mom
                to perfect the art of crispy rice.
              </p>
              <div className="social">
                <div><FaTwitter size={15} /></div>
                <div><FaFacebook size={15} /></div>
                <div><FaInstagram size={15} /></div>
                <div><FaYoutube size={15}/></div>
              </div>
            </div>
          )
        })}
        
      </div>
    </div>
    
    
  );
}

export default SnackyChef
