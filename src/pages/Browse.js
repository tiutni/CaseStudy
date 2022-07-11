import React, { Fragment } from 'react'
import '../css/Browse.css'
import HeaderNavItem from '../components/HeaderNavItem'
import HeaderMenuItem from '../components/HeaderMenuItem';
import Movie from '../components/Movie';
import HotMovieObj from '../data/HotMovieObj';
import CustomMovieObj from '../data/CustomMovieObj';

function play() {
    document.querySelector('video').load()
}
function mute() {
    var video = document.querySelector('video');
    if ( video.muted ) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

function move_list_to_play() {
    // location.href = "../Netflix_play/play.html";
}

export default function Browse() {

    return (
        <Fragment>
            <div className="home">
                <video
                    src={process.env.PUBLIC_URL + '/resources/이상한변호사.mp4'}
                    poster={process.env.PUBLIC_URL + '/resources/이상한변호사.jpg'} 
                    autoPlay
                    muted
                />
                <div className="header_faded">
                </div>
                <div className="overlay">
                    <div className="header">
                        <div className='logo'>
                            <a href="#">
                                <img src="https://about.netflix.com/images/logo.png" alt="logo" className="NETFLIX_LOGO" />
                            </a>
                        </div>
                        <div className="nav">
                            <HeaderNavItem></HeaderNavItem>
                        </div>
                        <div className="menu">
                            <HeaderMenuItem></HeaderMenuItem>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="title">
                            <img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABWyVVp5QSuJutVLGezu04gSjls7XlZWi1ylzn-tx8ONEjcWVlnWTNGR8O8wP_Hb7dAEpDWk3THu7zyKY5RKlbaecHvuituLZ5x9r2f6TbqI.png?r=209" alt="이상한 변호사 우영우" />
                        </div>
                        <div className="badge">
                            <img src={process.env.PUBLIC_URL + "/resources/top10.png"} alt="top10" className="top10" />
                            <span className="top2msg">시리즈 순위 2위</span>
                        </div>
                        <div className="description">
                            천재적인 두뇌의 소유자 우영우. 대형 로펌의 신입 변호사이자 자폐 스펙트럼 장애를 가진 여성으로서 법정 안팎에서 다양한 난관을 헤쳐간다.
                        </div>
                        <div className="buttons">
                            <div className="white-button" onClick={move_list_to_play}>
                                <i className="fa-solid fa-play" />
                                &nbsp;
                                재생
                            </div>
                            <div className="gray-button">
                                <i className="fa-solid fa-circle-info" />
                                &nbsp;
                                상세정보
                            </div>
                        </div>
                        <div className="extra">
                            <div className="replay-button" onClick={play}>
                                <i className="fa-solid fa-rotate-left" />
                            </div>
                            <div className="mute-button" onClick={mute}>
                                <i className="fa-solid fa-volume-high" />
                            </div>
                            <div className="rating">
                                15+
                            </div>
                        </div>
                    </div>
                    <div className="category-list">
                        <div className="category">
                            <div className="title">
                                넷플릭스 인기 콘텐츠
                            </div>
                            <div className="list">
                                <Movie data={HotMovieObj.movies}></Movie>
                            </div>
                        </div>
                        <div className="category">
                            <div className="title">
                                양이 님이 시청 중인 콘텐츠
                            </div>
                            <div className="list">
                                <Movie data={CustomMovieObj.movies} />
                            </div>
                        </div>
                        <div className="category">
                            <div className="title">
                                지금 뜨는 컨텐츠
                            </div>
                            <div className="list">
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/지금1.jpg"} alt="지금1" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/지금2.jpg"} alt="지금2" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/지금3.jpg"} alt="지금3" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/지금4.jpg"} alt="지금4" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/지금5.jpg"} alt="지금5" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/지금6.jpg"} alt="지금6" />
                                </div>
                            </div>
                        </div>
                        <div className="category">
                            <div className="title">
                                새로 올라온 콘텐츠
                            </div>
                            <div className="list">
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/새로1.jpg"} alt="새로1" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/새로2.jpg"} alt="새로2" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/새로3.jpg"} alt="새로3" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/새로4.jpg"} alt="새로4" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/새로5.jpg"} alt="새로5" />
                                </div>
                                <div className="movie">
                                    <img src={process.env.PUBLIC_URL + "/resources/새로6.jpg"} alt="새로6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
