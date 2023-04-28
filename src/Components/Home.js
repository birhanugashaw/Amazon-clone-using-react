import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          
          <Product
            
            id="12321897"
            title="Misxi 2 Pack Waterproof Black Hard Case with Tempered Glass Compatible with Apple Watch Series 6 SE Series 5 Series 4 44mm, Ultra-Thin Durable Protective Cover for iWatch Screen Protector"
            price={166}
            rating={3}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91PEt9U81xL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
         
          <Product
            key="1232199"
            id="1232199"
            title="MAVANII Watches for Men, Executive Stainless Steel Mens Watches"
            price={1669}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41A0VZetSvL._AC_.jpg"
          />
          <Product
            id="12321"
            title="TORJALPH Smart Watch for Men Women Compatible with iPhone Samsung Android Phone 1.69 inch Full Touch Screen IP68 Waterproof Bluetooh Fitness Tracker Heart Rate / Sleep Monitor, Black"
            price={1229}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71NrPRCvFRL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
         
        </div>
        <div className = "home__row">
        <Product
            id="1232133"
            title="
            GTPLAYER Gaming Chair, Computer Chair with Footrest and Lumbar Support, Height Adjustable Game Chair with 360°-Swivel Seat "
            price={125}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61Y-czu8iaL._AC_SL1498_.jpg"
          />
        <Product
            id="123211"
            title="
            HEXEH Omaha Gaming Office Chair with Faux Leather Green"
            price={102}
            rating={3}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51A7A5aFWEL._AC_SL1500_.jpg"
          />
        <Product
            id="4953809"
            title="Epic Racing Professional Gaming Chair with Adjustable Height, Full Recline and Headrest/Lumbar Support"
            price={159.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71t8UBllIgL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
        
        <Product
            id="123"
            title="Amazon eero Pro 6E mesh Wi-Fi"
            price={411}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/110tCCZolKL._AC_SY200_.jpg"
          />
          <Product
            id="4903850"
            title="AmazonBasics 6-Outlet Surge Protector Power Strip, 790 Joule - Black"
            price={10.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81okY+WZLTL._AC_UL320_.jpg"
          />
          <Product
            id="2390233"
            title="Foxemart Computer Desk 47” Modern Sturdy Office Desk PC Laptop Notebook Study Writing Table for Home Office Workstation, Black"
            price={78.95}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71jQYX9JNKS.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div >
        <div className='home__row'>
        <Product
            id="322094"
            title="Livinia Canberra 47.2 Rectangular Wooden Dining Table/Mid Century Modern Malaysian Oak Kitchen Table (Natural-Oak) Table Only"
            price={179.99}
            rating={4}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91cPM7v47QL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        <Product
            id="123210"
            title="Bestier L Shaped Desk with Shelves 86 Inch Reversible Corner Computer Desk or 2 Person Long Table for Home Office Large Gaming Writing Storage Workstation P2 Board with 3 Cable Holes, Carbon Fiber"
            price={166}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81-HT1MT7AL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
