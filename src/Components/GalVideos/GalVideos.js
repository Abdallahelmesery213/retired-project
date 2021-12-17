import React from 'react';
import './GalVideos.css';
import VideoLogo from '../../images/video-play.png';
import MyGallery from '../../Data/Gallery';


const GalVideos = () => {
    const myVideos = MyGallery.map(item => {
        return (
            <div className="img-cont2" key={item.id}>
                <div className="overLayVide"></div>
                <img src={item.img} alt={item.id} className="img-thumbnail" />
                <div className="vidLogo">
                    <img src={VideoLogo} alt="video-logo" className="img-fluid" />
                </div>
            </div>
        )
    })
    return (
            <div className='container galVid'>
                <div className="div-img2">
                    {myVideos}
                </div>
            </div>
    )
}
export default GalVideos ;
