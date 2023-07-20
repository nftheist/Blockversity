import "./smart.css";
import Navbar from "../../components/navbar/Navbar"
import image7 from "../../assets/brilliant/brilliant1.svg";
import image8 from "../../assets/brilliant/brilliant2.svg";
import image9 from "../../assets/brilliant/brilliant3.svg";
import image10 from "../../assets/brilliant/brilliant4.svg";

const Smart=()=>{
    return(
        <div className="smart">
            <Navbar/>
            <div className="wall"></div>
            <div className="smart_main">
                <div className="buttons">
                    <button class="btn_nav btn-15">Connect Wallet</button>
                    <button class="btn_nav btn-15">Signup/login</button>
                </div>
            </div>
            <div className="smart_title">THE SMART OWLS COLLECTION</div>
            <div className="smart_image_circle">
                <img src={image7} className="smart_circle_image1"></img>
                <img src={image8} className="smart_circle_image2"></img>
                <img src={image9} className="smart_circle_image3"></img>
            </div>
            <div className="smart_text"><div>
                <div className="smart_text_p">Each Owl of this collection unlocks access to a 3-months membership and related benefits.</div>
                <div className="smart_text_p">These assets are the original copy of our owls collection.</div>
                <div className="smart_text_p">This is blockVersity pre-launch offer. Don’t miss it, it will not come back!</div>
                <div className="smart_text_p">Buy it, hold it, sell it or give it away to someone else, you own it!</div></div>
            </div>
            <div className="smart_membership_box"><div className="smart_membership_box_inside">
                <div className="smart_membership_text">LIFETIME MEMBERSHIP<br/>only 200 available</div>
                <div className="smart_membership_price_box">
                    <div className="smart_membership_price">$35 (value of $105)</div>
                </div>
                </div>
            </div>
            <div className="smart_interested_text">Interested?<br/>Add your name to the VIP list to get notified when the sale starts
            <button className="interseted_button">Add me to the VIP list</button>
            </div>

            <div className="smart_card_space">
        
    
                <div className="smart_card">
                    <img src={image10} className="smart_card_photo"></img>
                    <div  className="smart_card_text">OWL RUNNER</div>
                    <button  className="smart_card_buy">BUY NOW</button>
                </div>
                <div className="smart_card">
                    <img src={image10} className="smart_card_photo"></img>
                    <div  className="smart_card_text">OWL RUNNER</div>
                    <button  className="smart_card_buy">BUY NOW</button>
                </div>
                <div className="smart_card">
                    <img src={image10} className="smart_card_photo"></img>
                    <div  className="smart_card_text">OWL RUNNER</div>
                    <button  className="smart_card_buy">BUY NOW</button>
                </div>
                <div className="smart_card">
                    <img src={image10} className="smart_card_photo"></img>
                    <div  className="smart_card_text">OWL RUNNER</div>
                    <button  className="smart_card_buy">BUY NOW</button>
                </div>
                <div className="smart_card">
                    <img src={image10} className="smart_card_photo"></img>
                    <div  className="smart_card_text">OWL RUNNER</div>
                    <button  className="smart_card_buy">BUY NOW</button>
                </div>
                <div className="smart_card">
                    <img src={image10} className="smart_card_photo"></img>
                    <div  className="smart_card_text">OWL RUNNER</div>
                    <button  className="smart_card_buy">BUY NOW</button>
                </div>


            </div>
        
        </div>
    );
};

export default Smart;