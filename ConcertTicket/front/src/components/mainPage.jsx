import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Head from './head';
import '../css/mainPage.css';

const MainPage = () =>{
    const [concert, setConcert] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [showBanner, setShowBanner] =useState(true);

    useEffect(() => {
        let timeoutId;
       
          timeoutId = setTimeout(() => {
            setShowVideo(true);
            setShowBanner(false);
          }, 15000000000000);
        
    
        return () => {
          clearTimeout(timeoutId);
        };
      });

    return(
        <div>
          <Head/>
      <div className="bigBanner">

      {showVideo ? (
        <ReactPlayer
        url={'#'}
        controls
        width="100%"
        height="100%"
        playing
        config={{
          youtube: {
            playerVars: {
              modestbranding: 1,
              fs: 0, 
            },
          },
        }}
      />
      ) : (
        <div>

        <div className="big_banner_text">
        <img
  alt=""
  fetchpriority="high"
  decoding="async"
  data-nimg="fill"
  className="big_banner_image"
  sizes="100vw"
  srcSet={'https://anitype.fun/_next/image?url=https%3A%2F%2Fanitype.site%2Fapp2%2Fmedia%2Fdownload%3FfileName%3Danime%2F48549.webp&w=1920&q=100'}
  src={'https://anitype.fun/_next/image?url=https%3A%2F%2Fanitype.site%2Fapp2%2Fmedia%2Fdownload%3FfileName%3Danime%2F48549.webp&w=1920&q=100'}
  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
/>
          <div className="big_banner_text_container">
            <div className="big_banner_text_header">textConcert</div>
            <div className="catalog_info_rank_genres_container">
              <div className="big_banner_type">ConcertType</div>
            </div>
            <div className="big_banner_text_description">Info about concert fdsfsflmdsflsfklfdkslfslfslkflsfksldfskfldskfsl</div>
          </div>
        </div>
        </div>
      )}
        
      </div>

{/* <div className='header'>
  <YourComponent className='yourComponent'/>
</div>

<span className='spanPopular'>Популярное</span>
<div className='popularAnime' >
  {animeData.map((anime) => (
    <Container key={anime.id} animeData={anime} />
  ))}
</div>

  <div className='footer'>
    <Footer/>
    </div> */}


    </div>
    )
}

export default MainPage;