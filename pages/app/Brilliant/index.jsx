import Image from "next/image";
import Navbar from "../../../components/navbar/Navbar"
import image7 from "../../../assets/brilliant/brilliant1.svg";
import image8 from "../../../assets/brilliant/brilliant2.svg";
import image9 from "../../../assets/brilliant/brilliant3.svg";
// import image10 from "../../assets/brilliant/brilliant4.svg";
// import Authenticate from "../../../components/Wallet/Authenticate";
import NftModelComponent from "../../../components/GetNFTModels/GetNftModels"


const Brilliant=()=>{
    return(
        <div className="brilliant">
            <div className="wall"></div>
            <Navbar/>
            <div className="brilliant_main">
            </div>
            <div className="brilliant_title">THE BRILLIANT OWLS COLLECTION</div>
            <div className="brilliant_image_circle">
                <Image src={image7} className="brilliant_circle_image1"></Image>
                <Image src={image8} className="brilliant_circle_image2"></Image>
                <Image src={image9} className="brilliant_circle_image3"></Image>
            </div>
            <div className="brilliant_text"><div>
                <div className="brilliant_text_p">Each Owl of this collection unlocks access to a lifetime- membership and related benefits.</div>
                <div className="brilliant_text_p">These assets are the original copy of our owls collection.</div>
                <div className="brilliant_text_p">This is blockVersity pre-launch offer. Don’t miss it, it will not come back!</div>
                <div className="brilliant_text_p">Buy it, hold it, sell it or give it away to someone else, you own it!</div></div>
            </div>
            <div className="brilliant_membership_box"><div className="brilliant_membership_box_inside">
                <div className="brilliant_membership_text">LIFETIME MEMBERSHIP<br/>only 50 available</div>
                <div className="brilliant_membership_price_box">
                    <div className="brilliant_membership_price">$175 (value of ~  $8K)</div>
                </div>
                </div>
            </div>
            <div className="brilliant_interested_text">Interested?<br/>Add your name to the VIP list to get notified when the sale starts
            <button className="interseted_button">Add me to the VIP list</button>
            </div>

            <div>
                    <NftModelComponent setId="78149802-4581-4cff-b611-541123bba3ed" basePath="/app/Brilliant" />
            </div>
        
        </div>
    );
};

export default Brilliant;