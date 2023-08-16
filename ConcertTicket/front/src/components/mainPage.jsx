import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

const MainPage = () =>{
    const [concert, setConcert] = useState([]);
    const [showVideo, setShowVideo] = useState(false);
    const [showBanner, setShowBanner] =useState(true);

    useEffect(() => {
        let timeoutId;
       
          timeoutId = setTimeout(() => {
            setShowVideo(true);
            setShowBanner(false);
          }, 15000);
        
    
        return () => {
          clearTimeout(timeoutId);
        };
      });

    return(
        <div>
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
  srcSet={'#'}
  src={'#'}
  style={{ position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent" }}
/>
          <div className="big_banner_image_gradient"></div>
          <div className="big_banner_text_container">
            <div className="big_banner_text_header">text</div>
            {/* <div className="catalog_info_rank_genres_container">
              <div className="big_banner_genres">{popAnime.episodes} эпизодов · {popAnime.mangaName} · Комедия, Приключения, Сёнен, Фантастика</div>
            </div>
            <div className="big_banner_text_description">{extAnime.description}</div> */}
          </div>
        </div>

        {/* <div className="big_banner_button_container">
        <Link to={`/anime/${extAnime.id}`} className='animeTitle'>
        <button class="button-1" role="button">Смотреть</button>
        </Link>
        </div> */}
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