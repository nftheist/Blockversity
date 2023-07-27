import "./clever.css";
import Navbar from "../../components/navbar/Navbar"
import image7 from "../../assets/brilliant/brilliant1.svg";
import image8 from "../../assets/brilliant/brilliant2.svg";
import image9 from "../../assets/brilliant/brilliant3.svg";
import image10 from "../../assets/brilliant/brilliant4.svg";
import Authenticate from "../../components/Wallet/Authenticate";
const Clever=()=>{
    return(
        <div className="clever">
            <Navbar/>
            <div className="wall"></div>
            <div className="clever_main">
                <Authenticate />
            </div>
            <div className="clever_title">THE CLEVER OWLS COLLECTION</div>
            <div className="clever_image_circle">
                <img src={image7} className="clever_circle_image1"></img>
                <img src={image8} className="clever_circle_image2"></img>
                <img src={image9} className="clever_circle_image3"></img>
            </div>
            <div className="clever_text"><div>
                <div className="clever_text_p">Each Owl of this collection unlocks access to a 1-year membership and related benefits.</div>
                <div className="clever_text_p">These assets are the original copy of our owls collection.</div>
                <div className="clever_text_p">This is blockVersity pre-launch offer. Don’t miss it, it will not come back!</div>
                <div className="clever_text_p">Buy it, hold it, sell it or give it away to someone else, you own it!</div></div>
            </div>
            <div className="clever_membership_box"><div className="clever_membership_box_inside">
                <div className="clever_membership_text">LIFETIME MEMBERSHIP<br/>only 200 available</div>
                <div className="clever_membership_price_box">
                    <div className="clever_membership_price">$65 (value of $540)</div>
                </div>
                </div>
            </div>
            <div className="clever_interested_text">Interested?<br/>Add your name to the VIP list to get notified when the sale starts
            <button className="interseted_button">Add me to the VIP list</button>
            </div>

            <div className="clever_card_space">
        
    
                <div className="clever_card">
                    <img src={image10} className="clever_card_photo"></img>
                    <div  className="clever_card_text">OWL RUNNER</div>
                    <button  className="clever_card_buy">BUY NOW</button>
                </div>
                <div className="clever_card">
                    <img src={image10} className="clever_card_photo"></img>
                    <div  className="clever_card_text">OWL RUNNER</div>
                    <button  className="clever_card_buy">BUY NOW</button>
                </div>
                <div className="clever_card">
                    <img src={image10} className="clever_card_photo"></img>
                    <div  className="clever_card_text">OWL RUNNER</div>
                    <button  className="clever_card_buy">BUY NOW</button>
                </div>
                <div className="clever_card">
                    <img src={image10} className="clever_card_photo"></img>
                    <div  className="clever_card_text">OWL RUNNER</div>
                    <button  className="clever_card_buy">BUY NOW</button>
                </div>
                <div className="clever_card">
                    <img src={image10} className="clever_card_photo"></img>
                    <div  className="clever_card_text">OWL RUNNER</div>
                    <button  className="clever_card_buy">BUY NOW</button>
                </div>
                <div className="clever_card">
                    <img src={image10} className="clever_card_photo"></img>
                    <div  className="clever_card_text">OWL RUNNER</div>
                    <button  className="clever_card_buy">BUY NOW</button>
                </div>


            </div>
        
        </div>
    );
};

export default Clever;