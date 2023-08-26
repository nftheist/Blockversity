import Image from "next/image";
import Navbar from "../../../components/navbar/Navbar"
import image7 from "../../../assets/brilliant/brilliant1.svg";
import image8 from "../../../assets/brilliant/brilliant2.svg";
import image9 from "../../../assets/brilliant/brilliant3.svg";
import image10 from "../../../assets/brilliant/brilliant4.svg";
import NftModelComponent from "../../../components/GetNFTModels/GetNftModels"
const Smart=()=>{
    return(
        <div className="smart">
            <Navbar/>
            <div className="wall"></div>
            <div className="smart_main">
            </div>
            <div className="smart_title">THE SMART OWLS COLLECTION</div>
            <div className="smart_image_circle">
                <Image src={image7} className="smart_circle_image1"></Image>
                <Image src={image8} className="smart_circle_image2"></Image>
                <Image src={image9} className="smart_circle_image3"></Image>
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

            <div >
        
                <NftModelComponent setId="07ce9e2d-c821-4462-872d-c09b6cc66d06" basePath="/app/Smart"/>

            </div>
        
        </div>
    );
};

export default Smart;