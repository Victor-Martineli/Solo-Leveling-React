import React from "react";
import Header from "../../components/header/header";
import './videos.css'

function Videos(){
    return(
        <div>
            <Header />
            <div className="top-videos">
                <div className="video-container">
                <iframe className="video" src="https://www.youtube.com/embed/VyenvuTgp5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
                <div className="video-container">
                <iframe className="video" src="https://www.youtube.com/embed/9zWyPiAbTKk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>
            </div>
            <div className="video-container" id="botton-video">
            <iframe className="video01" src="https://www.youtube.com/embed/gwIkXYEYFTc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
            <div className="button-container">
                <a target="_blank" href="https://mangaonline.biz/manga/solo-leveling/">
            <button   className="button">Ler Online</button>
                </a>
            </div>
        </div>
    )
}

export default Videos;