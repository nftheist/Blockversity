import "./clever_page.css";
import Navbar from "../../components/navbar/Navbar"
import image7 from "../../assets/brilliant/brilliant5.svg";

const Clever_page=()=>{
    return(
        <div className="clever_page">
            <Navbar/>
            <div className="wall"></div>
            <div className="clever_main">
                <div className="buttons">
                    <button class="btn_nav btn-15">Connect Wallet</button>
                    <button class="btn_nav btn-15">Signup/login</button>
                </div>
            </div>
            <div className="clever_title">THE CLEVER OWLS COLLECTION</div>
                <div className="about_clever">
                    <div className="by_blockVersity">by blockVersity</div>
                    <div className="by_blockVersity_text">THE CLEVER COLLECTION IS OUR TOP TIERS ONLY 200 ITEMS<br/> AVAILABLE TO GIVE UNLOCK A 1-YEAR MEMBERSHIP.<br/> Items of this collection are the original designs and will never be duplicated
                </div>
            </div>
            <div className="clever_card_description_box">
                <img src={image7} className="clever_card_description_image"/>
                <div className="clever_card_description">
                    <div className="clever_card_description_name">Rock’n R’Owl</div>
                    <div className="clever_card_description_time">Lifetime Membership<br/>Sales ends Month, day, year at time</div>
                    <div className="clever_card_description_price">$175</div>
                    <button className="clever_card_description_buy">BUY NOW</button>
                </div>
            </div>
            <div className="About_Knowledge_Society">
                <div className="About_Knowledge_Society_title">About the Knowledge Society membership</div>
                <div className="About_Knowledge_Society_desc">Our Owls Collection takes flight, ready to unlock youraccess to our 3 membership tiers!! A total of 650 collectibles:<br/>The Smart Collection (50)<br/>The Clever Collection (200)<br/>The Brilliant Collection (400)</div>
                <div className="About_Knowledge_Society_about">Carefully crafted to empower teachers course creators and coaches with unparallelled products, services and opportunities to propel your business forward, engage your audience and foster a private community. </div>
            </div>
            <div className="details_card_above">
                <div className="About_Knowledge_Society_title">Details</div>
                <div className="About_Knowledge_Society_about">Rarity: Rare Membership details</div>
                <ul className="About_Knowledge_Society_about">
                    <li className="">1-YEAR Membership</li>
                    <li className=""> 25 free Certificates or Student Cards/month</li>
                    <li className=""> Free inscription on blockVersity Directory</li>
                    <li className="">Private community Rewards for community contribution</li>
                    <li className="">Free access to web3 educational content</li>
                    <li className="">Airdrop BVY$ token at pre-sale</li>
                    <li className="">Voting Rights</li>
                </ul>
                <div className="About_Knowledge_Society_about creator_earning">Creator earnings: 8%</div>
            </div>
                <div className="more_collection">
                    <div className="more_collection_title">More from this collection</div>
                    <div className="more_collection_set">
                        <div className="more_collection_card">
                            <img src={image7} className="more_collection_image"/>
                            <div className="more_collection_name">Rock’n R’Owl</div>
                        </div>
                        <div className="more_collection_card">
                            <img src={image7} className="more_collection_image"/>
                            <div className="more_collection_name">Rock’n R’Owl</div>
                        </div>
                        <div className="more_collection_card">
                            <img src={image7} className="more_collection_image"/>
                            <div className="more_collection_name">Rock’n R’Owl</div>
                        </div>
                        <div className="more_collection_card">
                            <img src={image7} className="more_collection_image"/>
                            <div className="more_collection_name">Rock’n R’Owl</div>
                        </div>
                    </div>
                </div>

            
            <div className="view_more">
                <button className="view_more_button">View More</button>
            </div>

        </div>
    )
}
export default Clever_page;