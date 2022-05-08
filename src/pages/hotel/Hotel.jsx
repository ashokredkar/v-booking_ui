import React, { useState } from 'react';
import './Hotel.css';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [openImg, setOpenImg] = useState(false);

  const handleImgClick = (index) => {
    setSlideNumber(index);
    setOpenImg(true);
  };

  const handleSlide = (direction) => {
    let newSlideNumber;

    if(direction === "l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };


  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];


  return (
    <>
      {openImg && (
        <div className="imageSlider">
          <AiFillCloseCircle onClick={() => setOpenImg(false)} className='closeBtn' />
          
          <BsFillArrowLeftSquareFill onClick={() => handleSlide("l")} className='leftBtn' />
          <div className="openedImg">
            <img src={photos[slideNumber].src} alt="sliderImg" className="sliderImg" />
          </div>
          <BsFillArrowRightSquareFill onClick={() => handleSlide("r")} className='rightBtn' />
        </div>
      )}
      <div className='hotel section-padding'>
        <div className="hotelHeader">
          <h1>Tower Street Apartments</h1>
          <button className="btn">Book Reservation Now</button>
        </div>
        <span>Elton St. 125 New York</span>
        <p className='location'>Excellent Location - 500m from center</p>
        <p className='perk'>Book a stay with $105 only and get a free airport taxi</p>

        <div className="gallery">
          {photos.map((photo, index) => (
            <div className="galleryImage" key={index}>
              <img onClick={() => handleImgClick(index)} src={photo.src} alt="photo" />
            </div>
          ))}
        </div>

        <div className="hotelBottom">
          <div className="info">
            <h2>Stay in the heart of City</h2>
            <p>
              Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
              Street Apartments has accommodations with air conditioning and
              free WiFi. The units come with hardwood floors and feature a
              fully equipped kitchenette with a microwave, a flat-screen TV,
              and a private bathroom with shower and a hairdryer. A fridge is
              also offered, as well as an electric tea pot and a coffee
              machine. Popular points of interest near the apartment include
              Cloth Hall, Main Market Square and Town Hall Tower. The nearest
              airport is John Paul II International Kraków–Balice, 16.1 km
              from Tower Street Apartments, and the property offers a paid
              airport shuttle service.
            </p>
          </div>
          <div className="bottomCard">
            <h2>Perfect for a 9-night stay!</h2>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <h2>$945 <span>(9 nights)</span></h2>
            <button className='btn'>Book Reservation Now</button>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </>
  )
}

export default Hotel