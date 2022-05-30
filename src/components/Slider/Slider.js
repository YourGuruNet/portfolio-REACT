import React, {useState} from 'react'
import { Slide } from "./Slide"
import styled from 'styled-components';
import clientWeb from "../../images/client-web.png";
import clientMob from "../../images/client-mob.png";
import specialistWeb from "../../images/specialist-web.png";
import specialistMob from "../../images/specialist-mob.png";
import cosafe1 from "../../images/cosafe-1.png";
import cosafe2 from "../../images/cosafe-2.png";
import cosafe3 from "../../images/cosafe-3.png";
import oneTouchMob1 from "../../images/1touch-mob-1.png";
import oneTouchMob2 from "../../images/1touch-mob-2.png";
import oneTouchMob3 from "../../images/1touch-mob-3.png";
import oneTouchSpecMob1 from "../../images/1touch-spec-mob-1.png";
import oneTouchSpecMob2 from "../../images/1touch-spec-mob-2.png";
import oneTouchSpecMob3 from "../../images/1touch-spec-mob-3.png";




const Slider = () => {
  const slides = [
    {
    title: "1Touch Client", 
    subTitle: "Client MARKETING WEBSITE", 
    text: "The web app is a system that helps book different services (gym, hairdressers, and more). App totally includes two web apps and 2 mobile apps.",
    bigPicture: clientWeb,
    mobPicture: clientMob,
    link: "https://www.1-touch.eu/",
    isWeb: true
  },
  { 
    title: "1Touch Specialist", 
    subTitle: "Specialist MARKETING WEBSITE", 
    text: "Specialist's web app. The web app is a system that helps book different services (gym, hairdressers, and more). Similar to a client app but with a focus on specialists.",
    bigPicture: specialistWeb,
    mobPicture: specialistMob,
    link: "https://www.1-touch.eu/specialisti",
    isWeb: true
  },
  { 
    title: "1Touch Specialist App", 
    subTitle: "Specialist Cross-Platform Mobile app", 
    text: "This app is to help manage all reservations and your service through the app you can contact clients via chat or edit reservations, make new individual reservations and plan your month so clients always see if you are available.",
    mobAppPicture: [oneTouchSpecMob1, oneTouchSpecMob2, oneTouchSpecMob3],
    link: "https://play.google.com/store/apps/details?id=lv.onetouch_business",
    isWeb: false
  },
  { 
    title: "1Touch Client App", 
    subTitle: "Client Cross-Platform Mobile app", 
    text: "App helps to find and book specialists in a different categories. You can search for specialists or services with different filters, then choose the one you like most according to user rating or price, and more. Make a reservation by doing some simple steps.",
    mobAppPicture: [oneTouchMob1, oneTouchMob2, oneTouchMob3],
    link: "https://play.google.com/store/apps/details?id=onetouch.lv",
    isWeb: false
  },
  { 
    title: "Cosafe", 
    subTitle: "Cross-Platform Mobile app", 
    text: "The service uses local knowledge to provide a more reliable and responsive community security service. The service uses City employed officers and a local call centre with staff who know Cockburn.",
    mobAppPicture: [cosafe1, cosafe2, cosafe3],
    link: "",
    isWeb: false
  },
];
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [removeSlide, setRemoveSlide] = useState(undefined);
  const nextImage = () => {
    setRemoveSlide(false)
    setTimeout(() => {
      selectedSlide === 4 ? setSelectedSlide(0) : setSelectedSlide(selectedSlide + 1);
      setRemoveSlide(true)
    }, 1000);
    
  };

  const prevImage = () => {
    setRemoveSlide(false)
    setTimeout(() => {
      selectedSlide === 0 ? setSelectedSlide(4) : setSelectedSlide(selectedSlide - 1);
      setRemoveSlide(true)
    }, 1000);
    
  };
  return (
    <SliderWrapper>
      <Slide slide={slides[selectedSlide]} removeSlide={removeSlide} nextImage={nextImage} prevImage={prevImage}/>
      <ButtonRow><Button onClick={() => prevImage()} >Previous</Button><Button  onClick={() => nextImage()}>Next</Button></ButtonRow>
    </SliderWrapper>
  )
}

export default Slider

const SliderWrapper = styled.div`
  position: relative;
  max-width: 180rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-bottom: 0.01rem solid var(--mainAccent);
  @media screen and (max-width: 1100px) {
    margin: 0 2rem;
    margin-bottom: 7rem;
    padding-bottom: 7rem;
    flex-direction: column-reverse;
  }
`;


const Button = styled.a`
  text-transform: uppercase;
  position: relative;
  font-weight: 700;
  font-size: 2rem;
  cursor: pointer;
  display: block;
  background-image: linear-gradient(
    to right,
   var(--mainAccent),
   var(--mainAccent) 50%,
    #000 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: var( --mainTransition);

  :before {
  content: '';
  background:var(--mainAccent);
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
}

:hover {
 background-position: 0;
}

:hover::before {
  transition: var( --mainTransition);
  width: 100%;
}
`;

const ButtonRow = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 15.5rem;
  width: 100%;
  max-width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 2rem;
  @media screen and (max-width: 1100px) {
    position: relative;
    margin-top: 6rem;
    margin-bottom: 0rem;
    bottom: auto;
    right: auto;
  }
`;