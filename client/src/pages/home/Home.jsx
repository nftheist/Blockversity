import "./home.css";
import Navbar from "../../components/navbar/Navbar"
import image1 from "../../assets/smart1.svg";
import image2 from "../../assets/smart2.svg";
import image3 from "../../assets/smart3.svg";
import image4 from "../../assets/clever1.svg";
import image5 from "../../assets/clever2.svg";
import image6 from "../../assets/clever3.svg";
import image7 from "../../assets/brilliant1.svg";
import image8 from "../../assets/brilliant2.svg";
import image9 from "../../assets/brilliant3.svg";
//import { Dropdown } from 'rsuite';
import {ButtonToolbar} from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import * as React from 'react';

const Home =()=>{
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const [open11, setOpen11] = React.useState(false);
    const [open12, setOpen12] = React.useState(false);
    const [open13, setOpen13] = React.useState(false);
    const [open14, setOpen14] = React.useState(false);
    const [open15, setOpen15] = React.useState(false);
    const [open16, setOpen16] = React.useState(false);
    const [open17, setOpen17] = React.useState(false);

    const [open21, setOpen21] = React.useState(false);
    const [open22, setOpen22] = React.useState(false);
    const [open23, setOpen23] = React.useState(false);
    const [open24, setOpen24] = React.useState(false);
    const [open25, setOpen25] = React.useState(false);
    const [open26, setOpen26] = React.useState(false);
    const [open27, setOpen27] = React.useState(false);
    const [open28, setOpen28] = React.useState(false);


  const handleOpen = () => {
    setOpen(!open);
  };
  const handleOpen1 = () => {
    setOpen1(!open1);
  };
  const handleOpen2 = () => {
    setOpen2(!open2);
  };


  const handleOpen11= () => {
    setOpen11(!open11);
  };
  const handleOpen12 = () => {
    setOpen12(!open12);
  };
  const handleOpen13 = () => {
    setOpen13(!open13);
  };
  const handleOpen14 = () => {
    setOpen14(!open14);
  };
  const handleOpen15 = () => {
    setOpen15(!open15);
  };
  const handleOpen16 = () => {
    setOpen16(!open16);
  };
  const handleOpen17 = () => {
    setOpen17(!open17);
  };


  const handleOpen21 = () => {
    setOpen21(!open21);
  };
  const handleOpen22 = () => {
    setOpen22(!open22);
  };
  const handleOpen23 = () => {
    setOpen23(!open23);
  };
  const handleOpen24 = () => {
    setOpen24(!open24);
  };
  const handleOpen25 = () => {
    setOpen25(!open25);
  };
  const handleOpen26 = () => {
    setOpen26(!open26);
  };
  const handleOpen27 = () => {
    setOpen27(!open27);
  };
  const handleOpen28 = () => {
    setOpen28(!open28);
  };

  const handleMenuOne = () => {
    setOpen(false);
  };

  
    return(
        <div className="home">
            <Navbar/>
            <div className="wall"></div>
            <div className="buttons">
                <button className="btn_nav btn-15">Connect Wallet</button>
                <button className="btn_nav btn-15">Signup/login</button>
            </div>
            <div className="knowledge_section">
                <div className="knowledge_box">
                    <div className="knowledge_top">
                    The Kn<i>OWL</i>edge Society is a membership for educators, content creators, teachers and coaches
                    </div>

                    <div className="knowledge_down">
                        Are you ready to thrive?
                    </div>
                    
                    <div className="hash"/>
                </div>
                
            </div>
            <div className="wisdom">
                <div className="wisdom-img"><div className="wisdom-imgbox"></div></div>
                <div className="wisdom-box">
                    <div className="wisdom-boxtext">
                        <div className="wisdom-content">Hello, I am Master Wisdom.<br/> Our Owls Collection takes flight, ready to unlock your access to our 3 membership tiers!!</div>
                        <div className="wisdom-content">The Smart, The Clever and the Brilliant Collections. Each collection is carefully crafted to empower you with unparallelled products, services and opportunities to propel your business forward, engage your audience and foster a private community.</div>
                        <div className="wisdom-content">Join the VIP list to access the private sale one-time offer With just 650 owls available to the private sale, this is your chance to seize the extraordinary benefits that await.</div>
                        <div className="wisdom-content">Buy to hold, sell or give away but don’t miss out! Add your name to the VIP list to get notified when the sale starts</div>
                    </div>
                    <button className="button_vip btn-15">Add me to the VIP list</button>
                </div>
            </div>
            <div className="collection">
                <div className="collection_card card1">
                    <div className="collection_card_title">The Smart<br/> Owls Collection</div>
                    <div className="line line1"></div>
                    <div className="collection_card_circle">
                       {/*<div className="collection_card_circle1"></div>
                        <div className="collection_card_circle2"></div>
                        <div className="collection_card_circle3"></div>*/}
                        <img  src={image1} className="collection_card_circle1"/>
                        <img  src={image2} className="collection_card_circle2"/>
                        <img  src={image3} className="collection_card_circle3"/>

                    </div>
                    <div className="membership_card">
                        <div className="membership">3-MONTH MEMBERSHIP<br/>only 400 available</div>
                        <div className="value">$35 (value of $105)</div>
                    </div>
                    <div className="about_membership">
                        <div className="about_membership_pt">Each Owl of this collection unlocks access to a 3-month basic membership and related benefits.</div>
                        <div className="about_membership_pt"> Each asset is unique; a same owl will never have the same color background.</div>
                        <div className="about_membership_pt">Buying a 3-month basic membership owl means that you own it and can hold it, sell it or give it away to someone else.</div>
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen} className="collection_dropline"><div className="collection_text">Free web3 Student Cards & Certificates</div> <div className="collection_arrow"></div></button>
                        {open ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Menu 1</div>
                            </div>
                            
                            </div>
                        ) : null}    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen1} className="collection_dropline"><div className="collection_text">Free inscription on blockVersity Directory</div> <div className="collection_arrow"></div></button>
                        {open1 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Menu 1</div>
                            </div>
                            
                            </div>
                        ) : null}
                       
    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen2} className="collection_dropline"><div className="collection_text">Rewards for Community Participation</div> <div className="collection_arrow"></div></button>
                        {open2 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Menu 1</div>
                            </div>
                            
                            </div>
                        ) : null}
                       
    
                    </div>
                </div>
                <div className="collection_card card2">
                <div className="collection_card_title">The Clever<br/> Owls Collection</div>
                    <div className="line line1"></div>
                    <div className="collection_card_circle">
                       {/*<div className="collection_card_circle1"></div>
                        <div className="collection_card_circle2"></div>
                        <div className="collection_card_circle3"></div>*/}
                        <img  src={image4} className="collection_card_circle1  cards11"/>
                        <img  src={image5} className="collection_card_circle2 cards12"/>
                        <img  src={image6} className="collection_card_circle3 cards13"/>

                    </div>
                    <div className="membership_card">
                        <div className="membership">1-YEAR MEMBERSHIP<br/>only 200 available</div>
                        <div className="value">$65 (value of $540)</div>
                    </div>
                    <div className="about_membership">
                        <div className="about_membership_pt">Each Owl of this collection unlocks access to a 1-year membership and related benefits.</div>
                        <div className="about_membership_pt"> Each asset is unique; a same owl will never have the same background.</div>
                        <div className="about_membership_pt">Buying a 1-year membership owl means that you own it and can hold it, sell it or give it away to someone else.</div>
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen11} className="collection_dropline"><div className="collection_text">Free web3 Student Cards & Certificates</div> <div className="collection_arrow"></div></button>
                        {open11 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Free web3 Student Cards & Certificates</div>
                            </div>
                            
                            </div>
                        ) : null}    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen12} className="collection_dropline"><div className="collection_text">Discounts</div> <div className="collection_arrow"></div></button>
                        {open12 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Discounts</div>
                            </div>
                            
                            </div>
                        ) : null}
                       
    
                    </div>
                    
                    <div className="collection_dropdown">
                        <button onClick={handleOpen13} className="collection_dropline"><div className="collection_text">Free inscription on blockVersity Directory</div> <div className="collection_arrow"></div></button>
                        {open13 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Free inscription on blockVersity Directory</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen14} className="collection_dropline"><div className="collection_text">Your Private Community</div> <div className="collection_arrow"></div></button>
                        {open14 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Your Private Community</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen15} className="collection_dropline"><div className="collection_text">Rewards for Community Participation</div> <div className="collection_arrow"></div></button>
                        {open15 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Rewards for Community Participation</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen16} className="collection_dropline"><div className="collection_text">Free web3 educational content and events</div> <div className="collection_arrow"></div></button>
                        {open16 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Free web3 educational content and events</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen17} className="collection_dropline"><div className="collection_text">Voting Rights</div> <div className="collection_arrow"></div></button>
                        {open17 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Voting Rights</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                </div>
                <div className="collection_card card3">
                            <div className="collection_card_title">The Brilliant<br/> Owls Collection</div>
                    <div className="line line1"></div>
                    <div className="collection_card_circle">
                       {/*<div className="collection_card_circle1"></div>
                        <div className="collection_card_circle2"></div>
                        <div className="collection_card_circle3"></div>*/}
                        <img  src={image7} className="collection_card_circle1 cards21"/>
                        <img  src={image8} className="collection_card_circle2 cards22"/>
                        <img  src={image9} className="collection_card_circle3 cards23"/>

                    </div>
                    <div className="membership_card">
                        <div className="membership">LIFETIME MEMBERSHIP<br/>only 50 available</div>
                        <div className="value">$175 (value of~ $8K)</div>
                    </div>
                    <div className="about_membership">
                        <div className="about_membership_pt">Each Owl of this collection unlocks access to a lifetime membership and related benefits.</div>
                        <div className="about_membership_pt">  Each asset is unique, and can’t be find in the Smart or Clever Collections and it will never be replicated.</div>
                        <div className="about_membership_pt">Buying a lifetime membership owl means that you own it. You can hold it, sell it or give it away to someone else.</div>
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen21} className="collection_dropline"><div className="collection_text">Free web3 Student Cards & Certificates</div> <div className="collection_arrow"></div></button>
                        {open21 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Free web3 Student Cards & Certificates</div>
                            </div>
                            
                            </div>
                        ) : null}    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen22} className="collection_dropline"><div className="collection_text">Discounts</div> <div className="collection_arrow"></div></button>
                        {open22 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Discounts</div>
                            </div>
                            
                            </div>
                        ) : null}
                       
    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen23} className="collection_dropline"><div className="collection_text">Free inscription on blockVersity Directory</div> <div className="collection_arrow"></div></button>
                        {open23 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Free inscription on blockVersity Directory</div>
                            </div>
                            
                            </div>
                        ) : null}
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen24} className="collection_dropline"><div className="collection_text">Your Private Community</div> <div className="collection_arrow"></div></button>
                        {open24 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Your Private Community</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen25} className="collection_dropline"><div className="collection_text">Rewards for Community Participation</div> <div className="collection_arrow"></div></button>
                        {open25 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Rewards for Community Participation</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen26} className="collection_dropline"><div className="collection_text">Free web3 educational content and events</div> <div className="collection_arrow"></div></button>
                        {open26 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Free web3 educational content and events</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen27} className="collection_dropline"><div className="collection_text">Airdrop of BVY$ tokens at pre-sale</div> <div className="collection_arrow"></div></button>
                        {open27 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Airdrop of BVY$ tokens at pre-sale</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                    <div className="collection_dropdown">
                        <button onClick={handleOpen28} className="collection_dropline"><div className="collection_text">Voting Rights</div> <div className="collection_arrow"></div></button>
                        {open28 ? (
                            <div className="collection_menu">
                            <div className="collection_menu-item">
                                <div onClick={handleMenuOne}>Voting Rights</div>
                            </div>
                            
                            </div>
                        ) : null}                    
                    </div>
                </div>

            </div>
            
        </div>
    );
};
export default Home;