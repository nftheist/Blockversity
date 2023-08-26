import Image from "next/image";
import Navbar from "../../../components/navbar/Navbar"
import image7 from "../../../assets/brilliant/brilliant1.svg";
import image8 from "../../../assets/brilliant/brilliant2.svg";
import image9 from "../../../assets/brilliant/brilliant3.svg";
import NftModelComponent from "../../../components/GetNFTModels/GetNftModels"
import {AppHeader}  from "../../../components/GoogleAuth";
const Clever=()=>{
    return(
        <div className="clever">
            <Navbar/>
            <div className="wall"></div>
            
            <div className="clever_main">
            </div>
            <div className="clever_title">THE CLEVER OWLS COLLECTION</div>
            <div className="clever_image_circle">
                <Image src={image7} className="clever_circle_image1"/>
                <Image src={image8} className="clever_circle_image2"/>
                <Image src={image9} className="clever_circle_image3"/>
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

            <div >
                <NftModelComponent setId="8e697312-0e56-404b-b9ce-d867af2389be" basePath="/app/Clever" />
            </div>
        
        </div>
    );
};

export default Clever;