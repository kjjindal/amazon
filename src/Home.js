import React from 'react';
import './Home.css';
import Product from './Product';



function Home(){
    return (
        <>
        <div className="home">
        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home"  />
        
        <div className="home__row">
        <Product title=" Black Wired Headset with Mic ZBW4402IN MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth Headset  (Black, True Wireless)"  id="123456" img="https://rukminim1.flixcart.com/image/150/150/kd69z0w0/headphone/f/b/r/bluetooth-earphones-wings-original-imafu5y7zgcrbyjd.jpeg?q=70" price={156} rating={5}   />
        <Product title="Black Wired Headset with Mic ZBW4402IN MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth Headset  (Black, True Wireless)"  id="123456" img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"  price={156} rating={5}   />

        </div>
        <div className="home__row">
        <Product title="Mi Headphone Black Wired Headset with Mic ZBW4402IN MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth Headset  (Black, True Wireless)"  id="123456" img="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24" price={156} rating={5}   />
        <Product title="Mi Headphone Black Wired Headset with Mic ZBW4402IN MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth Headset  (Black, True Wireless)"  id="123456" img="https://rukminim1.flixcart.com/image/150/150/kd69z0w0/headphone/f/b/r/bluetooth-earphones-wings-original-imafu5y7zgcrbyjd.jpeg?q=70"  price={156} rating={5}   />
        <Product title="Mi Headphone Black Wired Headset with Mic ZBW4402IN MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth Headset  (Black, True Wireless)"  id="123456" img="https://rukminim1.flixcart.com/image/150/150/kd69z0w0/headphone/f/b/r/bluetooth-earphones-wings-original-imafu5y7zgcrbyjd.jpeg?q=70"  price={156} rating={5}   />

        </div>
        <div className="home__row">
        <Product title="Mi Headphone Black Wired Headset with Mic ZBW4402IN MI-STS In the Ear Single Ear TWS-L21 Headphone Wireless Earphone Bluetooth Headset  (Black, True Wireless)"  id="123456" img="https://rukminim1.flixcart.com/image/150/150/kd69z0w0/headphone/f/b/r/bluetooth-earphones-wings-original-imafu5y7zgcrbyjd.jpeg?q=70" price={156} rating={5}   />

        </div>
     
        
        </div>



        </>
    )
}


export default Home;