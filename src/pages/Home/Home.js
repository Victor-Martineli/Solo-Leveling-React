import React from "react";
import Header from "../../components/header/header";
import './Home.css';
import videoTrailer from '../../assets/video/trailer.mp4';
import Cards from "../../components/cards/cards";

function Home(){
    
    return(
        <div>
            <Header />
            <div id="banner"></div>
            <div className="trailer-container">
                <div className="content">
                    <video controls className="trailer"  type=".mp4">
                        <source src={videoTrailer}/>
                        Seu navegador não possui suporte para vídeos
                    </video>
                    <div className="sinopse">
                        <p className="descricao">
                            Em um mundo onde criaturas mágicas tentam invadir a terra
                            por meio de portais, o caçador de rank E mais fraco recebe
                            a opornidade de se tornar o mais forte do mundo subindo de nivel
                            enfrentando desafios mortais e inimigos poderosos.
                        </p>
                    </div>
                </div>
                </div>
                <Cards />
            <div className="button-container">
                <a target="_blank" href="https://mangaonline.biz/manga/solo-leveling/">
            <button   className="button">Ler Online</button>
                </a>
            </div>
        </div>
    )
}

export default Home;

//ao clicar em um botão ir para outra pagina?//

